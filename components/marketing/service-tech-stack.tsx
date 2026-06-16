import type { TechStackGroup } from "@/lib/marketing/types"
import { Badge } from "@/components/ui/badge"

interface ServiceTechStackProps {
  groups: TechStackGroup[]
}

export function ServiceTechStack({ groups }: ServiceTechStackProps) {
  return (
    <section className="px-6 py-16 md:py-20 bg-[#050505]" aria-labelledby="tech-stack-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="tech-stack-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
          Technology Stack
        </h2>
        <div className="space-y-8">
          {groups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="bg-zinc-900/80 text-foreground/90 border-zinc-700 font-normal"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
