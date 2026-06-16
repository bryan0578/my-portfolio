import { cn } from "@/lib/utils"

interface IntroParagraphsProps {
  paragraphs: string[]
  className?: string
}

export function IntroParagraphs({ paragraphs, className }: IntroParagraphsProps) {
  return (
    <section className={cn("px-6 pb-12 md:pb-16", className)}>
      <div className="max-w-3xl mx-auto space-y-4">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="text-muted-foreground leading-relaxed text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
