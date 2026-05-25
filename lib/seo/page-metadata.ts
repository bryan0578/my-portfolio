import { createPageMetadata } from "./metadata"
import { SITE_KEYWORDS, SITE_TAGLINE } from "./site"
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
  description:
    "Hire an SAP BTP developer and enterprise UI architect for SAPUI5, SAP Fiori, Salesforce Experience Cloud, and DevOps. Case studies and consulting for Fortune 500 programs.",
  path: "/",
  keywords: [...SITE_KEYWORDS],
})

export const aboutPageMetadata = createPageMetadata({
  title: "About Bryan Cash",
  description:
    "Enterprise developer and UI architect specializing in SAP BTP, SAPUI5, Salesforce Experience Cloud, DevOps, and adoption-focused delivery for Fortune 500 programs.",
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
  description:
    "Engage Bryan Cash for SAP BTP, SAPUI5, SAP Fiori, Salesforce Experience Cloud, Salesforce DevOps, and enterprise UI/UX work. Six engagement models, a clear process, and proof from Fortune 500 programs.",
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
    "Enterprise case studies: SAP BTP portals, SAPUI5 applications, Salesforce Experience Cloud, DevOps, and UI/UX delivery with measurable outcomes.",
  path: "/projects",
  keywords: [
    "SAP BTP case study",
    "SAPUI5 portfolio",
    "Salesforce portal case study",
    "enterprise project examples",
  ],
})

export const blogIndexMetadata = createPageMetadata({
  title: "Enterprise Development Blog",
  description:
    "Technical articles on enterprise software development, SAP, Salesforce, frontend architecture, and lessons from Fortune 500 delivery.",
  path: "/blog",
  keywords: [
    "enterprise development blog",
    "SAP development insights",
    "Salesforce development articles",
    "frontend architecture",
  ],
})
