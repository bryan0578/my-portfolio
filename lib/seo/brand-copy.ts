import { SITE_DESCRIPTION } from "./site"

/** SEO-friendly suffix appended to brand descriptions where space allows. */
export const SITE_SEO_SUFFIX =
  "SAP BTP, SAPUI5, Salesforce Experience Cloud, and modern frontend delivery."

export function withSeoContext(description: string): string {
  if (description.includes("SAP BTP") || description.includes("Salesforce")) {
    return description
  }
  return `${description} ${SITE_SEO_SUFFIX}`
}

export { SITE_DESCRIPTION }
