import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface CaseStudyHeaderProps {
  projectName: string
}

export function CaseStudyHeader({ projectName }: CaseStudyHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
        <nav className="flex items-center gap-2 text-sm">
          <Link 
            href="/" 
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="size-4" />
            <span>Home</span>
          </Link>
          
          <ChevronRight className="size-4 text-muted-foreground/50" />
          
          <Link 
            href="/projects" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          
          <ChevronRight className="size-4 text-muted-foreground/50" />
          
          <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">
            {projectName}
          </span>
        </nav>
      </div>
    </header>
  )
}
