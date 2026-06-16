import type { Metadata } from "next"
import Link from "next/link"
import { MarketingLayout } from "@/components/marketing/marketing-layout"
import { MarketingHero } from "@/components/marketing/marketing-hero"
import { JsonLd } from "@/lib/seo/json-ld"
import { privacyPageMetadata } from "@/lib/seo/page-metadata"
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schemas"

export const metadata: Metadata = privacyPageMetadata

const sections = [
  {
    title: "Overview",
    body: [
      "This site is operated by Bryan Cash as a personal brand and publishing platform for services information, case studies, and technical insights.",
      "This policy describes how information may be collected when you use cashbryan.com today, and how it may expand as future features such as newsletter signup or lead capture are added.",
    ],
  },
  {
    title: "Information you provide",
    body: [
      "If you contact Bryan through email or forms linked from this site, you may share your name, email address, company, and message content.",
      "That information is used only to respond to your inquiry or discuss a potential engagement.",
    ],
  },
  {
    title: "Analytics",
    body: [
      "The site may use privacy-focused analytics to understand aggregate traffic patterns and improve content. Analytics data is not sold to third parties.",
    ],
  },
  {
    title: "Future features",
    body: [
      "If newsletter, product, or lead-capture features are introduced, this page will be updated before those features launch to describe what is collected, how it is stored, and how you can unsubscribe or request deletion.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about this policy can be sent through the contact page or the email address listed there.",
    ],
  },
] as const

export default function PrivacyPage() {
  const structuredData = [
    buildWebPageSchema({
      path: "/privacy",
      name: "Privacy Policy",
      description: privacyPageMetadata.description as string,
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy" },
    ]),
  ]

  return (
    <MarketingLayout>
      <JsonLd data={structuredData} />
      <MarketingHero
        eyebrow="Legal"
        h1="Privacy Policy"
        subtitle="How information is handled on cashbryan.com — kept practical and updated as the site evolves."
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
            <Link href="/terms" className="text-brand-primary hover:underline">
              Terms of Use
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
