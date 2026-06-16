import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/lib/seo/json-ld"
import { buildAboutPageSchema, buildBreadcrumbSchema } from "@/lib/seo/schemas"
import { aboutPageMetadata } from "@/lib/seo/page-metadata"
import { ArrowRight, Mail } from "lucide-react"
import { MarketingLayout } from "@/components/marketing/marketing-layout"
import { MarketingHero } from "@/components/marketing/marketing-hero"
import { IntroParagraphs } from "@/components/marketing/intro-paragraphs"
import { ContentSections } from "@/components/marketing/content-section"
import { FaqSection } from "@/components/marketing/faq-section"
import { CtaBanner } from "@/components/marketing/cta-banner"
import { Button } from "@/components/ui/button"
import { ProfileCards } from "@/components/social-links"
import { aboutContent } from "@/lib/marketing/about-content"
import { buildMailtoHref } from "@/lib/contact"

export const metadata: Metadata = aboutPageMetadata

export default function AboutPage() {
  const mailtoHref = buildMailtoHref("About Page Inquiry")

  const structuredData = [
    ...buildAboutPageSchema({
      name: aboutContent.h1,
      description: aboutPageMetadata.description as string,
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
  ]

  return (
    <MarketingLayout>
      <JsonLd data={structuredData} />
      <MarketingHero
        eyebrow="About"
        h1={aboutContent.h1}
        subtitle={aboutContent.subtitle}
      >
        <Button
          size="lg"
          asChild
          className="min-w-[180px] bg-brand-primary text-text-inverse hover:bg-brand-secondary font-bold"
        >
          <a href={mailtoHref}>
            <Mail className="mr-2 size-4" />
            Work with Bryan
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild className="min-w-[180px]">
          <Link href="/services">
            View services
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </MarketingHero>

      <IntroParagraphs paragraphs={aboutContent.intro} />
      <ContentSections sections={aboutContent.sections} />

      <section className="px-6 py-12 md:py-16 bg-surface-canvas">
        <div className="max-w-5xl mx-auto">
          <ProfileCards
            heading="Connect With Me"
            description="Verified professional profiles. LinkedIn for background and recommendations, GitHub for code, and email for direct conversation."
          />
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Explore Proof of Work
          </h2>
          <p className="text-muted-foreground mb-6">
            Case studies cover SAP BTP portals, SAPUI5 applications, Salesforce
            Experience Cloud, DevOps, and modern Next.js delivery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/projects">View projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">Read the blog</Link>
            </Button>
          </div>
        </div>
      </section>

      <FaqSection items={aboutContent.faq} />
      <CtaBanner
        headline="Ready to Discuss Your Program?"
        description="Share your SAP, Salesforce, or enterprise UI initiative. I will follow up with availability and next steps."
        subject="Consulting Inquiry — About Page"
      />
    </MarketingLayout>
  )
}
