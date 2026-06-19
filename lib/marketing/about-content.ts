import type { Metadata } from "next"
import type { ContentSection, FaqItem } from "./types"

export const aboutMetadata: Metadata = {
  title: "About Bryan Cash | SAP BTP Consultant & Enterprise UI Architect",
  description:
    "Enterprise developer and UI architect specializing in SAP BTP, SAPUI5, Salesforce Experience Cloud, DevOps, and adoption-focused delivery for Fortune 500 programs.",
}

export const aboutContent = {
  h1: "Enterprise Developer & UI Architect for SAP and Salesforce",
  subtitle:
    "I help organizations deliver SAP BTP platforms, SAPUI5/Fiori applications, and Salesforce portals that people actually use.",
  intro: [
    "I am Bryan Cash—an enterprise-focused developer and UI architect with deep experience bridging SAP Business Technology Platform, Salesforce, and modern frontend stacks. My work sits at the intersection of architecture, hands-on development, and user experience: the place where technical decisions show up in adoption numbers.",
    "I have led and contributed to programs including multi-tenant manufacturer portals, Clean Core extensibility governance, Salesforce release management, and large-scale customer self-service experiences. I am equally comfortable in the architecture workshop, the codebase, and the demo room.",
  ],
  sections: [
    {
      title: "What I Bring to Enterprise Programs",
      paragraphs: [
        "Clients engage me when they need senior delivery—not generic staffing. I take ownership of outcomes: secure portals, maintainable components, clear documentation, and interfaces aligned to how people work.",
      ],
      bullets: [
        "SAP BTP: CAP, Build Work Zone, IAS/SSO, multi-tenant portals, extensibility governance",
        "SAPUI5 & Fiori: workflow apps, Launchpad experiences, OData-integrated interfaces",
        "Salesforce: Experience Cloud portals (LWC/Aura), DevOps and SFDX release management",
        "UI/UX: design systems, prototyping, accessibility-aware enterprise interfaces",
        "Modern stack: React, Next.js, TypeScript for product-style web platforms",
        "Executive enablement: technical demos, stakeholder walkthroughs, and SAP SAPPHIRE-style storytelling for leadership audiences",
      ],
    } satisfies ContentSection,
    {
      title: "How I Work With Clients",
      paragraphs: [
        "Engagements are structured for clarity: defined scope, regular communication, and deliverables your team can operate after handoff. I work with internal IT, systems integrators, and mixed vendor teams.",
      ],
      bullets: [
        "Project-based delivery for defined portal, app, or release initiatives",
        "Contract augmentation on active SAP or Salesforce programs",
        "Advisory on architecture, extensibility, and UX standards",
        "NDA-safe communication; client details shared only at appropriate levels",
      ],
    } satisfies ContentSection,
    {
      title: "Proof at a Glance",
      paragraphs: [
        "Representative outcomes from recent programs (details in case studies):",
      ],
      bullets: [
        "22 custom SAP Fiori applications deployed in a unified SAP BTP manufacturer portal",
        "40+ legacy portals retired in favor of a centralized external partner experience",
        "Average user adoption improvement around 30% on portal initiatives",
        "20+ product demonstrations delivered to Fortune 500 stakeholders",
        "End-to-end Salesforce release ownership across Dev, QA, UAT, and Production",
      ],
    } satisfies ContentSection,
  ] as ContentSection[],
  faq: [
    {
      question: "What industries have you worked in?",
      answer:
        "Experience spans manufacturing, healthcare-adjacent programs, utilities, professional services, and rail—always with NDA-appropriate descriptions in public materials.",
    },
    {
      question: "Are you available for remote work?",
      answer:
        "Yes. I work effectively with distributed teams across time zones and align meeting cadence to program needs.",
    },
    {
      question: "Do you take full-time roles?",
      answer:
        "My focus is consulting and contract engagement. For the right long-term partnership, we can discuss extended engagements.",
    },
    {
      question: "Where can I see examples of your work?",
      answer:
        "Browse the Projects page for SAP BTP, Salesforce, and UI case studies, or explore Services for how I package offerings.",
    },
  ] satisfies FaqItem[],
}
