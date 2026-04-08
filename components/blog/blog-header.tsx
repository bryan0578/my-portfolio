"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

interface BlogHeaderProps {
  postTitle?: string
}

export function BlogHeader({ postTitle }: BlogHeaderProps) {
  const pathname = usePathname()

  const isBlogIndex = pathname === "/blog"
  const isHome = pathname === "/"

  // keep homepage clean
  if (isHome) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
        <nav className="flex items-center gap-2 text-sm">
          {/* Home */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-[#00FFC2] transition-colors"
          >
            <Home className="size-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <ChevronRight className="size-4 text-muted-foreground/50" />

          {/* Blog */}
          <Link
            href="/blog"
            className={`transition-colors ${
              isBlogIndex
                ? "text-[#00FFC2] font-medium pointer-events-none"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Blog
          </Link>

          {/* Post Title */}
          {!isBlogIndex && postTitle && (
            <>
              <ChevronRight className="size-4 text-muted-foreground/50" />
              <span className="text-[#00FFC2] font-medium truncate max-w-[150px] md:max-w-none">
                {postTitle}
              </span>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}