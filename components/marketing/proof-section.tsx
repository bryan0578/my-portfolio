import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/marketing/section-header"
import { cardLinkAction } from "@/lib/ui/brand-classes"
import type { CaseStudyLink } from "@/lib/marketing/types"

interface ProofSectionProps {
  title?: string
  subheading?: string
  proof: CaseStudyLink[]
}

export function ProofSection({
  title = "Proof in production",
  subheading,
  proof,
}: ProofSectionProps) {
  if (!proof.length) return null

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        {title ? (
          <SectionHeader
            className="mb-8"
            title={title}
            description={subheading}
          />
        ) : null}
        {!title && subheading ? (
          <p className="text-body text-muted-foreground text-center max-w-2xl mx-auto mb-8 leading-body">
            {subheading}
          </p>
        ) : null}
        {!title && !subheading ? <div className="mb-8" /> : null}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {proof.map((item) => (
            <Card
              key={item.slug}
              variant="surface"
              className="hover:border-brand-primary/30 transition-colors group"
            >
              <CardHeader>
                <CardTitle className="leading-snug">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground leading-body mb-3">
                  {item.description}
                </p>
                {item.outcome ? (
                  <p className="text-body-sm font-medium text-foreground/90 mb-2">
                    Outcome: {item.outcome}
                  </p>
                ) : null}
                {item.relevance ? (
                  <p className="text-caption text-muted-foreground leading-body mb-4 italic">
                    {item.relevance}
                  </p>
                ) : (
                  <div className="mb-4" />
                )}
                <Link href={`/projects/${item.slug}`} className={cardLinkAction}>
                  View case study
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
