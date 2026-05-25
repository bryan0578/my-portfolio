import { Scale, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Tradeoff } from "@/lib/case-studies/types"

interface KeyTradeoffsProps {
  tradeoffs: Tradeoff[]
}

export function KeyTradeoffs({ tradeoffs }: KeyTradeoffsProps) {
  if (!tradeoffs?.length) return null

  return (
    <section
      className="px-6 py-20"
      aria-labelledby="key-tradeoffs-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 flex items-start gap-4">
          <div className="size-12 rounded-xl bg-mint/10 border border-mint/20 flex items-center justify-center shrink-0">
            <Scale className="size-5 text-mint" aria-hidden />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-mint mb-2">
              Key Tradeoffs
            </p>
            <h2
              id="key-tradeoffs-heading"
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              What was chosen, and against what
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:gap-5">
          {tradeoffs.map((tradeoff, idx) => (
            <Card
              key={idx}
              className="border-border/50 bg-card/60 backdrop-blur-sm"
            >
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-5">
                  {tradeoff.title}
                </h3>

                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-5 items-stretch mb-5">
                  <div className="rounded-xl border border-mint/30 bg-mint/5 p-4">
                    <p className="text-xs uppercase tracking-wider text-mint/80 mb-2">
                      Chose
                    </p>
                    <p className="text-sm md:text-base text-foreground font-medium leading-relaxed">
                      {tradeoff.chose}
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-muted-foreground">
                    <ArrowRight
                      className="size-5 hidden md:block rotate-180"
                      aria-hidden
                    />
                    <span className="md:hidden text-xs uppercase tracking-wider">
                      over
                    </span>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-muted/20 p-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Instead of
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {tradeoff.insteadOf}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <p className="text-xs uppercase tracking-wider text-mint/80 mb-2">
                    Reasoning
                  </p>
                  <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
                    {tradeoff.reasoning}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
