import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaBlock } from "@/components/marketing/cta-block"
import { buildMailtoHref } from "@/lib/contact"
import { cn } from "@/lib/utils"

interface CtaBannerProps {
  headline: string
  description: string
  subject?: string
  primaryLabel?: string
  secondaryLabel?: string
  secondaryHref?: string
  tertiaryHref?: string
  tertiaryLabel?: string
  className?: string
}

export function CtaBanner({
  headline,
  description,
  subject,
  primaryLabel = "Discuss your program",
  secondaryLabel = "Contact Bryan",
  secondaryHref = "/contact",
  tertiaryHref,
  tertiaryLabel = "View case studies",
  className,
}: CtaBannerProps) {
  const mailtoHref = buildMailtoHref(
    subject,
    [
      "Hi Bryan,",
      "",
      "I would like to discuss a potential engagement related to your services.",
      "",
      "Overview:",
      "",
    ].join("\n")
  )

  return (
    <section className={cn("px-6 py-16 md:py-20", className)}>
      <div className="max-w-4xl mx-auto">
        <CtaBlock
          title={headline}
          description={description}
          footer={
            <p className="text-body-sm text-muted-foreground">
              Prefer a dedicated contact page?{" "}
              <Link href="/contact" className="text-brand-primary hover:underline">
                Start here
              </Link>
            </p>
          }
        >
          <div className="flex w-full flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <Button size="lg" variant="brand" asChild className="w-full sm:w-auto sm:min-w-[200px]">
              <a href={mailtoHref}>
                <Mail className="mr-2 size-4" aria-hidden />
                {primaryLabel}
              </a>
            </Button>
            <Button size="lg" variant="brandOutline" asChild className="w-full sm:w-auto sm:min-w-[200px]">
              <Link href={secondaryHref}>
                {secondaryLabel}
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </Link>
            </Button>
            {tertiaryHref ? (
              <Button size="lg" variant="brandGhost" asChild className="w-full sm:w-auto sm:min-w-[200px]">
                <Link href={tertiaryHref}>
                  {tertiaryLabel}
                  <ArrowRight className="ml-2 size-4" aria-hidden />
                </Link>
              </Button>
            ) : null}
          </div>
        </CtaBlock>
      </div>
    </section>
  )
}
