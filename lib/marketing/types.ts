import type { Metadata } from "next"

export type CaseStudyLink = {
  slug: string
  title: string
  description: string
  /** Measurable or qualitative outcome from the case study */
  outcome?: string
  /** Why this project is relevant to prospects on this service page */
  relevance?: string
}

export type ClientChallenge = {
  title: string
  description: string
}

export type EngagementModel = {
  title: string
  description: string
  /** When this model is the right fit */
  bestFor: string
}

export type TechStackGroup = {
  category: string
  items: string[]
}

export type RelatedServiceLink = {
  href: string
  label: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type ContentSection = {
  id?: string
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export type ServicePageContent = {
  slug: string
  metadata: Metadata
  eyebrow: string
  h1: string
  subtitle: string
  intro: string[]
  /** Signals for buyers evaluating fit (metrics, credentials, delivery context) */
  trustSignals: string[]
  /** When to hire — search-intent alignment for commercial visitors */
  whenToHire: string[]
  challenges: ClientChallenge[]
  /** Solutions and delivery approach */
  approach: ContentSection[]
  engagementModels: EngagementModel[]
  techStack: TechStackGroup[]
  proof: CaseStudyLink[]
  relatedServices: RelatedServiceLink[]
  faq: FaqItem[]
  cta: {
    headline: string
    description: string
    subject: string
  }
  midCta?: {
    headline: string
    description: string
  }
}

export type ServiceHubCard = {
  slug: string
  title: string
  description: string
  href: string
  keywords: string[]
}
