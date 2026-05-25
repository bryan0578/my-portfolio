import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { buildMailtoHref } from "@/lib/contact"
import type { CaseStudyCta as CaseStudyCtaData } from "@/lib/case-studies/types"

interface CaseStudyCtaProps {
  cta: CaseStudyCtaData
}

export function CaseStudyCta({ cta }: CaseStudyCtaProps) {
  const mailto = buildMailtoHref(cta.subject)

  return (
    <section
      className="px-6 py-20"
      aria-labelledby="case-study-cta-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-mint/30 bg-gradient-to-br from-mint/10 via-card/60 to-card/40 backdrop-blur-sm p-8 md:p-12">
          <div
            className="absolute -top-24 -right-24 size-72 rounded-full bg-mint/10 blur-3xl pointer-events-none"
            aria-hidden
          />
          <div className="relative">
            <p className="text-sm uppercase tracking-widest text-mint mb-3">
              Next Step
            </p>
            <h2
              id="case-study-cta-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight"
            >
              {cta.headline}
            </h2>
            <p className="text-lg text-foreground/85 leading-relaxed mb-8 max-w-2xl">
              {cta.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-mint text-background hover:bg-mint/90"
              >
                <a href={mailto}>
                  <Mail className="size-4 mr-2" aria-hidden />
                  Discuss your project
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-mint/40 hover:bg-mint/10"
              >
                <Link href="/contact">Contact page</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="hover:bg-mint/10"
              >
                <Link href={cta.primaryServiceHref}>
                  {cta.primaryServiceLabel}
                  <ArrowRight className="size-4 ml-1.5" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-foreground/70">
              Not sure how to engage?{" "}
              <Link
                href="/work-with-me"
                className="text-mint hover:underline font-medium"
              >
                See engagement options
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
