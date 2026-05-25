import { FileText } from "lucide-react"

interface ExecutiveSummaryProps {
  summary: string
}

export function ExecutiveSummary({ summary }: ExecutiveSummaryProps) {
  return (
    <section
      className="px-6 py-16 md:py-20 border-t border-border/40"
      aria-labelledby="executive-summary-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:gap-10 md:items-start">
          <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-4 md:w-56 shrink-0">
            <div className="size-12 rounded-xl bg-mint/10 border border-mint/20 flex items-center justify-center">
              <FileText className="size-5 text-mint" aria-hidden />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-mint mb-1">
                For Decision-Makers
              </p>
              <h2
                id="executive-summary-heading"
                className="text-2xl md:text-3xl font-bold text-foreground leading-tight"
              >
                Executive Summary
              </h2>
            </div>
          </div>
          <p className="text-lg leading-relaxed text-foreground/90 text-pretty md:flex-1">
            {summary}
          </p>
        </div>
      </div>
    </section>
  )
}
