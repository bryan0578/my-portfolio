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
      className="not-prose my-16 rounded-2xl border border-[#00FFC2]/20 bg-[#00FFC2]/5 p-8 md:p-10"
      aria-labelledby="blog-cta-heading"
    >
      <h2
        id="blog-cta-heading"
        className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance"
      >
        {headline}
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <Button
          size="lg"
          asChild
          className="bg-[#00FFC2] text-zinc-950 hover:bg-[#00FFC2]/90 font-bold"
        >
          <a href={mailtoHref}>
            <Mail className="mr-2 size-4" />
            Discuss your program
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href={serviceHref}>
            {serviceLabel}
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        {caseStudyHref ? (
          <Button size="lg" variant="ghost" asChild>
            <Link href={caseStudyHref}>
              {caseStudyLabel}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        ) : null}
        <Button size="lg" variant="ghost" asChild>
          <Link href="/contact">Contact page</Link>
        </Button>
      </div>
    </section>
  )
}
