import { EngineeringLifecycleMap } from "@/components/engineering-lifecycle-map"

const focusAreas = [
  {
    code: "BTP",
    title: "Architecture",
    detail: "CAP · Work Zone · identity · extensibility",
  },
  {
    code: "UI",
    title: "Enterprise UX",
    detail: "SAPUI5 · Fiori · workflow design",
  },
  {
    code: "INT",
    title: "Integration",
    detail: "OData · APIs · cross-team dependencies",
  },
  {
    code: "WEB",
    title: "Product engineering",
    detail: "React · Next.js · production applications",
  },
] as const

export function HomeEngineeringFocus() {
  return (
    <section className="border-y border-border/50 bg-background px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-14">
          <div className="max-w-md">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
              Engineering focus
            </p>
            <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
              Architecture that stays connected to the work.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:pb-1 lg:text-lg lg:leading-8">
            I work across the application lifecycle instead of treating architecture, UI, integration, and release as separate conversations.
          </p>
        </div>

        <div className="mt-10">
          <EngineeringLifecycleMap />
        </div>

        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <div key={area.code} className="bg-background px-5 py-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-brand-primary">{area.code}</span>
                <span className="h-px flex-1 bg-border/70" aria-hidden="true" />
              </div>
              <p className="mt-4 text-sm font-semibold text-foreground">{area.title}</p>
              <p className="mt-2 font-mono text-[11px] leading-5 text-muted-foreground">
                {area.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
