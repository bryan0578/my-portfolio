import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/lib/seo/json-ld"
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildWebPageSchema,
} from "@/lib/seo/schemas"
import { servicesHubMetadata } from "@/lib/seo/page-metadata"
import { ArrowRight, Mail } from "lucide-react"
import { MarketingLayout } from "@/components/marketing/marketing-layout"
import { MarketingHero } from "@/components/marketing/marketing-hero"
import { IntroParagraphs } from "@/components/marketing/intro-paragraphs"
import { ServiceCard } from "@/components/marketing/service-card"
import { FaqSection } from "@/components/marketing/faq-section"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { Button } from "@/components/ui/button"
import { servicesHubContent } from "@/lib/marketing/services-hub-content"
import { serviceHubCards } from "@/lib/marketing/services-content"
import { buildMailtoHref } from "@/lib/contact"

export const metadata: Metadata = servicesHubMetadata

export default function ServicesPage() {
  const mailtoHref = buildMailtoHref("Services Inquiry")

  const structuredData = [
    buildWebPageSchema({
      path: "/services",
      name: servicesHubContent.h1,
      description: servicesHubMetadata.description as string,
    }),
    buildCollectionPageSchema({
      path: "/services",
      name: servicesHubContent.h1,
      description: servicesHubMetadata.description as string,
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ]),
  ]

  return (
    <MarketingLayout>
      <JsonLd data={structuredData} />
      <MarketingHero
        eyebrow="Services"
        h1={servicesHubContent.h1}
        subtitle={servicesHubContent.subtitle}
      >
        <Button
          size="lg"
          asChild
          className="min-w-[180px] bg-brand-primary text-text-inverse hover:bg-brand-secondary font-bold"
        >
          <a href={mailtoHref}>
            <Mail className="mr-2 size-4" />
            Request a consultation
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild className="min-w-[180px]">
          <Link href="/projects">
            View case studies
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </MarketingHero>

      <IntroParagraphs paragraphs={servicesHubContent.intro} />

      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Service Areas
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceHubCards.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16 bg-surface-canvas">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {servicesHubContent.whySection.title}
          </h2>
          <ul className="space-y-3">
            {servicesHubContent.whySection.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-muted-foreground leading-relaxed"
              >
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-primary"
                  aria-hidden
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {servicesHubContent.modernStackNote.title}
          </h2>
          {servicesHubContent.modernStackNote.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className="text-muted-foreground leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}
          <Link
            href="/projects/dorsyth-records-platform"
            className="inline-flex items-center text-sm font-medium text-brand-primary hover:text-brand-primary/80"
          >
            Dorsyth Records platform case study
            <ArrowRight className="ml-1 size-4" />
          </Link>
        </div>
      </section>

      <FaqSection items={servicesHubContent.faq} />
      <CtaBanner
        headline="Not Sure Which Service Fits?"
        description="Describe your program and stack. I will recommend an engagement path and relevant case studies."
        subject="Services Consultation Inquiry"
      />
    </MarketingLayout>
  )
}
