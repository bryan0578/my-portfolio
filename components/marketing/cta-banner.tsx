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
      <div className="max-w-4xl mx-auto rounded-2xl border border-[#00FFC2]/20 bg-[#00FFC2]/5 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
          {headline}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="min-w-[200px] bg-[#00FFC2] text-zinc-950 hover:bg-[#00FFC2]/90 font-bold shadow-[0_0_20px_rgba(0,255,194,0.25)]"
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
        <p className="mt-6 text-sm text-muted-foreground">
          Prefer a dedicated contact page?{" "}
          <Link href="/contact" className="text-[#00FFC2] hover:underline">
            Start here
          </Link>
        </p>
      </div>
    </section>
  )
}
