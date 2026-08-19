interface ManufacturerArchitectureDiagramProps {
  description?: string
}

const layers = [
  {
    code: "EXP",
    label: "Experience",
    nodes: ["Build Work Zone", "SAPUI5 applications"],
  },
  {
    code: "SRV",
    label: "Application services",
    nodes: ["SAP CAP / Node.js", "OData services"],
  },
  {
    code: "DAT",
    label: "Data",
    nodes: ["SAP HANA", "Enterprise data sources"],
  },
] as const

export function ManufacturerArchitectureDiagram({
  description,
}: ManufacturerArchitectureDiagramProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/30">
      <div className="flex flex-col gap-3 border-b border-border/60 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-primary">
            System topology / SAP BTP
          </p>
          <h3 className="mt-2 text-lg font-semibold text-foreground sm:text-xl">
            Manufacturer portal architecture
          </h3>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Experience → services → data
        </p>
      </div>

      <div className="relative p-5 sm:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.13)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:38px_38px] [mask-image:linear-gradient(to_bottom,black,transparent_94%)]" />

        <div className="relative grid gap-4 lg:grid-cols-[1fr_11rem]">
          <div className="space-y-3">
            {layers.map((layer, index) => (
              <div key={layer.code} className="relative grid gap-3 rounded-xl border border-border/70 bg-background/85 p-4 sm:grid-cols-[6rem_1fr] sm:items-center">
                <div>
                  <p className="font-mono text-[10px] text-brand-primary">{layer.code}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {layer.label}
                  </p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {layer.nodes.map((node) => (
                    <div key={node} className="rounded-lg border border-border/70 bg-card/65 px-4 py-3 font-mono text-xs text-foreground">
                      {node}
                    </div>
                  ))}
                </div>
                {index < layers.length - 1 ? (
                  <div className="absolute -bottom-3 left-8 z-10 h-3 w-px bg-brand-primary/60 sm:left-[7.2rem]" aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>

          <aside className="rounded-xl border border-brand-primary/30 bg-brand-primary/5 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-primary">
              Identity boundary
            </p>
            <div className="mt-5 space-y-2">
              {["Okta", "SAP IAS", "XSUAA"].map((node) => (
                <div key={node} className="rounded-lg border border-brand-primary/25 bg-background/75 px-3 py-3 font-mono text-xs text-foreground">
                  {node}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-muted-foreground">
              Authentication and application access sit across the experience and service layers rather than inside a single UI component.
            </p>
          </aside>
        </div>

        {description ? (
          <p className="relative mt-6 max-w-3xl border-t border-border/60 pt-5 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
