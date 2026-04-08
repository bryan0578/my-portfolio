"use client"

import { useEffect, useState, useRef } from "react"

const metrics = [
  {
    value: 20,
    suffix: "+",
    label: "Product Demos",
    description: "Led demonstrations across Fortune 500 clients",
  },
  {
    value: 30,
    suffix: "%",
    label: "Increase in Engagement",
    description: "Average user adoption improvement",
  },
  {
    value: 25,
    suffix: "+",
    label: "Custom Fiori Apps",
    description: "Enterprise applications deployed",
  },
]

function AnimatedCounter({ 
  target, 
  suffix, 
  duration = 2000 
}: { 
  target: number
  suffix: string
  duration?: number 
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  
  useEffect(() => {
    const currentRef = ref.current; // Capture ref to avoid cleanup issues
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if it's already in view or intersecting
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1, // Lower threshold is more reliable in Chrome
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before it hits the viewport
      }
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrame: number;
    const startTime = performance.now(); // Use performance.now() for better precision in Chrome

    const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const nextCount = Math.floor(easeOutQuart * target);
        
        // Only update state if the value actually changed to save re-renders
        setCount((prev) => (prev !== nextCount ? nextCount : prev));

        if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
        }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function MetricsSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[#00FFC2] mb-3 font-semibold">
            Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            By the Numbers
          </h2>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              {/* Large Number */}
              <div className="mb-4">
                <span className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground tabular-nums">
                  <AnimatedCounter target={metric.value} suffix={metric.suffix} />
                </span>
              </div>
              
              {/* Label */}
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {metric.label}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                {metric.description}
              </p>
              
              {/* Decorative line */}
              <div className="mt-6 mx-auto w-12 h-px bg-border group-hover:w-24 group-hover:bg-foreground/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
