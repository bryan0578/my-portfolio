# CashBryan.com (`my-portfolio`)

Bryan Cash's public professional site: portfolio, career profile, consulting
services, client proposals, and blog. This repository is the **public source
of truth** for Bryan's professional identity.

- Production: https://cashbryan.com (canonical apex; `www` redirects in)
- Hosting: Vercel (Next.js App Router)

## 1. Purpose

Present Bryan's SAPUI5 / SAP Fiori / SAP BTP, Salesforce, and enterprise
frontend work to hiring teams, consulting clients, founders, and readers, and
provide contact/lead paths — including a public AI site assistant.

## 2. Public and private data boundaries

Everything in this repository is public by definition. It must never contain:
employer-confidential material (incl. TCS client information), client names
without disclosure permission, private job-search notes or pipeline data,
compensation data, private proposal negotiations, API keys, or personal
financial data. Private career operations live in Bryan Command Center, not
here. Proposal pages are client-facing deliverables; private notes about them
belong in a private system.

## 3. Major routes

`/` home · `/career` (+ resume, experience, projects) · `/consulting` ·
`/services/*` (5 service pages) · `/web-apps` · `/projects` + `/projects/[id]` ·
`/proposals/[slug]` (client proposals) · `/blog` + `/blog/[slug]` (MDX) ·
`/about` · `/contact` · `/privacy` · `/terms` · `/feed.xml` ·
`/api/chat` (site assistant endpoint).

## 4. Technology

Next.js 16 (App Router) · React 19 · MDX blog · Tailwind · Vercel Analytics ·
OpenAI SDK (assistant only, server-side) · PWA icons/metadata.

## 5. Local setup

```bash
npm ci
cp .env.example .env.local   # fill values as needed; all optional for dev
npm run dev
```

Without `OPENAI_API_KEY`, the site runs fully; the assistant answers from
built-in canned responses (no upstream calls).

## 6. Environment variables (names only — set values in Vercel)

| Name | Purpose |
|---|---|
| `OPENAI_API_KEY` | Assistant upstream calls. Server-only. Never `NEXT_PUBLIC_`. |
| `OPENAI_MODEL` | Optional model override (default `gpt-4.1-mini`). |
| `CHAT_ASSISTANT_DISABLED` | Kill switch: `1`/`true`/`yes` disables the assistant. |
| `CHAT_ALLOWED_ORIGINS` | Optional extra allowed origins (comma-separated). |
| `BRYAN_EMAIL` | Contact email override. |

## 7. Development commands

`npm run dev` · `npm run build` · `npm run start` · `npm run lint`

## 8. Test and validation commands

```bash
npm run test:guard   # chat-endpoint guard tests (Node built-in runner,
                     # no dependencies, no network, never calls OpenAI)
npm run lint
npm run build        # includes type checking
```

## 9. Production deployment

Vercel, connected to this repository; production deploys from `main`.
Environment variables are managed in Vercel project settings. **Note:** env
changes (including the kill switch) take effect on the next deploy — trigger
a redeploy after changing them (no code change required).

## 10. Domain

`cashbryan.com` is canonical; `www.cashbryan.com` 301-redirects to apex.
Keep the domain on auto-renew; treat expiry as an S1 maintenance issue.

## 11. Public AI assistant architecture

Client bubble (`components/ai-chat-bubble.tsx`) → POST `/api/chat`
(`app/api/chat/route.ts`). The route holds a curated public knowledge base of
canned responses and, when a key is configured, calls OpenAI chat completions
with a developer-context prompt (`lib/portfolio-assistant.ts`). The assistant
is firewalled by design: it has **no access to any private system** and its
knowledge is limited to public portfolio content. All protection logic lives
in `app/api/chat/guard.ts` (dependency-free, unit-tested).

## 12. Rate limiting and abuse controls

Enforced in order, all before any OpenAI call:

1. Kill switch (`503`, friendly message).
2. Origin allowlist — cashbryan.com, `www`, localhost, `*.vercel.app`
   previews, plus `CHAT_ALLOWED_ORIGINS` (`403` otherwise). Advisory only:
   requests without an Origin header are allowed (blocking them adds no
   real security); this is abuse friction, not authentication.
3. Rate limit — fixed window, 8 requests/minute per client IP (`429` +
   `Retry-After`). **Limitation:** in-memory, per serverless instance; the
   effective global limit is (instances × 8)/min. It is NOT a durable
   distributed limit; a shared store (e.g. Upstash) was deliberately not
   added. Per-request caps below bound worst-case spend regardless.
4. Strict body validation (`400`): ≤ 20 messages, ≤ 2,000 chars/message,
   ≤ 12,000 chars total, roles restricted to `user`/`assistant` (elevated
   roles like `system`/`developer` are rejected at runtime).
5. Output cap: `max_completion_tokens: 500` on every OpenAI request.
6. Upstream errors are logged server-side and never surfaced; the client
   receives the canned-response fallback. No stacks, keys, or config leak.

## 13. Kill-switch behavior

Set `CHAT_ASSISTANT_DISABLED=1` in Vercel and redeploy. The route returns a
controlled `503` with a non-technical message, makes no OpenAI request, and
the chat UI remains visually stable (it renders the error text in its
existing notice area). Unset + redeploy to restore.

## 14. Required operator step — OpenAI platform spend controls

Application code cannot enforce an account-wide monetary cap. **Bryan must
set, in the OpenAI platform:** a project budget limit and/or usage alerts for
the key used by this site, scoped to a dedicated project for cashbryan.com.
Until that is done, spend is bounded only per-request/per-instance by the
controls above.

## 15. Content update workflow

Content is code: edit MDX (blog), TSX page content, or `src/data`, open a PR,
merge to `main`, Vercel deploys. No CMS by design. Adding a proposal =
adding a route/data entry under `/proposals`.

## 16. Proposal privacy considerations

Proposal pages are public URLs — publish only client-approved content; keep
slugs unguessable where a proposal is semi-private; never include pricing
negotiations or private communications. Remove or unpublish proposals when an
engagement ends if the client requests it.

## 17. Known limitations

- Rate limiting is per-instance (see §12) — accepted for this risk profile.
- Kill switch requires a redeploy to take effect (Vercel env model).
- No end-to-end/UI test suite; tests cover the chat guard logic only.
- The assistant's canned fallback content is maintained by hand in
  `route.ts` and can drift from site content.

## 18. Maintenance expectations (Tier T2)

Monthly, ~30–60 min: uptime + contact-path check; analytics glance
(assistant usage/abuse patterns); `npm audit` criticals; domain/cert expiry
check (60-day horizon); content accuracy skim. Two consecutive missed
reviews = S2 issue per the Project Closure & Maintenance Framework.

## 19. Closure-readiness checklist

- [x] Chat endpoint: validation, rate limit, output cap, kill switch,
      sanitized errors (this package; live verification pending deploy)
- [x] README accurate (this document)
- [x] `.env.example` complete, names only
- [ ] OpenAI project budget/usage alerts configured (operator — §14)
- [ ] Contact path verified end-to-end on production
- [ ] Proposal + legal routes walked on production, desktop + mobile
- [ ] Analytics confirmed reporting
- [ ] Closure record committed to `docs/CLOSURE.md`
