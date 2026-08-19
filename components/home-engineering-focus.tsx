const focusAreas = [
  {
    code: "BTP",
    title: "SAP BTP architecture & delivery",
    description:
      "Application architecture, CAP services, Build Work Zone, identity integration, extensibility decisions, and production delivery.",
  },
  {
    code: "UI",
    title: "SAPUI5 & Fiori application engineering",
    description:
      "Enterprise interfaces built around real workflows, clear interaction patterns, maintainability, and adoption.",
  },
  {
    code: "INT",
    title: "Integration leadership",
    description:
      "Turning cross-team dependencies, APIs, OData services, requirements, and delivery constraints into executable technical plans.",
  },
  {
    code: "WEB",
    title: "Modern frontend engineering",
    description:
      "React and Next.js product work that extends my enterprise experience into production web applications and owned products.",
  },
] as const

export function HomeEngineeringFocus() {
  return (
    <section className="border-y border-border/50 bg-background px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="max-w-md">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
            Engineering focus
          </p>
          <h2 className="mt-3 text-3xl font-bold text-balance sm:text-4xl">
            Senior engineering across the application lifecycle.
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            My strongest work sits where architecture, enterprise UX, integration, and hands-on implementation meet.
          </p>
        </div>

        <div className="divide-y divide-border/60 border-y border-border/60">
          {focusAreas.map((area) => (
            <div key={area.code} className="grid gap-3 py-5 sm:grid-cols-[4rem_1fr] sm:gap-5 sm:py-6">
              <p className="font-mono text-xs font-medium text-brand-primary">{area.code}</p>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{area.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
