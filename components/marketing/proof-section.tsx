import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { CaseStudyLink } from "@/lib/marketing/types"

interface ProofSectionProps {
  title?: string
  subheading?: string
  proof: CaseStudyLink[]
}

export function ProofSection({
  title = "Related Case Studies",
  subheading,
  proof,
}: ProofSectionProps) {
  if (!proof.length) return null

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        {title ? (
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">
            {title}
          </h2>
        ) : null}
        {subheading ? (
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            {subheading}
          </p>
        ) : (
          <div className="mb-8" />
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {proof.map((item) => (
            <Card
              key={item.slug}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-[#00FFC2]/30 transition-colors group"
            >
              <CardHeader>
                <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {item.description}
                </p>
                {item.outcome ? (
                  <p className="text-sm font-medium text-foreground/90 mb-2">
                    Outcome: {item.outcome}
                  </p>
                ) : null}
                {item.relevance ? (
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 italic">
                    {item.relevance}
                  </p>
                ) : (
                  <div className="mb-4" />
                )}
                <Link
                  href={`/projects/${item.slug}`}
                  className="inline-flex items-center text-sm font-medium text-[#00FFC2] hover:text-[#00FFC2]/80 transition-colors"
                >
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
