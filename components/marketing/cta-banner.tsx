import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
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
      <div className="max-w-4xl mx-auto rounded-2xl border border-brand-primary/20 bg-brand-soft p-8 md:p-12 text-center">
        <h2 className="text-h3 md:text-h2 font-heading text-foreground mb-4 text-balance">
          {headline}
        </h2>
        <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="min-w-[200px] bg-brand-primary text-text-inverse hover:bg-brand-secondary font-bold shadow-[0_0_20px_rgba(0,255,194,0.25)]"
          >
            <a href={mailtoHref}>
              <Mail className="mr-2 size-4" />
              Discuss your project
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="min-w-[200px]">
            <Link href="/contact">
              Contact page
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="ghost" asChild className="min-w-[200px]">
            <Link href={secondaryHref}>
              {secondaryLabel}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
        <p className="mt-6 text-body-sm text-muted-foreground">
          Prefer a dedicated contact page?{" "}
          <Link href="/contact" className="text-brand-primary hover:underline">
            Start here
          </Link>
        </p>
      </div>
    </section>
  )
}
