"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowDown } from "lucide-react"

const CONTACT_EMAIL = "bryancash.dev@gmail.com"

function buildMailtoHref(email: string, subject?: string, body?: string) {
  const params = new URLSearchParams()

  if (subject) params.set("subject", subject)
  if (body) params.set("body", body)

  const query = params.toString()
  return `mailto:${email}${query ? `?${query}` : ""}`
}

export function HeroSection() {
  const mailtoHref = buildMailtoHref(
    CONTACT_EMAIL,
    "Inquiry from Portfolio: SAP BTP / DevOps Consulting",
    [
      "Hi Bryan,",
      "",
      "I was reviewing your portfolio and would love to discuss your experience with...",
    ].join("\n")
  )

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-background to-background" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00FFC2]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          <span className="text-balance">Bryan Cash</span>
        </h1>

        <p className="text-lg md:text-xl text-[#00FFC2] font-semibold mb-4 tracking-wide uppercase">
          SAP BTP Lead & UI Architect
        </p>

        <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          Bridging enterprise backend with intuitive UX. I architect scalable SAP solutions
          while crafting user experiences that drive adoption and business value.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="min-w-[160px] bg-[#00FFC2] text-zinc-950 hover:bg-[#00FFC2]/90 shadow-[0_0_20px_rgba(0,255,194,0.3)] hover:shadow-[0_0_30px_rgba(0,255,194,0.5)] transition-all duration-300 font-bold"
          >
            <a href={mailtoHref} target="_blank" aria-label="Email Bryan Cash">
              <Mail className="mr-2 size-4" />
              Get in Touch
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="min-w-[160px] border-[#00FFC2]/20 text-muted-foreground hover:text-[#00FFC2] hover:border-[#00FFC2]/50 hover:bg-[#00FFC2]/5 transition-all duration-300"
          >
            <Download className="mr-2 size-4" />
            Download Resume
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="size-5 text-[#00FFC2]/50" />
      </div>
    </section>
  )
}