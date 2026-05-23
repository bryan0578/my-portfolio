"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, ArrowDown, ArrowRight } from "lucide-react"
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-background to-background" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00FFC2]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-[#00FFC2] mb-4 font-semibold">
          Bryan Cash
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
          SAP BTP Lead &amp; Enterprise UI Architect
        </h1>

        <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          SAP BTP development, SAPUI5/Fiori applications, Salesforce Experience Cloud,
          and DevOps for organizations that need adoption—not just delivery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="min-w-[160px] bg-[#00FFC2] text-zinc-950 hover:bg-[#00FFC2]/90 shadow-[0_0_20px_rgba(0,255,194,0.3)] hover:shadow-[0_0_30px_rgba(0,255,194,0.5)] transition-all duration-300 font-bold"
          >
            <Link href="/contact" aria-label="Contact Bryan Cash">
              <Mail className="mr-2 size-4" />
              Get in Touch
            </Link>
          </Button>

          <Button size="lg" variant="outline" asChild className="min-w-[160px]">
            <Link href="/services" aria-label="View enterprise development services">
              View Services
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="size-5 text-[#00FFC2]/50" />
      </div>
    </section>
  )
}