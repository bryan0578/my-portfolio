/**
 * Chat endpoint guard — dependency-free protection logic for /api/chat.
 *
 * Kept free of framework and SDK imports so it can be unit-tested with the
 * Node built-in test runner (`npm run test:guard`) without installing or
 * calling anything external. The route (`route.ts`) is the only consumer.
 */

export const CHAT_LIMITS = {
  /** Max messages accepted per request (history + new message). */
  maxMessages: 20,
  /** Max characters per individual message. */
  maxMessageChars: 2_000,
  /** Max combined characters across all messages in a request. */
  maxTotalChars: 12_000,
  /** Hard cap on model output per request (passed to the OpenAI call). */
  maxOutputTokens: 500,
  /** Roles the public client may submit. Elevated roles are rejected. */
  allowedRoles: ["user", "assistant"] as const,
  /** Fixed-window rate limit per client key. */
  rateWindowMs: 60_000,
  rateMaxRequests: 8,
} as const

export type GuardChatMessage = {
  role: (typeof CHAT_LIMITS.allowedRoles)[number]
  content: string
}

export type ValidationResult =
  | { ok: true; messages: GuardChatMessage[] }
  | { ok: false; reason: string }

/** Strict request-body validation. Runs before any upstream work. */
export function validateChatBody(body: unknown): ValidationResult {
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return { ok: false, reason: "Please send a valid chat request." }
  }
  const messages = (body as { messages?: unknown }).messages
  if (!Array.isArray(messages) || messages.length === 0) {
    return { ok: false, reason: "Messages are required." }
  }
  if (messages.length > CHAT_LIMITS.maxMessages) {
    return {
      ok: false,
      reason: "This conversation is too long. Please refresh to start a new chat.",
    }
  }
  let total = 0
  const clean: GuardChatMessage[] = []
  for (const entry of messages) {
    if (typeof entry !== "object" || entry === null) {
      return { ok: false, reason: "Please send a valid chat request." }
    }
    const { role, content } = entry as { role?: unknown; content?: unknown }
    if (
      typeof role !== "string" ||
      !(CHAT_LIMITS.allowedRoles as readonly string[]).includes(role)
    ) {
      return { ok: false, reason: "Please send a valid chat request." }
    }
    if (typeof content !== "string" || content.trim().length === 0) {
      return { ok: false, reason: "Messages cannot be empty." }
    }
    if (content.length > CHAT_LIMITS.maxMessageChars) {
      return {
        ok: false,
        reason: "That message is too long. Please shorten it and try again.",
      }
    }
    total += content.length
    if (total > CHAT_LIMITS.maxTotalChars) {
      return {
        ok: false,
        reason: "This conversation is too long. Please refresh to start a new chat.",
      }
    }
    clean.push({ role: role as GuardChatMessage["role"], content })
  }
  return { ok: true, messages: clean }
}

export type Availability = "disabled" | "fallback-only" | "ai"

/**
 * Kill switch + key detection.
 * CHAT_ASSISTANT_DISABLED=1|true|yes disables the assistant entirely (no
 * upstream call, controlled 503). A missing key degrades to the built-in
 * canned responses (existing behavior, preserved).
 */
export function resolveAvailability(env: {
  CHAT_ASSISTANT_DISABLED?: string
  OPENAI_API_KEY?: string
}): Availability {
  const flag = (env.CHAT_ASSISTANT_DISABLED ?? "").trim().toLowerCase()
  if (flag === "1" || flag === "true" || flag === "yes") return "disabled"
  if (!env.OPENAI_API_KEY) return "fallback-only"
  return "ai"
}

export type RateDecision = { allowed: boolean; retryAfterSeconds: number }

/**
 * Fixed-window in-memory rate limiter.
 *
 * LIMITATION (documented, deliberate): state is per serverless instance.
 * On Vercel, parallel or freshly booted instances each carry their own
 * window, so the global effective limit is (instances x rateMaxRequests).
 * This still bounds per-instance abuse loops and, combined with the
 * per-request input/output caps, bounds worst-case spend. A durable
 * cross-instance limit would require an external store (e.g. Upstash) and
 * is intentionally out of scope for this package.
 */
export function createRateLimiter(
  opts: { windowMs: number; maxRequests: number } = {
    windowMs: CHAT_LIMITS.rateWindowMs,
    maxRequests: CHAT_LIMITS.rateMaxRequests,
  }
) {
  const windows = new Map<string, { start: number; count: number }>()
  const MAX_KEYS = 5_000 // bound memory on long-lived instances

  return {
    check(key: string, now: number = Date.now()): RateDecision {
      if (windows.size > MAX_KEYS) {
        for (const [k, w] of windows) {
          if (now - w.start >= opts.windowMs) windows.delete(k)
        }
        if (windows.size > MAX_KEYS) windows.clear()
      }
      const current = windows.get(key)
      if (!current || now - current.start >= opts.windowMs) {
        windows.set(key, { start: now, count: 1 })
        return { allowed: true, retryAfterSeconds: 0 }
      }
      current.count += 1
      if (current.count > opts.maxRequests) {
        const retryMs = opts.windowMs - (now - current.start)
        return {
          allowed: false,
          retryAfterSeconds: Math.max(1, Math.ceil(retryMs / 1000)),
        }
      }
      return { allowed: true, retryAfterSeconds: 0 }
    },
  }
}

type HeaderReader = { get(name: string): string | null }

/** Best-available client key on Vercel: first hop of x-forwarded-for. */
export function clientKeyFromHeaders(headers: HeaderReader): string {
  const forwarded = headers.get("x-forwarded-for")
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim()
    if (first) return first
  }
  return headers.get("x-real-ip")?.trim() || "unknown"
}

const DEFAULT_ALLOWED_ORIGINS = [
  "https://cashbryan.com",
  "https://www.cashbryan.com",
  "http://localhost:3000",
]

/**
 * Advisory same-origin check.
 * - Browser requests carry an Origin header on cross-site POSTs; unknown
 *   origins are rejected (403) so other sites cannot embed the assistant.
 * - Requests WITHOUT an Origin header are allowed: blocking them adds no
 *   security (Origin is trivially set by non-browser clients) and would
 *   break legitimate tooling. This check is an abuse-friction measure,
 *   not an authentication boundary — documented in the README.
 * - Vercel preview deployments (*.vercel.app) are allowed.
 * - CHAT_ALLOWED_ORIGINS (comma-separated) extends the allowlist.
 */
export function isAllowedOrigin(
  headers: HeaderReader,
  extraAllowed?: string
): boolean {
  const origin = headers.get("origin")
  if (!origin) return true
  let host: string
  let normalized: string
  try {
    const url = new URL(origin)
    host = url.hostname
    normalized = url.origin
  } catch {
    return false
  }
  if (DEFAULT_ALLOWED_ORIGINS.includes(normalized)) return true
  if (host === "localhost" || host === "127.0.0.1") return true
  if (host.endsWith(".vercel.app")) return true
  if (extraAllowed) {
    const extras = extraAllowed
      .split(",")
      .map((entry) => entry.trim())
      .filter(Boolean)
    if (extras.includes(normalized)) return true
  }
  return false
}

/** User-facing bodies for controlled responses. Never include internals. */
export const GUARD_RESPONSES = {
  disabled: {
    error:
      "The assistant is taking a short break. Please use the contact page and Bryan will get back to you directly.",
  },
  rateLimited: {
    error:
      "You’re sending messages a little quickly. Please wait a moment and try again.",
  },
  badOrigin: {
    error: "This assistant is only available on cashbryan.com.",
  },
  invalidBody: (reason: string) => ({ error: reason }),
} as const

/** Sanitized error body: no upstream messages, stacks, keys, or config. */
export function sanitizeChatError(): { error: string } {
  return {
    error:
      "Something went wrong on our side. Please try again in a moment or use the contact page.",
  }
}
