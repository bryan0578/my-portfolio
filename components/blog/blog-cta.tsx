import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaBlock } from "@/components/marketing/cta-block"
import { buildMailtoHref } from "@/lib/contact"

interface BlogCtaProps {
  headline: string
  description: string
  serviceHref: string
  serviceLabel: string
  mailSubject: string
  caseStudyHref?: string
  caseStudyLabel?: string
}

export function BlogCta({
  headline,
  description,
  serviceHref,
  serviceLabel,
  mailSubject,
  caseStudyHref,
  caseStudyLabel = "View related case study",
}: BlogCtaProps) {
  const mailtoHref = buildMailtoHref(
    mailSubject,
    [
      "Hi Bryan,",
      "",
      "I read your article and would like to discuss a similar initiative.",
      "",
      "Overview:",
      "",
    ].join("\n")
  )

  return (
    <CtaBlock
      id="blog-cta"
      title={headline}
      description={description}
      align="left"
      padding="compact"
      className="not-prose my-10 sm:my-14 md:my-16"
      footer={
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Want to understand how engagements work first? See{" "}
          <Link
            href="/work-with-me"
            className="text-brand-primary hover:underline font-medium whitespace-nowrap"
          >
            Work With Me
          </Link>{" "}
          or visit the{" "}
          <Link
            href="/contact"
            className="text-brand-primary hover:underline font-medium whitespace-nowrap"
          >
            contact page
          </Link>
          .
        </p>
      }
    >
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
        <Button size="lg" variant="brand" asChild className="w-full sm:w-auto min-h-11">
          <a href={mailtoHref}>
            <Mail className="mr-2 size-4" aria-hidden />
            <span>Discuss your program</span>
          </a>
        </Button>
        <Button
          size="lg"
          variant="brandOutline"
          asChild
          className="w-full sm:w-auto min-h-11"
        >
          <Link href={serviceHref}>
            <span className="truncate">{serviceLabel}</span>
            <ArrowRight className="ml-2 size-4 shrink-0" aria-hidden />
          </Link>
        </Button>
        {caseStudyHref ? (
          <Button
            size="lg"
            variant="brandGhost"
            asChild
            className="w-full sm:w-auto min-h-11"
          >
            <Link href={caseStudyHref}>
              <span className="truncate">{caseStudyLabel}</span>
              <ArrowRight className="ml-2 size-4 shrink-0" aria-hidden />
            </Link>
          </Button>
        ) : null}
        <Button
          size="lg"
          variant="brandGhost"
          asChild
          className="w-full sm:w-auto min-h-11"
        >
          <Link href="/work-with-me">
            <span>Engagement options</span>
            <ArrowRight className="ml-2 size-4 shrink-0" aria-hidden />
          </Link>
        </Button>
      </div>
    </CtaBlock>
  )
}
