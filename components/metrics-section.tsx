"use client"

import { useEffect, useState, useRef } from "react"
import { SectionHeader } from "@/components/marketing/section-header"

const metrics = [
  {
    value: 20,
    suffix: "+",
    label: "Executive Demos",
    description:
      "Fortune 500 stakeholders aligned on complex SAP and Salesforce programs",
  },
  {
    value: 30,
    suffix: "%",
    label: "Adoption Gains",
    description:
      "Typical user engagement improvement on remediation-focused engagements",
  },
  {
    value: 25,
    suffix: "+",
    label: "Production Apps",
    description:
      "Custom Fiori and enterprise applications shipped to real users",
  },
]

function AnimatedCounter({
  target,
  suffix,
  duration = 2000,
}: {
  target: number
  suffix: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const currentRef = ref.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting ||
          entry.boundingClientRect.top < window.innerHeight
        ) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let animationFrame: number
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const nextCount = Math.floor(easeOutQuart * target)

      setCount((prev) => (prev !== nextCount ? nextCount : prev))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function MetricsSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          className="mb-16"
          eyebrow="Impact"
          title="Outcomes at scale"
          description="Representative results from enterprise SAP, Salesforce, and UI programs—adoption, delivery, and stakeholder alignment."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center group">
              <div className="mb-4">
                <span className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground tabular-nums font-heading">
                  <AnimatedCounter
                    target={metric.value}
                    suffix={metric.suffix}
                  />
                </span>
              </div>

              <h3 className="text-h4 font-heading text-foreground mb-2">
                {metric.label}
              </h3>

              <p className="text-body-sm text-muted-foreground max-w-xs mx-auto leading-body">
                {metric.description}
              </p>

              <div className="mt-6 mx-auto w-12 h-px bg-border group-hover:w-24 group-hover:bg-foreground/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
