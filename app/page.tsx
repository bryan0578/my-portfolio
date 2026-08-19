import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { HomePositioningStrip } from "@/components/home-positioning-strip"
import { HomeSelectedWork } from "@/components/home-selected-work"
import { HomeEngineeringFocus } from "@/components/home-engineering-focus"
import { HomeDorsythBridge } from "@/components/home-dorsyth-bridge"
import { SiteHeader } from "@/components/site-header"
import { JsonLd } from "@/lib/seo/json-ld"
import { buildWebPageSchema } from "@/lib/seo/schemas"
import { homeMetadata } from "@/lib/seo/page-metadata"

export const metadata: Metadata = homeMetadata

export default async function Home() {
  const webPageSchema = buildWebPageSchema({
    path: "/",
    name: "Bryan Cash — Senior Software Engineer and SAP BTP Technical Lead",
    description:
      "Senior software engineer and SAP BTP technical lead with enterprise delivery experience across SAPUI5, Fiori, application architecture, integration leadership, and modern frontend engineering.",
  })

  return (
    <>
      <JsonLd data={webPageSchema} />
      <main id="main-content" className="min-h-screen bg-background">
        <SiteHeader />
        <HeroSection />
        <HomePositioningStrip />
        <HomeSelectedWork />
        <HomeEngineeringFocus />
        <HomeDorsythBridge />
      </main>
    </>
  )
}
