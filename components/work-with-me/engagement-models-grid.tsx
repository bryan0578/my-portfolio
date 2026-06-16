import Link from "next/link"
import { Briefcase, CheckCircle2, ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { buildMailtoHref } from "@/lib/contact"
import type { WorkEngagementModel } from "@/lib/marketing/work-with-me-content"

interface EngagementModelsGridProps {
  headline: string
  subheading: string
  models: WorkEngagementModel[]
}

export function EngagementModelsGrid({
  headline,
  subheading,
  models,
}: EngagementModelsGridProps) {
  return (
    <section
      className="px-6 py-16 md:py-20 bg-surface-canvas"
      aria-labelledby="engagement-models-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 flex items-start gap-4">
          <div className="size-12 rounded-xl bg-brand-soft border border-brand-primary/20 flex items-center justify-center shrink-0">
            <Briefcase className="size-5 text-brand-primary" aria-hidden />
          </div>
          <div>
            <h2
              id="engagement-models-heading"
              className="text-2xl md:text-3xl font-bold text-foreground mb-2"
            >
              {headline}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              {subheading}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {models.map((model) => {
            const mailtoHref = buildMailtoHref(model.ctaSubject)

            return (
              <article
                key={model.id}
                id={model.id}
                className="flex flex-col rounded-2xl border border-border/50 bg-card/40 p-6 md:p-7 hover:border-brand-primary/30 transition-colors scroll-mt-24"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {model.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {model.description}
                </p>

                <div className="mb-5 rounded-lg border border-brand-primary/20 bg-brand-soft px-4 py-3">
                  <p className="text-xs uppercase tracking-wider text-brand-primary mb-1 font-semibold">
                    Best fit
                  </p>
                  <p className="text-sm text-foreground/90 leading-snug">
                    {model.bestFor}
                  </p>
                </div>

                <div className="mb-5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                    Typical outcomes
                  </p>
                  <ul className="space-y-2">
                    {model.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2 items-start">
                        <CheckCircle2
                          className="size-4 text-brand-primary mt-0.5 shrink-0"
                          aria-hidden
                        />
                        <span className="text-sm text-foreground/85 leading-snug">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                    Relevant services
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {model.relevantServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="inline-flex items-center rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground hover:text-brand-primary hover:border-brand-primary/40 transition-colors"
                      >
                        {service.label}
                        <ArrowRight className="ml-1 size-3" aria-hidden />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="bg-brand-primary text-text-inverse hover:bg-brand-secondary font-semibold"
                  >
                    <a href={mailtoHref}>
                      <Mail className="mr-1.5 size-3.5" aria-hidden />
                      Discuss this model
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="ghost">
                    <Link href="/contact">
                      Contact
                      <ArrowRight className="ml-1 size-3.5" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
