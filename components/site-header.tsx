"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
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
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [mobileOpen])

  const closeMobileMenu = () => setMobileOpen(false)

  const isActiveRoute = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-semibold text-foreground hover:text-[#00FFC2] transition-colors shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FFC2]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Bryan Cash
        </Link>

        <nav
          className="hidden md:flex items-center gap-1 sm:gap-2"
          aria-label="Primary navigation"
        >
          {navLinks.map(({ href, label }) => {
            const isActive = isActiveRoute(href)

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-2.5 py-1.5 text-sm whitespace-nowrap rounded-md transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FFC2]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive
                    ? "text-[#00FFC2] font-medium bg-[#00FFC2]/10"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]"
                )}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-site-menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className={cn(
            "md:hidden inline-flex items-center justify-center rounded-md border border-border/60 bg-card/50 text-foreground",
            "h-11 w-11 transition-colors",
            "hover:border-[#00FFC2]/40 hover:text-[#00FFC2] hover:bg-[#00FFC2]/10",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FFC2]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          )}
        >
          {mobileOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      {mobileOpen ? (
        <>
          <div
            className="md:hidden fixed inset-0 z-40 bg-black/50"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          <nav
            id="mobile-site-menu"
            aria-label="Mobile navigation"
            className="md:hidden fixed top-16 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-xl shadow-lg"
          >
            <ul className="px-4 py-3 space-y-1">
              {navLinks.map(({ href, label }) => {
                const isActive = isActiveRoute(href)

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "flex items-center rounded-md px-3 min-h-11 text-base transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FFC2]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        isActive
                          ? "text-[#00FFC2] font-medium bg-[#00FFC2]/10"
                          : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.06]"
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </>
      ) : null}
    </header>
  )
}
