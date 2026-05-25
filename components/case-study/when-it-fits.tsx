import { Target, Check, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { WhenItFits as WhenItFitsData } from "@/lib/case-studies/types"

interface WhenItFitsProps {
  data: WhenItFitsData
}

export function WhenItFits({ data }: WhenItFitsProps) {
  if (!data?.fitsWhen?.length) return null

  const hasAvoid = Boolean(data.avoidWhen?.length)

  return (
    <section
      className="px-6 py-20"
      aria-labelledby="when-it-fits-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 flex items-start gap-4">
          <div className="size-12 rounded-xl bg-mint/10 border border-mint/20 flex items-center justify-center shrink-0">
            <Target className="size-5 text-mint" aria-hidden />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-mint mb-2">
              When This Approach Makes Sense
            </p>
            <h2
              id="when-it-fits-heading"
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Is this a fit for your program?
            </h2>
          </div>
        </div>

        <div className={`grid gap-5 ${hasAvoid ? "md:grid-cols-2" : ""}`}>
          <Card className="border-mint/30 bg-mint/5 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-base font-semibold uppercase tracking-wider text-mint mb-5 flex items-center gap-2">
                <Check className="size-4" aria-hidden />
                Strong fit when
              </h3>
              <ul className="space-y-3">
                {data.fitsWhen.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span
                      className="mt-2 inline-block size-1.5 rounded-full bg-mint shrink-0"
                      aria-hidden
                    />
                    <span className="text-base text-foreground/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {hasAvoid ? (
            <Card className="border-border/50 bg-card/40 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-base font-semibold uppercase tracking-wider text-muted-foreground mb-5 flex items-center gap-2">
                  <X className="size-4" aria-hidden />
                  Probably not when
                </h3>
                <ul className="space-y-3">
                  {data.avoidWhen!.map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span
                        className="mt-2 inline-block size-1.5 rounded-full bg-muted-foreground/60 shrink-0"
                        aria-hidden
                      />
                      <span className="text-base text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}
        </div>
      </div>
    </section>
  )
}
