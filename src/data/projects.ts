// @/data/projects.ts

export interface Project {
    slug: string
    title: string
    featured?: boolean
    categories: ("SAP BTP" | "Salesforce" | "DevOps" | "Content" | "UI/UX" | "Technical Documentation")[]
    stack: string[]
    summary: string
    problem: string
    solution: string
    impact: string
    architecture?: {
        title?: string
        description?: string
    }
    securityArchitecture?: {
      title: string
      description: string
      highlights: string[]
    }
    role?: {
        title: string
        description: string
        points: string[]
        footerLabel?: string
    }
    metrics: { label: string; value: string }[]
    timeline?: {
      discovery?: string
      architecture?: string
      development?: string
      deployment?: string
    }
    deepDive?: {
        eyebrow?: string
        title: string
        description: string
    }
    
    codeSnippet?: string
    codeLanguage?: string
    architectureDiagram?: {
        type: "manufacturer-portal"
    }
  }
  
  export const projects: Record<string, Project> = {
    "manufacturer-portal": {
      slug: "manufacturer-portal",
      title: "Manufacturer Analytics Portal",
      featured: true,
      categories: ["SAP BTP","UI/UX", "DevOps", "Technical Documentation"],
      stack: ["SAP BTP", "CAP", "SAPUI5", "Build Work Zone"],
      summary: "Architected a centralized secure entry point for external manufacturers, replacing legacy Power BI portals with a unified SAP BTP ecosystem.",
      problem: "External partners faced fragmented data access across siloed portals, leading to reporting delays and security complexities for a major healthcare leader.",
      solution: "Designed a multi-tenant portal using SAP Build Work Zone and a Node.js CAP backend, centralizing 22 custom Fiori applications into a single authenticated experience.",
      impact: "22 Custom Apps Deployed",
      architecture: {
        title: "Multi-Tenant Analytics Architecture",
        description:
          "Built on SAP BTP, this architecture enables secure, multi-tenant access for external manufacturers through a unified portal. SAPUI5 applications are delivered via Build Work Zone, while a CAP-based service layer enforces data isolation using attribute-based access control (ABAC). Identity federation with Okta and SAP IAS ensures seamless authentication and tenant-specific data access."
      },
      architectureDiagram: {
        type: "manufacturer-portal"
      },
      
      securityArchitecture: {
        title: "Advanced Identity Federation",
        description: "Implemented a seamless SSO experience by federating Okta with SAP Cloud Identity Services (IAS).",
        highlights: [
          "Mapped custom Okta attributes (Manufacturer_ID, Region_Code) to SAML assertions.",
          "Configured SAP IAS as the proxy to pass these attributes into the BTP XSUAA service.",
          "Implemented Attribute-Based Access Control (ABAC) in the CAP layer to restrict data visibility based on these passed attributes."
        ]
      },
      metrics: [
        { label: "Applications Built", value: "22" },
        { label: "User Adoption", value: "+40%" },
        { label: "Legacy Portals Retired", value: "40" },
      ],
      timeline: {
        discovery: "Analyzed existing Power BI workflows and mapped data requirements for external manufacturer personas. Identified security gaps in cross-platform authentication.",
        architecture: "Designed a robust architecture using SAP BTP Cloud Foundry. Implemented SAP Build Work Zone and custom SAPUI5 applications for the frontend and SAP CAP (Node.js) for the service layer.",
        development: "Led a team to develop 15 custom SAPUI5/Fiori applications. Integrated SAP Datasphere for real-time analytics and implemented Okta for secure external identity management.",
        deployment: "Managed a phased rollout strategy reaching go-live in December 2025. Established CI/CD pipelines to ensure zero-downtime updates for the manufacturer community.",
      },
      deepDive: {
        eyebrow: "Technical Deep Dive",
        title: "Architecture & Implementation",
        description:
          "Built on SAP BTP, this architecture enables secure, multi-tenant access..."
      },
      codeSnippet: `// CAP CDS Service for Manufacturer Analytics
  service ManufacturerService @(path: '/api/v1/analytics') {
    @readonly
    entity SalesPerformance as select from db.Sales {
      key ID,
      manufacturerName,
      productCategory,
      monthlyRevenue,
      growthPercentage,
      virtual marginIndicator : String
    };
  
    annotate SalesPerformance with @(
      requires: 'authenticated-user',
      restrict: [{ grant: 'READ', where: 'manufacturerId = $user.id' }]
    );
  }`,
      codeLanguage: "javascript",
    },
    // ... rest of your projects (customer-360, field-service, partner-hub)
    "salesforce-devops": {
        slug: "salesforce-devops",
        title: "Salesforce Release Management",
        featured: true,
        categories: ["DevOps"],
        stack: ["Salesforce", "GitHub", "SFDX", "DevOps"],
        summary: "Managed CI/CD and release deployments across multiple Salesforce environments.",
        problem: "A multi-track development setup with parallel Dev and QA streams created risk of merge conflicts, failed deployments, and inconsistent releases.",
        solution: "Owned the deployment process using GitHub and SFDX, validating and promoting metadata across Dev, QA, UAT, and Production. Coordinated releases across teams, resolved deployment conflicts, and ensured consistent promotion of changes between environments.",
        impact: "Stable Multi-Env Releases",
        role: {
            title: "Release Ownership Across Environments",
            description:
              "I was responsible for managing release movement across multiple Salesforce environments, supporting stable deployments and coordinating changes across parallel development tracks.",
            points: [
              "Owned the deployment process across Dev, QA, UAT, and Production environments",
              "Validated and packaged Salesforce metadata for promotion between environments",
              "Resolved deployment conflicts and supported release readiness across teams",
              "Handled bi-weekly production releases and hotfix deployments"
            ],
            footerLabel: "4 Environments • 2 Release Tracks"
        },
        metrics: [
            { label: "Environments", value: "4" },
            { label: "Release Tracks", value: "2" }
        ],

        timeline: {
            development: "Prepared and validated Salesforce metadata, resolving conflicts and ensuring readiness for deployment across environments.",
            deployment: "Led bi-weekly production releases and hotfix deployments, coordinating across teams to ensure smooth rollouts."
        },
        deepDive: {
            eyebrow: "Execution Approach",
            title: "Release Strategy",
            description:
              "Focused on maintaining consistency across environments by validating metadata before promotion, coordinating releases across parallel tracks, and reducing deployment risk during production rollouts."
        }
        
    },
   "enterprise-governance": {
        slug: "enterprise-governance",
        title: "SAP BTP Extensibility Governance",
        categories: ["Technical Documentation"],
        stack: ["SAP BTP", "Technical Documentation"],

        summary: "Defined SAP BTP extensibility standards to support a Clean Core S/4HANA strategy.",

        problem: "Teams needed clearer guidance on when to use Side-by-Side versus In-App extensibility, which services to adopt, and how to align new development with Clean Core principles.",

        solution: "Produced an enterprise governance document covering extensibility patterns, platform recommendations, and technical standards for SAP BTP-based development.",

        impact: "Clean Core Standards Defined",

        metrics: [
            { label: "Guidelines", value: "12" },
            { label: "Patterns", value: "5" },
            { label: "Stakeholders", value: "8" }
        ],

        role: {
            title: "Governance & Standards Definition",
            description: "Focused on translating Clean Core goals into practical guidance that development teams could apply when planning and building SAP extensions.",
            points: [
            "Reviewed the existing SAP landscape to identify extensibility decision points and governance gaps",
            "Evaluated SAP BTP services and documented recommended usage patterns",
            "Defined guidance for Side-by-Side and In-App extensibility approaches",
            "Created a standards document to support more consistent implementation decisions across teams"
            ],
            footerLabel: "12 Guidelines • 5 Patterns • 8 Stakeholders"
        },

        timeline: {
            discovery: "Reviewed the current SAP landscape and identified governance gaps and extensibility decision points.",
            architecture: "Evaluated SAP BTP services and documented recommended patterns for Side-by-Side and In-App extensibility."
        },

        deepDive: {
            eyebrow: "Execution Approach",
            title: "Governance Strategy",
            description: "The work focused on turning Clean Core principles into usable standards by mapping extensibility scenarios to recommended SAP BTP services, patterns, and decision criteria."
        }
    },
    "fuel-management": {
        slug: "fuel-management",
        title: "Fuel Vendor Invoice Management System",
        categories: ["SAP BTP", "UI/UX", "DevOps"],
        stack: ["SAPUI5", "OData", "Fiori"],

        summary: "Built SAPUI5 applications to streamline fuel data entry and improve accuracy in vendor invoice processing.",

        problem: "Fuel data for vendor payments was manually entered across disconnected processes, leading to data inconsistencies, validation issues, and delays in invoice processing.",

        solution: "Developed 4 SAPUI5 form-based applications that standardized data entry, introduced validation logic, and integrated with backend OData services to support accurate and consistent vendor invoicing.",

        impact: "Improved Invoice Accuracy",

        metrics: [
            { label: "Apps", value: "4" },
            { label: "Flows", value: "4" },
            { label: "Users", value: "20+" }
        ],

        role: {
            title: "UI Development & Workflow Implementation",
            description: "Focused on translating business workflows into structured, user-friendly applications that improved data quality and reduced manual errors.",
            points: [
            "Worked with business users to understand fuel entry and vendor payment workflows",
            "Built 4 SAPUI5 applications for structured data entry and validation",
            "Implemented client-side validation logic to enforce business rules",
            "Integrated applications with OData services for backend processing"
            ],
            footerLabel: "4 Apps • 4 Workflows • 20+ Users"
        },

        timeline: {
            discovery: "Collaborated with business users to map fuel entry and vendor payment workflows.",
            development: "Developed SAPUI5 applications with a focus on usability, validation, and efficient data entry.",
            deployment: "Supported rollout and adoption for daily invoice processing by business users."
        },

        deepDive: {
            eyebrow: "Execution Approach",
            title: "Form-Based Workflow Design",
            description: "The applications focused on structured data capture and validation, ensuring that fuel entries aligned with vendor contracts and reducing errors before submission to backend systems."
        },

        codeSnippet: `// Advanced Validation for Fuel Invoice Entry
        onFuelEntryChange: function(oEvent) {
        const sValue = oEvent.getParameter("value");
        if (!this._validateFuelQuantity(sValue)) {
            oEvent.getSource().setValueState("Error");
            oEvent.getSource().setValueStateText("Quantity exceeds vendor contract limits");
        }
        }`,
  codeLanguage: "javascript"
    },
    "partner-portal": {
        slug: "partner-portal",
        title: "Partner Warranty Portal",
        featured: true,
        categories: ["Salesforce", "UI/UX",],
        stack: ["Salesforce", "Experience Cloud", "LWC", "Aura", "Apex"],

        summary: "Developed a Salesforce Experience Cloud portal to surface warranty and RGA data tied to support workflows.",

        problem: "Warranty and RGA details were not easily accessible within support workflows, requiring manual lookups and slowing down issue resolution.",

        solution: "Built a custom Experience Cloud site using LWC and Aura components to display warranty and RGA data in context. Contributed Apex logic for backend processing and supported admin configuration for validation workflows and user access.",

        impact: "Improved Support Visibility",

        metrics: [
            { label: "Tech Layers", value: "3" },
            { label: "Admin Tasks", value: "2" },
            { label: "Cutover Tasks", value: "1" }
        ],

        role: {
            title: "Frontend Development & Platform Configuration",
            description: "Focused on building a user-facing portal that integrated warranty data into support workflows while supporting platform configuration during rollout.",
            points: [
            "Developed Lightning Web Components (LWC) and Aura components for data display",
            "Contributed Apex logic to support backend data retrieval",
            "Configured page layouts and user access for validation workflows",
            "Performed bulk user onboarding during production cutover using Data Loader"
            ],
            footerLabel: "LWC • Aura • Apex • Admin Config"
        },

        timeline: {
            development: "Developed LWC and Aura components and contributed Apex logic to support data retrieval and presentation.",
            deployment: "Configured page layouts, assigned users for validation, and performed bulk user uploads during production cutover."
        },

        deepDive: {
            eyebrow: "Execution Approach",
            title: "Component-Based Portal Development",
            description: "The portal was built using reusable LWC and Aura components to present warranty and RGA data in a structured, user-friendly interface, reducing reliance on manual lookup processes."
        },

        codeSnippet: `<aura:component>
            <aura:attribute name="warrantyData" type="Object" />

            <div class="portal-card">
                <div class="card-header">
                    <lightning:icon iconName="utility:check" size="small" />
                    <span class="title">Warranty Status</span>
                </div>

                <div class="card-body">
                    <p class="label">Serial Number</p>
                    <p class="value">{!v.warrantyData.serialNumber}</p>

                    <p class="label">Status</p>
                    <p class="{!v.warrantyData.active ? 'status-active' : 'status-expired'}">
                        {!v.warrantyData.active ? 'Active' : 'Expired'}
                    </p>
                </div>
            </div>
        </aura:component>

        .THIS .portal-card {
            border-radius: 12px;
            padding: 16px;
            background: #1c1f26;
        }

        .THIS .title {
            font-weight: 600;
            margin-left: 8px;
        }

        .THIS .status-active {
            color: #22c55e;
        }

        .THIS .status-expired {
            color: #ef4444;
        }`,
        codeLanguage: "html"
    },
    "utility-customer-portal": {
        slug: "utility-customer-portal",
        title: "Utility Customer Self-Service Portal",
        categories: ["Salesforce", "UI/UX"],
        stack: ["Salesforce", "Experience Cloud", "Aura"],

        summary: "Contributed to a large-scale Salesforce Experience Cloud portal enabling customers to manage utility services and payments online.",

        problem: "Customers relied on fragmented channels to manage utility services, making tasks like starting service, paying bills, and reporting outages inefficient.",

        solution: "Developed Aura-based UI components following a custom design system to support key customer workflows, including service management, billing, and outage reporting. Also created custom email templates to support customer communication throughout these processes.",

        impact: "Customer Self-Service Enabled",

        metrics: [
            { label: "Features", value: "4" },
            { label: "UI Layers", value: "2" },
            { label: "Deliverables", value: "2" }
        ],

        role: {
            title: "UI Development & Design System Implementation",
            description: "Focused on building customer-facing experiences by implementing UI components aligned with a predefined design system.",
            points: [
            "Developed Aura components to support core customer workflows",
            "Implemented UI based on a custom design system created by UX designers",
            "Built interfaces for service management, billing, and outage reporting",
            "Created custom Salesforce email templates for customer communications"
            ],
            footerLabel: "Aura • Experience Cloud • Design System"
        },

        timeline: {
            development: "Developed Aura components aligned with a custom design system to support core customer portal functionality.",
            deployment: "Supported UI readiness and email template setup for production rollout."
        },

        deepDive: {
            eyebrow: "Execution Approach",
            title: "Design System Implementation",
            description: "Focused on translating a predefined design system into reusable Aura components, ensuring a consistent and scalable user experience across customer-facing workflows."
        }
    },
    "sap-sapphire-media": {
        slug: "sap-sapphire-media",
        title: "SAP SAPPHIRE Demo & Marketing Videos",
        categories: ["Content"],
        stack: ["Adobe Premiere Pro", "After Effects", "Amazon Polly"],

        summary: "Produced demo and marketing videos to communicate SAP solutions at the SAP SAPPHIRE event.",

        problem: "Enterprise solutions required clear and engaging content to effectively communicate their value to a broad audience during a high-visibility event.",

        solution: "Created 20+ demo and marketing videos using Adobe Creative Suite, combining screen recordings, motion graphics, and voiceovers to present key features and user journeys in a clear, structured format.",

        impact: "20+ Videos Delivered",

        metrics: [
            { label: "Videos", value: "20+" },
            { label: "Event", value: "1" },
            { label: "Formats", value: "2" }
        ],

        role: {
            title: "Content Production & Visual Storytelling",
            description: "Focused on translating technical solutions into clear, engaging video content for demos and marketing presentations.",
            points: [
            "Produced 20+ demo and marketing videos for SAP SAPPHIRE",
            "Edited and assembled video content using Premiere Pro and After Effects",
            "Created motion graphics to highlight key features and workflows",
            "Integrated voiceovers using Amazon Polly for consistent narration"
            ],
            footerLabel: "20+ Videos • Motion Graphics • Voiceover"
        },

        timeline: {
            discovery: "Reviewed solution demos and identified key flows to highlight in video content.",
            development: "Produced and edited videos using Premiere Pro and After Effects, incorporating motion graphics and voiceovers.",
            deployment: "Delivered final video assets for use in SAP SAPPHIRE presentations and demos."
        },

        deepDive: {
            eyebrow: "Execution Approach",
            title: "Visual Storytelling for Enterprise Solutions",
            description: "Focused on simplifying complex technical concepts into clear, engaging narratives through video, combining structured demos, motion design, and voice-driven walkthroughs."
        }
    },
    "kpmg-client-dashboard": {
        slug: "kpmg-client-dashboard",
        title: "Client Data Dashboard (SAPUI5)",
        featured: true,
        categories: ["SAP BTP", "UI/UX"],
        stack: ["SAPUI5", "Fiori Launchpad", "JavaScript", "Bootstrap"],

        summary: "Developed a SAPUI5 application to improve navigation and visibility of client data within a Fiori Launchpad environment.",

        problem: "Users needed a more structured and intuitive way to navigate client records and access related data within a larger enterprise application.",

        solution: "Built a master-detail SAPUI5 application to organize and display client data, integrated into the Fiori Launchpad. Also developed a welcome page and implemented a guided walkthrough to improve onboarding and usability.",

        impact: "Improved Data Navigation",

        metrics: [
            { label: "Apps", value: "1" },
            { label: "Pages", value: "2" },
            { label: "Enhancements", value: "2" }
        ],

        role: {
            title: "UI Development & User Experience Enhancements",
            description: "Focused on improving how users navigate and interact with client data through structured UI patterns and onboarding support.",
            points: [
            "Developed SAPUI5 views and controllers for master-detail navigation",
            "Structured client data presentation for improved usability",
            "Integrated the application into the Fiori Launchpad",
            "Built a welcome page and implemented a guided walkthrough for onboarding"
            ],
            footerLabel: "SAPUI5 • Fiori • Onboarding"
        },

        timeline: {
            development: "Developed SAPUI5 components to support master-detail navigation and structured client data display.",
            deployment: "Integrated the application into the Fiori Launchpad and supported onboarding through a welcome page and guided walkthrough."
        },

        deepDive: {
            eyebrow: "Execution Approach",
            title: "Master-Detail UI Design",
            description: "Focused on structuring client data using a master-detail pattern to improve navigation and usability, complemented by onboarding features to guide users through the application."
        }
    },
    "national-rail-mobile": {
        slug: "national-rail-mobile",
        title: "Solution Showcase (Rail Industry)",
        categories: ["Content"],
        stack: ["Adobe Premiere Pro", "After Effects", "UI/UX Design"],

        summary: "Produced a high-impact video to showcase a solution and support executive-level decision making.",

        problem: "A technically strong solution lacked a clear and compelling narrative to communicate its value to stakeholders and drive adoption.",

        solution: "Created a polished showcase video combining user journeys, and key solution highlights to present the product in a clear, engaging format.",

        impact: "Executive Alignment Achieved",

        metrics: [
            { label: "Deliverables", value: "1" },
            { label: "Audience", value: "Execs" },
            { label: "Formats", value: "Video" }
        ],

        role: {
            title: "Content Strategy & Video Production",
            description: "Focused on translating a technical solution into a clear narrative that resonated with non-technical stakeholders.",
            points: [
            "Analyzed solution features to identify key user journeys to highlight",
            "Designed a storyboard to balance technical detail with user-focused storytelling",
            "Produced and edited video content using Premiere Pro and After Effects",
            "Presented the final showcase to stakeholders to support project alignment"
            ],
            footerLabel: "Storytelling • Motion Design • Executive Audience"
        },

        timeline: {
            discovery: "Analyzed the solution to identify key user flows and messaging priorities.",
            development: "Created storyboard and produced video using Premiere Pro and After Effects.",
            deployment: "Delivered and presented the final video to stakeholders during project wrap-up."
        },

        deepDive: {
            eyebrow: "Execution Approach",
            title: "Narrative-Driven Solution Showcase",
            description: "Focused on transforming technical features into a clear narrative by highlighting user journeys, simplifying complex functionality, and presenting the solution in a format tailored for executive stakeholders."
        }
    }
  }