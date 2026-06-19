export const CONTACT_EMAIL =
  process.env.BRYAN_EMAIL ?? "hello@cashbryan.com"

export function buildMailtoHref(
  subject?: string,
  body?: string,
  email: string = CONTACT_EMAIL
) {
  const params = new URLSearchParams()
  if (subject) params.set("subject", subject)
  if (body) params.set("body", body)
  const query = params.toString()
  return `mailto:${email}${query ? `?${query}` : ""}`
}

export const defaultConsultingSubject =
  "Inquiry from Portfolio: SAP BTP / Enterprise Consulting"

export const defaultConsultingBody = [
  "Hi Bryan,",
  "",
  "I am reaching out regarding a potential engagement. Here is a brief overview of the initiative:",
  "",
  "- Organization:",
  "- Timeline:",
  "- Primary technology stack (SAP BTP, SAPUI5, Salesforce, etc.):",
  "- Scope:",
  "",
  "I would appreciate the opportunity to discuss fit and availability.",
  "",
  "Thank you,",
].join("\n")
