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
    <section className="relative px-4 sm:px-6 py-16 sm:py-20 md:py-28 overflow-hidden">
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
          <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center [&>*]:w-full sm:[&>*]:w-auto">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  )
}
