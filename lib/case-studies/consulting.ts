import type { ConsultingCaseStudy } from "./types"

export const consultingCaseStudies: Record<string, ConsultingCaseStudy> = {
  "manufacturer-portal": {
    executiveSummary:
      "An enterprise modernization that consolidated fragmented partner reporting into a unified SAP BTP portal. Replaced 40+ legacy entry points with a single Build Work Zone experience secured by federated identity, CAP-based attribute access control, and 22 custom Fiori applications—delivering a single secure entry point for the external partner community.",
    businessChallenge: {
      context:
        "An external partner network accessed performance and reporting data through a patchwork of legacy portals and analytics tools. Each surface had distinct login flows, partial data coverage, and inconsistent security boundaries—creating audit risk and slowing every partner onboarding.",
      keyProblems: [
        "Fragmented entry points spanning 40+ legacy portals",
        "Partial or duplicated data per portal with no canonical view",
        "Identity sprawl across partner organizations and internal directories",
        "Weak tenant isolation enforced inconsistently across surfaces",
        "High onboarding cost and friction per partner organization",
      ],
      stakeholders:
        "External manufacturer and partner network, internal IT operations, data governance, and security/compliance reviewers.",
    },
    technicalApproach: {
      headline: "Multi-tenant BTP architecture led from identity outward",
      summary:
        "Began with identity boundaries and data isolation before any UI work. Built SAP Build Work Zone as the partner-facing shell and standardized data exposure through a CAP service layer that enforces attribute-based access control at the data tier—not the UI.",
      points: [
        "Established the partner attribute model (manufacturer ID, region) sourced from the external IdP",
        "Deployed SAP Cloud Identity Services (IAS) as the identity proxy translating SAML attributes into XSUAA principals",
        "Built a Node.js CAP service layer enforcing ABAC at the data boundary",
        "Consolidated analytics into 22 SAPUI5 applications launched from Build Work Zone",
        "Established CI/CD for zero-downtime updates across the partner community",
      ],
    },
    architecturalDecisions: [
      {
        title: "Build Work Zone as the portal shell",
        decision:
          "Use SAP Build Work Zone as the unified partner entry rather than a custom portal framework.",
        rationale:
          "Native BTP integration, app catalog, branding, and Fiori Launchpad standards reduce custom code and stay aligned with SAP's roadmap.",
      },
      {
        title: "CAP service layer for all data access",
        decision:
          "Centralize data exposure through CAP services rather than direct UI-to-backend queries.",
        rationale:
          "Single point to enforce ABAC, version APIs, and isolate UIs from backend volatility as systems evolve.",
      },
      {
        title: "Identity federation with IAS as proxy",
        decision:
          "Federate the external IdP (Okta) through SAP IAS rather than registering partner users in SAP IDM.",
        rationale:
          "User lifecycle stays with the partner organization. SAP-side identity remains lightweight, auditable, and decoupled from corporate IdP churn.",
      },
      {
        title: "ABAC enforced in the data layer",
        decision:
          "Enforce tenant boundaries via CAP attribute restrictions rather than UI-level filtering.",
        rationale:
          "UI can never be trusted as a security boundary. ABAC at the data layer ensures partner A cannot read partner B regardless of frontend defects.",
      },
      {
        title: "Phased rollout by partner cohort",
        decision:
          "Onboard partners in waves rather than a single big-bang cutover.",
        rationale:
          "Identity flows and partner-specific data quirks surface incrementally, and rollback per cohort remains feasible.",
      },
    ],
    tradeoffs: [
      {
        title: "Portal shell",
        chose: "SAP Build Work Zone",
        insteadOf: "Custom Next.js/React portal",
        reasoning:
          "Time-to-value, native Fiori catalog, and SAP roadmap alignment outweighed custom flexibility. A custom shell would have meant rebuilding navigation, branding, and identity glue from scratch.",
      },
      {
        title: "Data access layer",
        chose: "CAP service layer",
        insteadOf: "Direct OData from existing systems to the UI",
        reasoning:
          "Centralized ABAC, API versioning, and stable contracts justified the extra layer to operate. Direct OData would have leaked backend changes into every app.",
      },
      {
        title: "Authorization model",
        chose: "Attribute-based access control (ABAC)",
        insteadOf: "Role-only RBAC",
        reasoning:
          "Partner counts grow into the hundreds. One role per partner is unmaintainable; ABAC scales as data, not configuration.",
      },
      {
        title: "Identity federation topology",
        chose: "IAS as a federation proxy",
        insteadOf: "Direct SAML from corporate IdP to XSUAA",
        reasoning:
          "IAS supports attribute mapping, conditional access, and decouples corporate identity changes from BTP. Direct SAML couples both ends too tightly.",
      },
    ],
    outcomes: {
      qualitative: [
        "Single secure entry point established for the external partner community",
        "Consistent partner experience across analytical workflows",
        "Faster partner onboarding—federation eliminates SAP-side user provisioning",
        "Audit-ready security model with isolation enforced at the data tier",
        "Foundation in place for adding new analytics apps without re-architecting identity",
      ],
      summary:
        "Beyond the 22 deployed applications and 40 retired portals, the program produced a reusable security and delivery template for future external-facing BTP work.",
    },
    lessonsLearned: [
      "Identity attributes must be agreed across partner IdP, IAS, and CAP before app development—late discovery cascades into UI rework.",
      "ABAC is only as strong as the negative-test program. Explicit \"partner A cannot read partner B\" tests are non-negotiable.",
      "Build Work Zone information architecture matters more than visual polish. External users abandon a portal when they cannot find their app on day one.",
      "Phased onboarding requires coordinated communications. Technical readiness alone does not drive adoption.",
      "CAP ABAC requires care around joins and projections. Treating ABAC as automatic leads to silent leaks under load.",
    ],
    whenItFits: {
      fitsWhen: [
        "External users—partners, distributors, manufacturers, dealers—need secure portal access to SAP data",
        "Identity federation with corporate or partner IdPs is required",
        "Multi-tenant isolation is a hard, audited requirement",
        "A roadmap exists to consolidate legacy partner portals",
        "Stakeholders are committed to SAP-aligned architecture",
      ],
      avoidWhen: [
        "The audience is internal employees only and Fiori Launchpad already meets the need",
        "SAP BTP is not part of the strategic roadmap",
        "The use case is content-heavy public marketing rather than authenticated data access",
      ],
    },
    cta: {
      headline: "Planning an SAP BTP portal for external users?",
      description:
        "If your program involves federation, multi-tenant isolation, or consolidating legacy partner entry points, share a short brief and I'll respond with how a similar engagement would be structured.",
      subject: "SAP BTP Portal Inquiry — Manufacturer Portal Case Study",
      primaryServiceHref: "/services/sap-btp-development",
      primaryServiceLabel: "SAP BTP Development",
    },
  },

  "salesforce-devops": {
    executiveSummary:
      "Owned the Salesforce release process across Dev, QA, UAT, and Production for a program running parallel development tracks. Validated metadata, resolved deployment conflicts, and coordinated bi-weekly production releases plus hotfixes—reducing deployment risk and keeping feature teams focused on features instead of cutover firefighting.",
    businessChallenge: {
      context:
        "A Salesforce program ran parallel scrum tracks committing to shared sandboxes. Releases collided weekly, environments drifted across configurations, and feature teams were absorbing release management as a side task—introducing risk into every cutover.",
      keyProblems: [
        "Metadata conflicts between parallel development tracks",
        "Inconsistent promotion of changes between environments",
        "No single accountable owner for the release manifest",
        "Hotfixes promoted ad hoc without back-propagation to lower environments",
        "UAT and Production drifting in profiles and sharing configuration",
      ],
      stakeholders:
        "Salesforce developers, business analysts, release captains, and business owners waiting on feature delivery dates.",
    },
    technicalApproach: {
      headline: "Treat each release as a product—manifest, validation, promotion, communication",
      summary:
        "Defined release scope as a discrete artifact, validated metadata before it left Dev, promoted it as a known unit through QA/UAT/Production, and back-propagated hotfixes to keep lower environments accurate. Replaced reactive release work with predictable cadence.",
      points: [
        "Standardized branching and merge discipline aligned to GitHub workflows",
        "Validated metadata packages through SFDX before each promotion",
        "Coordinated promotion windows across parallel tracks",
        "Resolved conflicts on integration paths, not in Production",
        "Maintained a release calendar and stakeholder communication cadence",
      ],
    },
    architecturalDecisions: [
      {
        title: "GitHub + SFDX over change sets",
        decision:
          "Git-backed promotion with the SFDX CLI as the deployment mechanism.",
        rationale:
          "Traceable history, branchable parallel work, and automation hooks. Change sets do not scale across multiple tracks or audit requirements.",
      },
      {
        title: "Dedicated release ownership per cycle",
        decision:
          "Name a single owner of the release manifest each cycle.",
        rationale:
          "Decision speed during cutover and clear accountability for failures. Shared ownership becomes no ownership under pressure.",
      },
      {
        title: "Integration branch as the conflict horizon",
        decision:
          "Resolve conflicts on an integration branch before UAT lock.",
        rationale:
          "UAT must reflect a stable artifact. Mid-UAT chaos burns business tester goodwill faster than any technical recovery.",
      },
      {
        title: "Hotfix back-propagation policy",
        decision:
          "Every Production hotfix flows back to lower environments before the next release cycle.",
        rationale:
          "Prevents environment drift that surfaces later as unrelated UAT failures—the most expensive class of defect to diagnose.",
      },
    ],
    tradeoffs: [
      {
        title: "Tooling investment",
        chose: "GitHub + SFDX scripts with strong discipline",
        insteadOf: "Vendor DevOps platform (Copado, Gearset, etc.)",
        reasoning:
          "Org maturity did not yet justify tooling cost. Establish discipline and patterns first, layer tooling later when the value is clear. Tools accelerate; they do not substitute for process.",
      },
      {
        title: "Release cadence",
        chose: "Bi-weekly fixed cadence",
        insteadOf: "On-demand continuous deploys",
        reasoning:
          "Test capacity and business absorption favored predictable windows. Continuous would have outpaced QA throughput and stakeholder readiness.",
      },
      {
        title: "Release ownership model",
        chose: "Stable owner per program phase",
        insteadOf: "Round-robin rotation",
        reasoning:
          "Conflict resolution requires memory of in-flight changes. Rotation looks fair on paper and costs context in practice.",
      },
    ],
    outcomes: {
      qualitative: [
        "Predictable bi-weekly production releases with formalized hotfix handling",
        "Conflict resolution moved out of Production into integration paths",
        "Feature teams returned focus to feature development",
        "Cross-track visibility improved through a shared release calendar",
        "Reduced cutover risk through pre-promotion validation",
      ],
    },
    lessonsLearned: [
      "A release owner is a role, not a side task. Even small Salesforce programs benefit from naming one explicitly.",
      "Most conflicts are predictable—parallel tracks touching shared metadata. Surface that risk during sprint planning, not on release day.",
      "Environment drift is silent. Without a parity policy, UAT eventually lies about Production behavior.",
      "DevOps tooling is a multiplier, not a substitute. Discipline ships releases; tools accelerate them.",
      "Communication beats automation. Stakeholders accept friction if they know it's coming.",
    ],
    whenItFits: {
      fitsWhen: [
        "Multiple developers or scrum tracks contribute to shared Salesforce orgs",
        "Releases carry business visibility—cutover dates, executive expectations",
        "Metadata conflicts or production hotfixes are recurring",
        "Feature engineers should focus on features, not deployments",
        "Tooling investment is premature but disciplined release ownership is needed now",
      ],
      avoidWhen: [
        "The org is small enough for change sets and a single developer",
        "An existing DevOps platform with a trained team is already in place",
        "You need DevOps automation engineering rather than release ownership",
      ],
    },
    cta: {
      headline: "Salesforce releases creating production risk?",
      description:
        "If you're seeing metadata conflicts, drifting environments, or a cutover without a clear owner, share the program shape and I'll respond with how this approach was structured.",
      subject: "Salesforce DevOps Inquiry — Release Management Case Study",
      primaryServiceHref: "/services/salesforce-devops",
      primaryServiceLabel: "Salesforce DevOps",
    },
  },

  "enterprise-governance": {
    executiveSummary:
      "Defined SAP BTP extensibility standards for a Clean Core S/4HANA strategy. Translated SAP guidance into 12 actionable guidelines and 5 reusable patterns development teams could apply during sprint planning—reducing inconsistent platform choices and turning architecture review from a bottleneck into an accelerator.",
    businessChallenge: {
      context:
        "An enterprise S/4HANA initiative committed to Clean Core principles, but development teams lacked clarity on when to use Side-by-Side versus In-App extensibility, which BTP services to adopt, and how to document decisions for governance review.",
      keyProblems: [
        "Teams making divergent platform choices without shared rationale",
        "Risk of polluting core S/4 customizations against Clean Core intent",
        "No documented decision criteria for Side-by-Side versus In-App",
        "Governance reviews becoming bottlenecks instead of accelerators",
        "Extensibility knowledge concentrated in individuals rather than artifacts",
      ],
      stakeholders:
        "SAP architecture leads, development team leads, enterprise architecture, and S/4 implementation partners responsible for cross-team delivery.",
    },
    technicalApproach: {
      headline: "Standards as a decision aid, not a barrier",
      summary:
        "Analyzed the existing SAP landscape and team archetypes, mapped extensibility scenarios to recommended BTP services, and produced a standards document with decision trees and patterns development teams could apply during sprint planning—not just at architecture review.",
      points: [
        "Reviewed the current landscape and identified extensibility decision points",
        "Cataloged BTP services relevant to common extension scenarios",
        "Defined 5 reusable extensibility patterns",
        "Authored 12 governance guidelines aligned to Clean Core",
        "Engaged 8 stakeholders across architecture and delivery for validation",
      ],
    },
    architecturalDecisions: [
      {
        title: "Pattern-based guidance over case-by-case review",
        decision:
          "Document recurring patterns rather than rule on every new request.",
        rationale:
          "Scales governance—teams self-serve common cases and review focus shifts to genuine exceptions and net-new patterns.",
      },
      {
        title: "Side-by-Side as the default for net-new functionality",
        decision:
          "Recommend BTP Side-by-Side extensibility as the default unless In-App is clearly superior.",
        rationale:
          "Preserves Clean Core, isolates lifecycle from S/4 upgrade cycles, and keeps custom logic on platform services that evolve independently.",
      },
      {
        title: "Decision criteria over prescriptive rules",
        decision:
          "Provide decision criteria—data location, transactional vs analytical, upgrade tolerance—rather than blanket \"always use X.\"",
        rationale:
          "Real extension cases vary. Criteria empower teams to choose correctly with documented accountability instead of forcing exceptions.",
      },
      {
        title: "Living-document approach",
        decision:
          "Frame the governance document as an iterating standard, not a frozen artifact.",
        rationale:
          "BTP services evolve. Standards must too, or teams will route around them within a release cycle.",
      },
    ],
    tradeoffs: [
      {
        title: "Format of guidance",
        chose: "Principle-based guidance with examples",
        insteadOf: "Full prescription per BTP service",
        reasoning:
          "Prescription dates quickly and discourages judgment. Principles outlast specific service versions and survive product roadmap changes.",
      },
      {
        title: "Review process",
        chose: "Self-service patterns with escalation criteria",
        insteadOf: "Mandatory architecture review per change",
        reasoning:
          "Velocity versus control. Review fatigue erodes governance quality. Reserve review for non-pattern cases where it adds value.",
      },
      {
        title: "Extensibility default",
        chose: "Conditional In-App where transactional extensions are tightly bound to core",
        insteadOf: "Strict Side-by-Side only",
        reasoning:
          "Strict Side-by-Side adds latency and integration cost when the extension genuinely belongs in core. Principle, not absolutism.",
      },
    ],
    outcomes: {
      qualitative: [
        "Shared vocabulary across teams for extensibility decisions",
        "Reduced ad hoc architecture choices on new work",
        "Documented patterns reusable across waves of delivery",
        "Clearer escalation path for non-standard scenarios",
        "Standards artifact suitable for audit and onboarding new teams",
      ],
    },
    lessonsLearned: [
      "Governance documents that aren't actionable during sprint planning don't get used. Format matters as much as content.",
      "Stakeholder validation isn't a checkbox—it surfaces real tradeoffs developers face that architects miss.",
      "Standards must reference the BTP services and patterns developers actually have access to. Abstraction kills adoption.",
      "Document the \"why\" alongside the \"what.\" Teams stop following rules they don't understand the moment tradeoffs emerge.",
      "Living standards need an owner. Orphan documents drift from reality within a release cycle.",
    ],
    whenItFits: {
      fitsWhen: [
        "S/4HANA program is committed to Clean Core principles",
        "Multiple development teams build extensions in parallel",
        "Architecture review is becoming a bottleneck or rubber stamp",
        "Extensibility knowledge is locked in individuals rather than artifacts",
        "Governance artifacts are needed for audit, vendor management, or CoE rollout",
      ],
      avoidWhen: [
        "Single team and limited extension scope—informal patterns suffice",
        "No commitment to Clean Core—governance assumes the goal exists",
        "Standards work isn't sponsored by architecture leadership",
      ],
    },
    cta: {
      headline: "Defining SAP BTP extensibility standards?",
      description:
        "If your S/4 program needs Clean Core–aligned guidance teams will actually use, share the scope and I'll explain how this engagement was structured.",
      subject: "SAP BTP Governance Inquiry — Extensibility Governance Case Study",
      primaryServiceHref: "/services/sap-btp-development",
      primaryServiceLabel: "SAP BTP Development",
    },
  },

  "fuel-management": {
    executiveSummary:
      "Replaced manual fuel-data entry across disconnected spreadsheets with four SAPUI5 form applications integrated to OData services. Standardized capture, embedded vendor-contract validation at the point of entry, and gave 20+ business users a single workflow path—reducing invoice discrepancies before they reached backend systems.",
    businessChallenge: {
      context:
        "Fuel-data entry feeding vendor invoice processing was spread across spreadsheets and disconnected manual workflows. Data inconsistencies surfaced downstream as invoicing discrepancies, contract violations, and reconciliation overhead for finance teams.",
      keyProblems: [
        "Manual data entry across multiple sources with no canonical workflow",
        "Validation deferred to backend systems or human review",
        "No structured workflow path for daily operations",
        "Errors caught late, after submission to vendor systems",
        "20+ users without consistent tooling",
      ],
      stakeholders:
        "Operations staff entering daily fuel data, vendor management, finance/AP teams, and business owners accountable for invoice accuracy.",
    },
    technicalApproach: {
      headline: "Validation at the point of entry, not at the backend",
      summary:
        "Mapped fuel-entry and vendor-payment workflows with business users, then built SAPUI5 form applications with client-side validation enforcing vendor-contract rules. Integrated to OData services so validated data reached backend systems cleanly the first time.",
      points: [
        "Workflow mapping sessions with business users to define real entry paths",
        "Four form-based SAPUI5 applications covering distinct vendor scenarios",
        "Client-side validation enforcing contract limits and required fields",
        "OData integration for backend submission with audit trail",
        "Rollout support during early production adoption",
      ],
    },
    architecturalDecisions: [
      {
        title: "Form-based UI patterns over freeform entry",
        decision:
          "Structured forms with field-level validation per workflow.",
        rationale:
          "Operational users benefit from guided entry. Freeform invites errors and shifts validation burden onto downstream systems.",
      },
      {
        title: "Client-side validation as primary",
        decision:
          "Enforce vendor-contract rules in the UI before submission.",
        rationale:
          "Immediate user feedback reduces backend rejection cycles and AP rework. The error is cheapest to fix at the keystroke.",
      },
      {
        title: "Workflow-per-vendor scenario",
        decision:
          "Four distinct applications rather than one generic form.",
        rationale:
          "Vendor contracts differ in rules and fields. A single configurable form drifts toward complexity and confuses users.",
      },
      {
        title: "OData integration with structured payloads",
        decision:
          "Submit through OData service contracts rather than ad hoc API calls.",
        rationale:
          "Versionable, traceable, aligned with broader SAP integration patterns, and recoverable when contracts change.",
      },
    ],
    tradeoffs: [
      {
        title: "App granularity",
        chose: "Four focused applications",
        insteadOf: "One configurable workflow",
        reasoning:
          "Configurable forms drift toward complexity. Four focused apps stay maintainable and align to actual user roles.",
      },
      {
        title: "Validation layer",
        chose: "Client-side primary, backend secondary",
        insteadOf: "Backend-only validation",
        reasoning:
          "Both UX and backend correctness matter. Client catches the majority before submission; backend remains the source of truth.",
      },
      {
        title: "UI technology",
        chose: "SAPUI5",
        insteadOf: "Generic web framework (React/Angular)",
        reasoning:
          "Native integration to SAP landscape, Fiori-consistent UX, and transport-friendly delivery. Generic frameworks add integration cost without UX upside.",
      },
    ],
    outcomes: {
      qualitative: [
        "Consistent data entry across operational users",
        "Errors caught at entry rather than during AP reconciliation",
        "Reusable form patterns adopted across related workflows",
        "Reduced manual rework cycles for vendor invoicing",
        "Documented workflow patterns the team can extend without external help",
      ],
    },
    lessonsLearned: [
      "Validation belongs as close to the user as possible. Late errors cost ten times more to fix than early ones.",
      "Operational users adopt UIs that respect their workflow rhythm, not just visually polished ones.",
      "Vendor contracts change. Validation rules should be data-driven where possible rather than hard-coded.",
      "Four focused apps outperform one configurable monster for distinct workflows.",
      "Adoption coaching during the first two weeks of rollout determines long-term success more than any technical decision.",
    ],
    whenItFits: {
      fitsWhen: [
        "Operational workflows depend on manual entry feeding SAP backend systems",
        "Validation rules are well-defined—vendor contracts, business rules, regulatory limits",
        "Users perform daily structured tasks rather than ad hoc analysis",
        "Errors should be caught at entry, not in reconciliation",
      ],
      avoidWhen: [
        "Workflow is highly variable or analytical rather than transactional",
        "Users prefer Excel and process change isn't sponsored",
        "Backend services aren't ready to consume structured input",
      ],
    },
    cta: {
      headline: "Operational data entry creating invoicing or reconciliation pain?",
      description:
        "If structured SAPUI5 workflows can replace manual capture for your team, share the scenario and I'll respond with delivery options.",
      subject: "SAPUI5 Workflow Inquiry — Fuel Management Case Study",
      primaryServiceHref: "/services/sapui5-fiori-development",
      primaryServiceLabel: "SAPUI5 & Fiori Development",
    },
  },

  "partner-portal": {
    executiveSummary:
      "Built a Salesforce Experience Cloud portal exposing warranty and RGA data in context within support workflows. Combined LWC and Aura components with Apex logic and admin configuration to replace manual lookups—giving support staff visibility into customer entitlements at the moment of decision.",
    businessChallenge: {
      context:
        "Support agents handled warranty inquiries by switching across systems and performing manual lookups for serial numbers, warranty status, and RGA history. This added time per case and increased the chance of mistakes during resolution.",
      keyProblems: [
        "Manual lookups across siloed systems for every warranty inquiry",
        "Warranty and RGA data not visible at point of decision",
        "Inconsistent agent experience across cases",
        "Slow case resolution and elevated handling time",
        "Risk of incorrect entitlement decisions affecting customer relationships",
      ],
      stakeholders:
        "Support agents, partner organizations, customer success teams, and the Salesforce platform team.",
    },
    technicalApproach: {
      headline: "Surface CRM data where the work happens",
      summary:
        "Built reusable LWC and Aura components to present warranty and RGA data inline within the support workflow. Contributed Apex logic for backend data retrieval and configured page layouts and access so the experience reached agents reliably during cutover.",
      points: [
        "LWC and Aura components for inline warranty/RGA display",
        "Apex logic for cross-object data retrieval and processing",
        "Page-layout configuration aligned to support workflows",
        "User access and permission setup for portal scope",
        "Bulk user onboarding during production cutover",
      ],
    },
    architecturalDecisions: [
      {
        title: "LWC-first with selective Aura",
        decision:
          "Build new components in LWC; use Aura where platform/legacy constraints applied.",
        rationale:
          "LWC aligns with the platform roadmap. Pragmatic Aura use avoided forced rewrites that wouldn't have shipped value.",
      },
      {
        title: "Apex behind components, not inside components",
        decision:
          "Encapsulate data retrieval in Apex classes called from components.",
        rationale:
          "Reusable across surfaces, testable in isolation, and keeps UI components focused on presentation.",
      },
      {
        title: "Inline embed in existing page layouts",
        decision:
          "Embed warranty/RGA components in existing case page layouts instead of standalone tabs.",
        rationale:
          "Agents already live in case layouts. New tabs create extra clicks and reduce adoption no matter how good the UI is.",
      },
      {
        title: "Bulk user provisioning at cutover",
        decision:
          "Bulk user onboarding via Data Loader during the cutover window.",
        rationale:
          "Predictable go-live state. Avoids staggered access issues that surface as support tickets on day one.",
      },
    ],
    tradeoffs: [
      {
        title: "Integration approach",
        chose: "Inline embed in existing workflows",
        insteadOf: "Separate warranty application",
        reasoning:
          "Adoption follows the path of least resistance. Separate apps require behavior change agents resist.",
      },
      {
        title: "Component framework mix",
        chose: "Pragmatic LWC + Aura coexistence",
        insteadOf: "Full migration to LWC",
        reasoning:
          "Migration cost wasn't justified by the project scope. \"LWC for new, Aura where it makes sense\" is a defensible standard.",
      },
      {
        title: "Data retrieval pattern",
        chose: "Apex-driven cross-object retrieval",
        insteadOf: "Standard list views and reports",
        reasoning:
          "Warranty/RGA context spans related objects. Standard views couldn't deliver the inline summary agents needed at a glance.",
      },
    ],
    outcomes: {
      qualitative: [
        "Warranty and RGA data accessible inline in support workflows",
        "Reduced cross-system switching during case handling",
        "Component patterns reusable for future portal expansion",
        "Smooth production cutover with bulk user readiness",
        "Foundation for additional partner-facing data surfaces",
      ],
    },
    lessonsLearned: [
      "Agents adopt features that fit their existing flow. Sidecar apps fight habit and lose.",
      "LWC + Aura coexistence is fine when the standard is clear: \"LWC for new, Aura where it makes sense.\"",
      "Apex behind components is more maintainable than fat components carrying business logic.",
      "Cutover planning for bulk user access is a project, not a checkbox.",
      "Data Loader is fine for one-time bulk operations. Standardize provisioning before it becomes ongoing.",
    ],
    whenItFits: {
      fitsWhen: [
        "CRM-adjacent data—warranty, entitlements, asset history—needs visibility inside support workflows",
        "Building a partner or internal portal on Experience Cloud",
        "Component reusability matters for future portal expansion",
        "Bulk user onboarding is part of the rollout",
      ],
      avoidWhen: [
        "Standard list views and reports already provide the visibility needed",
        "The org has not committed to Experience Cloud as the portal platform",
        "Cross-system context isn't required—data already lives in one source",
      ],
    },
    cta: {
      headline: "Planning an Experience Cloud portal for partners or internal teams?",
      description:
        "If support workflows need CRM-integrated data in context, share the scenario and I'll outline how this build was approached.",
      subject: "Experience Cloud Inquiry — Partner Warranty Portal Case Study",
      primaryServiceHref: "/services/salesforce-experience-cloud",
      primaryServiceLabel: "Salesforce Experience Cloud",
    },
  },

  "utility-customer-portal": {
    executiveSummary:
      "Contributed to a large-scale Salesforce Experience Cloud customer portal enabling self-service for service management, billing, and outage reporting. Implemented Aura components against a custom design system and produced supporting email templates—translating brand and UX standards into a consistent customer-facing experience at scale.",
    businessChallenge: {
      context:
        "Customers managed utility services through fragmented channels—phone, email, and limited web access—making routine tasks like starting service, paying bills, and reporting outages inefficient for both customers and the support organization.",
      keyProblems: [
        "Fragmented customer channels for common tasks",
        "High call volume for self-serviceable actions",
        "Inconsistent brand and UX across digital touchpoints",
        "Limited customer visibility into account status",
        "Slow rollout of new self-service capabilities",
      ],
      stakeholders:
        "End-customer base, customer support operations, billing and field operations, and marketing/brand owners accountable for the customer experience.",
    },
    technicalApproach: {
      headline: "Design-system fidelity in production code",
      summary:
        "Implemented Aura UI components aligned to a pre-defined custom design system, built interfaces for service management, billing, and outage reporting, and produced custom Salesforce email templates supporting communication throughout customer workflows.",
      points: [
        "Aura component development against custom design tokens",
        "UI for service management, billing, and outage reporting workflows",
        "Custom email templates for customer communications",
        "Production-grade implementation aligned to UX deliverables",
        "Coordination with UX designers on component fidelity",
      ],
    },
    architecturalDecisions: [
      {
        title: "Aura aligned to a custom design system",
        decision:
          "Build Aura components mapping directly to design-system tokens rather than Lightning Design System defaults.",
        rationale:
          "Brand consistency was a hard requirement. Default styling would not have passed brand review for a customer-facing surface.",
      },
      {
        title: "Component fidelity over speed",
        decision:
          "Validate each component against design specs before broad use.",
        rationale:
          "Inconsistencies multiply across surfaces. Fixing post-hoc is more expensive than getting it right once.",
      },
      {
        title: "Email templates as first-class UX",
        decision:
          "Treat customer email templates as experience deliverables, not afterthoughts.",
        rationale:
          "Emails carry the workflow forward outside the portal. Brand and clarity matter beyond the portal itself.",
      },
    ],
    tradeoffs: [
      {
        title: "Design implementation",
        chose: "Custom design-system implementation in code",
        insteadOf: "Lightning Design System defaults",
        reasoning:
          "Brand requirements demanded fidelity. Defaults would not have passed brand review for a B2C surface.",
      },
      {
        title: "Component framework",
        chose: "Aura aligned to existing program standards",
        insteadOf: "Mid-program migration to LWC",
        reasoning:
          "The existing program had committed to Aura. Migration cost/benefit didn't justify shifting frameworks mid-flight.",
      },
      {
        title: "Communication scope",
        chose: "Email templates inside the UI workstream",
        insteadOf: "Separate marketing/email track",
        reasoning:
          "Workflows continue in email. Splitting tracks creates inconsistent customer experience across portal and mailbox.",
      },
    ],
    outcomes: {
      qualitative: [
        "Consistent design-system fidelity across customer-facing surfaces",
        "Self-service workflows live for service management, billing, and outages",
        "Email communications aligned to portal UX standards",
        "Foundation of reusable Aura components for future expansion",
        "Smoother customer journeys across high-volume tasks",
      ],
    },
    lessonsLearned: [
      "Design-system implementation in code is a discipline, not a one-time deliverable.",
      "Component review against design specs is cheap. Redoing post-launch is expensive.",
      "Customer email templates are part of the experience—don't outsource them to a different aesthetic.",
      "Aura is still viable when program standards demand it. LWC migration isn't always the right call.",
      "Cross-disciplinary coordination among designers, developers, and marketing needs explicit handoffs.",
    ],
    whenItFits: {
      fitsWhen: [
        "Building a B2C self-service portal on Experience Cloud",
        "A custom design system needs production implementation, not just Figma deliverables",
        "Customer communications must align to portal UX",
        "High-volume customer journeys need consistent experience across surfaces",
      ],
      avoidWhen: [
        "Standard Lightning experience meets brand requirements",
        "Self-service journeys aren't a priority for the business",
        "Aura is not a viable choice and an LWC team isn't in place",
      ],
    },
    cta: {
      headline: "Planning a customer self-service portal on Experience Cloud?",
      description:
        "If you need design-system fidelity implemented against a B2C portal, share the scope and I'll respond with engagement options.",
      subject: "Experience Cloud Inquiry — Utility Customer Portal Case Study",
      primaryServiceHref: "/services/salesforce-experience-cloud",
      primaryServiceLabel: "Salesforce Experience Cloud",
    },
  },

  "kpmg-client-dashboard": {
    executiveSummary:
      "Built a SAPUI5 master-detail application to organize client data within a Fiori Launchpad environment, including a welcome page and guided onboarding walkthrough. Improved how users navigate complex client records and reduced cognitive load for newer users entering the application.",
    businessChallenge: {
      context:
        "Users needed a structured, intuitive way to navigate client data inside a larger enterprise application. The existing experience surfaced data without clear hierarchy or onboarding guidance for newer users joining the environment.",
      keyProblems: [
        "Unstructured navigation across client records",
        "Cognitive load on new users without onboarding support",
        "Inconsistent presentation of related data",
        "Application discovery inside a busy Fiori Launchpad",
      ],
      stakeholders:
        "End users navigating client records day-to-day, application owners, and training staff supporting onboarding.",
    },
    technicalApproach: {
      headline: "Master-detail navigation plus onboarding for low-friction adoption",
      summary:
        "Built SAPUI5 views and controllers organizing client data in a master-detail pattern. Integrated the app into the Fiori Launchpad and designed a welcome page and guided walkthrough so users reached productive use without external training.",
      points: [
        "SAPUI5 master-detail views and controllers",
        "Structured client data presentation",
        "Fiori Launchpad integration",
        "Welcome page and guided walkthrough for onboarding",
      ],
    },
    architecturalDecisions: [
      {
        title: "Master-detail over flat list",
        decision:
          "Master-detail navigation for client records.",
        rationale:
          "Fits the parent-child relationship between a client and related data. Reduces context switching during routine work.",
      },
      {
        title: "In-app onboarding over external training",
        decision:
          "Build a welcome page and guided walkthrough inside the app.",
        rationale:
          "Training drifts over time. In-app guidance scales with continuous user onboarding and stays current.",
      },
      {
        title: "Launchpad integration as the entry point",
        decision:
          "Place the app behind a Launchpad tile rather than as a standalone URL.",
        rationale:
          "Single entry point aligned with broader Fiori UX. Users live in the Launchpad—meet them there.",
      },
    ],
    tradeoffs: [
      {
        title: "Onboarding format",
        chose: "In-app guided walkthrough",
        insteadOf: "External documentation",
        reasoning:
          "Docs go unread. In-app guidance reaches users when context matters most—their first session.",
      },
      {
        title: "Information pattern",
        chose: "Master-detail navigation",
        insteadOf: "Analytical dashboard",
        reasoning:
          "Use case is record navigation, not data exploration. Analytical patterns would mislead users about the app's purpose.",
      },
      {
        title: "Landing experience",
        chose: "Welcome page on first visit",
        insteadOf: "Land directly in data",
        reasoning:
          "New users need orientation. Experienced users can dismiss in one click—a low cost for higher first-session success.",
      },
    ],
    outcomes: {
      qualitative: [
        "Structured navigation across client records",
        "Reduced onboarding friction for new users",
        "Consistent presentation of related data",
        "Integration into the broader Fiori Launchpad",
        "Reusable patterns for similar applications",
      ],
    },
    lessonsLearned: [
      "Master-detail beats clever layouts when the data has a clear parent-child relationship.",
      "In-app onboarding pays for itself within weeks for any app new users continue to join.",
      "Launchpad integration is mandatory for adoption when users live there.",
      "Welcome pages aren't fluff. They reduce first-visit friction measurably.",
      "SAPUI5 supports rich onboarding patterns when UX is treated as a first-class concern.",
    ],
    whenItFits: {
      fitsWhen: [
        "SAPUI5 application needs structured navigation across related records",
        "Users will continue to onboard over time, not in a one-time event",
        "Application sits inside a Fiori Launchpad environment",
        "Cognitive load reduction is a stated business goal",
      ],
      avoidWhen: [
        "Use case is analytical exploration rather than record navigation",
        "All users are experienced—onboarding is a one-time event",
        "Launchpad isn't part of your deployment strategy",
      ],
    },
    cta: {
      headline: "Building a SAPUI5 application that needs onboarding-friendly navigation?",
      description:
        "If your team needs master-detail patterns with embedded onboarding inside Fiori Launchpad, share the use case and I'll outline an approach.",
      subject: "SAPUI5 Inquiry — Client Dashboard Case Study",
      primaryServiceHref: "/services/sapui5-fiori-development",
      primaryServiceLabel: "SAPUI5 & Fiori Development",
    },
  },

  "dorsyth-records-platform": {
    executiveSummary:
      "Designed and developed a config-driven Next.js platform for a multi-artist record label, supporting artist-specific branding, release promotion, video content, and segmented newsletter automation. Built reusable components and theme systems so new artists onboard as data, not engineering work.",
    businessChallenge: {
      context:
        "Dorsyth Records needed a digital platform capable of supporting multiple artists with distinct visual identities under a unified label experience, while preparing for future artist onboarding, release promotion, newsletter automation, and ecommerce expansion—without rebuilding the application architecture each time.",
      keyProblems: [
        "Multiple artists with distinct identities sharing one label",
        "Future artist onboarding without rebuilding the codebase",
        "Release promotion and cinematic video content presentation",
        "Newsletter segmentation by audience interest",
        "Foundation needed for merchandise/ecommerce expansion",
      ],
      stakeholders:
        "Label leadership, artists, fans and newsletter subscribers, and future commerce partners.",
    },
    technicalApproach: {
      headline: "Config-driven architecture so adding an artist is data, not code",
      summary:
        "Built a Next.js platform separating label identity, artist identity, and release identity into reusable configuration-driven systems. Artist pages render dynamically from centralized config files. Theme variables, release data, and newsletter segmentation are managed independently to enable long-term scale.",
      points: [
        "Config-driven artist architecture using TypeScript artist files",
        "Reusable cinematic page sections—releases, videos, streaming, merch, storytelling",
        "Artist-specific theming under a unified label identity",
        "Resend Contacts/Topics/Events integration for segmented newsletter automations",
        "Deployment workflows and operational documentation for long-term maintenance",
      ],
    },
    architecturalDecisions: [
      {
        title: "Config-driven artist pages over per-artist code",
        decision:
          "Render artist pages from TypeScript config files.",
        rationale:
          "New artists onboard as data. One template owns the structure; one fix propagates to every artist surface.",
      },
      {
        title: "Theme variables separated from layout",
        decision:
          "Artist themes as variable systems rather than component overrides.",
        rationale:
          "Visual differentiation without forking layouts. Keeps the unified label experience while letting each artist feel distinct.",
      },
      {
        title: "Resend Topics for newsletter segmentation",
        decision:
          "Topic-based segmentation in Resend rather than per-list provisioning.",
        rationale:
          "Subscribers self-select interests. Scales without operational overhead and avoids list-sprawl as the roster grows.",
      },
      {
        title: "Next.js on Vercel deployment",
        decision:
          "Next.js with Vercel hosting and CI.",
        rationale:
          "SSR/SSG flexibility, image optimization, deployment simplicity for a small team—and modern operational tooling out of the box.",
      },
    ],
    tradeoffs: [
      {
        title: "Content management approach",
        chose: "TypeScript config files",
        insteadOf: "Headless CMS",
        reasoning:
          "Small team, technical owner, rapid iteration. CMS overhead unjustified at current scale; can be layered in later when non-technical editors join.",
      },
      {
        title: "Visual system",
        chose: "Custom theming for cinematic feel",
        insteadOf: "Generic component library",
        reasoning:
          "Visual differentiation is the product when the product is a label. Off-the-shelf component libraries don't deliver cinematic.",
      },
      {
        title: "Email service provider",
        chose: "Resend with Topics",
        insteadOf: "Mailchimp or similar legacy ESP",
        reasoning:
          "API-first, modern developer experience, sufficient feature set at current scale. Reduces vendor sprawl and operational toil.",
      },
    ],
    outcomes: {
      qualitative: [
        "Two artist platforms shipped under unified label",
        "Three newsletter segments supporting targeted promotion",
        "Eight+ reusable cinematic page sections",
        "Operational documentation enabling long-term maintenance",
        "Architecture ready for future artist onboarding and merchandise expansion",
      ],
    },
    lessonsLearned: [
      "Config-driven patterns shine when content has predictable structure and varying data.",
      "Brand identity is the product when the product is a label. Design isn't decoration.",
      "Newsletter segmentation by interest beats segmentation by artist for engagement.",
      "Documentation pays back fast on platforms with multiple stakeholders.",
      "Modern stack choices—Next.js, Resend, Vercel—keep operational overhead low for small teams.",
    ],
    whenItFits: {
      fitsWhen: [
        "Multi-tenant or multi-brand experiences share a unified parent identity",
        "New entities should onboard via configuration rather than engineering",
        "Brand differentiation matters and off-the-shelf design systems won't suffice",
        "Small team needs operational simplicity—modern hosting, modern ESP, low toil",
      ],
      avoidWhen: [
        "Single brand with no multi-tenant needs",
        "Non-technical owners need a CMS-first editorial workflow",
        "Scale demands enterprise-grade marketing infrastructure today",
      ],
    },
    cta: {
      headline: "Planning a config-driven product-style web platform?",
      description:
        "If a Next.js platform with reusable architecture and modern tooling fits your scope, share the project and I'll respond with options.",
      subject: "Modern Web Platform Inquiry — Dorsyth Records Case Study",
      primaryServiceHref: "/services/enterprise-ui-ux",
      primaryServiceLabel: "Enterprise UI/UX",
    },
  },
}

export function getConsultingCaseStudy(slug: string) {
  return consultingCaseStudies[slug]
}
