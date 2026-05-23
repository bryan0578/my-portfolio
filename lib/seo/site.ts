/** Canonical production URL — used for metadata, JSON-LD, and sitemap. */
export const SITE_URL = "https://cashbryan.com"

export const SITE_NAME = "Bryan Cash"

export const SITE_TAGLINE = "SAP BTP Lead & Enterprise UI Architect"

export const DEFAULT_OG_IMAGE = "/og-image.png"

export const DEFAULT_OG_IMAGE_ALT =
  "Bryan Cash — SAP BTP, SAPUI5, and Salesforce enterprise development"

export const CONTACT_EMAIL =
  process.env.BRYAN_EMAIL ?? "bryancash.dev@gmail.com"

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
] as const
