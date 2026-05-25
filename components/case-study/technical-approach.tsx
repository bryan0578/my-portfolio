import { Wrench, CheckCircle2 } from "lucide-react"
import type { TechnicalApproach as TechnicalApproachData } from "@/lib/case-studies/types"

interface TechnicalApproachProps {
  data: TechnicalApproachData
}

export function TechnicalApproach({ data }: TechnicalApproachProps) {
  return (
    <section
      className="px-6 py-20"
      aria-labelledby="technical-approach-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/3 md:sticky md:top-32">
            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-mint/10 border border-mint/20 mb-6">
              <Wrench className="size-7 text-mint" aria-hidden />
            </div>
            <p className="text-sm uppercase tracking-widest text-mint mb-3">
              Technical Approach
            </p>
            <h2
              id="technical-approach-heading"
              className="text-3xl font-bold text-foreground mb-4 leading-tight"
            >
              {data.headline}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {data.summary}
            </p>
          </div>

          <div className="md:w-2/3 grid gap-4">
            {data.points.map((point, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-card/50 border border-border/60 hover:border-mint/30 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="mt-1 text-mint shrink-0">
                    <CheckCircle2 className="size-5" aria-hidden />
                  </div>
                  <p className="text-base md:text-lg text-foreground/90 leading-snug">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
