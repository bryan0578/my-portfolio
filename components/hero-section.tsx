import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"
import { HeroOrbitalVisual } from "@/components/hero-orbital-visual"

export function HeroSection() {
  return (
    <section className="relative px-4 sm:px-6 2xl:px-8 pt-24 pb-5 md:pt-28 md:pb-6 lg:pt-[7.25rem] lg:pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900/50 via-background to-background pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 lg:h-24 bg-gradient-to-b from-transparent to-surface-canvas pointer-events-none z-[1]" />
      <div className="hidden lg:block absolute top-20 right-[4%] w-[min(100%,260px)] h-[260px] bg-brand-primary/[0.025] blur-[68px] rounded-full pointer-events-none lg:right-[2%] lg:w-[280px] lg:h-[280px] 2xl:right-0" />

      <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="rounded-xl border border-white/[0.06] bg-zinc-950/50 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 xl:gap-10 2xl:gap-12 items-center lg:items-center p-5 sm:p-6 md:p-6 lg:py-8 lg:px-9 xl:py-9 xl:px-10 2xl:px-12">
            {/* Copy + CTAs — sole focal point below lg */}
            <div className="relative z-10 text-center lg:text-left order-1 min-w-0 lg:py-1 max-lg:mx-auto max-lg:max-w-lg">
              <p className="text-label tracking-wide text-brand-primary mb-2.5 font-semibold-plus normal-case">
                Enterprise UI Developer · Technical Lead
              </p>

              <h1 className="text-h1 lg:text-hero font-bold text-foreground mb-3.5 sm:mb-4 text-balance">
                Enterprise applications built for the people who depend on them
              </h1>

              <p className="text-body lg:text-body-lg text-muted-foreground/90 max-w-xl mx-auto lg:mx-0 mb-5 sm:mb-5 text-pretty">
                I build SAPUI5, Fiori, SAP BTP, Salesforce, and modern frontend
                experiences—and help teams move from unclear requirements to reliable delivery.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                <Button
                  size="lg"
                  variant="brand"
                  asChild
                  className="w-full sm:w-auto min-h-11"
                >
                  <Link href="/career" aria-label="Review Bryan Cash's career profile">
                    <Mail className="mr-2 size-4 shrink-0" aria-hidden />
                    Hiring for a full-time role
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="ghost"
                  asChild
                  className="w-full sm:w-auto min-h-11 text-foreground hover:text-brand-primary hover:bg-transparent underline-offset-4 hover:underline px-2"
                >
                  <Link
                    href="/consulting"
                    aria-label="Explore consulting with Bryan Cash"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Looking for project support
                    <ArrowRight className="size-4 shrink-0" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Decorative visual — desktop only (lg+) */}
            <div
              className="hidden lg:flex order-2 relative w-full items-center justify-end lg:self-center translate-x-3 xl:translate-x-5 2xl:translate-x-6 opacity-[0.78]"
              aria-hidden="true"
            >
              <HeroOrbitalVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
