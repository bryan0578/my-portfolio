const proofPoints = [
  {
    value: "9 years",
    label: "Enterprise software delivery",
  },
  {
    value: "28 apps",
    label: "SAPUI5 reporting + onboarding applications delivered",
  },
  {
    value: "SAP BTP",
    label: "Technical leadership, architecture, and delivery",
  },
  {
    value: "React / Next.js",
    label: "Production product engineering",
  },
] as const

export function HomePositioningStrip() {
  return (
    <section
      aria-label="Professional proof"
      className="border-b border-border/50 bg-surface-canvas px-5 py-8 sm:px-6 md:py-10"
    >
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-xl border border-border/50 bg-border/50 sm:grid-cols-2 lg:grid-cols-4">
        {proofPoints.map((point) => (
          <div key={point.value} className="bg-background/80 px-5 py-5 sm:px-6">
            <p className="font-mono text-sm font-medium text-brand-primary">{point.value}</p>
            <p className="mt-2 text-sm leading-6 text-foreground/75">{point.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
