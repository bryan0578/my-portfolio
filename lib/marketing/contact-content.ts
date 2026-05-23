import type { Metadata } from "next"
import type { FaqItem } from "./types"

export const contactMetadata: Metadata = {
  title: "Contact Bryan Cash | Hire an SAP BTP & Salesforce Developer",
  description:
    "Contact Bryan Cash to discuss SAP BTP development, SAPUI5/Fiori apps, Salesforce Experience Cloud, DevOps, and enterprise UI consulting engagements.",
}

export const contactContent = {
  h1: "Start a Project or Consulting Engagement",
  subtitle:
    "Tell me about your initiative. I typically respond within one to two business days.",
  intro: [
    "Whether you need an SAP BTP portal architect, SAPUI5 developer, Salesforce Experience Cloud specialist, or release management support, a short overview helps us determine fit quickly.",
    "Include your timeline, primary technology stack, and whether you are looking for project delivery, augmentation, or advisory support.",
  ],
  engagementTypes: [
    {
      title: "Project Delivery",
      description:
        "Defined scope: portal launch, application suite, governance documentation, or release stabilization.",
    },
    {
      title: "Team Augmentation",
      description:
        "Embed on an active SAP or Salesforce program with hands-on development or release ownership.",
    },
    {
      title: "Architecture & Advisory",
      description:
        "Extensibility strategy, UX standards, or technical reviews before major investment.",
    },
  ],
  faq: [
    {
      question: "What should I include in my message?",
      answer:
        "Organization (if shareable), timeline, platforms involved (SAP BTP, SAPUI5, Salesforce, etc.), team structure, and whether you need development, DevOps, or UX leadership.",
    },
    {
      question: "Do you sign NDAs?",
      answer:
        "Yes. Confidential details can be discussed under NDA after initial fit is established.",
    },
    {
      question: "What is your availability?",
      answer:
        "Availability varies by engagement. Share your target start date and duration; I will confirm capacity in my reply.",
    },
    {
      question: "Prefer email or a call?",
      answer:
        "Email is the best starting point. We can schedule a discovery call once scope is roughly aligned.",
    },
  ] satisfies FaqItem[],
}
