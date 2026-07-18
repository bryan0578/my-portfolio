import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { HomePositioningStrip } from "@/components/home-positioning-strip"
import { SkillsBentoGrid } from "@/components/skills-bento-grid"
import { ProjectsSection } from "@/components/projects-section"
import { MetricsSection } from "@/components/metrics-section"
import { HomeClosingCta } from "@/components/home-closing-cta"
import { AIChatBubble } from "@/components/ai-chat-bubble"
import { SiteHeader } from "@/components/site-header"
import { BlogSection } from "@/components/blog-section"
import { AudiencePaths } from "@/components/audience-paths"
import { JsonLd } from "@/lib/seo/json-ld"
import { buildWebPageSchema } from "@/lib/seo/schemas"
import { homeMetadata } from "@/lib/seo/page-metadata"

export const metadata: Metadata = homeMetadata

export default async function Home() {
  const webPageSchema = buildWebPageSchema({
    path: "/",
    name: "Bryan Cash — Enterprise UI Developer and Technical Lead",
    description:
      "Experienced enterprise UI developer and technical lead open to senior SAPUI5, SAP BTP application, and enterprise frontend opportunities, with selected consulting availability.",
  })

  return (
    <>
      <JsonLd data={webPageSchema} />
      <main id="main-content" className="min-h-screen bg-background">
        <SiteHeader />
        <HeroSection />
        <AudiencePaths />
        <HomePositioningStrip />
        <ProjectsSection
          featuredSlugs={["manufacturer-portal", "salesforce-devops"]}
        />
        <SkillsBentoGrid />
        <BlogSection limit={2} />
        <MetricsSection />
        <HomeClosingCta />
        <AIChatBubble />
      </main>
    </>
  )
}
