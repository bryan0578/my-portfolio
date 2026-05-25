import { Award, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Outcomes } from "@/lib/case-studies/types"

interface QualitativeOutcomesProps {
  outcomes: Outcomes
}

export function QualitativeOutcomes({ outcomes }: QualitativeOutcomesProps) {
  if (!outcomes?.qualitative?.length) return null

  return (
    <section
      className="px-6 pt-4 pb-20"
      aria-labelledby="qualitative-outcomes-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-start gap-4">
          <div className="size-12 rounded-xl bg-mint/10 border border-mint/20 flex items-center justify-center shrink-0">
            <Award className="size-5 text-mint" aria-hidden />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-mint mb-2">
              Qualitative Outcomes
            </p>
            <h2
              id="qualitative-outcomes-heading"
              className="text-2xl md:text-3xl font-bold text-foreground"
            >
              Beyond the numbers
            </h2>
          </div>
        </div>

        <Card className="border-border/50 bg-card/60 backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            <ul className="grid gap-4 md:grid-cols-2">
              {outcomes.qualitative.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <CheckCircle2
                    className="size-5 text-mint mt-0.5 shrink-0"
                    aria-hidden
                  />
                  <span className="text-base text-foreground/90 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {outcomes.summary ? (
              <p className="mt-6 pt-6 border-t border-border/40 text-sm text-muted-foreground leading-relaxed italic">
                {outcomes.summary}
              </p>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
