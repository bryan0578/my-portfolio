import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaBlock } from "@/components/marketing/cta-block"
import { buildMailtoHref } from "@/lib/contact"

interface CaseStudyFallbackCtaProps {
  projectTitle: string
}

export function CaseStudyFallbackCta({ projectTitle }: CaseStudyFallbackCtaProps) {
  const mailto = buildMailtoHref(
    `Case Study Inquiry — ${projectTitle}`,
    [
      "Hi Bryan,",
      "",
      `I reviewed the ${projectTitle} case study and would like to discuss a similar initiative.`,
      "",
      "Overview:",
      "",
    ].join("\n")
  )

  return (
    <section className="px-6 py-20" aria-labelledby="case-study-fallback-cta-heading">
      <div className="max-w-4xl mx-auto">
        <CtaBlock
          id="case-study-fallback-cta"
          eyebrow="Next step"
          title="Need similar outcomes on your program?"
          description={`This case study highlights delivery patterns Bryan applies to enterprise UI and platform work. Share your context and we can map the right engagement model.`}
          align="left"
          footer={
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Explore{" "}
              <Link
                href="/services"
                className="text-brand-primary hover:underline font-medium"
              >
                services
              </Link>{" "}
              or review{" "}
              <Link
                href="/work-with-me"
                className="text-brand-primary hover:underline font-medium"
              >
                engagement options
              </Link>
              .
            </p>
          }
        >
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
            <Button size="lg" variant="brand" asChild className="w-full sm:w-auto min-h-11">
              <a href={mailto}>
                <Mail className="mr-2 size-4" aria-hidden />
                Discuss your program
              </a>
            </Button>
            <Button
              size="lg"
              variant="brandOutline"
              asChild
              className="w-full sm:w-auto min-h-11"
            >
              <Link href="/work-with-me">
                <span>Work With Me</span>
                <ArrowRight className="ml-2 size-4 shrink-0" aria-hidden />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="brandGhost"
              asChild
              className="w-full sm:w-auto min-h-11"
            >
              <Link href="/contact">Contact page</Link>
            </Button>
          </div>
        </CtaBlock>
      </div>
    </section>
  )
}
