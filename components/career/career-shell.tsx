"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { AIChatBubble } from "@/components/ai-chat-bubble"
import { cn } from "@/lib/utils"

const links = [
  ["/career", "Overview"],
  ["/career/experience", "Experience"],
  ["/career/projects", "Projects"],
  ["/career/resume", "Resume"],
] as const

export function CareerShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const activeLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    activeLinkRef.current?.scrollIntoView({ inline: "nearest", block: "nearest" })
  }, [pathname])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <nav aria-label="Career navigation" className="sticky top-16 z-30 border-b border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="relative mx-auto max-w-6xl">
          <div className="career-subnav-scroll flex snap-x snap-mandatory gap-1 overflow-x-auto scroll-px-4 px-4 py-2 whitespace-nowrap sm:px-6">
            {links.map(([href, label]) => {
              const isActive = pathname === href

              return (
                <Link
                  key={href}
                  ref={isActive ? activeLinkRef : undefined}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 shrink-0 snap-start items-center rounded-md px-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
                    isActive
                      ? "bg-brand-soft font-semibold text-brand-primary"
                      : "text-muted-foreground hover:bg-brand-soft hover:text-brand-primary"
                  )}
                >
                  {label}
                </Link>
              )
            })}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-background to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-5 bg-gradient-to-l from-background to-transparent" aria-hidden="true" />
        </div>
      </nav>
      <main id="main-content" className="mx-auto max-w-6xl scroll-mt-32 px-5 py-14 sm:px-6 md:py-20">{children}</main>
      <AIChatBubble />
    </div>
  )
}
