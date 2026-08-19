interface CaseStudyHeroProps {
  title: string
  stack: string[]
  summary: string
  eyebrow?: string
}

export function CaseStudyHero({ title, stack, summary, eyebrow }: CaseStudyHeroProps) {
  return (
    <section className="px-4 py-14 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl min-w-0">
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
            Case study{eyebrow ? ` / ${eyebrow}` : ""}
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground text-pretty break-words sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground text-pretty md:text-xl">
            {summary}
          </p>

          <div className="mt-8 border-t border-border/50 pt-5">
            <p className="font-mono text-xs leading-6 text-muted-foreground">
              <span className="mr-3 uppercase tracking-[0.14em] text-brand-primary">Stack</span>
              {stack.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
