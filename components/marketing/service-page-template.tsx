import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MarketingHero } from "./marketing-hero"
import { ContentSections } from "./content-section"
import { ProofSection } from "./proof-section"
import { FaqSection } from "./faq-section"
import { CtaBanner } from "./cta-banner"
import { ServiceChallenges } from "./service-challenges"
import { ServiceEngagementModels } from "./service-engagement-models"
import { ServiceTechStack } from "./service-tech-stack"
import { ServiceWhenToHire } from "./service-when-to-hire"
import { ServiceTrustSignals } from "./service-trust-signals"
import { ServiceRelatedLinks } from "./service-related-links"
import { buildMailtoHref } from "@/lib/contact"
import { JsonLd } from "@/lib/seo/json-ld"
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
} from "@/lib/seo/schemas"
import type { ServicePageContent } from "@/lib/marketing/types"

interface ServicePageTemplateProps {
  content: ServicePageContent
}

export function ServicePageTemplate({ content }: ServicePageTemplateProps) {
  const servicePath = `/services/${content.slug}`
  const structuredData = [
    ...buildServiceSchema({
      path: servicePath,
      name: content.h1,
      description: content.subtitle,
      serviceType: content.eyebrow,
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: content.h1, path: servicePath },
    ]),
  ]
  const mailtoHref = buildMailtoHref(content.cta.subject)

  return (
    <>
      <JsonLd data={structuredData} />
      <MarketingHero
        eyebrow={content.eyebrow}
        h1={content.h1}
        subtitle={content.subtitle}
      >
        <Button
          size="lg"
          asChild
          className="min-w-[180px] bg-[#00FFC2] text-zinc-950 hover:bg-[#00FFC2]/90 font-bold"
        >
          <a href={mailtoHref}>
            <Mail className="mr-2 size-4" />
            Discuss this service
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild className="min-w-[180px]">
          <Link href="/contact">
            Contact
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </MarketingHero>

      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto space-y-4">
          {content.intro.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-muted-foreground leading-relaxed text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <ServiceTrustSignals signals={content.trustSignals} />
      <ServiceWhenToHire items={content.whenToHire} />
      <ServiceChallenges challenges={content.challenges} />
      <ContentSections sections={content.approach} />
      <ServiceEngagementModels models={content.engagementModels} />
      <ServiceTechStack groups={content.techStack} />
      <ProofSection proof={content.proof} />
      {content.midCta ? (
        <CtaBanner
          headline={content.midCta.headline}
          description={content.midCta.description}
          subject={content.cta.subject}
          secondaryHref="/projects"
          secondaryLabel="Review case studies"
        />
      ) : null}
      <FaqSection items={content.faq} />
      <ServiceRelatedLinks links={content.relatedServices} />
      <CtaBanner
        headline={content.cta.headline}
        description={content.cta.description}
        subject={content.cta.subject}
      />
    </>
  )
}
