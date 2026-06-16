import { Badge } from "@/components/ui/badge"

interface CapabilitiesListProps {
  title?: string
  capabilities: string[]
}

export function CapabilitiesList({
  title = "Technologies & Capabilities",
  capabilities,
}: CapabilitiesListProps) {
  return (
    <section className="px-6 py-12 md:py-16 bg-[#050505]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {capabilities.map((cap) => (
            <Badge
              key={cap}
              variant="outline"
              className="bg-brand-primary/5 text-brand-primary/90 border-brand-primary/20 font-medium"
            >
              {cap}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
