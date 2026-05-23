import type { EngagementModel } from "@/lib/marketing/types"

interface ServiceEngagementModelsProps {
  models: EngagementModel[]
}

export function ServiceEngagementModels({ models }: ServiceEngagementModelsProps) {
  return (
    <section className="px-6 py-16 md:py-20" aria-labelledby="engagement-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="engagement-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">
          How We Can Work Together
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Engagement models aligned to how enterprise programs actually run.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {models.map((model) => (
            <div
              key={model.title}
              className="flex flex-col rounded-xl border border-border/50 bg-card/30 p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {model.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {model.description}
              </p>
              <p className="text-xs font-medium text-[#00FFC2] uppercase tracking-wide">
                Best for
              </p>
              <p className="text-sm text-foreground/80 mt-1">{model.bestFor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
