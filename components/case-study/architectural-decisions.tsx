import { Compass } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { ArchitecturalDecision } from "@/lib/case-studies/types"

interface ArchitecturalDecisionsProps {
  decisions: ArchitecturalDecision[]
}

export function ArchitecturalDecisions({
  decisions,
}: ArchitecturalDecisionsProps) {
  if (!decisions?.length) return null

  return (
    <section
      className="px-6 py-20 bg-secondary/30"
      aria-labelledby="architectural-decisions-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 flex items-start gap-4">
          <div className="size-12 rounded-xl bg-mint/10 border border-mint/20 flex items-center justify-center shrink-0">
            <Compass className="size-5 text-mint" aria-hidden />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-mint mb-2">
              Architectural Decisions
            </p>
            <h2
              id="architectural-decisions-heading"
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Choices that shaped the build
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:gap-5">
          {decisions.map((decision, idx) => (
            <Card
              key={idx}
              className="border-border/50 bg-card/60 backdrop-blur-sm hover:border-mint/30 transition-colors"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-mint/80 mt-1 shrink-0 w-8">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                      {decision.title}
                    </h3>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-mint/80 mb-1">
                          Decision
                        </p>
                        <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                          {decision.decision}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-mint/80 mb-1">
                          Rationale
                        </p>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {decision.rationale}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
