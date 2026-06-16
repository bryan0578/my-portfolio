import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FaqItem } from "@/lib/marketing/types"
import { cn } from "@/lib/utils"

interface FaqSectionProps {
  title?: string
  items: FaqItem[]
  className?: string
}

export function FaqSection({
  title = "Frequently Asked Questions",
  items,
  className,
}: FaqSectionProps) {
  if (!items.length) return null

  return (
    <section
      className={cn("px-6 py-16 md:py-20 bg-surface-canvas", className)}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          {title}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-base text-left text-foreground hover:text-brand-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
