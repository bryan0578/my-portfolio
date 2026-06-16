import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/marketing/section-header"
import { cardLinkAction } from "@/lib/ui/brand-classes"

const engagementTeasers = [
  {
    title: "Advisory & Architecture",
    description:
      "Architecture guidance, governance standards, and decision briefs before or alongside major SAP and Salesforce investments.",
  },
  {
    title: "Hands-on Implementation",
    description:
      "Fixed-scope delivery or embedded senior execution on SAP BTP, SAPUI5, Salesforce Experience Cloud, and modern frontend programs.",
  },
  {
    title: "Technical Review & Cleanup",
    description:
      "Targeted assessments and remediation for adoption gaps, UI drift, release risk, and technical debt slowing delivery.",
  },
] as const

export function HomeWorkWithMeTeaser() {
  return (
    <section className="px-6 py-24 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          className="mb-12"
          eyebrow="Engagement"
          title="How teams work with Bryan"
          description="Three common ways to engage—full models and fit criteria are on the Work With Me page."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {engagementTeasers.map((item) => (
            <Card
              key={item.title}
              variant="surface"
              className="h-full hover:border-brand-primary/30 transition-colors group"
            >
              <CardHeader>
                <CardTitle className="leading-snug">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <p className="text-body-sm text-muted-foreground leading-body mb-4 flex-1">
                  {item.description}
                </p>
                <Link href="/work-with-me" className={cardLinkAction}>
                  Learn more
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button size="lg" variant="brandOutline" asChild>
            <Link href="/work-with-me">
              See all engagement options
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
