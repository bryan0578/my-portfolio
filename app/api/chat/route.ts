import OpenAI from "openai"
import { NextResponse } from "next/server"
import { buildPortfolioContext } from "@/lib/portfolio-assistant"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

function getFallbackResponse(input: string): string {
  const message = input.toLowerCase()

  // Featured projects
  if (
    message.includes("featured project") ||
    message.includes("best project") ||
    message.includes("top project") ||
    message.includes("why are these featured") ||
    message.includes("why featured")
  ) {
    return `Bryan’s featured projects are the strongest examples of range, depth, and business impact across his portfolio.

Here’s why they’re featured:

1. Manufacturer Analytics Portal
This is a flagship SAP BTP project because it combines architecture, SAPUI5, CAP, Build Work Zone, identity federation, and multi-tenant access. It shows both technical depth and enterprise scale.

2. Salesforce Release Management
This project highlights DevOps and delivery ownership. It shows Bryan’s ability to manage releases across multiple Salesforce environments, coordinate deployments, and reduce release risk in a complex setup.

3. Partner Warranty Portal
This project demonstrates Salesforce Experience Cloud, frontend implementation, platform configuration, and support workflow integration. It shows that Bryan can work across UI, backend support, admin setup, and cutover.

4. Client Data Dashboard (SAPUI5)
This is featured because it represents strong UI and UX-oriented enterprise development. It shows Bryan’s SAPUI5 experience, structured navigation patterns, Fiori Launchpad integration, and onboarding improvements.

Together, these projects were selected because they best represent Bryan’s strengths across SAP, Salesforce, DevOps, and enterprise user experience.`
  }

  // Technical skills
  if (
    message.includes("technical skill") ||
    message.includes("technical skills") ||
    message.includes("skills") ||
    message.includes("tech stack") ||
    message.includes("what can bryan do") ||
    message.includes("what does bryan specialize in")
  ) {
    return `Bryan’s strongest technical skills are grouped across a few key areas:

SAP
- SAP BTP
- SAPUI5
- CAP
- Build Work Zone
- Fiori Launchpad
- OData

Salesforce
- Salesforce
- Experience Cloud
- Aura
- LWC
- Apex
- platform configuration and release support

DevOps and Delivery
- GitHub
- SFDX
- multi-environment release management
- deployment coordination
- hotfix and production rollout support

Frontend and UX Implementation
- enterprise UI development
- design system implementation
- master-detail navigation patterns
- onboarding and guided walkthroughs
- Bootstrap
- JavaScript

Documentation and Communication
- technical governance documentation
- extensibility standards
- solution storytelling
- showcase and demo video production

Overall, Bryan is strongest where enterprise systems, frontend user experience, and delivery execution overlap.`
  }

  // SAP specific
  if (
    message.includes("sap btp") ||
    message.includes("sapui5") ||
    message.includes("sap") ||
    message.includes("fiori") ||
    message.includes("cap") ||
    message.includes("build work zone")
  ) {
    return `Bryan has strong SAP experience across both platform and UI work.

His SAP-related experience includes:
- SAP BTP architecture and application development
- SAPUI5 enterprise application development
- CAP-based backend services
- Build Work Zone and Fiori Launchpad integration
- OData-driven workflow applications
- governance and extensibility standards for Clean Core initiatives

Examples of this work include:
- a multi-tenant Manufacturer Analytics Portal
- SAPUI5 applications for vendor invoice workflows
- a Client Data Dashboard integrated into Fiori Launchpad
- SAP BTP extensibility governance documentation

This combination makes Bryan especially strong in building and shaping enterprise SAP experiences end to end.`
  }

  // Salesforce specific
  if (
    message.includes("salesforce") ||
    message.includes("experience cloud") ||
    message.includes("lwc") ||
    message.includes("aura") ||
    message.includes("apex") ||
    message.includes("sfdx")
  ) {
    return `Bryan’s Salesforce experience spans both platform delivery and customer-facing applications.

His Salesforce work includes:
- Experience Cloud portals
- Aura and LWC component development
- Apex contributions
- page layout and user configuration
- release management using SFDX and GitHub
- production cutover and deployment support

Examples include:
- a Partner Warranty Portal for support-related warranty and RGA visibility
- a Utility Customer Self-Service Portal for service management, billing, and outage workflows
- Salesforce Release Management across Dev, QA, UAT, and Production environments

This shows a mix of frontend implementation, platform operations, and real-world enterprise delivery.`
  }

  // UI/UX / frontend
  if (
    message.includes("ui") ||
    message.includes("ux") ||
    message.includes("frontend") ||
    message.includes("front end") ||
    message.includes("design system") ||
    message.includes("user experience")
  ) {
    return `Bryan’s frontend and UI/UX work is centered on enterprise usability, structured workflows, and implementation against real design constraints.

That includes:
- SAPUI5 enterprise interfaces
- Aura and LWC component development
- design system implementation
- onboarding and guided walkthroughs
- master-detail navigation
- structured form-based workflows

Strong examples include:
- the Utility Customer Self-Service Portal, built from a predefined design system
- the Client Data Dashboard, which improved navigation and onboarding
- the Fuel Vendor Invoice Management System, which focused on form-based workflow design and validation

Bryan’s UI work is strongest when it supports complex business processes in a way that feels usable and consistent.`
  }

  // DevOps / release management
  if (
    message.includes("devops") ||
    message.includes("release") ||
    message.includes("deployment") ||
    message.includes("ci/cd") ||
    message.includes("github") ||
    message.includes("hotfix")
  ) {
    return `Bryan’s DevOps and release experience is best represented by his Salesforce Release Management work.

That project involved:
- managing deployments across Dev, QA, UAT, and Production
- validating and packaging metadata for promotion between environments
- coordinating releases across parallel development tracks
- handling bi-weekly releases and hotfixes
- reducing risk in multi-environment delivery

It’s featured because it shows operational ownership and reliability, not just implementation. It reflects Bryan’s ability to keep delivery stable in a complex enterprise release process.`
  }

  // Governance / documentation
  if (
    message.includes("governance") ||
    message.includes("documentation") ||
    message.includes("clean core") ||
    message.includes("extensibility")
  ) {
    return `Bryan’s governance and documentation work includes defining SAP BTP extensibility standards to support Clean Core initiatives.

That work focused on:
- evaluating when to use Side-by-Side vs In-App extensibility
- documenting recommended patterns and platform usage
- creating practical standards teams could follow
- helping development teams make more consistent implementation decisions

This project matters because it shows Bryan can contribute not only through implementation, but also through strategic technical guidance.`
  }

  // Content / storytelling
  if (
    message.includes("content") ||
    message.includes("video") ||
    message.includes("marketing") ||
    message.includes("storytelling") ||
    message.includes("sapphire")
  ) {
    return `Bryan’s portfolio also includes content and video work focused on explaining enterprise solutions clearly.

This includes:
- SAP SAPPHIRE demo and marketing videos
- executive-facing solution showcase content
- motion graphics and voiceover integration
- translating technical functionality into clear narratives

These projects are valuable because they show Bryan can do more than build systems — he can also help communicate them effectively to stakeholders, event audiences, and decision makers.`
  }

  // Individual project: manufacturer
  if (
    message.includes("manufacturer portal") ||
    message.includes("manufacturer analytics") ||
    message.includes("mckesson")
  ) {
    return `The Manufacturer Analytics Portal is one of Bryan’s flagship projects.

It stands out because it combines:
- SAP BTP
- SAPUI5
- CAP
- Build Work Zone
- identity and access architecture
- multi-tenant external user access

It’s a strong example of Bryan’s ability to work across architecture, enterprise UI, secure access, and platform integration in a single project.`
  }

  // Individual project: partner portal
  if (
    message.includes("partner portal") ||
    message.includes("warranty portal") ||
    message.includes("juniper")
  ) {
    return `The Partner Warranty Portal is a strong Salesforce project in Bryan’s portfolio.

It focused on:
- Experience Cloud
- Aura and LWC development
- Apex support
- support workflow visibility
- page layout and user configuration
- cutover support

It’s valuable because it shows Bryan contributing across frontend, backend support, admin configuration, and rollout preparation.`
  }

  // Individual project: utility portal
  if (
    message.includes("utility portal") ||
    message.includes("customer self-service") ||
    message.includes("entergy")
  ) {
    return `The Utility Customer Self-Service Portal highlights Bryan’s experience building customer-facing enterprise UI.

The project included:
- Aura component development
- Experience Cloud
- design system implementation
- workflows for service management, bill pay, and outage reporting
- customer communication templates

It’s one of the strongest examples of Bryan’s ability to translate design systems into real enterprise interfaces.`
  }

  // Individual project: KPMG dashboard
  if (
    message.includes("client dashboard") ||
    message.includes("kpmg") ||
    message.includes("master-detail")
  ) {
    return `The Client Data Dashboard is a strong SAPUI5 project that highlights Bryan’s frontend and UX-focused work.

It included:
- master-detail navigation
- SAPUI5 views and controllers
- Fiori Launchpad integration
- a welcome page
- a guided onboarding walkthrough

It’s featured because it shows Bryan improving usability, navigation, and onboarding inside an enterprise application.`
  }

  // Contact / collaboration
  if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("hire") ||
    message.includes("collaborate") ||
    message.includes("reach")
  ) {
    const email = process.env.BRYAN_EMAIL || "hello@example.com"
    return `You can contact Bryan directly at ${email}. You can also explore the Projects page to get a better sense of his experience across SAP BTP, Salesforce, DevOps, UI/UX, and enterprise solution storytelling.`
  }

  // General projects / portfolio
  if (
    message.includes("project") ||
    message.includes("portfolio") ||
    message.includes("work") ||
    message.includes("experience")
  ) {
    return `Bryan’s portfolio spans five main areas:

1. SAP BTP and SAPUI5
Enterprise portals, workflow applications, dashboards, and governance work.

2. Salesforce
Experience Cloud portals, frontend component work, platform configuration, and release management.

3. DevOps and Delivery
Multi-environment release workflows, deployment coordination, and hotfix support.

4. UI/UX Implementation
Design system implementation, onboarding, navigation patterns, and structured enterprise interfaces.

5. Content and Storytelling
Demo videos, marketing content, and executive-facing solution showcases.

The featured projects were chosen because they best represent the breadth and depth of these strengths.`
  }

  if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("hire") ||
    message.includes("collaborate") ||
    message.includes("reach")
  ) {
    const email = process.env.BRYAN_EMAIL || "hello@example.com"
    return `You can contact Bryan directly at ${email}. You can also use the Contact Bryan quick action in the chat bubble.`
  }

  return "I can help with Bryan’s technical skills, featured projects, SAP BTP work, Salesforce experience, content work, and how to get in touch. Try asking about his strongest skills or featured projects."
}

export async function POST(req: Request) {
  let latestUserMessage = ""

  try {
    const body = await req.json()
    const messages = (body.messages ?? []) as ChatMessage[]

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required." },
        { status: 400 }
      )
    }

    latestUserMessage =
      [...messages].reverse().find((m) => m.role === "user")?.content || ""

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        message: getFallbackResponse(latestUserMessage),
        mode: "fallback",
      })
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      messages: [
        {
          role: "developer",
          content: buildPortfolioContext(),
        },
        ...messages.map((message) => ({
          role: message.role,
          content: message.content,
        })),
      ],
      temperature: 0.5,
    })

    const reply = completion.choices[0]?.message?.content

    return NextResponse.json({
      message: reply || getFallbackResponse(latestUserMessage),
      mode: "ai",
    })
  } catch (error: unknown) {
    console.error("Chat route error:", error)
    const err = error as { status?: number | string; code?: number | string; message?: string }

    const status = err.status || err.code
    const message = String(err.message || "").toLowerCase()

    const isQuotaError = status === 429 || message.includes("quota")
    const isBillingError =
      message.includes("billing") || message.includes("rate limit")

    if (isQuotaError || isBillingError) {
      return NextResponse.json({
        message: getFallbackResponse(latestUserMessage),
        mode: "fallback",
      })
    }

    return NextResponse.json({
      message: getFallbackResponse(latestUserMessage),
      mode: "fallback",
    })
  }
}