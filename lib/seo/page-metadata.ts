import { createPageMetadata } from "./metadata"
import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_TAGLINE } from "./site"
import { withSeoContext } from "./brand-copy"
import { aboutContent } from "@/lib/marketing/about-content"
import { contactContent } from "@/lib/marketing/contact-content"
import { servicesHubContent } from "@/lib/marketing/services-hub-content"
import {
  enterpriseUiUx,
  salesforceDevops,
  salesforceExperienceCloud,
  sapBtpDevelopment,
  sapui5FioriDevelopment,
} from "@/lib/marketing/services-content"

export const homeMetadata = createPageMetadata({
  title: SITE_TAGLINE,
  description: withSeoContext(SITE_DESCRIPTION),
  path: "/",
  keywords: [...SITE_KEYWORDS],
})

export const aboutPageMetadata = createPageMetadata({
  title: "About Bryan Cash",
  description: withSeoContext(
    "Developer and enterprise UI architect for SAP BTP, SAPUI5, Salesforce, and adoption-focused delivery on Fortune 500 programs."
  ),
  path: "/about",
  keywords: [
    "SAP BTP consultant",
    "enterprise UI architect",
    "SAP developer",
    "Salesforce consultant",
  ],
})

export const contactPageMetadata = createPageMetadata({
  title: "Contact & Hire",
  description: contactContent.intro[0],
  path: "/contact",
  keywords: [
    "hire SAP BTP developer",
    "contact SAP consultant",
    "Salesforce contractor",
    "enterprise developer for hire",
  ],
})

export const workWithMeMetadata = createPageMetadata({
  title: "Work With an Enterprise SAP BTP & Salesforce UI Architect",
  description: withSeoContext(
    "Six engagement models, a clear discovery process, and proof in production for SAP BTP, SAPUI5, Salesforce Experience Cloud, and enterprise UI programs."
  ),
  path: "/work-with-me",
  keywords: [
    "SAP BTP consultant",
    "Salesforce consultant",
    "enterprise UI architect",
    "SAPUI5 developer",
    "Salesforce DevOps consultant",
    "freelance SAP BTP developer",
    "enterprise software consultant",
    "SAP Fiori consultant",
    "Salesforce Experience Cloud consultant",
    "fractional architecture",
  ],
})

export const servicesHubMetadata = createPageMetadata({
  title: "Enterprise Development Services",
  description: servicesHubContent.intro[0],
  path: "/services",
  keywords: [
    "SAP development services",
    "Salesforce development services",
    "enterprise software consulting",
    ...SITE_KEYWORDS,
  ],
})

export function getServicePageMetadata(
  content: typeof sapBtpDevelopment
) {
  const meta = content.metadata
  return createPageMetadata({
    title: String(meta.title ?? content.h1),
    description: String(meta.description ?? content.subtitle),
    path: `/services/${content.slug}`,
    keywords: content.techStack.flatMap((group) => group.items),
  })
}

export const sapBtpMetadata = getServicePageMetadata(sapBtpDevelopment)
export const sapui5Metadata = getServicePageMetadata(sapui5FioriDevelopment)
export const salesforceCloudMetadata = getServicePageMetadata(
  salesforceExperienceCloud
)
export const salesforceDevopsMetadata = getServicePageMetadata(salesforceDevops)
export const enterpriseUiUxMetadata = getServicePageMetadata(enterpriseUiUx)

export const projectsIndexMetadata = createPageMetadata({
  title: "SAP BTP & Salesforce Case Studies",
  description:
    "Proof in production: SAP BTP portals, SAPUI5 applications, Salesforce Experience Cloud, DevOps, and UI delivery with measurable adoption outcomes.",
  path: "/projects",
  keywords: [
    "SAP BTP case study",
    "SAPUI5 case study",
    "Salesforce portal case study",
    "enterprise project examples",
  ],
})

export const blogIndexMetadata = createPageMetadata({
  title: "Enterprise Development Insights",
  description: withSeoContext(
    "Technical writing on enterprise delivery, SAP and Salesforce ecosystems, frontend architecture, and practical lessons from production programs."
  ),
  path: "/blog",
  keywords: [
    "enterprise development insights",
    "SAP development articles",
    "Salesforce development articles",
    "frontend architecture",
  ],
})

export const privacyPageMetadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How Bryan Cash handles information submitted through this site. Updated for future newsletter and lead-capture features.",
  path: "/privacy",
  noIndex: false,
})

export const termsPageMetadata = createPageMetadata({
  title: "Terms of Use",
  description:
    "Terms for using cashbryan.com, including content, services information, and future digital products.",
  path: "/terms",
  noIndex: false,
})
