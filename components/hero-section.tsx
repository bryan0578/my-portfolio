import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"
import { HeroOrbitalVisual } from "@/components/hero-orbital-visual"

export function HeroSection() {
  return (
    <section className="relative px-4 sm:px-6 2xl:px-8 pt-24 pb-6 md:pt-28 md:pb-8 lg:pt-[7.25rem] lg:pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900/50 via-background to-background pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-24 bg-gradient-to-b from-transparent to-[#050505] pointer-events-none z-[1]" />
      <div className="absolute top-20 right-[4%] w-[min(100%,260px)] h-[260px] bg-[#00FFC2]/[0.025] blur-[68px] rounded-full pointer-events-none lg:right-[2%] lg:w-[280px] lg:h-[280px] 2xl:right-0" />

      <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto">
        <div className="rounded-xl border border-white/[0.06] bg-zinc-950/50 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 2xl:gap-12 items-center lg:items-center p-5 sm:p-6 md:p-7 lg:py-8 lg:px-9 xl:py-9 xl:px-10 2xl:px-12">
            {/* Left: copy + CTAs */}
            <div className="relative z-10 text-center lg:text-left order-1 min-w-0 lg:py-1">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#00FFC2] mb-2.5 font-semibold">
                Bryan Cash
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-[2.125rem] lg:text-5xl xl:text-[3.25rem] 2xl:text-[3.375rem] font-bold tracking-tight text-foreground mb-3.5 sm:mb-4 text-balance leading-[1.12]">
                SAP BTP Lead &amp;{" "}
                <span className="text-[#00FFC2]">Enterprise UI Architect</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-[1.0625rem] text-muted-foreground/90 max-w-xl mx-auto lg:mx-0 mb-5 sm:mb-5 leading-relaxed text-pretty">
                SAP BTP development, SAPUI5/Fiori applications, Salesforce
                Experience Cloud, and DevOps for organizations that need
                adoption—not just delivery.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto min-h-11 bg-[#00FFC2] text-zinc-950 hover:bg-[#00FFC2]/90 shadow-[0_0_16px_rgba(0,255,194,0.18)] hover:shadow-[0_0_22px_rgba(0,255,194,0.28)] transition-all duration-300 font-bold"
                >
                  <Link href="/contact" aria-label="Contact Bryan Cash">
                    <Mail className="mr-2 size-4 shrink-0" aria-hidden />
                    Get in Touch
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="ghost"
                  asChild
                  className="w-full sm:w-auto min-h-11 text-foreground hover:text-[#00FFC2] hover:bg-transparent underline-offset-4 hover:underline px-2"
                >
                  <Link
                    href="/services"
                    aria-label="View enterprise development services"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    View Services
                    <ArrowRight className="size-4 shrink-0" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: decorative visual — anchored to hero edge, not centered in column */}
            <div className="order-2 relative flex w-full items-center justify-end lg:self-center translate-x-1 sm:translate-x-2 lg:translate-x-3 xl:translate-x-5 2xl:translate-x-6 -mt-0.5 sm:mt-0 opacity-90 lg:opacity-[0.78]">
              <HeroOrbitalVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
