import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
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
    <section
      className="not-prose my-10 sm:my-14 md:my-16 rounded-2xl border border-brand-primary/20 bg-brand-soft p-5 sm:p-7 md:p-10"
      aria-labelledby="blog-cta-heading"
    >
      <h2
        id="blog-cta-heading"
        className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 leading-tight text-balance"
      >
        {headline}
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-7 md:mb-8 max-w-2xl">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
        <Button
          size="lg"
          asChild
          className="w-full sm:w-auto min-h-11 bg-brand-primary text-text-inverse hover:bg-brand-secondary font-bold shadow-[0_0_18px_rgba(0,255,194,0.2)]"
        >
          <a href={mailtoHref}>
            <Mail className="mr-2 size-4" aria-hidden />
            <span>Discuss your program</span>
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
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
            variant="ghost"
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
          variant="ghost"
          asChild
          className="w-full sm:w-auto min-h-11"
        >
          <Link href="/work-with-me">
            <span>Engagement options</span>
            <ArrowRight className="ml-2 size-4 shrink-0" aria-hidden />
          </Link>
        </Button>
      </div>

      <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
    </section>
  )
}
