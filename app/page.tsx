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
    name: "Practical systems that turn enterprise chaos into clarity",
    description:
      "SAP BTP developer and enterprise UI architect for SAPUI5, SAP Fiori, Salesforce Experience Cloud, and modern frontend delivery. Case studies and consulting for enterprise programs.",
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
