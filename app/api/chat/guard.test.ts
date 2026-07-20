/**
 * Guard tests — run with the Node built-in test runner, zero dependencies:
 *   npm run test:guard
 * Never touches the network or the OpenAI API.
 */
import { test } from "node:test"
import assert from "node:assert/strict"
import {
  CHAT_LIMITS,
  GUARD_RESPONSES,
  clientKeyFromHeaders,
  createRateLimiter,
  isAllowedOrigin,
  resolveAvailability,
  sanitizeChatError,
  validateChatBody,
} from "./guard.ts"

const msg = (content: string, role = "user") => ({ role, content })

test("valid request accepted", () => {
  const result = validateChatBody({ messages: [msg("Hi"), { role: "assistant", content: "Hello" }, msg("What are Bryan's skills?")] })
  assert.equal(result.ok, true)
  if (result.ok) assert.equal(result.messages.length, 3)
})

test("malformed bodies rejected", () => {
  for (const bad of [null, "hi", 42, [], {}, { messages: null }, { messages: [] }, { messages: [null] }, { messages: ["plain string"] }]) {
    const result = validateChatBody(bad)
    assert.equal(result.ok, false, `should reject: ${JSON.stringify(bad)}`)
  }
})

test("too many messages rejected", () => {
  const messages = Array.from({ length: CHAT_LIMITS.maxMessages + 1 }, () => msg("x"))
  const result = validateChatBody({ messages })
  assert.equal(result.ok, false)
})

test("oversized single message rejected", () => {
  const result = validateChatBody({ messages: [msg("a".repeat(CHAT_LIMITS.maxMessageChars + 1))] })
  assert.equal(result.ok, false)
})

test("oversized total input rejected", () => {
  const chunk = "a".repeat(CHAT_LIMITS.maxMessageChars)
  const count = Math.ceil(CHAT_LIMITS.maxTotalChars / CHAT_LIMITS.maxMessageChars) + 1
  const result = validateChatBody({ messages: Array.from({ length: count }, () => msg(chunk)) })
  assert.equal(result.ok, false)
})

test("elevated/invalid roles rejected", () => {
  for (const role of ["system", "developer", "tool", "", 7]) {
    const result = validateChatBody({ messages: [{ role, content: "hi" }] })
    assert.equal(result.ok, false, `role should be rejected: ${String(role)}`)
  }
})

test("empty content rejected", () => {
  const result = validateChatBody({ messages: [msg("   ")] })
  assert.equal(result.ok, false)
})

test("kill switch disables assistant (no upstream path)", () => {
  assert.equal(resolveAvailability({ CHAT_ASSISTANT_DISABLED: "1", OPENAI_API_KEY: "sk-test" }), "disabled")
  assert.equal(resolveAvailability({ CHAT_ASSISTANT_DISABLED: "TRUE" }), "disabled")
  assert.equal(resolveAvailability({ CHAT_ASSISTANT_DISABLED: "yes" }), "disabled")
  assert.equal(resolveAvailability({ CHAT_ASSISTANT_DISABLED: "0", OPENAI_API_KEY: "sk-test" }), "ai")
})

test("missing API key degrades to fallback-only, never ai", () => {
  assert.equal(resolveAvailability({}), "fallback-only")
  assert.equal(resolveAvailability({ CHAT_ASSISTANT_DISABLED: "" }), "fallback-only")
})

test("rate limiter allows within window, rejects beyond, then resets", () => {
  const limiter = createRateLimiter({ windowMs: 60_000, maxRequests: 3 })
  const t0 = 1_000_000
  assert.equal(limiter.check("ip1", t0).allowed, true)
  assert.equal(limiter.check("ip1", t0 + 1).allowed, true)
  assert.equal(limiter.check("ip1", t0 + 2).allowed, true)
  const rejected = limiter.check("ip1", t0 + 3)
  assert.equal(rejected.allowed, false)
  assert.ok(rejected.retryAfterSeconds >= 1, "429 carries a retry hint")
  // other clients unaffected
  assert.equal(limiter.check("ip2", t0 + 4).allowed, true)
  // window reset
  assert.equal(limiter.check("ip1", t0 + 60_001).allowed, true)
})

test("client key derived from forwarded headers", () => {
  const headers = (map: Record<string, string>) => ({ get: (k: string) => map[k.toLowerCase()] ?? null })
  assert.equal(clientKeyFromHeaders(headers({ "x-forwarded-for": "203.0.113.9, 10.0.0.1" })), "203.0.113.9")
  assert.equal(clientKeyFromHeaders(headers({ "x-real-ip": "198.51.100.4" })), "198.51.100.4")
  assert.equal(clientKeyFromHeaders(headers({})), "unknown")
})

test("origin policy: site + localhost + deployment hosts allowed; arbitrary vercel.app and foreign origins blocked; absent allowed", () => {
  const headers = (origin?: string) => ({ get: (k: string) => (k.toLowerCase() === "origin" ? origin ?? null : null) })
  assert.equal(isAllowedOrigin(headers("https://cashbryan.com")), true)
  assert.equal(isAllowedOrigin(headers("https://www.cashbryan.com")), true)
  assert.equal(isAllowedOrigin(headers("http://localhost:3000")), true)
  // arbitrary third-party vercel.app deployments are NOT allowed
  assert.equal(isAllowedOrigin(headers("https://someone-elses-app.vercel.app")), false)
  // the current deployment's own hostname IS allowed (from Vercel env)
  assert.equal(
    isAllowedOrigin(headers("https://my-portfolio-git-branch-abc.vercel.app"), {
      deploymentHosts: ["my-portfolio-git-branch-abc.vercel.app", undefined],
    }),
    true
  )
  // tolerate a full URL in the env var defensively
  assert.equal(
    isAllowedOrigin(headers("https://preview.vercel.app"), {
      deploymentHosts: ["https://preview.vercel.app"],
    }),
    true
  )
  assert.equal(isAllowedOrigin(headers("https://evil.example.com")), false)
  assert.equal(isAllowedOrigin(headers("not a url")), false)
  assert.equal(isAllowedOrigin(headers(undefined)), true, "absent origin allowed by design (documented)")
  assert.equal(
    isAllowedOrigin(headers("https://partner.example.com"), { extraAllowed: "https://partner.example.com" }),
    true
  )
})

test("output-token cap exists and is a bounded positive number", () => {
  assert.ok(Number.isInteger(CHAT_LIMITS.maxOutputTokens))
  assert.ok(CHAT_LIMITS.maxOutputTokens > 0 && CHAT_LIMITS.maxOutputTokens <= 2_000)
})

test("sanitized error and guard responses leak nothing internal", () => {
  const bodies = [sanitizeChatError(), GUARD_RESPONSES.disabled, GUARD_RESPONSES.rateLimited, GUARD_RESPONSES.badOrigin, GUARD_RESPONSES.invalidBody("Messages are required.")]
  for (const body of bodies) {
    const text = JSON.stringify(body).toLowerCase()
    for (const needle of ["sk-", "stack", "openai_api_key", "apikey", "trace", "env."]) {
      assert.ok(!text.includes(needle), `response body must not contain ${needle}`)
    }
  }
})
