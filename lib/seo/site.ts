/** Canonical production URL — used for metadata, JSON-LD, and sitemap. */
export const SITE_URL = "https://www.cashbryan.com"

export const SITE_NAME = "Bryan Cash"

export const SITE_TAGLINE =
  "Senior Software Engineer & SAP BTP Technical Lead"

/** Canonical brand positioning for metadata and structured data. */
export const SITE_DESCRIPTION =
  "Bryan Cash is a senior software engineer and SAP BTP technical lead focused on enterprise applications, SAPUI5 and Fiori, application architecture, integration leadership, and modern frontend engineering."

export const DEFAULT_OG_IMAGE = "/og-image.png"

export const DEFAULT_OG_IMAGE_ALT =
  "Bryan Cash — Senior Software Engineer and SAP BTP Technical Lead"

export const CONTACT_EMAIL =
  process.env.BRYAN_EMAIL ?? "hello@cashbryan.com"

export const PERSON_ID = `${SITE_URL}/#person`
export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const SITE_KEYWORDS = [
  "senior software engineer",
  "SAP BTP technical lead",
  "SAP BTP developer",
  "SAPUI5 developer",
  "SAP Fiori developer",
  "enterprise application architecture",
  "enterprise frontend engineer",
  "integration technical lead",
  "React developer",
  "Next.js developer",
  "Salesforce Experience Cloud developer",
] as const

export const RSS_FEED_PATH = "/feed.xml"

/** Verified external profile URLs. Used in the Person schema `sameAs` and
 *  surfaced in the footer, About page, and Work With Me page. */
export const LINKEDIN_URL = "https://www.linkedin.com/in/cashbryan"
export const LINKEDIN_HANDLE = "linkedin.com/in/cashbryan"

export const GITHUB_URL = "https://github.com/bryan0578"
export const GITHUB_HANDLE = "@bryan0578"

/** Verified external profiles for `sameAs` and on-site display. */
export const SOCIAL_PROFILES = [
  { id: "linkedin", label: "LinkedIn", handle: LINKEDIN_HANDLE, url: LINKEDIN_URL },
  { id: "github", label: "GitHub", handle: GITHUB_HANDLE, url: GITHUB_URL },
] as const

export type SocialProfileId = (typeof SOCIAL_PROFILES)[number]["id"]
