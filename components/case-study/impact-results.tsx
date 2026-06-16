"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ImpactResultsProps {
  metrics: { label: string; value: string }[]
  impact: string
  showBackLink?: boolean
}

export function ImpactResults({
  metrics,
  impact,
  showBackLink = true,
}: ImpactResultsProps) {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-label uppercase tracking-wide text-brand-primary mb-3 font-semibold-plus">
            Outcomes
          </p>
          <h2 className="text-h3 font-heading text-foreground">
            Proof in production
          </h2>
        </div>
        
        {/* Impact Card */}
        <Card className="border-mint/30 bg-mint/5 backdrop-blur-sm mb-8 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-mint/10 to-transparent pointer-events-none" />
          <CardContent className="p-8 relative">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-mint/20 flex items-center justify-center shrink-0">
                <TrendingUp className="size-6 text-mint" />
              </div>
              <div>
                <p className="text-caption uppercase tracking-wide text-muted-foreground mb-2">
                  Key outcome
                </p>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  {impact}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              variant="surface"
              className="text-center hover:border-brand-primary/30 transition-colors"
            >
              <CardContent className="p-6">
                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2 font-mono">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {metric.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Back Navigation */}
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
