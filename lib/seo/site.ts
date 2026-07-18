/** Canonical production URL — used for metadata, JSON-LD, and sitemap. */
export const SITE_URL = "https://cashbryan.com"

export const SITE_NAME = "Bryan Cash"

export const SITE_TAGLINE =
  "Developer & Enterprise UI Architect | SAP BTP & Salesforce"

/** Canonical brand positioning for metadata and structured data. */
export const SITE_DESCRIPTION =
  "Bryan Cash is a developer, enterprise UI architect, and technical creator helping teams build practical systems for SAP BTP, SAPUI5, Salesforce, and modern frontend platforms that turn complexity into clarity."

export const DEFAULT_OG_IMAGE = "/og-image.png"

export const DEFAULT_OG_IMAGE_ALT =
  "Bryan Cash — developer and enterprise UI architect for SAP BTP, SAPUI5, and Salesforce"

export const CONTACT_EMAIL =
  process.env.BRYAN_EMAIL ?? "hello@cashbryan.com"

export const PERSON_ID = `${SITE_URL}/#person`
export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const SITE_KEYWORDS = [
  "SAP BTP developer",
  "SAPUI5 developer",
  "SAP Fiori developer",
  "Salesforce Experience Cloud developer",
  "Salesforce DevOps consultant",
  "enterprise UI architect",
  "enterprise software consulting",
  "technical creator",
  "frontend delivery",
] as const

export const RSS_FEED_PATH = "/feed.xml"

/** Canonical external profile URLs. Used in the Person schema `sameAs` and
 *  surfaced in the footer, About page, and Work With Me page. */
export const LINKEDIN_URL = "https://www.linkedin.com/in/cashbryan/"
export const LINKEDIN_HANDLE = "linkedin.com/in/cashbryan"

export const GITHUB_URL = "https://github.com/bryan0578"
export const GITHUB_HANDLE = "@bryan0578"

/** Verified external profiles for `sameAs` and on-site display. */
export const SOCIAL_PROFILES = [
  { id: "linkedin", label: "LinkedIn", handle: LINKEDIN_HANDLE, url: LINKEDIN_URL },
  { id: "github", label: "GitHub", handle: GITHUB_HANDLE, url: GITHUB_URL },
] as const

export type SocialProfileId = (typeof SOCIAL_PROFILES)[number]["id"]
