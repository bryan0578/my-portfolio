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
        <Button
          size="lg"
          asChild
          className="min-w-[200px] bg-[#00FFC2] text-zinc-950 hover:bg-[#00FFC2]/90 font-bold"
        >
          <a href={mailtoHref}>
            <Mail className="mr-2 size-4" />
            Email Bryan
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild className="min-w-[200px]">
          <Link href="/services">
            Browse services
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </MarketingHero>

      <IntroParagraphs paragraphs={contactContent.intro} />

      <section className="px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="border-[#00FFC2]/20 bg-[#00FFC2]/5">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Direct email</p>
              <a
                href={mailtoHref}
                className="text-lg font-medium text-[#00FFC2] hover:underline break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-12 bg-[#050505]">
        <div className="max-w-3xl mx-auto rounded-2xl border border-[#00FFC2]/20 bg-[#00FFC2]/5 p-6 md:p-8">
          <p className="text-xs uppercase tracking-widest text-[#00FFC2] mb-2 font-semibold">
            Before You Reach Out
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            Not sure how to engage Bryan?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
            The Work With Me page covers six engagement models, fit criteria,
            and the discovery process—useful if you want to refine your brief
            before sending it.
          </p>
          <Button asChild variant="outline">
            <Link href="/work-with-me">
              See engagement options
              <ArrowRight className="ml-2 size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Engagement Types
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {contactContent.engagementTypes.map((type) => (
              <Card
                key={type.title}
                className="border-border/50 bg-card/50 backdrop-blur-sm"
              >
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
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Services You May Be Hiring For
          </h2>
          <ul className="space-y-3">
            {serviceHubCards.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="flex items-center justify-between gap-4 rounded-lg border border-border/50 bg-card/30 px-4 py-3 text-sm hover:border-[#00FFC2]/30 transition-colors group"
                >
                  <span className="font-medium text-foreground group-hover:text-[#00FFC2] transition-colors">
                    {service.title}
                  </span>
                  <ArrowRight className="size-4 text-muted-foreground group-hover:text-[#00FFC2] shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection items={contactContent.faq} />

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Review Work Before You Reach Out
          </h2>
          <p className="text-muted-foreground mb-6">
            SAP BTP manufacturer portal, Salesforce portals, DevOps, and SAPUI5
            case studies are available on the projects page.
          </p>
          <Button asChild variant="outline">
            <Link href="/projects">
              View case studies
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </MarketingLayout>
  )
}
