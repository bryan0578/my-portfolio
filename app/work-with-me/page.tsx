import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { MarketingLayout } from "@/components/marketing/marketing-layout"
import { MarketingHero } from "@/components/marketing/marketing-hero"
import { IntroParagraphs } from "@/components/marketing/intro-paragraphs"
import { FaqSection } from "@/components/marketing/faq-section"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { ProofSection } from "@/components/marketing/proof-section"
import { WhoIWorkWith } from "@/components/work-with-me/who-i-work-with"
import { EngagementModelsGrid } from "@/components/work-with-me/engagement-models-grid"
import { ServicesSupported } from "@/components/work-with-me/services-supported"
import { EngagementProcess } from "@/components/work-with-me/engagement-process"
import { FitCriteria } from "@/components/work-with-me/fit-criteria"
import { Button } from "@/components/ui/button"
import { ProfileCards } from "@/components/social-links"
import { JsonLd } from "@/lib/seo/json-ld"
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildServiceSchema,
} from "@/lib/seo/schemas"
import { workWithMeMetadata } from "@/lib/seo/page-metadata"
import { workWithMeContent } from "@/lib/marketing/work-with-me-content"

export const metadata: Metadata = workWithMeMetadata

export default function WorkWithMePage() {
  const structuredData = [
    ...buildServiceSchema({
      path: "/work-with-me",
      name: workWithMeContent.hero.h1,
      description: workWithMeMetadata.description as string,
      serviceType: "Enterprise SAP and Salesforce Consulting",
    }),
    buildFaqPageSchema(workWithMeContent.faq, { path: "/work-with-me" }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Work With Me", path: "/work-with-me" },
    ]),
  ]

  return (
    <MarketingLayout>
      <JsonLd data={structuredData} />

      <MarketingHero
        eyebrow={workWithMeContent.hero.eyebrow}
        h1={workWithMeContent.hero.h1}
        subtitle={workWithMeContent.hero.subtitle}
      >
        <Button size="lg" variant="brand" asChild className="min-w-[200px]">
          <Link href={workWithMeContent.hero.primaryCta.href}>
            <Mail className="mr-2 size-4" aria-hidden />
            {workWithMeContent.hero.primaryCta.label}
          </Link>
        </Button>
        <Button size="lg" variant="brandOutline" asChild className="min-w-[200px]">
          <Link href={workWithMeContent.hero.secondaryCta.href}>
            {workWithMeContent.hero.secondaryCta.label}
            <ArrowRight className="ml-2 size-4" aria-hidden />
          </Link>
        </Button>
      </MarketingHero>

      <IntroParagraphs paragraphs={workWithMeContent.intro} />

      <WhoIWorkWith
        headline={workWithMeContent.whoIWorkWith.headline}
        subheading={workWithMeContent.whoIWorkWith.subheading}
        personas={workWithMeContent.whoIWorkWith.personas}
      />

      <EngagementModelsGrid
        headline={workWithMeContent.engagementModels.headline}
        subheading={workWithMeContent.engagementModels.subheading}
        models={workWithMeContent.engagementModels.models}
      />

      <ServicesSupported
        headline={workWithMeContent.servicesSupported.headline}
        subheading={workWithMeContent.servicesSupported.subheading}
        services={workWithMeContent.servicesSupported.services}
      />

      <EngagementProcess
        headline={workWithMeContent.process.headline}
        subheading={workWithMeContent.process.subheading}
        steps={workWithMeContent.process.steps}
      />

      <ProofSection
        title={workWithMeContent.proof.headline}
        subheading={workWithMeContent.proof.subheading}
        proof={workWithMeContent.proof.cases}
      />

      <section className="px-6 py-12 md:py-16 bg-surface-canvas">
        <div className="max-w-5xl mx-auto">
          <ProfileCards
            heading="Professional Profiles"
            description="Verified profiles supporting the work above. Use LinkedIn for background and recommendations, GitHub for code, or email for direct conversation."
          />
        </div>
      </section>

      <FitCriteria
        goodFit={workWithMeContent.fitCriteria.goodFit}
        notFit={workWithMeContent.fitCriteria.notFit}
      />

      <FaqSection items={workWithMeContent.faq} />

      <CtaBanner
        headline={workWithMeContent.finalCta.headline}
        description={workWithMeContent.finalCta.description}
        subject={workWithMeContent.finalCta.subject}
      />
    </MarketingLayout>
  )
}
