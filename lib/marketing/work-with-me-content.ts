import type { CaseStudyLink, FaqItem, RelatedServiceLink } from "./types"

export type ClientPersona = {
  title: string
  description: string
}

export type WorkEngagementModel = {
  id: string
  title: string
  description: string
  bestFor: string
  outcomes: string[]
  relevantServices: RelatedServiceLink[]
  ctaSubject: string
}

export type SupportedService = {
  href: string
  title: string
  description: string
}

export type ProcessStep = {
  number: string
  title: string
  description: string
}

export type WorkWithMeContent = {
  hero: {
    eyebrow: string
    h1: string
    subtitle: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
  }
  intro: string[]
  whoIWorkWith: {
    headline: string
    subheading: string
    personas: ClientPersona[]
  }
  engagementModels: {
    headline: string
    subheading: string
    models: WorkEngagementModel[]
  }
  servicesSupported: {
    headline: string
    subheading: string
    services: SupportedService[]
  }
  process: {
    headline: string
    subheading: string
    steps: ProcessStep[]
  }
  proof: {
    headline: string
    subheading: string
    cases: CaseStudyLink[]
  }
  fitCriteria: {
    goodFit: {
      headline: string
      items: string[]
    }
    notFit: {
      headline: string
      items: string[]
    }
  }
  faq: FaqItem[]
  finalCta: {
    headline: string
    description: string
    subject: string
  }
}

export const workWithMeContent: WorkWithMeContent = {
  hero: {
    eyebrow: "Engage Bryan Cash",
    h1: "Work with a senior enterprise UI architect",
    subtitle:
      "Senior delivery and architecture support for SAP BTP, SAPUI5, SAP Fiori, Salesforce Experience Cloud, Salesforce DevOps, and enterprise UI/UX programs. Built for teams that need adoption and outcomes, not just code.",
    primaryCta: { label: "Start a conversation", href: "/contact" },
    secondaryCta: { label: "Review case studies", href: "/projects" },
  },
  intro: [
    "I help enterprise programs ship and stabilize complex SAP and Salesforce work. That includes SAP BTP portals for external partners, SAPUI5 and Fiori application suites, Salesforce Experience Cloud portals, release management across parallel tracks, and UI/UX remediation on systems users have stopped trusting.",
    "Most of my engagements involve Fortune 500 programs, multi-vendor environments, and stakeholders who need both technical depth and clear communication. This page exists so you can understand exactly how to engage me before reaching out—what models I support, what fits, what doesn't, and what to expect from a first conversation.",
  ],
  whoIWorkWith: {
    headline: "Who I Work With",
    subheading:
      "Most engagements come from a few recurring profiles. If you recognize your team here, the conversation tends to be productive quickly.",
    personas: [
      {
        title: "Enterprise IT and Architecture Leaders",
        description:
          "VPs, directors, and enterprise architects responsible for SAP, Salesforce, or platform strategy. Hire me when an initiative needs senior architectural rigor, governance, or a credible delivery owner.",
      },
      {
        title: "SAP Program Teams",
        description:
          "SAP BTP, S/4HANA, and Fiori program owners running portal, extensibility, or UI initiatives. Engagements usually involve external partner portals, Clean Core extensibility, or SAPUI5/Fiori application delivery.",
      },
      {
        title: "Salesforce Delivery Teams",
        description:
          "Salesforce architects, leads, and release managers running Experience Cloud builds, multi-track development, or release management across Dev/QA/UAT/Production. Common engagements: portal development, release ownership, or DevOps process design.",
      },
      {
        title: "Product Owners and Program Managers",
        description:
          "Product leaders accountable for adoption, business outcomes, or vendor coordination. Hire me when delivery is technically progressing but UX, adoption, or release reliability needs senior ownership.",
      },
      {
        title: "Agencies and Implementation Partners",
        description:
          "Implementation partners, SIs, and boutique consultancies that need senior SAPUI5, SAP BTP, or Experience Cloud capacity for a defined engagement. Typically white-label or partner-of-record arrangements with direct client interaction.",
      },
      {
        title: "Internal Platform and CoE Teams",
        description:
          "Centers of Excellence and internal platform groups defining standards, extensibility patterns, or release governance. Engagements often produce documented standards, decision criteria, and reusable patterns the team can own going forward.",
      },
    ],
  },
  engagementModels: {
    headline: "Engagement Models",
    subheading:
      "Six models cover the majority of how I work with enterprise teams. Pick the one closest to your situation—we can refine the shape on a discovery call.",
    models: [
      {
        id: "project-delivery",
        title: "Project-Based Delivery",
        description:
          "Fixed-scope delivery against a defined outcome: a Build Work Zone portal launch, a SAPUI5 application suite, an Experience Cloud portal, or a release stabilization program. I own the technical delivery and partner with your team on planning, integration, and cutover.",
        bestFor:
          "Programs with a defined outcome, a sponsor, a target date, and clarity on what \"done\" means.",
        outcomes: [
          "Working software in production with documented handoff",
          "Architecture and decision records suitable for audit and onboarding",
          "Stakeholder communication aligned to delivery milestones",
        ],
        relevantServices: [
          { href: "/services/sap-btp-development", label: "SAP BTP Development" },
          {
            href: "/services/sapui5-fiori-development",
            label: "SAPUI5 & Fiori Development",
          },
          {
            href: "/services/salesforce-experience-cloud",
            label: "Salesforce Experience Cloud",
          },
        ],
        ctaSubject: "Project-Based Delivery Inquiry",
      },
      {
        id: "fractional-architecture",
        title: "Fractional Architecture Leadership",
        description:
          "Part-time architectural ownership across a portfolio of SAP BTP or Salesforce initiatives. Useful when you need senior architectural rigor and documented standards without committing to a full-time hire. I work alongside delivery teams, set patterns, and unblock high-stakes decisions.",
        bestFor:
          "Programs that need senior architectural ownership two to three days per week rather than a full-time architect.",
        outcomes: [
          "Documented architectural decisions and tradeoffs",
          "Governance standards teams can apply in sprint planning",
          "Reduced architecture-review bottleneck through pattern-based guidance",
        ],
        relevantServices: [
          { href: "/services/sap-btp-development", label: "SAP BTP Development" },
          { href: "/services/enterprise-ui-ux", label: "Enterprise UI/UX" },
        ],
        ctaSubject: "Fractional Architecture Inquiry",
      },
      {
        id: "staff-augmentation",
        title: "Staff Augmentation / Embedded Delivery",
        description:
          "Embed in an active SAP or Salesforce program as a senior contributor. Pull tickets, lead complex components, review PRs, and bring senior practices into the team. Most commonly used to add SAPUI5, SAP BTP, or Experience Cloud capacity without lengthy onboarding.",
        bestFor:
          "Active programs already moving that need senior throughput on specific platforms or layers.",
        outcomes: [
          "Senior-quality output from day one with minimal ramp",
          "Knowledge transfer through PR reviews and pairing",
          "Stability across release windows and parallel track coordination",
        ],
        relevantServices: [
          {
            href: "/services/sapui5-fiori-development",
            label: "SAPUI5 & Fiori Development",
          },
          {
            href: "/services/salesforce-experience-cloud",
            label: "Salesforce Experience Cloud",
          },
          { href: "/services/salesforce-devops", label: "Salesforce DevOps" },
        ],
        ctaSubject: "Staff Augmentation Inquiry",
      },
      {
        id: "technical-advisory",
        title: "Technical Advisory",
        description:
          "Strategic input on architecture, vendor selection, platform roadmaps, and pre-investment decisions. Engagements typically produce written deliverables—decision briefs, technical assessments, governance documents—that support executive-level decision-making.",
        bestFor:
          "Pre-investment decisions, vendor evaluations, or scoped technical reviews where written deliverables matter more than implementation.",
        outcomes: [
          "Written assessment or decision brief tailored to your context",
          "Roadmap recommendations with tradeoffs documented",
          "Reusable governance artifacts for ongoing program use",
        ],
        relevantServices: [
          { href: "/services/sap-btp-development", label: "SAP BTP Development" },
          { href: "/services/enterprise-ui-ux", label: "Enterprise UI/UX" },
        ],
        ctaSubject: "Technical Advisory Inquiry",
      },
      {
        id: "ux-adoption",
        title: "UX and Adoption Remediation",
        description:
          "Targeted work to fix UX and adoption problems in already-shipped SAP and Salesforce systems. Common scenarios: Fiori apps users avoid, Experience Cloud portals with low engagement, or Lightning UIs that drifted from a design system. Engagements are diagnosis-first, fixes second.",
        bestFor:
          "Programs facing adoption resistance, complaints about \"the new system,\" or measurable drop-off in user activity.",
        outcomes: [
          "Diagnosis of UX and adoption root causes—not just symptoms",
          "Targeted remediation work prioritized by impact",
          "Adoption framework the team can continue applying",
        ],
        relevantServices: [
          { href: "/services/enterprise-ui-ux", label: "Enterprise UI/UX" },
          {
            href: "/services/sapui5-fiori-development",
            label: "SAPUI5 & Fiori Development",
          },
        ],
        ctaSubject: "UX & Adoption Remediation Inquiry",
      },
      {
        id: "release-devops",
        title: "Release and DevOps Support",
        description:
          "Salesforce and SAP release ownership for programs running parallel tracks, frequent hotfixes, or production risk. Engagements cover release-manifest discipline, deployment validation, environment parity, and hotfix back-propagation policy.",
        bestFor:
          "Programs with parallel scrum tracks, drifting environments, or release-day production risk.",
        outcomes: [
          "Predictable release cadence with documented promotion process",
          "Conflict resolution moved out of Production into integration paths",
          "Hotfix and back-propagation policy in place",
        ],
        relevantServices: [
          { href: "/services/salesforce-devops", label: "Salesforce DevOps" },
        ],
        ctaSubject: "Release & DevOps Support Inquiry",
      },
    ],
  },
  servicesSupported: {
    headline: "Enterprise Services I Support",
    subheading:
      "Each service has its own page with engagement details, common challenges, technology stack, and proof. Use these as a starting point.",
    services: [
      {
        href: "/services/sap-btp-development",
        title: "SAP BTP Development",
        description:
          "Build Work Zone portals, CAP services, Fiori applications, and BTP-aligned extensibility for enterprise programs.",
      },
      {
        href: "/services/sapui5-fiori-development",
        title: "SAPUI5 & Fiori Development",
        description:
          "Custom SAPUI5 applications, Fiori Launchpad integration, and adoption-focused UX for SAP business workflows.",
      },
      {
        href: "/services/salesforce-experience-cloud",
        title: "Salesforce Experience Cloud",
        description:
          "B2B partner portals and B2C self-service experiences with LWC, Aura, Apex, and design-system fidelity.",
      },
      {
        href: "/services/salesforce-devops",
        title: "Salesforce DevOps",
        description:
          "Release ownership across Dev, QA, UAT, and Production. GitHub + SFDX discipline for programs with parallel tracks.",
      },
      {
        href: "/services/enterprise-ui-ux",
        title: "Enterprise UI/UX",
        description:
          "Design-system implementation, adoption strategy, and UX remediation for enterprise platforms users actually have to use.",
      },
    ],
  },
  process: {
    headline: "How the Process Works",
    subheading:
      "A predictable five-step flow from first message through engagement close. Most projects move through this same sequence regardless of engagement model.",
    steps: [
      {
        number: "01",
        title: "Discovery",
        description:
          "A short call or written exchange to understand your program, stack, stakeholders, timeline, and the outcome you're accountable for. The goal is shared clarity on whether the engagement is a fit before either side commits.",
      },
      {
        number: "02",
        title: "Architecture and Scope Review",
        description:
          "Review the technical context, current architecture, and constraints. Identify decision points, risks, and assumptions. For larger engagements, this step produces a short written brief that anchors the rest of the conversation.",
      },
      {
        number: "03",
        title: "Delivery Plan",
        description:
          "Define scope, engagement model, milestones, and how we'll measure progress. Agree on communication cadence, decision authority, and what handoff looks like. This is also where contracts and access are confirmed.",
      },
      {
        number: "04",
        title: "Implementation or Advisory Support",
        description:
          "Execute against the plan: code, architecture, governance, release management, or advisory deliverables. Communication is direct and rhythmic—usually a weekly status with risks surfaced early rather than late.",
      },
      {
        number: "05",
        title: "Handoff, Documentation, and Optimization",
        description:
          "Close the engagement with documentation, decision records, and operational runbooks where applicable. For longer engagements, the final phase includes a review against original outcomes and recommendations for ongoing optimization.",
      },
    ],
  },
  proof: {
    headline: "Proof in production",
    subheading:
      "The strongest commercial case studies, mapped to the engagement models above. Each case study includes business challenge, technical approach, architectural decisions, tradeoffs, outcomes, and lessons learned.",
    cases: [
      {
        slug: "manufacturer-portal",
        title: "SAP BTP Manufacturer Analytics Portal",
        description:
          "Multi-tenant SAP BTP portal for an external manufacturer/partner network, consolidating fragmented reporting and analytics under federated identity.",
        outcome:
          "22 SAPUI5 applications deployed, 40 legacy partner portals retired, federated identity with ABAC at the data layer.",
        relevance:
          "Flagship SAP BTP delivery with Build Work Zone, CAP services, and IAS-mediated identity federation.",
      },
      {
        slug: "enterprise-governance",
        title: "SAP BTP Extensibility Governance",
        description:
          "Clean Core extensibility standards for an S/4HANA program with multiple development teams.",
        outcome:
          "12 governance guidelines and 5 reusable extensibility patterns adopted across 8 stakeholder groups.",
        relevance:
          "Technical advisory and governance delivery aligned to Clean Core principles.",
      },
      {
        slug: "salesforce-devops",
        title: "Salesforce Release Management",
        description:
          "Release ownership across Dev, QA, UAT, and Production for a program with parallel development tracks.",
        outcome:
          "Stable bi-weekly Production releases with formalized hotfix back-propagation and integration-branch conflict resolution.",
        relevance:
          "Release and DevOps support for a multi-track Salesforce program.",
      },
      {
        slug: "partner-portal",
        title: "Partner Warranty Portal",
        description:
          "Salesforce Experience Cloud portal surfacing warranty and RGA data inline in support workflows.",
        outcome:
          "LWC + Aura components and Apex logic delivering CRM-integrated data inside existing case page layouts.",
        relevance:
          "Experience Cloud portal build with embedded data visibility for support agents.",
      },
      {
        slug: "utility-customer-portal",
        title: "Utility Customer Self-Service Portal",
        description:
          "Large-scale B2C Experience Cloud portal for service management, billing, and outage reporting.",
        outcome:
          "Aura components implemented against a custom design system, with email templates aligned to portal UX.",
        relevance:
          "Experience Cloud B2C build with design-system fidelity in production code.",
      },
      {
        slug: "fuel-management",
        title: "Fuel Vendor Invoice Management",
        description:
          "Four SAPUI5 form applications replacing manual fuel-data entry with validated workflows for 20+ daily users.",
        outcome:
          "Validation enforced at point of entry, OData integration, and reduced invoice discrepancies for AP.",
        relevance:
          "SAPUI5 delivery for operational workflows with vendor-contract validation.",
      },
      {
        slug: "kpmg-client-dashboard",
        title: "Client Data Dashboard (SAPUI5)",
        description:
          "SAPUI5 master-detail application integrated into Fiori Launchpad with in-app onboarding for new users.",
        outcome:
          "Structured navigation across client records with embedded onboarding reducing first-visit friction.",
        relevance:
          "SAPUI5/Fiori delivery emphasizing usability and onboarding inside Fiori Launchpad.",
      },
    ],
  },
  fitCriteria: {
    goodFit: {
      headline: "When It Is a Good Fit",
      items: [
        "SAP BTP portal or extensibility initiatives requiring senior architectural ownership",
        "SAPUI5 or Fiori application delivery for enterprise business workflows",
        "Salesforce Experience Cloud portal builds for B2B partners or B2C self-service",
        "Salesforce release management challenges across Dev/QA/UAT/Production",
        "Enterprise UX or adoption problems on already-shipped SAP/Salesforce systems",
        "Programs needing senior technical ownership without a full-time architect hire",
        "Clean Core extensibility governance and standards work",
        "Pre-investment technical assessments or vendor evaluations",
      ],
    },
    notFit: {
      headline: "When It Is Not a Fit",
      items: [
        "Junior dev task lists or ticket-pulling without architectural responsibility",
        "Generic website builds with no enterprise complexity, integration, or stakeholder coordination",
        "Engagements requiring unsupported performance claims, vendor preference statements, or NDA violations",
        "Projects without identified decision-making authority or ownership on the client side",
        "Rate-shopping engagements where the primary selection criterion is cost",
        "Programs requiring on-site presence outside negotiated travel agreements",
      ],
    },
  },
  faq: [
    {
      question: "What is your current availability?",
      answer:
        "Availability varies by engagement type. Project-based and embedded engagements typically book one to two months out; advisory engagements often have shorter lead times. Share your target start date and duration and I'll confirm capacity in my reply.",
    },
    {
      question: "Do you work remotely or on-site?",
      answer:
        "Most engagements are fully remote across North American business hours. On-site visits can be arranged for kickoffs, critical workshops, or cutover support under a negotiated travel agreement.",
    },
    {
      question: "Are engagements typically contract or advisory?",
      answer:
        "Both. Project delivery and staff augmentation engagements are usually contract-based with defined scope or hours. Advisory engagements are scoped to a deliverable—an assessment, a brief, or a governance artifact—rather than ongoing hours.",
    },
    {
      question: "What does an SAP BTP consulting engagement typically look like?",
      answer:
        "SAP BTP engagements usually involve a Build Work Zone portal or CAP-based extensibility initiative. Scope ranges from architecture and identity strategy through full delivery with Fiori applications. See the SAP BTP service page and Manufacturer Portal case study for representative examples.",
    },
    {
      question: "What does a Salesforce consulting engagement typically look like?",
      answer:
        "Salesforce engagements span Experience Cloud portal development, release management across multiple environments, and design-system implementation in Aura or LWC. Engagement model depends on whether you need delivery, embedded capacity, or release ownership.",
    },
    {
      question: "How is project handoff and documentation handled?",
      answer:
        "Every engagement includes documentation as part of close: architecture decision records, operational runbooks, and onboarding-ready materials for the team taking over. Larger engagements include a final review against original outcomes and recommendations for optimization.",
    },
    {
      question: "Can sensitive details be discussed under NDA?",
      answer:
        "Yes. Mutual NDAs are standard practice. Initial discovery conversations stay at a level appropriate for an unsigned context; once an NDA is in place, we can discuss specifics, architecture, and stakeholders openly. All case study content on this site is NDA-safe by design.",
    },
    {
      question: "What should I expect from a discovery call?",
      answer:
        "A 30 to 45 minute conversation focused on your program shape, stack, stakeholders, timeline, and the outcome you're accountable for. The goal is shared clarity on whether the engagement is a fit and what the next step should be. No pressure to commit on the call.",
    },
    {
      question: "How should I prepare before reaching out?",
      answer:
        "A short overview helps: organization (if shareable), timeline, primary platforms (SAP BTP, SAPUI5, Salesforce, etc.), engagement type you're considering, and the business outcome you want. The more specific the brief, the faster we can determine fit.",
    },
    {
      question: "What engagement types are most common?",
      answer:
        "Project-based delivery and staff augmentation are the most common, followed by release/DevOps support and advisory engagements. Fractional architecture and UX remediation engagements are more selective and depend on capacity.",
    },
  ],
  finalCta: {
    headline: "Discuss a SAP BTP, Salesforce, or Enterprise UI Engagement",
    description:
      "Share a short brief and I'll respond within one to two business days. If you're not sure which engagement model fits, that's a perfectly valid starting point.",
    subject: "Engagement Inquiry — Work With Me",
  },
}
