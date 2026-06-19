"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

interface GlobalHeaderProps {
  projectName?: string // Make this optional
}

export function GlobalHeader({ projectName }: GlobalHeaderProps) {
  const pathname = usePathname()
  
  // Determine if we are on the 'All Projects' page
  const isProjectsIndex = pathname === "/projects"
  const isHome = pathname === "/"

  // Don't show the header on the landing page if you want a clean hero
  if (isHome) return null

  return (
    <header className="fixed top-16 left-0 right-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center min-w-0">
        <nav className="flex items-center gap-1.5 sm:gap-2 text-sm min-w-0 w-full overflow-hidden">
          {/* Always show Home */}
          <Link 
            href="/" 
            className="flex items-center gap-1.5 text-muted-foreground hover:text-brand-primary transition-colors"
          >
            <Home className="size-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          
          <ChevronRight className="size-4 text-muted-foreground/50" />
          
          {/* Projects Link - Active state depends on the URL */}
          <Link 
            href="/projects" 
            className={`transition-colors ${
              isProjectsIndex 
                ? "text-brand-primary font-medium pointer-events-none" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Case Studies
          </Link>
          
          {/* Only show the specific project name if we aren't on the index page */}
          {!isProjectsIndex && projectName && (
            <>
              <ChevronRight className="size-4 text-muted-foreground/50" />
              <span className="text-brand-primary font-medium truncate min-w-0 max-w-[38vw] sm:max-w-[12rem] md:max-w-xs lg:max-w-none">
                {projectName}
              </span>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}