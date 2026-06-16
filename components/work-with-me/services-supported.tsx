import Link from "next/link"
import { ArrowRight, Layers } from "lucide-react"
import type { SupportedService } from "@/lib/marketing/work-with-me-content"

interface ServicesSupportedProps {
  headline: string
  subheading: string
  services: SupportedService[]
}

export function ServicesSupported({
  headline,
  subheading,
  services,
}: ServicesSupportedProps) {
  return (
    <section
      className="px-6 py-16 md:py-20"
      aria-labelledby="services-supported-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 flex items-start gap-4">
          <div className="size-12 rounded-xl bg-brand-soft border border-brand-primary/20 flex items-center justify-center shrink-0">
            <Layers className="size-5 text-brand-primary" aria-hidden />
          </div>
          <div>
            <h2
              id="services-supported-heading"
              className="text-2xl md:text-3xl font-bold text-foreground mb-2"
            >
              {headline}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              {subheading}
            </p>
          </div>
        </div>

        <ul className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="group block h-full rounded-xl border border-border/50 bg-card/40 p-5 hover:border-brand-primary/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <ArrowRight
                    className="size-4 text-muted-foreground group-hover:text-brand-primary mt-0.5 shrink-0 transition-colors"
                    aria-hidden
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-muted-foreground text-center">
          Looking for the full overview?{" "}
          <Link
            href="/services"
            className="text-brand-primary hover:underline font-medium"
          >
            View all services
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
