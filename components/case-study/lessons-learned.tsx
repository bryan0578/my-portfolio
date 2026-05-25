import { Lightbulb } from "lucide-react"

interface LessonsLearnedProps {
  lessons: string[]
}

export function LessonsLearned({ lessons }: LessonsLearnedProps) {
  if (!lessons?.length) return null

  return (
    <section
      className="px-6 py-20 bg-secondary/30"
      aria-labelledby="lessons-learned-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 flex items-start gap-4">
          <div className="size-12 rounded-xl bg-mint/10 border border-mint/20 flex items-center justify-center shrink-0">
            <Lightbulb className="size-5 text-mint" aria-hidden />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-mint mb-2">
              Lessons Learned
            </p>
            <h2
              id="lessons-learned-heading"
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              What generalizes
            </h2>
          </div>
        </div>

        <ol className="space-y-4">
          {lessons.map((lesson, idx) => (
            <li
              key={idx}
              className="flex gap-5 p-5 md:p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-mint/30 transition-colors"
            >
              <span className="font-mono text-sm text-mint shrink-0 w-8 pt-0.5">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                {lesson}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
