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
    `Opportunity discussion — ${projectTitle}`,
    [
      "Hi Bryan,",
      "",
      `I reviewed the ${projectTitle} case study and would like to discuss your experience for an opportunity.`,
      "",
      "Role / context:",
      "",
    ].join("\n")
  )

  return (
    <section className="px-6 py-20" aria-labelledby="case-study-fallback-cta-heading">
      <div className="mx-auto max-w-4xl">
        <CtaBlock
          id="case-study-fallback-cta"
          eyebrow="Continue the review"
          title="Want to evaluate the work in context?"
          description="Review the hiring-focused experience profile, compare more project evidence, or contact Bryan directly about a full-time role or relevant enterprise engagement."
          align="left"
          footer={
            <p className="text-body-sm leading-relaxed text-muted-foreground">
              cashbryan.com is focused on Bryan&apos;s engineering career and selective enterprise consulting. Client website and product work lives at Dorsyth.
            </p>
          }
        >
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            <Button size="lg" variant="brand" asChild className="min-h-11 w-full sm:w-auto">
              <Link href="/career">
                Review experience
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="brandOutline"
              asChild
              className="min-h-11 w-full sm:w-auto"
            >
              <Link href="/career/projects">
                <span>Selected work</span>
                <ArrowRight className="ml-2 size-4 shrink-0" aria-hidden />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="brandGhost"
              asChild
              className="min-h-11 w-full sm:w-auto"
            >
              <a href={mailto}>
                <Mail className="mr-2 size-4" aria-hidden />
                Discuss an opportunity
              </a>
            </Button>
          </div>
        </CtaBlock>
      </div>
    </section>
  )
}
