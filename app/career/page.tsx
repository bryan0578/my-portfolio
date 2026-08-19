import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { AnalyticsLink } from "@/components/analytics-link"
import { JsonLd } from "@/lib/seo/json-ld"
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schemas"

export const metadata: Metadata = {
  title: "Experience | Senior Software Engineer & SAP BTP Technical Lead",
  description:
    "Bryan Cash is a Senior Software Engineer and SAP BTP Technical Lead with 9 years of enterprise delivery experience across SAP BTP, SAPUI5/Fiori, integration leadership, and modern frontend engineering.",
  alternates: { canonical: "/career" },
}

const proof = [
  {
    value: "9 years",
    label: "Enterprise delivery",
    detail: "Tata Consultancy Services · 2017–present",
  },
  {
    value: "28 apps",
    label: "Flagship SAP BTP program",
    detail: "25 reporting + 3 onboarding applications",
  },
  {
    value: "SAP BTP",
    label: "Technical leadership",
    detail: "Architecture, CAP, Work Zone, identity, delivery",
  },
  {
    value: "Hands-on",
    label: "Engineering lead",
    detail: "UI, integration, mentoring, testing, release support",
  },
] as const

const strengths = [
  {
    code: "BUILD",
    title: "Enterprise application delivery",
    text: "SAPUI5/Fiori and SAP BTP applications built around real business workflows, maintainability, and production delivery.",
  },
  {
    code: "LEAD",
    title: "Technical leadership without leaving implementation",
    text: "I stay close enough to the work to unblock developers, review tradeoffs, translate requirements, and support testing through release.",
  },
  {
    code: "ALIGN",
    title: "Cross-team translation",
    text: "I turn business needs, APIs, OData services, identity constraints, and distributed-team dependencies into executable technical plans.",
  },
] as const

const workflow = ["Clarify", "Architect", "Build", "Unblock", "Validate"] as const

const bestFitRoles = [
  "Senior Software Engineer — SAP BTP / Enterprise Frontend",
  "SAP BTP Technical Lead",
  "Senior SAPUI5 / Fiori Developer",
  "Enterprise Frontend / Application Lead",
] as const

const deeperLinks = [
  {
    href: "/career/experience",
    event: "career_experience_opened",
    eyebrow: "WORK HISTORY",
    title: "Experience",
    text: "Employer continuity, role progression, technical strengths, and delivery responsibilities.",
  },
  {
    href: "/career/projects",
    event: "career_projects_opened",
    eyebrow: "EVIDENCE",
    title: "Selected work",
    text: "Hiring-focused summaries that separate my contribution from broader program outcomes.",
  },
  {
    href: "/career/resume",
    event: "career_resume_opened",
    eyebrow: "RESUME",
    title: "Resume",
    text: "A concise recruiter view plus the current downloadable PDF.",
  },
] as const

export default function CareerPage() {
  const schema = [
    buildWebPageSchema({
      path: "/career",
      name: "Bryan Cash experience profile",
      description: metadata.description as string,
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Experience", path: "/career" },
    ]),
  ]

  return (
    <>
      <JsonLd data={schema} />

      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
            Experience / hiring
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Senior software engineering that stays close to the work.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            I lead and build enterprise applications across SAP BTP, SAPUI5/Fiori,
            integration, and modern frontend delivery. My strongest work is turning
            ambiguous requirements and cross-team dependencies into systems teams can
            actually ship, support, and extend.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <AnalyticsLink
              href="/career/resume"
              event="resume_viewed"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-primary px-5 py-3 font-semibold text-black transition hover:opacity-90"
            >
              Review resume
              <ArrowRight className="ml-2 size-4" aria-hidden />
            </AnalyticsLink>
            <AnalyticsLink
              href="/career/projects"
              event="career_projects_opened"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-border px-5 py-3 font-semibold text-foreground transition hover:border-brand-primary"
            >
              View selected work
            </AnalyticsLink>
            <AnalyticsLink
              href="mailto:hello@cashbryan.com?subject=Full-time%20opportunity"
              event="job_inquiry_started"
              className="inline-flex min-h-12 items-center justify-center px-2 py-3 font-semibold text-muted-foreground transition hover:text-brand-primary"
            >
              Discuss a full-time role →
            </AnalyticsLink>
          </div>
        </div>

        <aside className="rounded-xl border border-border/60 bg-card/30 p-5 sm:p-6">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-brand-primary">
            Recruiter snapshot
          </p>
          <p className="mt-4 text-xl font-semibold text-foreground">
            Senior Software Engineer / SAP BTP Technical Lead
          </p>
          <p className="mt-3 leading-7 text-muted-foreground">
            Best aligned to teams that need hands-on enterprise delivery, technical
            leadership, and a strong bridge between architecture, UI, integration,
            and execution.
          </p>
          <div className="mt-5 border-t border-border/50 pt-5 text-sm leading-6 text-muted-foreground">
            <p><span className="text-foreground">Employer:</span> Tata Consultancy Services</p>
            <p><span className="text-foreground">Enterprise tenure:</span> August 2017–present</p>
            <p><span className="text-foreground">Primary focus:</span> SAP BTP · SAPUI5/Fiori · Integration</p>
          </div>
        </aside>
      </section>

      <section className="mt-16 grid overflow-hidden rounded-xl border border-border/60 sm:grid-cols-2 lg:grid-cols-4">
        {proof.map((item, index) => (
          <div
            key={item.value}
            className={`p-5 sm:p-6 ${index > 0 ? "border-t border-border/50 sm:border-t-0 sm:border-l" : ""} ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}`}
          >
            <p className="font-mono text-sm font-medium text-brand-primary">{item.value}</p>
            <p className="mt-3 font-semibold text-foreground">{item.label}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </section>

      <section className="mt-20">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
          What I bring to a team
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {strengths.map((item) => (
            <article key={item.code} className="rounded-xl border border-border/60 bg-card/30 p-6">
              <p className="font-mono text-xs text-brand-primary">{item.code}</p>
              <h2 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-xl border border-border/60 bg-black/10 p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
              How I work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-foreground">
              From unclear ask to dependable release.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              I stay engaged across the lifecycle instead of treating architecture,
              implementation, and delivery as separate conversations.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-5">
            {workflow.map((step, index) => (
              <div key={step} className="relative rounded-lg border border-border/60 bg-background/60 px-4 py-4 text-center">
                <p className="font-mono text-[10px] text-brand-primary">0{index + 1}</p>
                <p className="mt-2 text-sm font-semibold text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-8 border-y border-border/50 py-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
            Best fit
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground">
            Roles where enterprise engineering and technical leadership meet.
          </h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {bestFitRoles.map((role) => (
            <li key={role} className="rounded-lg border border-border/60 px-4 py-4 text-foreground/85">
              {role}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
          Go deeper
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {deeperLinks.map((item) => (
            <AnalyticsLink
              key={item.href}
              href={item.href}
              event={item.event}
              className="group rounded-xl border border-border/60 bg-card/30 p-6 transition hover:-translate-y-0.5 hover:border-brand-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
            >
              <p className="font-mono text-xs text-brand-primary">{item.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">{item.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
              <span className="mt-5 inline-flex items-center font-semibold text-brand-primary">
                Open
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </AnalyticsLink>
          ))}
        </div>
      </section>
    </>
  )
}
