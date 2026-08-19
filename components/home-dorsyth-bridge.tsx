import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function HomeDorsythBridge() {
  return (
    <section className="bg-surface-canvas px-5 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 rounded-xl border border-border/60 bg-card/35 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
              Independent studio
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
              Client websites and product work live at Dorsyth.
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              cashbryan.com is focused on my professional engineering experience. Dorsyth is my studio for websites, product design, React and Next.js applications, and independent products.
            </p>
          </div>

          <Link
            href="https://dorsyth.com"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border/70 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-primary/50 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
          >
            Visit Dorsyth
            <ArrowUpRight className="ml-2 size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
