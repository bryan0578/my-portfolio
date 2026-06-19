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
          <div className="flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button size="lg" variant="brand" asChild className="w-full sm:w-auto sm:min-w-[200px]">
              <Link href="/work-with-me">
                Discuss your program
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="brandOutline" asChild className="w-full sm:w-auto sm:min-w-[200px]">
              <Link href="/contact">Contact Bryan</Link>
            </Button>
          </div>
        </CtaBlock>
      </div>
    </section>
  )
}
