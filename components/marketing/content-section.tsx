import type { ContentSection } from "@/lib/marketing/types"

interface ContentSectionsProps {
  sections: ContentSection[]
}

export function ContentSections({ sections }: ContentSectionsProps) {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section key={section.title} id={section.id} className="px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {section.bullets?.length ? (
              <ul className="mt-6 space-y-3">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-[#00FFC2]"
                      aria-hidden
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}
    </div>
  )
}
