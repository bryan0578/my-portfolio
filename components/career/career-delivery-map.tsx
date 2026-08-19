const stages = [
  { code: "01", label: "Clarify", detail: "Requirements" },
  { code: "02", label: "Architect", detail: "Platform + data" },
  { code: "03", label: "Build", detail: "UI + services" },
  { code: "04", label: "Unblock", detail: "Dependencies" },
  { code: "05", label: "Validate", detail: "Test + release" },
] as const

export function CareerDeliveryMap() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/70 bg-card/30 p-4 sm:p-5">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.12)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
      <div className="relative grid gap-3 sm:grid-cols-5 sm:gap-0">
        {stages.map((stage, index) => (
          <div key={stage.code} className="relative sm:px-2">
            {index < stages.length - 1 ? (
              <div className="absolute left-[calc(100%-0.2rem)] top-7 hidden h-px w-4 bg-brand-primary/45 sm:block" aria-hidden="true" />
            ) : null}
            <div className="h-full rounded-lg border border-border/60 bg-background/85 p-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] text-brand-primary">{stage.code}</span>
                <span className="size-1.5 rounded-full bg-brand-primary/65" aria-hidden="true" />
              </div>
              <p className="mt-3 text-sm font-semibold text-foreground">{stage.label}</p>
              <p className="mt-1.5 font-mono text-[10px] text-muted-foreground">{stage.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
