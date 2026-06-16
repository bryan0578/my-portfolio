import { Workflow } from "lucide-react"
import type { ProcessStep } from "@/lib/marketing/work-with-me-content"

interface EngagementProcessProps {
  headline: string
  subheading: string
  steps: ProcessStep[]
}

export function EngagementProcess({
  headline,
  subheading,
  steps,
}: EngagementProcessProps) {
  return (
    <section
      className="px-6 py-16 md:py-20 bg-surface-canvas"
      aria-labelledby="engagement-process-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 flex items-start gap-4">
          <div className="size-12 rounded-xl bg-brand-soft border border-brand-primary/20 flex items-center justify-center shrink-0">
            <Workflow className="size-5 text-brand-primary" aria-hidden />
          </div>
          <div>
            <h2
              id="engagement-process-heading"
              className="text-2xl md:text-3xl font-bold text-foreground mb-2"
            >
              {headline}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              {subheading}
            </p>
          </div>
        </div>

        <ol className="relative space-y-6">
          <div
            className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-brand-primary/40 via-border to-transparent hidden md:block"
            aria-hidden
          />
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative flex gap-5 md:gap-6 items-start"
            >
              <div className="relative z-10 shrink-0">
                <div className="size-12 rounded-full bg-background border-2 border-brand-primary/30 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(0,255,194,0.25)]">
                  <span className="font-mono text-sm text-brand-primary">
                    {step.number}
                  </span>
                </div>
              </div>
              <div className="flex-1 rounded-xl border border-border/50 bg-card/40 p-5 md:p-6 hover:border-brand-primary/30 transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
