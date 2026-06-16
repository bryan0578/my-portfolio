import type { Metadata } from "next"
import Link from "next/link"
import { MarketingLayout } from "@/components/marketing/marketing-layout"
import { MarketingHero } from "@/components/marketing/marketing-hero"
import { JsonLd } from "@/lib/seo/json-ld"
import { termsPageMetadata } from "@/lib/seo/page-metadata"
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schemas"

export const metadata: Metadata = termsPageMetadata

const sections = [
  {
    title: "Use of this site",
    body: [
      "By using cashbryan.com, you agree to these terms. The site provides information about Bryan Cash’s services, case studies, and published insights.",
      "Content is provided for general information and does not constitute a binding offer until agreed in writing for a specific engagement.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "Site content, branding, case study narratives, and published articles are owned by Bryan Cash unless otherwise noted.",
      "You may link to public pages. Do not republish substantial portions without permission.",
    ],
  },
  {
    title: "Professional services",
    body: [
      "Descriptions of services, outcomes, and case studies reflect portfolio-safe summaries of past work. Specific client details may be omitted due to confidentiality.",
      "Engagements are governed by separate statements of work or contracts when work begins.",
    ],
  },
  {
    title: "Future products and subscriptions",
    body: [
      "If digital products, templates, or newsletter offerings are added later, separate purchase or subscription terms will apply and be linked from the relevant pages.",
    ],
  },
  {
    title: "Disclaimer",
    body: [
      "The site is provided as-is without warranties. Bryan Cash is not liable for decisions made solely on the basis of public site content.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about these terms can be sent through the contact page.",
    ],
  },
] as const

export default function TermsPage() {
  const structuredData = [
    buildWebPageSchema({
      path: "/terms",
      name: "Terms of Use",
      description: termsPageMetadata.description as string,
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Terms of Use", path: "/terms" },
    ]),
  ]

  return (
    <MarketingLayout>
      <JsonLd data={structuredData} />
      <MarketingHero
        eyebrow="Legal"
        h1="Terms of Use"
        subtitle="Basic terms for using cashbryan.com — written to stay valid as the platform grows."
      />

      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-10">
          <p className="text-body-sm text-muted-foreground">
            Last updated: June 2026
          </p>

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-h3 font-heading text-foreground mb-3">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-body text-muted-foreground leading-body"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <p className="text-body-sm text-muted-foreground">
            See also{" "}
            <Link href="/privacy" className="text-brand-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            or return to{" "}
            <Link href="/contact" className="text-brand-primary hover:underline">
              Contact
            </Link>
            .
          </p>
        </div>
      </section>
    </MarketingLayout>
  )
}
