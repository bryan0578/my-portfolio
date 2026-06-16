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
          <p className="text-sm uppercase tracking-widest text-brand-primary mb-4 font-semibold">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
          {h1}
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
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
