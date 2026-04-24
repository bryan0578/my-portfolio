import { HeroSection } from "@/components/hero-section"
import { SkillsBentoGrid } from "@/components/skills-bento-grid"
import { ProjectsSection } from "@/components/projects-section"
import { MetricsSection } from "@/components/metrics-section"
import { AIChatBubble } from "@/components/ai-chat-bubble"
import { GlobalHeader } from "@/components/global-header"
import { BlogSection } from "@/components/blog-section"

export default async function Home() {
  return (
    <main className="min-h-screen bg-background">
      <GlobalHeader />
      <HeroSection />
      <SkillsBentoGrid />
      <ProjectsSection />
      <BlogSection limit={2} />
      <MetricsSection />
      <AIChatBubble />
    </main>
  )
}
