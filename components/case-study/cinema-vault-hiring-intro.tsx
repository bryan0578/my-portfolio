import Image from "next/image"

const evidence = [
  { value: "37", label: "Passing tests" },
  { value: "24", label: "Application routes" },
  { value: "Production", label: "Deployment status" },
] as const

export function CinemaVaultHiringIntro() {
  return (
    <section className="px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
              Product Engineering Case Study
            </p>
            <h1 className="font-heading text-page-title leading-display tracking-display text-foreground md:text-hero">
              Cinema Vault
            </h1>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.14em] text-text-muted">
              Private source · Production deployed
            </p>

            <div className="mt-8 max-w-3xl space-y-4 text-body-lg leading-body text-text-secondary">
              <p>
                A full-stack collection platform built around the ownership details generic movie catalogs flatten away.
              </p>
              <p className="border-l-2 border-brand-primary pl-5 font-heading text-h3 leading-heading text-foreground md:text-h2">
                “Which edition, format, quality, and collection context do I own?”
              </p>
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
                  Next.js 16 · TypeScript · Neon Postgres · Neon Auth
                </dd>
              </div>
              <div className="bg-background py-5 pr-6 sm:px-6 sm:last:pr-0">
                <dt className="text-label uppercase tracking-label text-text-muted">Scope</dt>
                <dd className="mt-2 text-body-sm leading-body text-foreground">
                  Product model · UI/UX · data · security · deployment
                </dd>
              </div>
            </dl>
          </div>

          <aside className="rounded-2xl border border-border-default bg-surface-base p-6 md:p-8" aria-label="Cinema Vault recruiter snapshot">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
              Recruiter snapshot
            </p>
            <h2 className="mt-3 font-heading text-h3 leading-heading text-foreground">
              What this project demonstrates.
            </h2>

            <div className="mt-7 space-y-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">Challenge</p>
                <p className="mt-2 text-body-sm leading-body text-text-secondary">
                  Generic catalog tools confirm ownership but lose edition, format, digital quality, and collection context.
                </p>
              </div>
              <div className="border-t border-border-default pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-primary">My contribution</p>
                <p className="mt-2 text-body-sm leading-body text-foreground">
                  Designed the product model and interface, built the authenticated full-stack application, integrated TMDB enrichment, hardened the server boundary, tested it, and deployed it to production.
                </p>
              </div>
              <div className="border-t border-border-default pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">Outcome</p>
                <p className="mt-2 font-heading text-h4 leading-heading text-foreground">
                  Production-deployed private-source product.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <dl className="mt-8 grid overflow-hidden rounded-xl border border-border-default sm:grid-cols-3">
          {evidence.map((item, index) => (
            <div
              key={item.label}
              className={`p-5 md:p-6 ${index > 0 ? "border-t border-border-default sm:border-l sm:border-t-0" : ""}`}
            >
              <dd className="font-mono text-xl font-semibold text-foreground md:text-2xl">{item.value}</dd>
              <dt className="mt-1 text-caption leading-body text-text-muted">{item.label}</dt>
            </div>
          ))}
        </dl>

        <figure className="mt-10 overflow-hidden border border-border-default bg-surface-base shadow-2xl shadow-black/20 md:mt-14">
          <div className="relative aspect-[1908/908] bg-black">
            <Image
              src="/images/projects/cinema-vault/home-interstellar.webp"
              alt="Cinema Vault desktop home screen with Interstellar featured"
              fill
              priority
              className="object-contain"
              sizes="(min-width: 1280px) 76rem, 94vw"
            />
          </div>
          <figcaption className="border-t border-border-subtle px-5 py-4 text-caption leading-body text-text-muted">
            Desktop home experience — real product UI before the technical deep dive.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
