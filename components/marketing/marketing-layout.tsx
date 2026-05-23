import { SiteHeader } from "@/components/site-header"
import { AIChatBubble } from "@/components/ai-chat-bubble"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <div id="main-content" className="flex-1 pt-16">
        {children}
      </div>
      <AIChatBubble />
    </div>
  )
}
