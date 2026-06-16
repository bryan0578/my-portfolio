import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaBlock } from "@/components/marketing/cta-block"
import { buildMailtoHref } from "@/lib/contact"

interface CtaBannerProps {
  headline: string
  description: string
  subject?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export function CtaBanner({
  headline,
  description,
  subject,
  secondaryHref = "/projects",
  secondaryLabel = "View case studies",
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
    <section className="px-6 py-16 md:py-20">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="brand" asChild className="min-w-[200px]">
              <a href={mailtoHref}>
                <Mail className="mr-2 size-4" />
                Discuss your project
              </a>
            </Button>
            <Button size="lg" variant="brandOutline" asChild className="min-w-[200px]">
              <Link href="/contact">
                Contact page
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="brandGhost" asChild className="min-w-[200px]">
              <Link href={secondaryHref}>
                {secondaryLabel}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </CtaBlock>
      </div>
    </section>
  )
}
