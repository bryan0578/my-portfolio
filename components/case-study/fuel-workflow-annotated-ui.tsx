const callouts = [
  {
    code: "01",
    title: "Structured entry",
    text: "Fuel and vendor fields are organized around the business workflow instead of free-form capture.",
  },
  {
    code: "02",
    title: "Validation boundary",
    text: "Client-side rules surface invalid values before the record reaches backend processing.",
  },
  {
    code: "03",
    title: "OData handoff",
    text: "Validated form state is submitted through an OData service for downstream processing.",
  },
  {
    code: "04",
    title: "Workflow outcome",
    text: "The interface supports more consistent invoice data before vendor-payment processing continues.",
  },
] as const

export function FuelWorkflowAnnotatedUi() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-7 max-w-3xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
          Annotated interface proof
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          How the workflow moved through the interface.
        </h2>
        <p className="mt-4 leading-7 text-muted-foreground">
          Generalized reconstruction based on the documented project workflow. It illustrates the interaction model without presenting client UI or confidential implementation details.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/35 p-4 sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.14)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.10)_1px,transparent_1px)] bg-[size:38px_38px] [mask-image:linear-gradient(to_bottom,black,transparent_94%)]" />

          <div className="relative overflow-hidden rounded-xl border border-border/70 bg-background/85">
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-3 sm:px-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-primary">
                  Fuel invoice workflow / generalized
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">Vendor fuel entry</p>
              </div>
              <span className="rounded-full border border-brand-primary/35 px-2.5 py-1 font-mono text-[10px] text-brand-primary">
                DRAFT
              </span>
            </div>

            <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
              <Field label="Vendor" value="Selected vendor" marker="01" />
              <Field label="Invoice date" value="MM / DD / YYYY" />
              <Field label="Fuel quantity" value="12,500 gal" marker="02" state="error" />
              <Field label="Contract / location" value="Assigned account" />
            </div>

            <div className="border-t border-border/60 px-4 py-4 sm:px-5">
              <div className="rounded-lg border border-brand-primary/35 bg-brand-primary/[0.06] px-4 py-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-primary">Validation</p>
                    <p className="mt-1 text-sm text-foreground">Quantity must satisfy the applicable business rule before submission.</p>
                  </div>
                  <span className="font-mono text-[10px] text-brand-primary">02</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-border/60 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-brand-primary" />
                OData service handoff
                <span className="text-brand-primary">03</span>
              </div>
              <div className="flex gap-2">
                <button type="button" disabled className="rounded-md border border-border px-3 py-2 text-xs text-muted-foreground">
                  Save draft
                </button>
                <button type="button" disabled className="rounded-md bg-brand-primary px-3 py-2 text-xs font-semibold text-black">
                  Validate & submit
                </button>
              </div>
            </div>
          </div>

          <div className="relative mt-4 flex items-center gap-3 rounded-lg border border-border/60 bg-background/65 px-4 py-3">
            <span className="font-mono text-[10px] text-brand-primary">04</span>
            <p className="text-sm text-muted-foreground">
              Structured, validated data continues into backend invoice-processing workflows.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {callouts.map((item) => (
            <article key={item.code} className="rounded-xl border border-border/70 bg-card/30 p-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-brand-primary">{item.code}</span>
                <div className="h-px flex-1 bg-border/70" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  marker,
  state,
}: {
  label: string
  value: string
  marker?: string
  state?: "error"
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </label>
        {marker ? <span className="font-mono text-[10px] text-brand-primary">{marker}</span> : null}
      </div>
      <div
        className={`rounded-md border px-3 py-3 text-sm ${
          state === "error"
            ? "border-brand-primary/45 bg-brand-primary/[0.05] text-foreground"
            : "border-border/70 bg-background text-muted-foreground"
        }`}
      >
        {value}
      </div>
    </div>
  )
}
