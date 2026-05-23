import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { SkillsBentoGrid } from "@/components/skills-bento-grid"
import { ProjectsSection } from "@/components/projects-section"
import { MetricsSection } from "@/components/metrics-section"
import { AIChatBubble } from "@/components/ai-chat-bubble"
import { SiteHeader } from "@/components/site-header"
import { BlogSection } from "@/components/blog-section"
import { JsonLd } from "@/lib/seo/json-ld"
import { buildWebPageSchema } from "@/lib/seo/schemas"
import { homeMetadata } from "@/lib/seo/page-metadata"

export const metadata: Metadata = homeMetadata

export default async function Home() {
  const webPageSchema = buildWebPageSchema({
    path: "/",
    name: "SAP BTP Lead & Enterprise UI Architect",
    description:
      "Enterprise SAP BTP, SAPUI5, Salesforce, and UI architecture consulting with proven case studies.",
  })

  return (
    <>
      <JsonLd data={webPageSchema} />
      <main id="main-content" className="min-h-screen bg-background">
        <SiteHeader />
        <HeroSection />
        <SkillsBentoGrid />
        <ProjectsSection />
        <BlogSection limit={2} />
        <MetricsSection />
        <AIChatBubble />
      </main>
    </>
  )
}
