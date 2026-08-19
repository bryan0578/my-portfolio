const stages = [
  {
    code: "01",
    label: "Clarify",
    detail: "Requirements · constraints",
  },
  {
    code: "02",
    label: "Architect",
    detail: "Platform · data · identity",
  },
  {
    code: "03",
    label: "Build",
    detail: "UI · services · workflows",
  },
  {
    code: "04",
    label: "Integrate",
    detail: "OData · APIs · dependencies",
  },
  {
    code: "05",
    label: "Release",
    detail: "Validate · ship · support",
  },
] as const

export function EngineeringLifecycleMap() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/35 p-5 sm:p-6 lg:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.16)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.12)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />

      <div className="relative">
        <div className="flex items-center justify-between gap-6 border-b border-border/60 pb-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-primary">
              Delivery system / 01–05
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Architecture stays connected to implementation through release.
            </p>
          </div>
          <p className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:block">
            Enterprise application lifecycle
          </p>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-5 lg:gap-0">
          {stages.map((stage, index) => (
            <div key={stage.code} className="relative lg:px-2">
              {index < stages.length - 1 ? (
                <div className="absolute left-[calc(100%-0.2rem)] top-8 hidden h-px w-4 bg-brand-primary/55 lg:block" aria-hidden="true" />
              ) : null}
              <div className="group h-full rounded-xl border border-border/70 bg-background/80 p-4 transition-colors hover:border-brand-primary/45">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] text-brand-primary">{stage.code}</span>
                  <span className="size-1.5 rounded-full bg-brand-primary/70" aria-hidden="true" />
                </div>
                <p className="mt-5 text-base font-semibold text-foreground">{stage.label}</p>
                <p className="mt-2 font-mono text-[11px] leading-5 text-muted-foreground">
                  {stage.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
