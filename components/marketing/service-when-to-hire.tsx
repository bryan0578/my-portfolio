interface ServiceWhenToHireProps {
  items: string[]
}

export function ServiceWhenToHire({ items }: ServiceWhenToHireProps) {
  return (
    <section className="px-6 py-12 md:py-16 border-y border-border/50" aria-labelledby="when-to-hire-heading">
      <div className="max-w-3xl mx-auto">
        <h2 id="when-to-hire-heading" className="text-xl md:text-2xl font-bold text-foreground mb-6">
          When to Hire for This Service
        </h2>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#00FFC2]" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
