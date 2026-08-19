import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Work History | Senior Software Engineer & SAP BTP Technical Lead",
  description:
    "Bryan Cash's enterprise work history and role progression across SAP BTP, SAPUI5/Fiori, technical leadership, integration, and delivery at Tata Consultancy Services.",
  alternates: { canonical: "/career/experience" },
}

const groups = [
  {
    code: "BTP / UI",
    title: "Primary engineering strengths",
    items: [
      "SAP BTP application development",
      "SAPUI5 and SAP Fiori application engineering",
      "SAP CAP service development with Node.js",
      "SAP Build Work Zone configuration",
      "SAP Cloud Identity Services with Okta SSO integration",
      "Enterprise frontend architecture",
      "OData and REST API consumption",
      "React and Next.js product engineering",
    ],
  },
  {
    code: "DELIVERY",
    title: "Technical leadership & execution",
    items: [
      "Requirements gathering and translation",
      "Cross-team dependency coordination",
      "Technical documentation and decision support",
      "Stakeholder communication",
      "Testing and validation",
      "Mentoring developers and unblocking implementation",
    ],
  },
  {
    code: "ADDITIONAL",
    title: "Supporting platform experience",
    items: [
      "Salesforce Experience Cloud UI development",
      "Salesforce release support",
      "Cloud Foundry delivery exposure",
      "Joule Agents / SAP Build proof-of-concept work",
    ],
  },
] as const

const progression = [
  ["01", "Hands-on developer", "Built enterprise interfaces and translated business workflows into working applications."],
  ["02", "Technical lead", "Coordinated delivery, mentored developers, clarified requirements, and stayed close to implementation."],
  ["03", "Solution engineering", "Contributed architecture, integration, identity, governance, and technical decision support across enterprise programs."],
] as const

export default function ExperiencePage() {
  return (
    <>
      <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
        Work history
      </p>
      <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
        Nine years of enterprise delivery, with responsibilities that grew beyond the formal title.
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
        I have worked continuously at Tata Consultancy Services since August 14, 2017.
        My formal title has remained Systems Engineer / Developer while my project
        responsibilities progressed across SAPUI5/Fiori development, SAP BTP
        applications, technical leadership, integration coordination, mentoring,
        documentation, and stakeholder-facing delivery.
      </p>

      <section className="mt-10 grid gap-6 rounded-xl border border-brand-primary/20 bg-brand-soft p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand-primary">
            Tata Consultancy Services
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground">Systems Engineer / Developer</h2>
          <p className="mt-2 text-sm text-muted-foreground">August 14, 2017–present</p>
        </div>
        <div className="border-t border-border/50 pt-5 md:border-t-0 md:border-l md:pl-8 md:pt-0">
          <p className="font-semibold text-foreground">Formal title vs. delivered responsibility</p>
          <p className="mt-3 leading-7 text-muted-foreground">
            The employer title remained unchanged while functional responsibilities
            progressed by engagement—from hands-on developer to technical lead and
            solution-engineering work. This site describes delivered responsibility
            without presenting project roles as formal employer titles.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
          Responsibility progression
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {progression.map(([number, title, text]) => (
            <article key={number} className="rounded-xl border border-border/60 bg-card/30 p-6">
              <p className="font-mono text-xs text-brand-primary">{number}</p>
              <h2 className="mt-4 text-xl font-semibold text-foreground">{title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {groups.map((group) => (
          <article key={group.code} className="rounded-xl border border-border/60 p-6">
            <p className="font-mono text-xs text-brand-primary">{group.code}</p>
            <h2 className="mt-3 text-xl font-semibold text-foreground">{group.title}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
              {group.items.map((item) => (
                <li key={item} className="border-t border-border/40 pt-3 first:border-t-0 first:pt-0">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-16 flex flex-col gap-5 border-t border-border/50 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">See the work behind the progression.</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Hiring-focused project summaries distinguish my contribution from broader program outcomes.
          </p>
        </div>
        <Link
          href="/career/projects"
          className="inline-flex shrink-0 items-center font-semibold text-brand-primary hover:text-foreground"
        >
          View selected work
          <ArrowRight className="ml-2 size-4" aria-hidden />
        </Link>
      </section>
    </>
  )
}
