import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/lib/seo/json-ld"
import { buildBreadcrumbSchema, buildContactPageSchema } from "@/lib/seo/schemas"
import { contactPageMetadata } from "@/lib/seo/page-metadata"
import { Mail, ArrowRight } from "lucide-react"
import { MarketingLayout } from "@/components/marketing/marketing-layout"
import { MarketingHero } from "@/components/marketing/marketing-hero"
import { IntroParagraphs } from "@/components/marketing/intro-paragraphs"
import { FaqSection } from "@/components/marketing/faq-section"
import { CtaBlock } from "@/components/marketing/cta-block"
import { SectionHeader } from "@/components/marketing/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { contactContent } from "@/lib/marketing/contact-content"
import {
  buildMailtoHref,
  CONTACT_EMAIL,
  defaultConsultingBody,
  defaultConsultingSubject,
} from "@/lib/contact"
import { serviceHubCards } from "@/lib/marketing/services-content"

export const metadata: Metadata = contactPageMetadata

export default function ContactPage() {
  const mailtoHref = buildMailtoHref(
    defaultConsultingSubject,
    defaultConsultingBody
  )

  const structuredData = [
    ...buildContactPageSchema({
      name: contactContent.h1,
      description: contactPageMetadata.description as string,
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  ]

  return (
    <MarketingLayout>
      <JsonLd data={structuredData} />
      <MarketingHero
        eyebrow="Contact"
        h1={contactContent.h1}
        subtitle={contactContent.subtitle}
      >
        <Button size="lg" variant="brand" asChild className="min-w-[200px]">
          <a href={mailtoHref}>
            <Mail className="mr-2 size-4" />
            Email Bryan
          </a>
        </Button>
        <Button size="lg" variant="brandOutline" asChild className="min-w-[200px]">
          <Link href="/services">
            Browse services
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </MarketingHero>

      <IntroParagraphs paragraphs={contactContent.intro} />

      <section className="px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <Card variant="brand">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Direct email</p>
              <a
                href={mailtoHref}
                className="text-lg font-medium text-brand-primary hover:underline break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-12 bg-surface-canvas">
        <div className="max-w-3xl mx-auto">
          <CtaBlock
            eyebrow="Before You Reach Out"
            title="Not sure how to engage Bryan?"
            description="The Work With Me page covers six engagement models, fit criteria, and the discovery process—useful if you want to refine your brief before sending it."
            align="left"
            padding="compact"
          >
            <Button asChild variant="brandOutline">
              <Link href="/work-with-me">
                See engagement options
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </Link>
            </Button>
          </CtaBlock>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16 bg-surface-canvas">
        <div className="max-w-5xl mx-auto">
          <SectionHeader className="mb-8" title="Engagement Types" />
          <div className="grid gap-6 md:grid-cols-3">
            {contactContent.engagementTypes.map((type) => (
              <Card key={type.title} variant="surface">
                <CardHeader>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <SectionHeader className="mb-6" title="Services You May Be Hiring For" />
          <ul className="space-y-3">
            {serviceHubCards.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="flex items-center justify-between gap-4 rounded-lg border border-border/50 bg-card/30 px-4 py-3 text-sm hover:border-brand-primary/30 transition-colors group"
                >
                  <span className="font-medium text-foreground group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </span>
                  <ArrowRight className="size-4 text-muted-foreground group-hover:text-brand-primary shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection items={contactContent.faq} />

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            className="mb-6"
            title="Review Work Before You Reach Out"
            description="SAP BTP manufacturer portal, Salesforce portals, DevOps, and SAPUI5 case studies are available on the case studies page."
          />
          <div className="text-center">
            <Button asChild variant="brandOutline">
              <Link href="/projects">
                View case studies
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MarketingLayout>
  )
}
