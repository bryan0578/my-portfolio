/**
 * Content information architecture — maps current file-based categories and slugs
 * to brand pillars and cross-link relationships. URLs are not changed here.
 */

export type BrandPillarId =
  | "work-systems"
  | "life-systems"
  | "creator-systems"
  | "build-in-public"
  | "ai-automation"
  | "digital-products"

export const BRAND_PILLARS: Record<
  BrandPillarId,
  { label: string; description: string }
> = {
  "work-systems": {
    label: "Work Systems",
    description:
      "Enterprise delivery, SAP/Salesforce platforms, architecture, and practical adoption.",
  },
  "life-systems": {
    label: "Life Systems",
    description: "Personal productivity and life infrastructure (future pillar).",
  },
  "creator-systems": {
    label: "Creator Systems",
    description: "Frontend craft, content, and technical creation workflows.",
  },
  "build-in-public": {
    label: "Build in Public",
    description: "Transparent builds, lessons, and product experiments.",
  },
  "ai-automation": {
    label: "AI & Automation",
    description: "Automation patterns and AI-assisted delivery (future pillar).",
  },
  "digital-products": {
    label: "Digital Products",
    description: "Templates, toolkits, and productized knowledge (future pillar).",
  },
}

/** Current blog/project categories → future brand pillars */
export const SITE_CATEGORY_TO_PILLAR: Record<string, BrandPillarId> = {
  "SAP BTP": "work-systems",
  Salesforce: "work-systems",
  DevOps: "work-systems",
  Enterprise: "work-systems",
  Architecture: "work-systems",
  Frontend: "creator-systems",
  "Next.js": "creator-systems",
  React: "creator-systems",
  Career: "creator-systems",
  "Personal Branding": "creator-systems",
  Portfolio: "build-in-public",
  Content: "creator-systems",
  "UI/UX": "work-systems",
  "Technical Documentation": "work-systems",
  "Brand Identity": "creator-systems",
}

export type ContentLink = {
  href: string
  label: string
}

export const PROJECT_RELATED_SERVICES: Record<string, ContentLink[]> = {
  "manufacturer-portal": [
    { href: "/services/sap-btp-development", label: "SAP BTP Development" },
    {
      href: "/services/sapui5-fiori-development",
      label: "SAPUI5 & Fiori Development",
    },
    { href: "/services/enterprise-ui-ux", label: "Enterprise UI/UX" },
  ],
  "enterprise-governance": [
    { href: "/services/sap-btp-development", label: "SAP BTP Development" },
  ],
  "fuel-management": [
    {
      href: "/services/sapui5-fiori-development",
      label: "SAPUI5 & Fiori Development",
    },
    { href: "/services/sap-btp-development", label: "SAP BTP Development" },
  ],
  "kpmg-client-dashboard": [
    {
      href: "/services/sapui5-fiori-development",
      label: "SAPUI5 & Fiori Development",
    },
  ],
  "salesforce-devops": [
    { href: "/services/salesforce-devops", label: "Salesforce DevOps" },
    {
      href: "/services/salesforce-experience-cloud",
      label: "Salesforce Experience Cloud",
    },
  ],
  "partner-portal": [
    {
      href: "/services/salesforce-experience-cloud",
      label: "Salesforce Experience Cloud",
    },
    { href: "/services/enterprise-ui-ux", label: "Enterprise UI/UX" },
  ],
  "utility-customer-portal": [
    {
      href: "/services/salesforce-experience-cloud",
      label: "Salesforce Experience Cloud",
    },
    { href: "/services/enterprise-ui-ux", label: "Enterprise UI/UX" },
  ],
  "dorsyth-records-platform": [
    { href: "/services/enterprise-ui-ux", label: "Enterprise UI/UX" },
  ],
  "national-rail-mobile": [
    { href: "/services/enterprise-ui-ux", label: "Enterprise UI/UX" },
  ],
  "sap-sapphire-media": [
    { href: "/services/enterprise-ui-ux", label: "Enterprise UI/UX" },
  ],
  "dorsyth-records-logo": [
    { href: "/services/enterprise-ui-ux", label: "Enterprise UI/UX" },
  ],
}

const CATEGORY_SERVICE_FALLBACK: Record<string, ContentLink> = {
  "SAP BTP": {
    href: "/services/sap-btp-development",
    label: "SAP BTP Development",
  },
  "UI/UX": {
    href: "/services/enterprise-ui-ux",
    label: "Enterprise UI/UX",
  },
  DevOps: {
    href: "/services/salesforce-devops",
    label: "Salesforce DevOps",
  },
  Salesforce: {
    href: "/services/salesforce-experience-cloud",
    label: "Salesforce Experience Cloud",
  },
}

export function getPillarForCategory(category: string): BrandPillarId {
  return SITE_CATEGORY_TO_PILLAR[category] ?? "work-systems"
}

export function getProjectRelatedServices(
  slug: string,
  categories: string[],
  stack: string[] = []
): ContentLink[] {
  const links = new Map<string, ContentLink>()

  for (const link of PROJECT_RELATED_SERVICES[slug] ?? []) {
    links.set(link.href, link)
  }

  for (const category of categories) {
    const match = CATEGORY_SERVICE_FALLBACK[category]
    if (match) links.set(match.href, match)
  }

  if (stack.some((tech) => /sapui5|fiori/i.test(tech))) {
    links.set("/services/sapui5-fiori-development", {
      href: "/services/sapui5-fiori-development",
      label: "SAPUI5 & Fiori Development",
    })
  }

  return Array.from(links.values())
}

export type BlogEngagementCta = {
  headline: string
  description: string
  serviceHref: string
  serviceLabel: string
  mailSubject: string
  caseStudyHref?: string
  caseStudyLabel?: string
}

/** Posts that already render BlogCta inside MDX — avoid duplicate CTAs */
export const BLOG_POSTS_WITH_INLINE_CTA = new Set([
  "when-to-hire-sap-btp-developer",
  "sap-btp-external-partner-portal-architecture-checklist",
  "signs-you-need-salesforce-devops-consultant",
  "salesforce-release-management-dev-qa-uat-prod",
  "experience-cloud-b2b-partner-portals-planning",
])

/** Posts that should not receive an auto-appended engagement CTA */
export const BLOG_POSTS_WITHOUT_CTA = new Set([
  "how-i-built-my-portfolio",
  "what-makes-a-dev-portfolio-stand-out",
])

const BLOG_CATEGORY_ENGAGEMENT: Record<
  string,
  Pick<
    BlogEngagementCta,
    | "serviceHref"
    | "serviceLabel"
    | "mailSubject"
    | "caseStudyHref"
    | "caseStudyLabel"
    | "headline"
    | "description"
  >
> = {
  "SAP BTP": {
    headline: "Planning SAP BTP delivery for your program?",
    description:
      "Share your portal, CAP, or governance scope. I will respond with whether the engagement fits and how similar programs were structured.",
    serviceHref: "/services/sap-btp-development",
    serviceLabel: "SAP BTP development services",
    mailSubject: "Blog inquiry: SAP BTP program",
    caseStudyHref: "/projects/manufacturer-portal",
    caseStudyLabel: "Manufacturer portal case study",
  },
  Salesforce: {
    headline: "Building or stabilizing a Salesforce program?",
    description:
      "Experience Cloud portals and release discipline are common starting points. Review services and engagement options before you reach out.",
    serviceHref: "/services/salesforce-experience-cloud",
    serviceLabel: "Salesforce Experience Cloud services",
    mailSubject: "Blog inquiry: Salesforce program",
    caseStudyHref: "/projects/partner-portal",
    caseStudyLabel: "Partner portal case study",
  },
  DevOps: {
    headline: "Need release ownership on Salesforce?",
    description:
      "Parallel tracks and drifting environments are fixable with clear promotion discipline. See how similar programs were run.",
    serviceHref: "/services/salesforce-devops",
    serviceLabel: "Salesforce DevOps services",
    mailSubject: "Blog inquiry: Salesforce DevOps",
    caseStudyHref: "/projects/salesforce-devops",
    caseStudyLabel: "Release management case study",
  },
  Enterprise: {
    headline: "Shipping enterprise systems that people actually use?",
    description:
      "Adoption-focused delivery across SAP, Salesforce, and modern frontend platforms. Start with engagement options or a direct conversation.",
    serviceHref: "/work-with-me",
    serviceLabel: "How engagements work",
    mailSubject: "Blog inquiry: Enterprise delivery",
    caseStudyHref: "/projects/manufacturer-portal",
    caseStudyLabel: "SAP BTP case study",
  },
  Architecture: {
    headline: "Need architecture clarity before the build accelerates?",
    description:
      "Structured systems, documented tradeoffs, and practical delivery—not slideware. Explore services or discuss your program.",
    serviceHref: "/services/enterprise-ui-ux",
    serviceLabel: "Enterprise UI/UX services",
    mailSubject: "Blog inquiry: Enterprise architecture",
  },
  Frontend: {
    headline: "Structuring frontend work for long-term maintainability?",
    description:
      "Enterprise UI architecture and implementation for teams that need consistency, not one-off components.",
    serviceHref: "/services/enterprise-ui-ux",
    serviceLabel: "Enterprise UI/UX services",
    mailSubject: "Blog inquiry: Frontend architecture",
  },
}

const BLOG_POST_ENGAGEMENT: Record<string, BlogEngagementCta> = {
  "what-building-in-enterprise-actually-teaches-you": {
    headline: "Applying these lessons on an active program?",
    description:
      "Enterprise delivery is about constraints, tradeoffs, and adoption—not tutorials. See how engagements are structured or discuss your initiative.",
    serviceHref: "/work-with-me",
    serviceLabel: "Engagement options",
    mailSubject: "Blog inquiry: Enterprise delivery",
    caseStudyHref: "/projects/enterprise-governance",
    caseStudyLabel: "BTP governance case study",
  },
  "how-i-structure-frontend-projects": {
    headline: "Need frontend structure on an enterprise initiative?",
    description:
      "Good architecture reduces friction over time. Explore UI/UX and implementation services, or discuss how this applies to your program.",
    serviceHref: "/services/enterprise-ui-ux",
    serviceLabel: "Enterprise UI/UX services",
    mailSubject: "Blog inquiry: Frontend structure",
  },
  "when-simplicity-beats-flexibility": {
    headline: "Making pragmatic architecture calls on your program?",
    description:
      "Simplicity often wins when adoption and maintainability matter more than theoretical flexibility. See related services or start a conversation.",
    serviceHref: "/services/enterprise-ui-ux",
    serviceLabel: "Enterprise UI/UX services",
    mailSubject: "Blog inquiry: Architecture tradeoffs",
  },
}

export function getBlogEngagementCta(
  slug: string,
  categories: string[] = []
): BlogEngagementCta | null {
  if (BLOG_POSTS_WITHOUT_CTA.has(slug)) return null
  if (BLOG_POSTS_WITH_INLINE_CTA.has(slug)) return null

  const postOverride = BLOG_POST_ENGAGEMENT[slug]
  if (postOverride) return postOverride

  for (const category of categories) {
    const match = BLOG_CATEGORY_ENGAGEMENT[category]
    if (match) return match
  }

  return null
}

export const SERVICE_PROOF_HEADING = "Proof in production"

export const SERVICE_PROOF_SUBHEADING =
  "Case studies from enterprise SAP, Salesforce, and UI programs—practical delivery with adoption in mind, not just go-live."

export const WORK_WITH_ME_PROOF_HEADING = "Proof in production"
