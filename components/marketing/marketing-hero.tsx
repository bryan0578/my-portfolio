import { cn } from "@/lib/utils"
import { sectionEyebrow } from "@/lib/ui/brand-classes"

interface MarketingHeroProps {
  eyebrow?: string
  h1: string
  subtitle: string
  children?: React.ReactNode
}

export function MarketingHero({
  eyebrow,
  h1,
  subtitle,
  children,
}: MarketingHeroProps) {
  return (
    <section className="relative px-6 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-background to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-soft blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {eyebrow ? (
          <p className={cn(sectionEyebrow, "mb-4")}>{eyebrow}</p>
        ) : null}

        <h1 className="text-h1 lg:text-hero font-heading text-foreground mb-6 text-balance">
          {h1}
        </h1>

        <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto leading-body text-pretty">
          {subtitle}
        </p>

        {children ? (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  )
}
