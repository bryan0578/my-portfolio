import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  ORGANIZATION_ID,
  PERSON_ID,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  WEBSITE_ID,
} from "./site"
import { absoluteUrl } from "./metadata"

export type BreadcrumbItem = {
  name: string
  path: string
}

export function buildPersonSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    jobTitle: SITE_TAGLINE,
    knowsAbout: [
      "SAP Business Technology Platform",
      "SAPUI5",
      "SAP Fiori",
      "Salesforce Experience Cloud",
      "Salesforce DevOps",
      "Enterprise UI/UX",
      "React",
      "Next.js",
    ],
    sameAs: [SITE_URL, LINKEDIN_URL, GITHUB_URL],
  }
}

export function buildProfessionalServiceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: `${SITE_NAME} — Enterprise Development Consulting`,
    url: absoluteUrl("/services"),
    description:
      "SAP BTP development, SAPUI5/Fiori applications, Salesforce Experience Cloud portals, Salesforce DevOps, and enterprise UI/UX consulting.",
    provider: { "@id": PERSON_ID },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: [
      "SAP BTP Development",
      "SAPUI5 Development",
      "SAP Fiori Development",
      "Salesforce Experience Cloud Development",
      "Salesforce DevOps",
      "Enterprise UI/UX Consulting",
    ],
    email: CONTACT_EMAIL,
  }
}

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: `${SITE_NAME} Portfolio`,
    description:
      "Enterprise SAP BTP, SAPUI5, Salesforce, and UI architecture consulting portfolio with case studies and technical writing.",
    publisher: { "@id": PERSON_ID },
    inLanguage: "en-US",
  }
}

export function buildWebPageSchema(options: {
  path: string
  name: string
  description: string
  pageId?: string
}) {
  const url = absoluteUrl(options.path)
  return {
    "@type": "WebPage",
    "@id": options.pageId ?? `${url}#webpage`,
    url,
    name: options.name,
    description: options.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    inLanguage: "en-US",
  }
}

export function buildAboutPageSchema(options: {
  name: string
  description: string
}) {
  const url = absoluteUrl("/about")
  return [
    buildWebPageSchema({
      path: "/about",
      name: options.name,
      description: options.description,
      pageId: `${url}#webpage`,
    }),
    {
      "@type": "AboutPage",
      "@id": `${url}#aboutpage`,
      url,
      name: options.name,
      description: options.description,
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
    },
  ]
}

export function buildContactPageSchema(options: {
  name: string
  description: string
}) {
  const url = absoluteUrl("/contact")
  return [
    buildWebPageSchema({
      path: "/contact",
      name: options.name,
      description: options.description,
      pageId: `${url}#webpage`,
    }),
    {
      "@type": "ContactPage",
      "@id": `${url}#contactpage`,
      url,
      name: options.name,
      description: options.description,
      isPartOf: { "@id": WEBSITE_ID },
    },
  ]
}

export function buildServiceSchema(options: {
  path: string
  name: string
  description: string
  serviceType?: string
}) {
  const url = absoluteUrl(options.path)
  return [
    buildWebPageSchema({
      path: options.path,
      name: options.name,
      description: options.description,
      pageId: `${url}#webpage`,
    }),
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: options.name,
      description: options.description,
      url,
      serviceType: options.serviceType ?? options.name,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
  ]
}

export function buildBlogPostingSchema(options: {
  path: string
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  keywords?: string[]
}) {
  const url = absoluteUrl(options.path)
  return [
    buildWebPageSchema({
      path: options.path,
      name: options.headline,
      description: options.description,
      pageId: `${url}#webpage`,
    }),
    {
      "@type": "BlogPosting",
      "@id": `${url}#blogposting`,
      headline: options.headline,
      description: options.description,
      url,
      datePublished: options.datePublished,
      dateModified: options.dateModified ?? options.datePublished,
      author: { "@id": PERSON_ID },
      publisher: { "@id": ORGANIZATION_ID },
      mainEntityOfPage: { "@id": `${url}#webpage` },
      inLanguage: "en-US",
      keywords: options.keywords?.join(", "),
    },
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: options.headline,
      description: options.description,
      url,
      datePublished: options.datePublished,
      dateModified: options.dateModified ?? options.datePublished,
      author: { "@id": PERSON_ID },
      publisher: { "@id": ORGANIZATION_ID },
      mainEntityOfPage: { "@id": `${url}#webpage` },
    },
  ]
}

export function buildCollectionPageSchema(options: {
  path: string
  name: string
  description: string
}) {
  const url = absoluteUrl(options.path)
  return {
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name: options.name,
    description: options.description,
    isPartOf: { "@id": WEBSITE_ID },
  }
}

export function buildCreativeWorkSchema(options: {
  path: string
  name: string
  description: string
  keywords?: string[]
}) {
  const url = absoluteUrl(options.path)
  return [
    buildWebPageSchema({
      path: options.path,
      name: options.name,
      description: options.description,
      pageId: `${url}#webpage`,
    }),
    {
      "@type": "CreativeWork",
      "@id": `${url}#creativework`,
      name: options.name,
      description: options.description,
      url,
      author: { "@id": PERSON_ID },
      keywords: options.keywords?.join(", "),
    },
  ]
}

export function buildFaqPageSchema(
  faqs: { question: string; answer: string }[],
  options?: { path?: string }
) {
  const url = options?.path ? absoluteUrl(options.path) : undefined
  return {
    "@type": "FAQPage",
    ...(url ? { "@id": `${url}#faqpage` } : {}),
    ...(url ? { url } : {}),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(items[items.length - 1]?.path ?? "/")}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function buildGlobalSchemas() {
  return [buildPersonSchema(), buildProfessionalServiceSchema(), buildWebSiteSchema()]
}
