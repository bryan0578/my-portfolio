"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ImpactResultsProps {
  metrics: { label: string; value: string }[]
  impact: string
}

export function ImpactResults({ metrics, impact }: ImpactResultsProps) {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-mint mb-3">
            Measurable Outcomes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Results
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
                <p className="text-sm uppercase tracking-wider text-mint/70 mb-2">
                  Key Impact
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
              className="border-border/50 bg-card/50 backdrop-blur-sm text-center hover:border-mint/20 transition-colors"
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
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            asChild
            className="group border-border/50 hover:border-mint/30 hover:bg-mint/5"
          >
            <Link href="/projects">
              <ArrowLeft className="size-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
