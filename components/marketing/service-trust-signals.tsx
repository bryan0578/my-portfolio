interface ServiceTrustSignalsProps {
  signals: string[]
}

export function ServiceTrustSignals({ signals }: ServiceTrustSignalsProps) {
  return (
    <section className="px-6 py-10" aria-label="Experience highlights">
      <div className="max-w-5xl mx-auto">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signals.map((signal) => (
            <li
              key={signal}
              className="rounded-lg border border-[#00FFC2]/15 bg-[#00FFC2]/5 px-4 py-3 text-sm text-foreground/90 leading-snug text-center"
            >
              {signal}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
