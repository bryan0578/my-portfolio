import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaBlock } from "@/components/marketing/cta-block"
import { buildMailtoHref } from "@/lib/contact"
import type { CaseStudyCta as CaseStudyCtaData } from "@/lib/case-studies/types"

interface CaseStudyCtaProps {
  cta: CaseStudyCtaData
}

export function CaseStudyCta({ cta }: CaseStudyCtaProps) {
  const mailto = buildMailtoHref(
    `Full-time opportunity — ${cta.primaryServiceLabel} case study`,
  )

  return (
    <section className="px-6 py-20" aria-labelledby="case-study-cta-heading">
      <div className="mx-auto max-w-4xl">
        <CtaBlock
          id="case-study-cta"
          eyebrow="Continue evaluating Bryan"
          title="See the engineering in context."
          description="Review my experience, compare selected work, or start a conversation about a senior engineering or SAP BTP technical lead opportunity."
          align="left"
          footer={
            <p className="text-body-sm leading-relaxed text-muted-foreground">
              Looking for selective enterprise project support instead?{" "}
              <Link
                href="/consulting"
                className="font-medium text-brand-primary hover:underline"
              >
                Enterprise consulting
              </Link>
              {" "}stays available as a secondary path.
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
              <Link href="/career/projects">Selected work</Link>
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
