import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { AIChatBubble } from "@/components/ai-chat-bubble"

const links = [
  ["/career", "Overview"],
  ["/career/experience", "Experience"],
  ["/career/projects", "Projects"],
  ["/career/resume", "Resume"],
] as const

export function CareerShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <nav aria-label="Career navigation" className="sticky top-16 z-30 border-b border-border/50 bg-background/90 px-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto py-2">
          {links.map(([href, label]) => <Link key={href} href={href} className="min-h-11 whitespace-nowrap rounded-md px-4 py-3 text-sm text-muted-foreground hover:bg-brand-soft hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus">{label}</Link>)}
        </div>
      </nav>
      <main id="main-content" className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:py-20">{children}</main>
      <AIChatBubble />
    </div>
  )
}
