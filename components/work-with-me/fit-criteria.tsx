import { Check, X } from "lucide-react"

interface FitCriteriaProps {
  goodFit: {
    headline: string
    items: string[]
  }
  notFit: {
    headline: string
    items: string[]
  }
}

export function FitCriteria({ goodFit, notFit }: FitCriteriaProps) {
  return (
    <section
      className="px-6 py-16 md:py-20"
      aria-labelledby="fit-criteria-heading"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="fit-criteria-heading"
          className="sr-only"
        >
          Engagement Fit Criteria
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-primary/30 bg-brand-soft p-6 md:p-8">
            <h3 className="text-base font-semibold uppercase tracking-wider text-brand-primary mb-5 flex items-center gap-2">
              <Check className="size-4" aria-hidden />
              {goodFit.headline}
            </h3>
            <ul className="space-y-3">
              {goodFit.items.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span
                    className="mt-2 inline-block size-1.5 rounded-full bg-brand-primary shrink-0"
                    aria-hidden
                  />
                  <span className="text-base text-foreground/90 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card/30 p-6 md:p-8">
            <h3 className="text-base font-semibold uppercase tracking-wider text-muted-foreground mb-5 flex items-center gap-2">
              <X className="size-4" aria-hidden />
              {notFit.headline}
            </h3>
            <ul className="space-y-3">
              {notFit.items.map((item) => (
                <li key={item} className="flex gap-3 items-start">
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
          </div>
        </div>
      </div>
    </section>
  )
}
