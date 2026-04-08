import { Badge } from "@/components/ui/badge"

interface CaseStudyHeroProps {
  title: string
  stack: string[]
  summary: string
}

export function CaseStudyHero({ title, stack, summary }: CaseStudyHeroProps) {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map((tech) => (
            <Badge 
              key={tech}
              variant="outline"
              className="bg-mint/10 text-mint border-mint/30 font-medium"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-pretty leading-tight">
          {title}
        </h1>
        
        {/* Summary */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl">
          {summary}
        </p>
        
        {/* Decorative Line */}
        <div className="mt-12 h-px bg-gradient-to-r from-mint/50 via-border to-transparent" />
      </div>
    </section>
  )
}
