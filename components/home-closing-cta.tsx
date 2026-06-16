import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaBlock } from "@/components/marketing/cta-block"

export function HomeClosingCta() {
  return (
    <section className="px-6 py-16 md:py-20 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <CtaBlock
          id="home-closing-cta"
          eyebrow="Work With Me"
          title="Ready to turn complexity into a system that works?"
          description="Whether you need architecture guidance, hands-on delivery, or a focused technical review, we can shape the right engagement on a discovery call."
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="brand" asChild className="min-w-[200px]">
              <Link href="/work-with-me">
                Discuss your program
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="brandOutline" asChild className="min-w-[200px]">
              <Link href="/contact">Contact Bryan</Link>
            </Button>
          </div>
        </CtaBlock>
      </div>
    </section>
  )
}
