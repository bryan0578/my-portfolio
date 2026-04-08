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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
        <nav className="flex items-center gap-2 text-sm">
          {/* Always show Home */}
          <Link 
            href="/" 
            className="flex items-center gap-1.5 text-muted-foreground hover:text-[#00FFC2] transition-colors"
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
                ? "text-[#00FFC2] font-medium pointer-events-none" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Projects
          </Link>
          
          {/* Only show the specific project name if we aren't on the index page */}
          {!isProjectsIndex && projectName && (
            <>
              <ChevronRight className="size-4 text-muted-foreground/50" />
              <span className="text-[#00FFC2] font-medium truncate max-w-[150px] md:max-w-none">
                {projectName}
              </span>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}