"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ImpactResultsProps {
  metrics: { label: string; value: string }[]
  impact: string
  showBackLink?: boolean
}

function metricValueClass(value: string) {
  if (value.length <= 8) {
    return "text-4xl md:text-5xl"
  }

  if (value.length <= 18) {
    return "text-3xl md:text-4xl"
  }

  return "text-xl sm:text-2xl md:text-3xl leading-tight"
}

export function ImpactResults({
  metrics,
  impact,
  showBackLink = true,
}: ImpactResultsProps) {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 md:mb-12">
          <p className="text-label uppercase tracking-wide text-brand-primary mb-3 font-semibold-plus">
            Outcomes
          </p>
          <h2 className="text-h3 font-heading text-foreground">
            Proof in production
          </h2>
        </div>

        <Card className="border-mint/30 bg-mint/5 backdrop-blur-sm mb-6 md:mb-8 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-mint/10 to-transparent pointer-events-none" />
          <CardContent className="p-6 md:p-8 relative">
            <div className="flex items-start gap-4">
              <div className="size-11 md:size-12 rounded-full bg-mint/20 flex items-center justify-center shrink-0">
                <TrendingUp className="size-5 md:size-6 text-mint" />
              </div>
              <div className="min-w-0">
                <p className="text-caption uppercase tracking-wide text-muted-foreground mb-2">
                  Key outcome
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-foreground text-pretty">
                  {impact}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4 mb-10 md:mb-12">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              variant="surface"
              className="hover:border-brand-primary/30 transition-colors"
            >
              <CardContent className="flex min-h-36 h-full flex-col justify-center p-5 text-left sm:min-h-40 md:p-6 md:text-center">
                <p
                  className={`${metricValueClass(metric.value)} font-bold text-foreground font-mono break-words text-balance`}
                >
                  {metric.value}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider leading-relaxed">
                  {metric.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {showBackLink ? (
          <div className="flex justify-center">
            <Button
              variant="outline"
              asChild
              className="group border-border/50 hover:border-mint/30 hover:bg-mint/5"
            >
              <Link href="/projects">
                <ArrowLeft className="size-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to all case studies
              </Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
