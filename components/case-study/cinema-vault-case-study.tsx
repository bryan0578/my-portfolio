import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const screenshots = {
  hero: {
    src: "/images/projects/cinema-vault/home-interstellar.webp",
    alt: "Cinema Vault desktop home screen with Interstellar featured",
  },
  home: {
    src: "/images/projects/cinema-vault/home-recent-favorites.webp",
    alt: "Cinema Vault Recently Added and Favorites collections",
  },
  library: {
    src: "/images/projects/cinema-vault/library-box-sets.webp",
    alt: "Cinema Vault My Library view with box sets and collection overview",
  },
  dune: {
    src: "/images/projects/cinema-vault/dune-editions.webp",
    alt: "Cinema Vault Dune detail view with physical and digital editions",
  },
  wishlist: {
    src: "/images/projects/cinema-vault/wishlist.webp",
    alt: "Cinema Vault wishlist populated with five titles",
  },
  mobile: {
    src: "/images/projects/cinema-vault/mobile-library-box-sets.webp",
    alt: "Cinema Vault mobile My Library view showing box sets",
  },
} as const

const metrics = [
  { value: "37", label: "Passing tests" },
  { value: "24", label: "Application routes" },
  { value: "0", label: "Known dependency vulnerabilities" },
  { value: "1", label: "Production-deployed product" },
]

const domainConcepts = [
  ["Title / catalog item", "The movie or series identity enriched with public metadata."],
  ["Owned edition", "A distinct copy or license attached to the catalog identity."],
  ["Physical format", "DVD, Blu-ray, 4K UHD, and other tangible formats."],
  ["Digital quality", "SD, HDX / HD, or 4K quality tracked per digital ownership."],
  ["Box set", "A meaningful collection that groups editions without erasing them."],
  ["Wishlist state", "Acquisition intent that can move cleanly into ownership."],
  ["Duplicate review", "A deliberate checkpoint for potentially overlapping editions."],
  ["Metadata enrichment", "TMDB context that assists entry without owning collection state."],
] as const

const decisions = [
  {
    title: "Private source, public proof",
    body: "Cinema Vault may become a commercial subscription product, so the repository remains private. This case study demonstrates architecture, product reasoning, screenshots, and verified outcomes without publishing the commercial blueprint.",
  },
  {
    title: "Single owner by design",
    body: "The current architecture is intentionally owner-scoped. Multi-tenancy was deferred until an active commercialization need justifies the added isolation, onboarding, entitlement, and support complexity.",
  },
  {
    title: "Server-side ownership enforcement",
    body: "Identity and authorization are resolved on the server and enforced at the data boundary, keeping collection access rules independent of what the browser chooses to render.",
  },
  {
    title: "External metadata as enrichment",
    body: "TMDB reduces manual entry and improves discovery, but it does not own edition, wishlist, box-set, or acquisition state. The collection record remains authoritative.",
  },
  {
    title: "Workflow over silent automation",
    body: "Potential duplicate editions are surfaced for review instead of being silently collapsed. That preserves user intent when two copies share a title but differ in format, quality, packaging, or collection context.",
  },
]

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
        {eyebrow}
      </p>
      <h2 className="text-h2 font-heading leading-heading tracking-heading text-foreground md:text-page-title">
        {title}
      </h2>
      {children ? (
        <div className="mt-6 text-body leading-body text-text-secondary">
          {children}
        </div>
      ) : null}
    </div>
  )
}

function ProductScreenshot({
  src,
  alt,
  caption,
  priority = false,
  mobile = false,
}: {
  src: string
  alt: string
  caption: string
  priority?: boolean
  mobile?: boolean
}) {
  return (
    <figure className="overflow-hidden border border-border-default bg-surface-base shadow-2xl shadow-black/20">
      <div
        className={
          mobile
            ? "relative mx-auto aspect-[220/470] max-w-sm bg-black"
            : "relative aspect-[1908/908] bg-black"
        }
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-contain"
          sizes={mobile ? "(min-width: 1024px) 28rem, 90vw" : "(min-width: 1280px) 76rem, 94vw"}
        />
      </div>
      <figcaption className="border-t border-border-subtle px-5 py-4 text-caption leading-body text-text-muted">
        {caption}
      </figcaption>
    </figure>
  )
}

export function CinemaVaultCaseStudy() {
  return (
    <div className="overflow-hidden">
      <section className="px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
              Product Engineering Case Study
            </p>
            <h1 className="font-heading text-page-title leading-display tracking-display text-foreground md:text-hero">
              Cinema Vault
            </h1>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.14em] text-text-muted">
              Product Engineering Case Study · Private Source
            </p>
            <div className="mt-8 max-w-4xl space-y-4 text-body-lg leading-body text-text-secondary">
              <p>
                Cinema Vault is a production-deployed movie collection platform built to
                answer a more useful question than “Do I own this movie?”
              </p>
              <p className="border-l-2 border-brand-primary pl-5 font-heading text-h3 leading-heading text-foreground md:text-h2">
                “Which edition, format, quality, and collection context do I own?”
              </p>
            </div>
          </div>

          <dl className="mt-10 grid gap-px border-y border-border-default bg-border-default sm:grid-cols-3">
            <div className="bg-background py-5 pr-6 sm:px-6 sm:first:pl-0">
              <dt className="text-label uppercase tracking-label text-text-muted">Role</dt>
              <dd className="mt-2 text-body-sm leading-body text-foreground">
                Product owner · Architect · Full-stack engineer
              </dd>
            </div>
            <div className="bg-background py-5 pr-6 sm:px-6">
              <dt className="text-label uppercase tracking-label text-text-muted">Stack</dt>
              <dd className="mt-2 text-body-sm leading-body text-foreground">
                Next.js 16 · TypeScript · Neon Postgres · Neon Auth · TMDB · Vercel
              </dd>
            </div>
            <div className="bg-background py-5 pr-6 sm:px-6 sm:last:pr-0">
              <dt className="text-label uppercase tracking-label text-text-muted">Status</dt>
              <dd className="mt-2 text-body-sm leading-body text-foreground">
                Private-source production application
              </dd>
            </div>
          </dl>

          <div className="mt-10 md:mt-14">
            <ProductScreenshot
              {...screenshots.hero}
              caption="Desktop home experience — the product opens with collection context, not generic catalog chrome."
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-surface-base px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionIntro eyebrow="Executive Snapshot" title="A collector’s problem, treated as a product system">
            <p>
              Cinema Vault began as a personal collection-management problem. Existing
              tools were good at cataloging titles, but less useful for tracking the way a
              real collector thinks about ownership.
            </p>
            <p className="mt-4">
              The outcome is a production-deployed full-stack application with owner-scoped
              authentication, persistent relational data, TMDB enrichment, edition-aware
              workflows, box-set grouping, wishlist conversion, responsive UI, and tested
              security controls.
            </p>
          </SectionIntro>

          <dl className="mt-12 grid border-y border-border-default sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-border-default py-6 sm:nth-[2n+1]:pr-6 sm:nth-[2n]:border-l sm:nth-[2n]:pl-6 lg:border-b-0 lg:border-l lg:px-7 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
              >
                <dt className="text-caption leading-body text-text-muted">{metric.label}</dt>
                <dd className="mt-2 font-heading text-h2 leading-none text-foreground">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionIntro eyebrow="The Problem" title="A single owned flag loses the useful detail">
              <p>
                A simple movie list breaks down when one title exists in multiple physical
                or digital editions. Collectors distinguish DVD, Blu-ray, 4K UHD, SD,
                HDX / HD, and 4K—not as decorative tags, but as the definition of what they
                actually own.
              </p>
              <p className="mt-4">
                Box sets need to behave as meaningful collections. Duplicate editions need
                review. External metadata should reduce data entry without replacing the
                owner’s record.
              </p>
            </SectionIntro>
            <ProductScreenshot
              {...screenshots.home}
              caption="Recently Added and Favorites make the collection useful from the home screen."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-surface-base px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Product & Domain Model" title="Ownership is the domain model">
            <p>
              The catalog identity supplies context. The ownership model supplies truth.
              Cinema Vault keeps those responsibilities separate so one title can support
              several real-world editions without flattening them into a yes-or-no answer.
            </p>
          </SectionIntro>

          <div className="mt-12 grid gap-px border border-border-default bg-border-default md:grid-cols-2 lg:grid-cols-4">
            {domainConcepts.map(([title, body], index) => (
              <article key={title} className="bg-surface-base p-6 md:p-7">
                <p className="font-mono text-xs text-brand-primary">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 font-heading text-h4 leading-heading text-foreground">{title}</h3>
                <p className="mt-3 text-body-sm leading-body text-text-muted">{body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <ProductScreenshot
              {...screenshots.library}
              caption="My Library keeps individual ownership records visible inside a meaningful box-set hierarchy."
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <ProductScreenshot
            {...screenshots.dune}
            caption="Dune demonstrates enriched title context alongside distinct 4K UHD and HDX digital ownership."
          />
          <SectionIntro eyebrow="Edition-Aware Ownership" title="Movie identity and ownership are separate concerns">
            <p>
              The detail experience combines enriched title metadata, streaming availability,
              and editable ownership state without confusing one for another. A title can
              carry a 4K UHD copy and a digital license with HDX quality at the same time.
            </p>
            <p className="mt-4">
              That distinction answers the collector’s next question—what version is on the
              shelf or in the digital library—rather than stopping at <code className="font-mono text-brand-primary">owned=true</code>.
            </p>
          </SectionIntro>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-surface-base px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionIntro eyebrow="Wishlist → Ownership" title="Preserve intent across the acquisition workflow">
            <p>
              Wishlist entries retain intended acquisitions for movies and television. They
              can carry preference and priority context, then move into the owned collection
              instead of forcing the user to re-enter the title from scratch.
            </p>
            <p className="mt-4">
              The workflow protects continuity: enriched identity and acquisition intent
              survive the state change while the newly owned edition becomes authoritative.
            </p>
          </SectionIntro>
          <ProductScreenshot
            {...screenshots.wishlist}
            caption="A populated wishlist represents acquisition intent as part of the same product system."
          />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro eyebrow="Architecture" title="A server-side boundary around ownership data">
            <p>
              The architecture keeps authentication, authorization, business rules, database
              access, and external credentials on the server. TMDB enters through a separate
              enrichment path, so external metadata can assist the product without becoming
              the collection source of truth.
            </p>
          </SectionIntro>

          <div className="mt-12 space-y-4" aria-label="Cinema Vault architecture flow">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="border border-border-default bg-surface-base p-6">
                <p className="text-label uppercase tracking-label text-text-muted">Experience</p>
                <p className="mt-3 font-heading text-h4">Browser / Next.js UI</p>
              </div>
              <div className="border border-border-default bg-surface-base p-6">
                <p className="text-label uppercase tracking-label text-text-muted">Application boundary</p>
                <p className="mt-3 font-heading text-h4">Server-side application</p>
              </div>
              <div className="border border-brand-primary/40 bg-brand-soft/40 p-6">
                <p className="text-label uppercase tracking-label text-brand-primary">Identity & access</p>
                <p className="mt-3 font-heading text-h4">Neon Auth + server authorization</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="border border-border-default bg-surface-base p-6 md:col-start-2">
                <p className="text-label uppercase tracking-label text-text-muted">Product rules</p>
                <p className="mt-3 font-heading text-h4">Domain / business logic</p>
              </div>
              <div className="border border-border-default bg-surface-base p-6">
                <p className="text-label uppercase tracking-label text-text-muted">Persistence</p>
                <p className="mt-3 font-heading text-h4">Neon Postgres</p>
              </div>
            </div>
            <div className="grid gap-4 border-t border-dashed border-border-strong pt-4 md:grid-cols-3">
              <div className="border border-border-default bg-surface-base p-6">
                <p className="text-label uppercase tracking-label text-text-muted">External enrichment</p>
                <p className="mt-3 font-heading text-h4">TMDB → server enrichment layer</p>
              </div>
              <div className="border border-border-default bg-surface-base p-6 md:col-start-3">
                <p className="text-label uppercase tracking-label text-text-muted">Deployment</p>
                <p className="mt-3 font-heading text-h4">Vercel</p>
              </div>
            </div>
          </div>

          <ul className="mt-10 grid gap-x-10 gap-y-3 text-body-sm leading-body text-text-secondary md:grid-cols-2">
            <li>Server-side authentication and owner-scoped data access</li>
            <li>Parameterized access to persistent relational data</li>
            <li>Server-only external service credentials</li>
            <li>TMDB enrichment separated from ownership truth</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-surface-base px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro eyebrow="Engineering Decisions" title="Tradeoffs made deliberately, at the right time" />
          <div className="mt-12 border-t border-border-default">
            {decisions.map((decision, index) => (
              <article
                key={decision.title}
                className="grid gap-4 border-b border-border-default py-8 md:grid-cols-[3rem_0.8fr_1.4fr] md:gap-8"
              >
                <p className="font-mono text-xs text-brand-primary">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="font-heading text-h4 leading-heading text-foreground">{decision.title}</h3>
                <p className="text-body-sm leading-body text-text-secondary">{decision.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionIntro eyebrow="Security & Release Readiness" title="Security was treated as release work" />
          <div>
            <p className="text-body leading-body text-text-secondary">
              Release hardening covered the application boundary, browser-facing behavior,
              dependency health, and repeatable validation—not just a final vulnerability scan.
            </p>
            <ul className="mt-8 grid gap-x-10 gap-y-4 border-t border-border-default pt-8 text-body-sm leading-body text-foreground sm:grid-cols-2">
              <li>Dependency upgrades and repaired lockfile</li>
              <li>Explicit cookie-secret handling</li>
              <li>Removal of client-visible owner identity</li>
              <li>Server-side OTP authentication actions</li>
              <li>Security headers</li>
              <li>Clean-install validation</li>
              <li>Unit and integration tests</li>
              <li>0 known dependency vulnerabilities after remediation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-surface-base px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.72fr] lg:gap-20">
          <SectionIntro eyebrow="Responsive Product Design" title="The hierarchy survives the smaller screen">
            <p>
              Mobile design preserves collection hierarchy, box-set management, search and
              filter access, poster browsing, clear navigation, and a fast add action. The UI
              is reorganized around touch and limited width rather than reduced to a squeezed
              desktop layout.
            </p>
          </SectionIntro>
          <ProductScreenshot
            {...screenshots.mobile}
            caption="Mobile My Library keeps box sets and core collection actions immediately accessible."
            mobile
          />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionIntro eyebrow="Outcome" title="End-to-end product engineering">
              <p>
                Cinema Vault demonstrates product modeling, authenticated application
                architecture, relational persistence, external-service integration,
                responsive interface design, security hardening, automated validation, and
                production deployment as one coherent system.
              </p>
            </SectionIntro>
            <SectionIntro eyebrow="Next Phase" title="Commercialization when the need is real">
              <p>
                If commercialization becomes active, the next architecture phase would add
                multi-tenancy, onboarding, billing and entitlements, tenant isolation,
                operational support, and expanded security policy. Those capabilities were
                intentionally not built before the product required them.
              </p>
            </SectionIntro>
          </div>
        </div>
      </section>

      <section className="border-t border-border-subtle bg-surface-base px-4 py-20 sm:px-6 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">Work together</p>
            <h2 className="mt-4 font-heading text-h2 leading-heading text-foreground md:text-page-title">
              Building systems where product rules, architecture, and user experience have to work together?
            </h2>
          </div>
          <Button variant="brand" size="lg" asChild className="group shrink-0">
            <Link href="/contact">
              Let&apos;s talk
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
