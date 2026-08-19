"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib/utils"

const links = [
  ["/career", "Overview"],
  ["/career/experience", "Work history"],
  ["/career/projects", "Selected work"],
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
      <nav aria-label="Experience navigation" className="sticky top-16 z-30 border-b border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="relative mx-auto max-w-6xl">
          <div className="career-subnav-scroll flex gap-0.5 overflow-x-auto px-2 py-2 whitespace-nowrap sm:gap-1 sm:px-6">
            {links.map(([href, label]) => {
              const isActive = pathname === href

              return (
                <Link
                  key={href}
                  ref={isActive ? activeLinkRef : undefined}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 shrink-0 items-center rounded-md px-2 text-xs transition-colors sm:px-4 sm:text-sm",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
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
          <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-background to-transparent sm:w-5" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-background to-transparent sm:w-5" aria-hidden="true" />
        </div>
      </nav>
      <main id="main-content" className="mx-auto max-w-6xl scroll-mt-32 px-5 pt-16 pb-14 sm:px-6 md:py-20">{children}</main>
    </div>
  )
}
