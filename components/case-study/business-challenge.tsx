import { AlertTriangle, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { BusinessChallenge as BusinessChallengeData } from "@/lib/case-studies/types"

interface BusinessChallengeProps {
  data: BusinessChallengeData
}

export function BusinessChallenge({ data }: BusinessChallengeProps) {
  return (
    <section
      className="px-6 py-20 bg-secondary/30"
      aria-labelledby="business-challenge-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-mint mb-3">
            Business Challenge
          </p>
          <h2
            id="business-challenge-heading"
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            What was at stake
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            {data.context}
          </p>
        </div>

        <Card className="border-border/50 bg-card/60 backdrop-blur-sm mb-6">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <AlertTriangle className="size-5 text-mint" aria-hidden />
              <h3 className="text-base font-semibold uppercase tracking-wider text-foreground">
                Key Problems
              </h3>
            </div>
            <ul className="space-y-3">
              {data.keyProblems.map((problem, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-base text-foreground/90 leading-relaxed"
                >
                  <span
                    className="mt-2 inline-block size-1.5 rounded-full bg-mint shrink-0"
                    aria-hidden
                  />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {data.stakeholders ? (
          <Card className="border-border/50 bg-card/40 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <Users className="size-5 text-mint" aria-hidden />
                <h3 className="text-base font-semibold uppercase tracking-wider text-foreground">
                  Stakeholders Affected
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {data.stakeholders}
              </p>
            </CardContent>
          </Card>
        ) : null}
      </div>
    </section>
  )
}
