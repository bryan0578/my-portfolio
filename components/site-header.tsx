"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/contact", label: "Contact" },
] as const

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-semibold text-foreground hover:text-[#00FFC2] transition-colors shrink-0"
        >
          Bryan Cash
        </Link>

        <nav
          className="flex items-center gap-1 sm:gap-2 overflow-x-auto"
          aria-label="Primary navigation"
        >
          {navLinks.map(({ href, label }) => {
            const path: string = href
            const isActive =
              pathname === href ||
              (path !== "/" && pathname.startsWith(`${href}/`))

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-2.5 py-1.5 text-sm whitespace-nowrap rounded-md transition-colors",
                  isActive
                    ? "text-[#00FFC2] font-medium bg-[#00FFC2]/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
