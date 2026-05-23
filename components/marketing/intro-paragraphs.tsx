interface IntroParagraphsProps {
  paragraphs: string[]
}

export function IntroParagraphs({ paragraphs }: IntroParagraphsProps) {
  return (
    <section className="px-6 pb-12 md:pb-16">
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
