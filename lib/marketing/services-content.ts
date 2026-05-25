import type { ServiceHubCard, ServicePageContent } from "./types"

export const serviceHubCards: ServiceHubCard[] = [
  {
    slug: "sap-btp-development",
    title: "SAP BTP Development",
    description:
      "Portals, CAP backends, identity federation, and extensibility aligned to Clean Core principles.",
    href: "/services/sap-btp-development",
    keywords: ["SAP BTP", "CAP", "Build Work Zone", "IAS"],
  },
  {
    slug: "sapui5-fiori-development",
    title: "SAPUI5 & SAP Fiori",
    description:
      "Form-based workflows, Fiori Launchpad apps, and master-detail experiences that improve adoption.",
    href: "/services/sapui5-fiori-development",
    keywords: ["SAPUI5", "Fiori", "OData", "Launchpad"],
  },
  {
    slug: "salesforce-experience-cloud",
    title: "Salesforce Experience Cloud",
    description:
      "Customer and partner portals with LWC, Aura, and design-system-driven UX at scale.",
    href: "/services/salesforce-experience-cloud",
    keywords: ["Experience Cloud", "LWC", "Aura", "Portals"],
  },
  {
    slug: "salesforce-devops",
    title: "Salesforce DevOps",
    description:
      "SFDX release management, metadata promotion, and multi-environment deployment ownership.",
    href: "/services/salesforce-devops",
    keywords: ["SFDX", "CI/CD", "Release Management"],
  },
  {
    slug: "enterprise-ui-ux",
    title: "Enterprise UI/UX",
    description:
      "Design systems, portal UX, and accessibility-first interfaces for regulated industries.",
    href: "/services/enterprise-ui-ux",
    keywords: ["Design Systems", "Portal UX", "Fiori UX"],
  },
]

const workWithMeLink = { href: "/work-with-me", label: "Engagement Options" }

const related = {
  sapBtp: [
    { href: "/services/sapui5-fiori-development", label: "SAPUI5 & Fiori" },
    { href: "/services/enterprise-ui-ux", label: "Enterprise UI/UX" },
    workWithMeLink,
  ],
  sapui5: [
    { href: "/services/sap-btp-development", label: "SAP BTP Development" },
    { href: "/services/enterprise-ui-ux", label: "Enterprise UI/UX" },
    workWithMeLink,
  ],
  salesforceCloud: [
    { href: "/services/salesforce-devops", label: "Salesforce DevOps" },
    { href: "/services/enterprise-ui-ux", label: "Enterprise UI/UX" },
    workWithMeLink,
  ],
  salesforceDevops: [
    { href: "/services/salesforce-experience-cloud", label: "Experience Cloud" },
    { href: "/services/sap-btp-development", label: "SAP BTP Development" },
    workWithMeLink,
  ],
  uiUx: [
    { href: "/services/sap-btp-development", label: "SAP BTP Development" },
    { href: "/services/salesforce-experience-cloud", label: "Experience Cloud" },
    workWithMeLink,
  ],
}

export const sapBtpDevelopment: ServicePageContent = {
  slug: "sap-btp-development",
  metadata: {
    title: "SAP BTP Developer | CAP, Work Zone & Portal Development",
    description:
      "Hire an SAP BTP developer for multi-tenant portals, CAP services, Build Work Zone, and identity federation. Enterprise case studies and proven delivery.",
  },
  eyebrow: "SAP BTP Development Services",
  h1: "SAP BTP Development Services",
  subtitle:
    "Architect and deliver secure SAP Business Technology Platform solutions—from CAP backends to partner-facing portals.",
  intro: [
    "You are likely here because an SAP modernization program needs a senior practitioner who can own architecture and delivery—not slideware. I help enterprises build on SAP BTP where external users, identity, and UX cannot be afterthoughts.",
    "My work spans multi-tenant portals, CAP service layers, IAS/Okta federation, and Clean Core extensibility governance. I integrate with your SI, internal CoE, security, and basis teams while staying accountable for outcomes your stakeholders can measure.",
  ],
  trustSignals: [
    "22 custom Fiori apps in a unified BTP manufacturer portal",
    "40+ legacy portals retired into one governed entry point",
    "~40% user adoption improvement on portal programs",
    "Fortune 500 demo and delivery experience",
    "Hands-on CAP, Work Zone, and IAS delivery—not advisory-only",
  ],
  whenToHire: [
    "You are launching or replatforming an external partner or manufacturer portal on SAP BTP.",
    "Multiple teams need a single secure entry point with tenant-specific data access.",
    "Clean Core / S/4HANA strategy requires practical BTP extensibility standards—not theory.",
    "Identity federation (Okta, IAS, XSUAA) is blocking go-live or creating security risk.",
    "Internal teams need a senior developer-architect who can also document standards for scale.",
  ],
  challenges: [
    {
      title: "Fragmented portals and reporting silos",
      description:
        "External partners access data across disconnected tools with inconsistent security. Reporting delays and duplicate logins erode trust and increase operational overhead.",
    },
    {
      title: "Identity and multi-tenant access complexity",
      description:
        "Federating corporate IdPs with SAP Cloud Identity Services, mapping attributes to ABAC rules, and enforcing tenant isolation in CAP is easy to underestimate until go-live pressure mounts.",
    },
    {
      title: "Unclear extensibility decisions under Clean Core",
      description:
        "Teams struggle to choose Side-by-Side vs In-App patterns, which BTP services to adopt, and how to document decisions so development stays governable.",
    },
    {
      title: "Delivery gaps between architecture and adoption",
      description:
        "Blueprints exist, but portals ship without workflows users understand—driving low adoption and rework after launch.",
    },
  ],
  approach: [
    {
      title: "Solutions & Delivery Approach",
      paragraphs: [
        "I start with the user journeys and security boundaries that must hold in production, then shape BTP services around them. Delivery is iterative: prove critical paths, harden identity and data access, then expand application coverage.",
      ],
      bullets: [
        "Discovery: persona mapping, data boundaries, and integration points with S/4, analytics, and IdP",
        "Architecture: Work Zone structure, CAP service design, ABAC model, and environment strategy",
        "Build: SAPUI5/Fiori apps, OData services, federation configuration, and CI/CD alignment",
        "Governance: extensibility standards, decision trees, and team enablement documentation",
        "Stabilization: adoption feedback, defect triage, and handoff for long-term operations",
      ],
    },
    {
      title: "What You Get",
      paragraphs: [
        "Tangible outputs—not open-ended staff augmentation without direction.",
      ],
      bullets: [
        "Reference architectures and implementation patterns your teams can reuse",
        "Working portal and CAP services integrated with your landscape",
        "Identity federation configuration with attribute-driven access control",
        "Technical documentation suitable for CoE and audit audiences",
      ],
    },
  ],
  engagementModels: [
    {
      title: "Project delivery",
      description:
        "Fixed-scope initiative: portal MVP, CAP backend, identity integration, or governance pack with defined milestones and acceptance criteria.",
      bestFor: "New BTP programs with a target go-live window",
    },
    {
      title: "Senior augmentation",
      description:
        "Embed on an active SAP program as lead developer-architect while your team scales feature delivery.",
      bestFor: "In-flight transformations needing hands-on leadership",
    },
    {
      title: "Architecture & governance advisory",
      description:
        "Short, high-impact engagement to define extensibility standards, service selection, and review in-progress designs before major spend.",
      bestFor: "CoEs establishing Clean Core guardrails",
    },
  ],
  techStack: [
    {
      category: "Platform & runtime",
      items: ["SAP BTP Cloud Foundry", "SAP Build Work Zone", "SAP Cloud Identity Services (IAS)", "XSUAA"],
    },
    {
      category: "Development",
      items: ["SAP CAP (Node.js)", "SAPUI5", "SAP Fiori", "OData v4", "ABAC in CAP"],
    },
    {
      category: "Integration & identity",
      items: ["Okta federation", "SAML attribute mapping", "SAP Datasphere (analytics integration)"],
    },
    {
      category: "Delivery",
      items: ["Git-based CI/CD", "Technical documentation", "Agile / SAFe-aligned ceremonies"],
    },
  ],
  proof: [
    {
      slug: "manufacturer-portal",
      title: "Manufacturer Analytics Portal",
      description:
        "Centralized SAP BTP portal replacing fragmented Power BI experiences for external manufacturers, with CAP backend and Work Zone delivery.",
      outcome: "22 custom apps deployed; 40+ legacy portals retired; Okta–IAS federation with ABAC",
      relevance:
        "Reference for large-scale external portal architecture, multi-tenant access, and phased go-live.",
    },
    {
      slug: "enterprise-governance",
      title: "SAP BTP Extensibility Governance",
      description:
        "Standards and decision criteria for Side-by-Side vs In-App extensibility aligned to Clean Core on S/4HANA.",
      outcome: "Documented BTP service patterns and practical guidance development teams could apply",
      relevance:
        "Reference when you need governance before dozens of teams build on BTP differently.",
    },
    {
      slug: "fuel-management",
      title: "Fuel Vendor Invoice Management",
      description:
        "SAPUI5 form applications with validation and OData integration supporting vendor invoicing accuracy.",
      outcome: "Four workflow apps reducing manual entry errors before backend submission",
      relevance:
        "Shows BTP-adjacent UI delivery integrated with governed backend services.",
    },
  ],
  relatedServices: related.sapBtp,
  faq: [
    {
      question: "Do you only advise, or do you write production code?",
      answer:
        "Both, but my value is strongest when I am hands-on—CAP services, portal configuration, UI delivery, and documentation. Advisory-only engagements are available for short architecture windows.",
    },
    {
      question: "Can you work alongside our systems integrator?",
      answer:
        "Yes. I regularly partner with SI delivery teams—owning workstreams such as portal, identity, or extensibility standards while aligning to their program governance.",
    },
    {
      question: "We already have a BTP subaccount. Can you start quickly?",
      answer:
        "If access, landscape documentation, and a prioritized backlog exist, I can begin with discovery and a thin vertical slice within the first sprint cycle.",
    },
    {
      question: "How is success measured?",
      answer:
        "Agreed per engagement—commonly secure go-live, adoption metrics, reduction in legacy endpoints, and teams enabled to extend patterns without one-off implementations.",
    },
    {
      question: "What should I send in an initial inquiry?",
      answer:
        "Timeline, user types (internal/external), target BTP services, IdP landscape, and whether you need build, governance, or both.",
    },
  ],
  midCta: {
    headline: "Planning a BTP portal or extensibility program?",
    description:
      "Share your timeline and landscape. I will respond with how I have approached similar programs and whether there is a fit.",
  },
  cta: {
    headline: "Discuss Your SAP BTP Initiative",
    description:
      "Email me a short brief on your portal, CAP, or governance needs. I typically respond within one to two business days with availability and suggested next steps.",
    subject: "SAP BTP Development Inquiry",
  },
}

export const sapui5FioriDevelopment: ServicePageContent = {
  slug: "sapui5-fiori-development",
  metadata: {
    title: "SAPUI5 & SAP Fiori Developer | Enterprise UI Applications",
    description:
      "SAPUI5 and SAP Fiori development for workflows, Launchpad apps, and master-detail dashboards. Proven enterprise delivery and adoption-focused UX.",
  },
  eyebrow: "SAPUI5 & Fiori Development",
  h1: "SAPUI5 & Fiori Application Development",
  subtitle:
    "Build form-based workflows, Launchpad applications, and data-rich SAPUI5 experiences that users adopt.",
  intro: [
    "Search intent here is usually clear: you need a developer who can ship SAPUI5 or Fiori apps that hold up under real process rules, authorization models, and change management—not demos that break in QA.",
    "I build transactional and analytical UIs integrated with OData services and Fiori Launchpad, with emphasis on validation, navigation patterns, and onboarding that reduces training cost.",
  ],
  trustSignals: [
    "25+ custom Fiori-style applications delivered on enterprise programs",
    "Form and master-detail patterns reused across lines of business",
    "Experience in Fiori Launchpad and embedded deployment models",
    "Portal programs with measurable adoption improvements",
    "Coordinates with functional, basis, and CAP/backend teams",
  ],
  whenToHire: [
    "New SAPUI5 apps are required for vendor, operations, or finance workflows.",
    "Existing Fiori apps have low adoption or data quality issues tied to poor UX.",
    "You need master-detail or form-based patterns integrated with OData services.",
    "A BTP or S/4 program needs UI delivery aligned to Launchpad standards.",
    "Your team lacks senior UI capacity for a time-boxed release.",
  ],
  challenges: [
    {
      title: "Workflows that confuse infrequent users",
      description:
        "Complex forms without validation guidance produce bad data and support tickets. Users revert to spreadsheets when the official app feels harder than the workaround.",
    },
    {
      title: "OData and authorization mismatches",
      description:
        "UI is built before service contracts stabilize—leading to rework, performance issues, and field-level errors discovered late in UAT.",
    },
    {
      title: "Inconsistent patterns across app teams",
      description:
        "Each scrum team ships different navigation, error handling, and list-detail behaviors—raising training cost and user distrust.",
    },
    {
      title: "Launchpad clutter without clear entry points",
      description:
        "Tiles multiply without information architecture; users cannot find the right app for their role.",
    },
  ],
  approach: [
    {
      title: "Solutions & Delivery Approach",
      paragraphs: [
        "I align UI structure to how people perform the task—not to how backend tables are organized. Validation is treated as a first-class requirement so bad data never becomes someone else's problem downstream.",
      ],
      bullets: [
        "Workflow mapping with business owners: happy path, exceptions, and required field rules",
        "OData contract review early; mock services where backend lags UI",
        "Pattern library: forms, master-detail, tables, messaging, and onboarding overlays",
        "Launchpad integration and role-based visibility where applicable",
        "UAT support focused on task completion time and error rates—not cosmetic tweaks",
      ],
    },
    {
      title: "Application types",
      paragraphs: ["Typical deliverables on SAP programs:"],
      bullets: [
        "Multi-step form workflows (e.g., vendor invoicing, operational data capture)",
        "Master-detail analytical views for client or operations data",
        "Launchpad tiles and shell plugins for guided navigation",
        "Enhancements to existing Fiori apps where refactoring beats rewrite",
      ],
    },
  ],
  engagementModels: [
    {
      title: "Application squad",
      description:
        "Own one or more SAPUI5 apps end-to-end for a release—analysis through production support window.",
      bestFor: "Defined apps on a PI roadmap",
    },
    {
      title: "UI stream lead",
      description:
        "Set patterns, review PRs, and build reference implementations while your developers scale output.",
      bestFor: "Programs with multiple parallel UI teams",
    },
    {
      title: "Adoption remediation",
      description:
        "Targeted UX and technical refactor on apps with poor usage or data quality symptoms.",
      bestFor: "Post-go-live apps failing adoption KPIs",
    },
  ],
  techStack: [
    {
      category: "UI frameworks",
      items: ["SAPUI5", "SAP Fiori elements (where applicable)", "Fiori Launchpad", "SAP Fiori tools"],
    },
    {
      category: "Services & data",
      items: ["OData v2/v4", "SAP Gateway", "CAP-exposed OData", "REST integration"],
    },
    {
      category: "UX & quality",
      items: ["Fiori design guidelines", "Accessibility practices", "Responsive layouts", "User onboarding patterns"],
    },
    {
      category: "Delivery",
      items: ["Git", "SAP BTP / on-prem transports (team-dependent)", "Agile ceremonies"],
    },
  ],
  proof: [
    {
      slug: "fuel-management",
      title: "Fuel Vendor Invoice Management",
      description:
        "Four SAPUI5 form applications standardizing fuel data entry with validation before OData submission.",
      outcome: "Improved invoicing accuracy and reduced manual correction cycles",
      relevance:
        "Model for multi-app workflow delivery with shared validation patterns.",
    },
    {
      slug: "kpmg-client-dashboard",
      title: "Client Data Dashboard (SAPUI5)",
      description:
        "Master-detail SAPUI5 application improving client data visibility in a Fiori Launchpad environment.",
      outcome: "Clearer navigation and onboarding for complex client datasets",
      relevance:
        "Model for analytical UI and Launchpad-integrated experiences.",
    },
    {
      slug: "manufacturer-portal",
      title: "Manufacturer Analytics Portal",
      description:
        "Large SAPUI5 footprint within a unified Build Work Zone portal for external manufacturers.",
      outcome: "22 applications in one governed portal experience",
      relevance:
        "Model for high-volume Fiori delivery under one portal umbrella.",
    },
  ],
  relatedServices: related.sapui5,
  faq: [
    {
      question: "Can you build if OData services are not ready?",
      answer:
        "Yes—using mock data and agreed contracts, with explicit milestones to swap in real services. I flag contract risks early to avoid UAT surprises.",
    },
    {
      question: "Do you follow Fiori design guidelines strictly?",
      answer:
        "I apply standard patterns by default and document deviations when process rules require custom layouts—always prioritizing consistency and maintainability.",
    },
    {
      question: "Can you fix an app that already went live?",
      answer:
        "Yes. Remediation engagements focus on task analysis, error handling, performance, and simplification—not cosmetic-only changes.",
    },
    {
      question: "How do you work with offshore or SI teams?",
      answer:
        "Clear pattern docs, PR review, and reference implementations—so distributed teams extend the same standards.",
    },
    {
      question: "What defines done for a SAPUI5 app?",
      answer:
        "Role-appropriate task completion in UAT, agreed validation rules enforced, transport-ready code, and handoff notes for operations.",
    },
  ],
  midCta: {
    headline: "Have a workflow that needs a reliable SAPUI5 app?",
    description:
      "Describe the process, users, and OData status. I will outline a realistic delivery path.",
  },
  cta: {
    headline: "Plan Your Next SAPUI5 Application",
    description:
      "Send your workflow summary and target release. I will reply with fit, approach, and availability.",
    subject: "SAPUI5 / Fiori Development Inquiry",
  },
}

export const salesforceExperienceCloud: ServicePageContent = {
  slug: "salesforce-experience-cloud",
  metadata: {
    title: "Salesforce Experience Cloud Developer | Portals & LWC",
    description:
      "Salesforce Experience Cloud development for customer and partner portals. LWC, Aura, design systems, and enterprise-scale self-service experiences.",
  },
  eyebrow: "Salesforce Experience Cloud",
  h1: "Salesforce Experience Cloud Development",
  subtitle:
    "Deliver customer and partner portals with Lightning Web Components, Aura, and design-system consistency at enterprise scale.",
  intro: [
    "If you found this page, you likely need a senior frontend specialist for Experience Cloud—not a generic Salesforce admin. Portals fail when components are one-offs, design systems are ignored, and releases break community configuration.",
    "I build B2B and B2C experiences with LWC and Aura, align to Lightning Design System or your enterprise design system, and coordinate with admins on sharing, sites, and integration so the portal survives the next release.",
  ],
  trustSignals: [
    "Partner warranty portal with LWC and Aura in production workflows",
    "Large utility customer self-service Experience Cloud contribution",
    "Design-system-driven Aura components at enterprise scale",
    "Works with admins on site configuration during rollout",
    "Can pair with Salesforce DevOps for release ownership",
  ],
  whenToHire: [
    "You are launching a new Experience Cloud site for customers or partners.",
    "An existing community suffers from inconsistent UX, technical debt, or slow enhancement cycles.",
    "CRM data must surface in support, warranty, or self-service journeys—not just internal Salesforce UI.",
    "You need LWC/Aura capacity for a fixed program milestone.",
    "Design system requirements must be implemented in code—not only in Figma.",
  ],
  challenges: [
    {
      title: "Partner or customer journeys spread across channels",
      description:
        "Users still call support or use spreadsheets because the portal does not expose the right CRM data in context.",
    },
    {
      title: "Component sprawl and release fragility",
      description:
        "Each enhancement adds bespoke LWCs with no shared patterns—increasing regression risk and deployment conflicts.",
    },
    {
      title: "Design inconsistency at scale",
      description:
        "Marketing and product teams expect brand parity, but the live community diverges from the approved design system.",
    },
    {
      title: "Admin and developer coordination gaps",
      description:
        "Site metadata, sharing, and integration issues surface late because frontend and platform configuration are not planned together.",
    },
  ],
  approach: [
    {
      title: "Solutions & Delivery Approach",
      paragraphs: [
        "I deliver portals incrementally: highest-value journeys first, with reusable components and documented extension points. Configuration work is scheduled alongside code so UAT reflects production behavior.",
      ],
      bullets: [
        "Journey mapping: identify CRM objects, actions, and role-based visibility per persona",
        "Component architecture: LWC-first where possible; Aura where legacy or platform constraints require",
        "Design system implementation: tokens, layout, and accessible patterns in production code",
        "Admin collaboration: sites, profiles, sharing, and integration touchpoints",
        "Release alignment: metadata promotion coordinated with DevOps practices",
      ],
    },
    {
      title: "Portal types",
      paragraphs: ["Experience aligned to programs I have supported:"],
      bullets: [
        "B2B partner portals (warranty, RGA, operational data tied to support)",
        "B2C customer self-service (account, billing, service requests)",
        "Hybrid experiences requiring both marketing content and transactional flows",
      ],
    },
  ],
  engagementModels: [
    {
      title: "Portal build",
      description:
        "Deliver defined journeys and component library for initial go-live or major release.",
      bestFor: "New Experience Cloud programs",
    },
    {
      title: "Enhancement stream",
      description:
        "Ongoing capacity for backlog items with architecture guardrails and code review.",
      bestFor: "Mature communities with steady change volume",
    },
    {
      title: "UX and technical assessment",
      description:
        "Short review of portal health with prioritized remediation roadmap before you commit budget.",
      bestFor: "Underperforming sites before a replatform decision",
    },
  ],
  techStack: [
    {
      category: "Salesforce platform",
      items: ["Experience Cloud", "Lightning Web Components", "Aura Components", "Lightning Design System"],
    },
    {
      category: "Data & integration",
      items: ["Salesforce CRM objects", "LDS", "Apex integration (coordination)", "External APIs via LWC"],
    },
    {
      category: "UX",
      items: ["Enterprise design systems", "Responsive layouts", "Accessibility practices"],
    },
    {
      category: "Delivery",
      items: ["Git / SFDX", "Sandbox promotion", "Collaboration with Salesforce admins"],
    },
  ],
  proof: [
    {
      slug: "partner-portal",
      title: "Partner Warranty Portal",
      description:
        "Experience Cloud portal surfacing warranty and RGA data within partner support workflows using LWC and Aura.",
      outcome: "Structured self-service reducing manual lookup for support teams",
      relevance:
        "B2B portal reference with CRM-integrated components and workflow alignment.",
    },
    {
      slug: "utility-customer-portal",
      title: "Utility Customer Self-Service Portal",
      description:
        "Contribution to a large-scale customer portal for utility account management, payments, and service tasks.",
      outcome: "Consistent customer UX via design-system-aligned Aura components",
      relevance:
        "B2C scale reference for design system implementation on Experience Cloud.",
    },
  ],
  relatedServices: related.salesforceCloud,
  faq: [
    {
      question: "LWC, Aura, or both?",
      answer:
        "I use LWC for new work when platform support allows; Aura where your org still depends on legacy components. Strategy follows your standards and timeline—not ideology.",
    },
    {
      question: "Do you replace our Salesforce admin?",
      answer:
        "No. I focus on frontend and site configuration during delivery. Admins remain accountable for org-wide policy; I collaborate on sharing, sites, and releases.",
    },
    {
      question: "Can you help if our portal already launched?",
      answer:
        "Yes—assessment, component consolidation, and design-system alignment are common follow-on engagements.",
    },
    {
      question: "Do you handle Salesforce DevOps too?",
      answer:
        "Yes, as a separate or combined engagement. Many clients use me for portal delivery and release ownership together.",
    },
    {
      question: "What should I include in a first message?",
      answer:
        "Portal type (B2B/B2C), key journeys, org constraints, timeline, and whether admins and developers are internal or partner-led.",
    },
  ],
  midCta: {
    headline: "Scoping an Experience Cloud launch or rebuild?",
    description:
      "Outline your users and go-live target. I will indicate how similar portal work was structured.",
  },
  cta: {
    headline: "Scope Your Experience Cloud Portal",
    description:
      "Contact me with your portal goals and timeline. I will respond with fit, questions, and a suggested discovery call.",
    subject: "Salesforce Experience Cloud Inquiry",
  },
}

export const salesforceDevops: ServicePageContent = {
  slug: "salesforce-devops",
  metadata: {
    title: "Salesforce DevOps Consultant | SFDX & Release Management",
    description:
      "Salesforce DevOps consulting for SFDX, CI/CD, and multi-environment release management. Metadata promotion across Dev, QA, UAT, and Production.",
  },
  eyebrow: "Salesforce DevOps",
  h1: "Salesforce DevOps & Release Management",
  subtitle:
    "Own Salesforce deployments with SFDX, Git-based workflows, and disciplined promotion across environments.",
  intro: [
    "You are likely evaluating help because releases are risky: metadata conflicts, environment drift, or no one owns promotion end-to-end. I provide Salesforce DevOps leadership—validating metadata, coordinating multi-environment deployments, and communicating impact to delivery leads.",
    "I have owned release processes using GitHub and SFDX across Dev, QA, UAT, and Production, including parallel tracks where multiple teams contribute metadata.",
  ],
  trustSignals: [
    "End-to-end release ownership on enterprise Salesforce programs",
    "GitHub + SFDX deployment workflows in production use",
    "Conflict resolution across parallel development tracks",
    "Coordinates with dev, QA, and business stakeholders on release windows",
    "Complements Experience Cloud delivery on the same programs",
  ],
  whenToHire: [
    "A major release is approaching and no one owns promotion across environments.",
    "Deployments fail repeatedly due to metadata conflicts or missing dependencies.",
    "Developers are blocked because release management is a part-time role.",
    "You are maturing from manual change sets toward Git-based Salesforce delivery.",
    "You need temporary release leadership for a high-risk production window.",
  ],
  challenges: [
    {
      title: "Environment drift and surprise UAT failures",
      description:
        "QA passes but production-bound metadata behaves differently because sandboxes are not promoted consistently or dependencies were missed.",
    },
    {
      title: "Parallel team conflicts",
      description:
        "Multiple scrum teams overwrite each other's metadata; merges are painful and releases stall.",
    },
    {
      title: "No clear release owner",
      description:
        "Developers package changes ad hoc; no one validates the full release train before the business cutover date.",
    },
    {
      title: "Manual, opaque promotion steps",
      description:
        "Runbooks are outdated; knowledge lives with one person who is unavailable during the critical week.",
    },
  ],
  approach: [
    {
      title: "Solutions & Delivery Approach",
      paragraphs: [
        "I treat releases as a product: defined entry criteria, validated artifacts, staged promotion, and explicit go/no-go communication. Tooling supports the process—GitHub and SFDX are means, not the goal.",
      ],
      bullets: [
        "Release planning: scope, dependencies, environment order, and rollback considerations",
        "Metadata validation and packaging before each promotion",
        "Promotion execution Dev → QA → UAT → Production with checklists",
        "Conflict resolution and merge support for parallel tracks",
        "Retrospectives and runbook updates so the process improves each cycle",
      ],
    },
    {
      title: "What changes after engagement",
      paragraphs: ["Teams typically gain:"],
      bullets: [
        "Predictable release cadence with fewer production surprises",
        "Documented promotion criteria and environment parity checks",
        "Clear ownership during release windows—not developer distraction",
        "Foundation to automate further when the org is ready",
      ],
    },
  ],
  engagementModels: [
    {
      title: "Release owner (program)",
      description:
        "Ongoing ownership of deployment trains for a defined program duration.",
      bestFor: "Continuous delivery with multiple contributing teams",
    },
    {
      title: "Critical release support",
      description:
        "Short, intensive window leading one or two high-risk production deployments.",
      bestFor: "Cutover dates with executive visibility",
    },
    {
      title: "DevOps foundation",
      description:
        "Establish Git/SFDX workflow, branching strategy, and runbooks; train internal team to operate.",
      bestFor: "Orgs moving off manual change sets",
    },
  ],
  techStack: [
    {
      category: "Salesforce tooling",
      items: ["Salesforce CLI", "SFDX project structure", "Metadata API deployments", "Sandboxes"],
    },
    {
      category: "Source control & CI",
      items: ["GitHub", "Pull request workflows", "CI/CD patterns (team-dependent)"],
    },
    {
      category: "Process",
      items: ["Release calendars", "Environment promotion runbooks", "Change advisory alignment"],
    },
    {
      category: "Related delivery",
      items: ["Experience Cloud metadata", "LWC/Aura bundles", "Integrations (coordination with dev teams)"],
    },
  ],
  proof: [
    {
      slug: "salesforce-devops",
      title: "Salesforce Release Management",
      description:
        "Owned CI/CD and metadata promotion across Dev, QA, UAT, and Production using GitHub and SFDX.",
      outcome: "Consistent promotion with conflict resolution across parallel tracks",
      relevance:
        "Direct reference for release ownership and multi-environment discipline.",
    },
    {
      slug: "partner-portal",
      title: "Partner Warranty Portal",
      description:
        "Experience Cloud frontend delivery on a program where disciplined releases protected community stability.",
      outcome: "Portal enhancements shipped without destabilizing shared environments",
      relevance:
        "Shows DevOps paired with Experience Cloud on the same enterprise initiative.",
    },
  ],
  relatedServices: related.salesforceDevops,
  faq: [
    {
      question: "Do you build CI/CD pipelines from scratch?",
      answer:
        "I can define branching, validation gates, and pipeline stages with your approved tooling. Depth depends on test automation maturity and org constraints.",
    },
    {
      question: "Can you join only for production weekend?",
      answer:
        "Yes, if scope, access, and runbooks are agreed in advance. I prefer at least one prior cycle in non-prod to reduce risk.",
    },
    {
      question: "Which tools are required?",
      answer:
        "Primary experience with GitHub and SFDX. I adapt to GitLab, Azure DevOps, or vendor tools if those are your standards.",
    },
    {
      question: "How do you handle failed deployments?",
      answer:
        "Stop promotion, isolate conflicting metadata, communicate impact and options, and document root cause before retry—no silent reruns.",
    },
    {
      question: "Can you work with offshore development teams?",
      answer:
        "Yes. Clear packaging rules, PR discipline, and release windows keep distributed teams aligned.",
    },
  ],
  midCta: {
    headline: "Upcoming release without a dedicated owner?",
    description:
      "Share your environments, date, and team structure. I will tell you if short-term release support fits.",
  },
  cta: {
    headline: "Stabilize Your Salesforce Releases",
    description:
      "Email your release timeline and pain points. I will respond with how I can own or advise on your deployment process.",
    subject: "Salesforce DevOps Inquiry",
  },
}

export const enterpriseUiUx: ServicePageContent = {
  slug: "enterprise-ui-ux",
  metadata: {
    title: "Enterprise UI/UX Consultant | Design Systems & Portal UX",
    description:
      "Enterprise UI/UX consulting for SAP Fiori, Salesforce portals, and design system implementation. Adoption-focused interfaces for complex organizations.",
  },
  eyebrow: "Enterprise UI/UX",
  h1: "Enterprise UI/UX & Design System Implementation",
  subtitle:
    "Translate design systems and business workflows into interfaces people adopt—across SAP, Salesforce, and modern web platforms.",
  intro: [
    "Commercial intent for this service is often: our portal or SAP/Salesforce UI program is technically on track but users struggle, or our design system exists only in Figma. I implement UX in production—SAP Fiori, Experience Cloud, React/Next.js—with measurable focus on task completion and adoption.",
    "You get a practitioner who prototypes in Figma or Adobe XD and ships the same patterns in code, so design and engineering are not separate conversations.",
  ],
  trustSignals: [
    "Design system rollout on large utility customer portal",
    "Unified UX across 22-app SAP BTP manufacturer portal",
    "Config-driven theming on Next.js multi-artist platform",
    "Figma / Adobe XD for stakeholder alignment before build",
    "Works inside agile teams—not detached agency handoffs",
  ],
  whenToHire: [
    "Users avoid a new portal or SAP app despite technical go-live success.",
    "A design system must be implemented in Salesforce Aura/LWC or SAPUI5—not just documented.",
    "Multiple teams produce inconsistent UI on the same program.",
    "Regulated or high-stakes workflows need clearer validation and error prevention.",
    "You need senior UX leadership that can also develop production UI.",
  ],
  challenges: [
    {
      title: "Low adoption after go-live",
      description:
        "Features exist but tasks take too many steps, errors are cryptic, and users keep offline workarounds.",
    },
    {
      title: "Design system not reflected in production",
      description:
        "Components in the live app diverge from approved tokens, spacing, and interaction patterns—damaging trust and velocity.",
    },
    {
      title: "Role complexity poorly reflected in UI",
      description:
        "Enterprise users need different data density and actions by role; one-size UI hides critical tasks or overwhelms occasional users.",
    },
    {
      title: "Design and engineering speak different languages",
      description:
        "Mockups are thrown over the wall; developers improvise under sprint pressure.",
    },
  ],
  approach: [
    {
      title: "Solutions & Delivery Approach",
      paragraphs: [
        "I diagnose task friction first—where users stall, mis-enter data, or abandon—and tie fixes to patterns your teams can reuse. Implementation-led UX means every recommendation has a path to production.",
      ],
      bullets: [
        "Task analysis and lightweight journey maps with business stakeholders",
        "Pattern definition: forms, lists, navigation, empty states, errors, onboarding",
        "Prototype critical changes before full build when alignment is at risk",
        "Implement in target platform (SAPUI5, LWC/Aura, React/Next.js)",
        "Measure via adoption proxies: errors, completion time, support volume where data exists",
      ],
    },
    {
      title: "Platforms",
      paragraphs: ["Cross-platform experience without forcing one UI kit everywhere:"],
      bullets: [
        "SAP Fiori / SAPUI5 for S/4 and BTP programs",
        "Salesforce Experience Cloud for customer and partner portals",
        "React / Next.js for product-style web experiences",
      ],
    },
  ],
  engagementModels: [
    {
      title: "UX implementation stream",
      description:
        "Hands-on delivery of design system components and key journeys on your platform.",
      bestFor: "Programs with approved design direction needing execution",
    },
    {
      title: "Assessment + remediation plan",
      description:
        "Two- to four-week review with prioritized UX and technical debt fixes before larger spend.",
      bestFor: "Portals or apps with adoption problems post-launch",
    },
    {
      title: "Pattern leadership",
      description:
        "Define standards, build references, review team output during a major release cycle.",
      bestFor: "Multiple squads needing one UX technical lead",
    },
  ],
  techStack: [
    {
      category: "Design",
      items: ["Figma", "Adobe XD", "Axure (prototyping)", "Design tokens", "Component specs"],
    },
    {
      category: "Enterprise UI",
      items: ["SAP Fiori / SAPUI5", "Salesforce LDS", "Aura & LWC", "Accessibility (WCAG-oriented practices)"],
    },
    {
      category: "Modern web",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Delivery",
      items: ["Agile ceremonies", "Pattern documentation", "Developer handoff in code"],
    },
  ],
  proof: [
    {
      slug: "utility-customer-portal",
      title: "Utility Customer Self-Service Portal",
      description:
        "Implemented UI aligned to a predefined design system using reusable Aura components on Experience Cloud.",
      outcome: "Consistent customer-facing experience across high-volume self-service tasks",
      relevance:
        "Reference for design-system execution on Salesforce at scale.",
    },
    {
      slug: "manufacturer-portal",
      title: "Manufacturer Analytics Portal",
      description:
        "UX architecture across a large SAP BTP portal consolidating many analytical apps.",
      outcome: "Single entry experience replacing dozens of fragmented portals",
      relevance:
        "Reference for portal information architecture and adoption-focused navigation.",
    },
    {
      slug: "dorsyth-records-platform",
      title: "Dorsyth Records Artist Platform",
      description:
        "Config-driven Next.js platform with per-artist theming and reusable cinematic UI sections.",
      outcome: "Scalable multi-artist UX without rewriting templates per release",
      relevance:
        "Reference for modern product UX with config-driven design systems.",
    },
  ],
  relatedServices: related.uiUx,
  faq: [
    {
      question: "Do you only deliver mockups?",
      answer:
        "No. Primary delivery is production UI and reusable components. Mockups are used when alignment is the blocker—not as the final deliverable.",
    },
    {
      question: "Can you work inside our existing design system?",
      answer:
        "Yes. I implement your tokens and components and extend the system only where workflow gaps require it—with documentation for maintainers.",
    },
    {
      question: "How do you measure UX success without fancy analytics?",
      answer:
        "Task completion in UAT, error rates, support tickets, stakeholder sign-off, and adoption metrics when the program already tracks them.",
    },
    {
      question: "SAP and Salesforce in one program?",
      answer:
        "Yes. I align patterns where backends differ so users get consistent interaction models even when platforms change.",
    },
    {
      question: "When should I hire UI/UX vs platform-specific developers?",
      answer:
        "Hire this service when adoption, design system fidelity, or workflow clarity is the risk. Pair with SAP BTP, SAPUI5, or Experience Cloud services when platform depth is also required—I often cover both.",
    },
  ],
  midCta: {
    headline: "Users struggling with a portal or enterprise app?",
    description:
      "Describe the platform, users, and symptoms. I will suggest whether assessment or implementation is the right start.",
  },
  cta: {
    headline: "Improve Enterprise UX on Your Program",
    description:
      "Send your platform, user types, and timeline. I will reply with a practical engagement recommendation.",
    subject: "Enterprise UI/UX Inquiry",
  },
}

export const servicePagesBySlug: Record<string, ServicePageContent> = {
  "sap-btp-development": sapBtpDevelopment,
  "sapui5-fiori-development": sapui5FioriDevelopment,
  "salesforce-experience-cloud": salesforceExperienceCloud,
  "salesforce-devops": salesforceDevops,
  "enterprise-ui-ux": enterpriseUiUx,
}
