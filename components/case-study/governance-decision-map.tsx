const decisions = [
  {
    code: "01",
    title: "Business need",
    detail: "What must change?",
  },
  {
    code: "02",
    title: "Extension type",
    detail: "In-app or side-by-side",
  },
  {
    code: "03",
    title: "BTP pattern",
    detail: "Service + integration fit",
  },
  {
    code: "04",
    title: "Clean Core check",
    detail: "Upgrade-safe boundary",
  },
] as const

export function GovernanceDecisionMap() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/35 p-5 sm:p-6 lg:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.14)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />

      <div className="relative">
        <div className="flex flex-col gap-2 border-b border-border/60 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-primary">
              Extensibility decision path
            </p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              From business need to Clean Core-aligned pattern
            </h3>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            SAP BTP governance
          </p>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-4 lg:gap-0">
          {decisions.map((decision, index) => (
            <div key={decision.code} className="relative lg:px-2">
              {index < decisions.length - 1 ? (
                <div className="absolute left-[calc(100%-0.2rem)] top-10 hidden h-px w-4 bg-brand-primary/55 lg:block" aria-hidden="true" />
              ) : null}
              <div className="h-full rounded-xl border border-border/70 bg-background/85 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] text-brand-primary">{decision.code}</span>
                  <span className="size-1.5 rounded-full bg-brand-primary/70" aria-hidden="true" />
                </div>
                <p className="mt-5 font-semibold text-foreground">{decision.title}</p>
                <p className="mt-2 font-mono text-[11px] leading-5 text-muted-foreground">
                  {decision.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 border-t border-border/60 pt-5 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-primary">IN-APP</p>
            <p className="mt-2 text-sm text-muted-foreground">Use when the requirement fits supported S/4HANA extension points.</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-primary">SIDE-BY-SIDE</p>
            <p className="mt-2 text-sm text-muted-foreground">Use SAP BTP when decoupling, independent lifecycle, or broader services are needed.</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-primary">STANDARD</p>
            <p className="mt-2 text-sm text-muted-foreground">Document the decision criteria so teams can apply the same reasoning consistently.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
