import { Users } from "lucide-react"
import type { ClientPersona } from "@/lib/marketing/work-with-me-content"

interface WhoIWorkWithProps {
  headline: string
  subheading: string
  personas: ClientPersona[]
}

export function WhoIWorkWith({
  headline,
  subheading,
  personas,
}: WhoIWorkWithProps) {
  return (
    <section
      className="px-6 py-16 md:py-20"
      aria-labelledby="who-i-work-with-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 flex items-start gap-4">
          <div className="size-12 rounded-xl bg-brand-soft border border-brand-primary/20 flex items-center justify-center shrink-0">
            <Users className="size-5 text-brand-primary" aria-hidden />
          </div>
          <div>
            <h2
              id="who-i-work-with-heading"
              className="text-2xl md:text-3xl font-bold text-foreground mb-2"
            >
              {headline}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              {subheading}
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {personas.map((persona) => (
            <article
              key={persona.title}
              className="rounded-xl border border-border/50 bg-card/40 p-6 hover:border-brand-primary/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {persona.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {persona.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
