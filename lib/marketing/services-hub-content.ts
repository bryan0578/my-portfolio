import type { Metadata } from "next"
import type { FaqItem } from "./types"

export const servicesHubMetadata: Metadata = {
  title: "Enterprise Development Services | SAP BTP, SAPUI5 & Salesforce",
  description:
    "Enterprise software consulting services: SAP BTP development, SAPUI5/Fiori apps, Salesforce Experience Cloud, Salesforce DevOps, and UI/UX for complex organizations.",
}

export const servicesHubContent = {
  h1: "Enterprise SAP, Salesforce & UI Development Services",
  subtitle:
    "Focused offerings for organizations modernizing on SAP BTP, delivering Fiori experiences, and scaling Salesforce portals with adoption, governance, and release discipline.",
  intro: [
    "I work with enterprise IT leaders, delivery managers, and SI partners who need senior hands-on expertise—not a generic dev shop. Each service below maps to proven case studies and a clear engagement model.",
    "Explore a service area, review related projects, and reach out when you are ready to discuss scope.",
  ],
  whySection: {
    title: "Why Work With a Specialist",
    bullets: [
      "Single practitioner accountability from architecture through UI delivery",
      "Cross-platform fluency: SAP BTP, SAPUI5, Salesforce, React/Next.js",
      "Adoption and release outcomes, not feature checklists",
      "NDA-safe collaboration with Fortune 500 delivery cultures",
    ],
  },
  modernStackNote: {
    title: "Modern Web & Product Delivery",
    paragraphs: [
      "Alongside enterprise SAP and Salesforce work, I build React and Next.js applications for product-style experiences—config-driven platforms, marketing sites, and API-integrated UIs. See the Dorsyth Records platform case study for a recent example.",
    ],
  },
  faq: [
    {
      question: "Which service should we start with?",
      answer:
        "Match your immediate pain: portal or BTP architecture → SAP BTP Development; new Fiori apps → SAPUI5 & Fiori; customer/partner site → Experience Cloud; deployment risk → Salesforce DevOps; inconsistent UX → Enterprise UI/UX.",
    },
    {
      question: "Can you combine services on one program?",
      answer:
        "Yes. Many engagements span BTP portal delivery plus SAPUI5 apps, or Experience Cloud development plus DevOps release ownership.",
    },
    {
      question: "Do you offer fixed-price or time-and-materials?",
      answer:
        "Both are possible depending on scope clarity. We align commercial terms after a short discovery conversation.",
    },
    {
      question: "How do case studies relate to services?",
      answer:
        "Each service page links to relevant projects demonstrating approach and outcomes—without exposing confidential client details.",
    },
  ] satisfies FaqItem[],
}
