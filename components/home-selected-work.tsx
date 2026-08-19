import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const systemNodes = ["Build Work Zone", "SAPUI5", "CAP", "HANA"] as const
const governanceNodes = ["Business need", "Extensibility decision", "BTP pattern", "Clean Core standard"] as const

function FlowVisual({ nodes }: { nodes: readonly string[] }) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-black/20 p-4 sm:p-5" aria-hidden="true">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        {nodes.map((node, index) => (
          <div key={node} className="contents">
            <div className="flex-1 rounded-md border border-border/60 bg-background/70 px-3 py-2.5 font-mono text-[11px] leading-5 text-foreground/75">
              {node}
            </div>
            {index < nodes.length - 1 ? (
              <span className="self-center font-mono text-xs text-brand-primary/70 sm:rotate-0 rotate-90">→</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export function HomeSelectedWork() {
  return (
    <section id="selected-work" className="bg-surface-canvas px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
            Enterprise delivery, architecture, and product engineering.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A fast view of the systems I have helped lead, design, and ship. Each case study goes deeper into the challenge, my role, the implementation, and the outcome.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <article className="group rounded-xl border border-border/60 bg-card/40 p-5 sm:p-6 lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-xs text-brand-primary">SAP BTP · ENTERPRISE DELIVERY</p>
              <span className="text-xs text-muted-foreground">28 applications delivered</span>
            </div>

            <div className="mt-6">
              <FlowVisual nodes={systemNodes} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-foreground sm:text-3xl">
              Manufacturer Analytics Portal
            </h3>
            <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
              Helped deliver a secure SAP BTP experience for external manufacturers, including 25 SAPUI5 reporting applications and 3 onboarding applications.
            </p>

            <dl className="mt-6 grid gap-4 border-t border-border/50 pt-5 sm:grid-cols-3">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Challenge</dt>
                <dd className="mt-2 text-sm leading-6 text-foreground/80">Fragmented partner reporting access</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">My contribution</dt>
                <dd className="mt-2 text-sm leading-6 text-foreground/80">SAPUI5, CAP, architecture, delivery</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Outcome</dt>
                <dd className="mt-2 text-sm leading-6 text-foreground/80">Unified enterprise reporting experience</dd>
              </div>
            </dl>

            <Link
              href="/projects/manufacturer-portal"
              className="mt-6 inline-flex items-center font-semibold text-brand-primary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
            >
              View case study
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </article>

          <article className="group overflow-hidden rounded-xl border border-border/60 bg-card/40 lg:col-span-5">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border/50 bg-zinc-950">
              <Image
                src="/images/projects/cinema-vault/home-interstellar.webp"
                alt="Cinema Vault desktop home screen with Interstellar featured"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </div>
            <div className="p-5 sm:p-6">
              <p className="font-mono text-xs text-brand-primary">NEXT.JS · PRODUCT ENGINEERING</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">Cinema Vault</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Edition-aware collection platform built around ownership, box sets, digital quality, wishlist workflows, and TMDB enrichment.
              </p>
              <p className="mt-5 font-mono text-xs leading-5 text-foreground/60">
                37 passing tests · 24 routes · 0 known dependency vulnerabilities at validation
              </p>
              <Link
                href="/projects/cinema-vault"
                className="mt-5 inline-flex items-center font-semibold text-brand-primary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              >
                View case study
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </article>

          <article className="group rounded-xl border border-border/60 bg-card/40 p-5 sm:p-6 lg:col-span-12">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="font-mono text-xs text-brand-primary">SAP BTP · ARCHITECTURE &amp; GOVERNANCE</p>
                <h3 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                  SAP BTP Extensibility Governance
                </h3>
                <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
                  Defined practical guidance for side-by-side and in-app extensibility so development teams could make more consistent Clean Core decisions.
                </p>
                <Link
                  href="/projects/enterprise-governance"
                  className="mt-5 inline-flex items-center font-semibold text-brand-primary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
                >
                  View case study
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
              <FlowVisual nodes={governanceNodes} />
            </div>
          </article>
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-semibold text-foreground/80 transition-colors hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
          >
            View all case studies
            <ArrowRight className="ml-2 size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
