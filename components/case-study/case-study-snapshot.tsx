type SnapshotMetric = {
  label: string
  value: string
}

type CaseStudySnapshotProps = {
  focus: string[]
  challenge: string
  contribution: string
  outcome: string
  metrics: SnapshotMetric[]
}

export function CaseStudySnapshot({
  focus,
  challenge,
  contribution,
  outcome,
  metrics,
}: CaseStudySnapshotProps) {
  return (
    <section className="px-4 pb-16 sm:px-6 md:pb-20" aria-labelledby="case-study-snapshot-heading">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
          Recruiter snapshot
        </p>
        <h2 id="case-study-snapshot-heading" className="mt-3 max-w-3xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          The project in about ten seconds.
        </h2>

        <div className="mt-6 grid overflow-hidden rounded-xl border border-border/60 bg-card/20 lg:grid-cols-2">
          <div className="border-b border-border/50 p-6 lg:border-b-0 lg:border-r lg:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-primary">Focus</p>
            <p className="mt-3 text-lg font-semibold text-foreground">{focus.join(" · ")}</p>

            <div className="mt-7 border-t border-border/50 pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Challenge</p>
              <p className="mt-3 leading-7 text-muted-foreground">{challenge}</p>
            </div>
          </div>

          <div className="p-6 lg:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-primary">My contribution</p>
            <p className="mt-3 leading-7 text-foreground/90">{contribution}</p>

            <div className="mt-7 border-t border-border/50 pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Outcome</p>
              <p className="mt-3 text-lg font-semibold text-foreground">{outcome}</p>
            </div>
          </div>
        </div>

        {metrics.length > 0 ? (
          <dl className="grid overflow-hidden rounded-b-xl border-x border-b border-border/60 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.slice(0, 3).map((metric, index) => (
              <div
                key={`${metric.label}-${metric.value}`}
                className={`p-5 ${index > 0 ? "border-t border-border/50 sm:border-t-0 sm:border-l" : ""} ${index === 2 ? "sm:col-span-2 sm:border-l-0 sm:border-t lg:col-span-1 lg:border-l lg:border-t-0" : ""}`}
              >
                <dt className="text-xs leading-5 text-muted-foreground">{metric.label}</dt>
                <dd className="mt-2 font-mono text-sm font-medium text-brand-primary">{metric.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  )
}
