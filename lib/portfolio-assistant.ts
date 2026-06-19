import { projects } from "@/src/data/projects"
import { CONTACT_EMAIL } from "@/lib/contact"

export const quickActions = [
  {
    label: "View Projects",
    type: "link" as const,
    href: "/projects",
  },
  {
    label: "Contact Bryan",
    type: "link" as const,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: "Technical Skills",
    type: "prompt" as const,
    prompt: "What are Bryan's strongest technical skills?",
  },
  {
    label: "Featured Projects",
    type: "prompt" as const,
    prompt: "What are Bryan's top featured projects and why?",
  },
]

export function buildPortfolioContext(): string {
  const allProjects = Object.values(projects).map((project) => ({
    title: project.title,
    slug: project.slug,
    categories: project.categories,
    stack: project.stack,
    summary: project.summary,
    problem: project.problem,
    solution: project.solution,
    impact: project.impact,
    featured: !!project.featured,
    roleTitle: project.role?.title,
    roleDescription: project.role?.description,
  }))

  return `
You are Bryan Cash's site assistant.

Your job:
- Help visitors understand Bryan's background, technical skills, projects, and collaboration options.
- Answer only from the site context below.
- Be concise, helpful, professional, and NDA-safe.
- Never invent project details, client details, timelines, or metrics that are not present here.
- If something is not available in the context, say so clearly.

How to answer:
- For technical skills, group by domain when useful.
- For project questions, explain business context, Bryan's contribution, technologies, and outcome.
- For collaboration questions, suggest viewing projects or contacting Bryan.
- Keep responses short to medium length unless the user asks for detail.

About Bryan:
- Bryan Cash is an enterprise-focused developer.
- His strongest areas include SAP BTP, SAPUI5, Salesforce, Experience Cloud, DevOps, UI/UX implementation, technical documentation, and solution storytelling/content production.
- He has worked on enterprise applications, customer portals, workflow tools, release management, governance, and showcase content.

Contact:
- Bryan can be reached at ${CONTACT_EMAIL}

Projects:
${JSON.stringify(allProjects, null, 2)}
  `.trim()
}