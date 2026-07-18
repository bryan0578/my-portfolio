import type { Metadata } from "next"
import { ArrowRight, BriefcaseBusiness, Code2, Users } from "lucide-react"
import { AnalyticsLink } from "@/components/analytics-link"
import { JsonLd } from "@/lib/seo/json-ld"
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo/schemas"

export const metadata: Metadata = {
  title: "Career | Senior SAPUI5, SAP BTP & Enterprise UI Developer",
  description: "Bryan Cash is an experienced enterprise UI developer and technical lead open to senior SAPUI5, SAP BTP application, and enterprise frontend roles.",
  alternates: { canonical: "/career" },
}

const strengths = [
  { icon: Code2, title: "Hands-on enterprise UI delivery", text: "SAPUI5, Fiori, SAP BTP applications, Salesforce Experience Cloud, JavaScript, React, Next.js, HTML, CSS, OData, and REST APIs." },
  { icon: Users, title: "A strong team contributor", text: "Translates requirements, collaborates across functional and technical teams, mentors developers, documents decisions, and supports testing through delivery." },
  { icon: BriefcaseBusiness, title: "Ownership in large organizations", text: "Comfortable moving ambiguous work toward a dependable release while communicating clearly with stakeholders and delivery leadership." },
]

const bestFitRoles = [
  "SAP BTP Solution Engineer",
  "Solution Consultant",
  "SAP BTP Technical Lead",
  "Senior SAPUI5/Fiori Developer",
  "SAP BTP Application Developer",
  "Enterprise Frontend Lead",
  "Enterprise UI Technical Lead",
]

export default function CareerPage() {
  const schema = [buildWebPageSchema({ path: "/career", name: "Bryan Cash career profile", description: metadata.description as string }), buildBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Career", path: "/career" }])]
  return <>
    <JsonLd data={schema} />
    <p className="mb-4 text-sm font-semibold text-brand-primary">OPEN TO APPROPRIATE FULL-TIME OPPORTUNITIES</p>
    <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">SAP BTP Solution Engineer &amp; Technical Lead who turns complex requirements into systems that ship.</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">I specialize in SAPUI5/Fiori and SAP BTP application delivery, with additional experience across Salesforce UI and modern web platforms. I contribute as a hands-on developer, technical lead, mentor, and bridge between business needs and dependable delivery.</p>
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <AnalyticsLink href="/career/resume" event="resume_viewed" className="rounded-md bg-brand-primary px-5 py-3 text-center font-semibold text-black hover:opacity-90">Review resume <ArrowRight className="ml-2 inline size-4" /></AnalyticsLink>
      <AnalyticsLink href="mailto:hello@cashbryan.com?subject=Full-time%20opportunity" event="job_inquiry_started" className="rounded-md border border-border px-5 py-3 text-center font-semibold hover:border-brand-primary">Discuss a full-time role</AnalyticsLink>
    </div>
    <section className="mt-20"><p className="text-sm font-semibold text-brand-primary">WHAT I BRING TO A TEAM</p><div className="mt-6 grid gap-5 md:grid-cols-3">{strengths.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-xl border border-border/60 bg-card/40 p-6"><Icon className="size-6 text-brand-primary" /><h2 className="mt-4 text-xl font-semibold">{title}</h2><p className="mt-3 leading-7 text-muted-foreground">{text}</p></article>)}</div></section>
    <section className="mt-20 grid gap-8 rounded-2xl border border-brand-primary/20 bg-brand-soft p-7 md:grid-cols-[1.4fr_1fr] md:p-10"><div><p className="text-sm font-semibold text-brand-primary">BEST-FIT ROLES</p><h2 className="mt-3 text-3xl font-bold">Roles where solution engineering, enterprise UI delivery, and technical leadership meet.</h2><ul className="mt-6 grid gap-2 text-muted-foreground sm:grid-cols-2">{bestFitRoles.map((role) => <li key={role}>• {role}</li>)}</ul></div><ul className="space-y-3 text-muted-foreground"><li>✓ Hands-on development and delivery ownership</li><li>✓ Enterprise frontend and application architecture</li><li>✓ Mentoring and cross-team collaboration</li><li>✓ Requirements, documentation, testing, and validation</li></ul></section>
  </>
}
