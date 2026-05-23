interface FaqItem {
  question: string
  answer: string
}

interface BlogFaqProps {
  title?: string
  items: FaqItem[]
}

export function BlogFaq({
  title = "Frequently Asked Questions",
  items,
}: BlogFaqProps) {
  return (
    <section className="not-prose my-16" aria-labelledby="blog-faq-heading">
      <h2
        id="blog-faq-heading"
        className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-8"
      >
        {title}
      </h2>
      <div className="space-y-8">
        {items.map((item) => (
          <div
            key={item.question}
            className="border-b border-border/50 pb-8 last:border-0"
          >
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
              {item.question}
            </h3>
            <p className="text-base md:text-lg text-foreground/70 leading-8">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
