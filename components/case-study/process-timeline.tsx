"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Boxes, Code2, Rocket } from "lucide-react"

interface ProcessTimelineProps {
  timeline?: {
    discovery?: string
    architecture?: string
    development?: string
    deployment?: string
  }
}

const steps = [
  {
    key: "discovery" as const,
    title: "Discovery",
    icon: Search,
    number: "01",
  },
  {
    key: "architecture" as const,
    title: "Architecture",
    icon: Boxes,
    number: "02",
  },
  {
    key: "development" as const,
    title: "Development",
    icon: Code2,
    number: "03",
  },
  {
    key: "deployment" as const,
    title: "Deployment",
    icon: Rocket,
    number: "04",
  },
]

export function ProcessTimeline({ timeline }: ProcessTimelineProps) {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-mint mb-3">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Project Lifecycle
          </h2>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-mint/50 via-border to-transparent" />
          
          {/* Steps */}
          <div className="space-y-8">
          {steps
            .filter((step) => timeline?.[step.key])
            .map((step) => {
                const Icon = step.icon
                const content = timeline?.[step.key]

                return (
                <div key={step.key} className="relative flex gap-6 md:gap-8">
                    {/* Step Indicator */}
                    <div className="relative z-10 flex-shrink-0">
                    <div className="size-12 md:size-16 rounded-full bg-background border-2 border-mint/30 flex items-center justify-center shadow-[0_0_20px_-5px] shadow-mint/20">
                        <Icon className="size-5 md:size-6 text-mint" />
                    </div>
                    </div>

                    {/* Step Content */}
                    <Card className="flex-1 border-border/50 bg-card/50 backdrop-blur-sm hover:border-mint/20 transition-colors">
                    <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-mint/70">
                            {step.number}
                        </span>
                        <CardTitle className="text-lg md:text-xl">
                            {step.title}
                        </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-pretty">
                        {content}
                        </p>
                    </CardContent>
                    </Card>
                </div>
                )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
