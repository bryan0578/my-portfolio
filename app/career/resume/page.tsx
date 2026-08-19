import type { Metadata } from "next"
import Link from "next/link"
import { AnalyticsLink } from "@/components/analytics-link"

export const metadata: Metadata = {
  title: "Resume | Senior Software Engineer & SAP BTP Technical Lead",
  description:
    "Resume overview for Bryan Cash, Senior Software Engineer and SAP BTP Technical Lead specializing in SAP BTP, SAPUI5/Fiori, integration, and enterprise frontend delivery.",
  alternates: { canonical: "/career/resume" },
}

const skills = [
  ["Primary", "SAP BTP · SAPUI5 · SAP Fiori · SAP CAP · OData · REST APIs · Build Work Zone"],
  ["Frontend", "JavaScript · TypeScript · React · Next.js · HTML/CSS · Enterprise UI/UX"],
  ["Delivery", "Technical leadership · Requirements translation · Mentoring · Documentation · Testing · Stakeholder communication"],
  ["Additional", "Salesforce Experience Cloud · Salesforce release support · Cloud Foundry exposure"],
] as const

export default function ResumePage() {
  return (
    <article className="mx-auto max-w-4xl">
      <div className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
            Resume
          </p>
          <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">Bryan Cash</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Senior Software Engineer · SAP BTP Technical Lead · SAPUI5/Fiori · Enterprise Frontend
          </p>
        </div>
        <AnalyticsLink
          href="/resume/Bryan-Cash-Resume.pdf"
          event="resume_downloaded"
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-brand-primary px-5 py-3 text-center font-semibold text-black transition hover:opacity-90"
        >
          Download current resume
        </AnalyticsLink>
      </div>

      <section className="py-10">
        <h2 className="text-2xl font-semibold text-foreground">Professional summary</h2>
        <p className="mt-4 leading-8 text-muted-foreground">
          Senior software engineer and SAP BTP technical lead with 9 years of enterprise
          delivery experience. Strongest in SAP BTP application delivery, SAPUI5/Fiori,
          OData and integration-heavy frontend work, technical leadership, requirements
          translation, mentoring, documentation, and cross-team execution. React and
          Next.js extend that enterprise experience into modern product engineering.
        </p>
      </section>

      <section className="grid overflow-hidden rounded-xl border border-border/60 sm:grid-cols-3">
        <div className="p-5 sm:p-6">
          <p className="font-mono text-sm text-brand-primary">9 years</p>
          <p className="mt-2 text-sm text-muted-foreground">Enterprise delivery</p>
        </div>
        <div className="border-t border-border/50 p-5 sm:border-t-0 sm:border-l sm:p-6">
          <p className="font-mono text-sm text-brand-primary">28 apps</p>
          <p className="mt-2 text-sm text-muted-foreground">Flagship SAP BTP program</p>
        </div>
        <div className="border-t border-border/50 p-5 sm:border-t-0 sm:border-l sm:p-6">
          <p className="font-mono text-sm text-brand-primary">2017–present</p>
          <p className="mt-2 text-sm text-muted-foreground">Tata Consultancy Services</p>
        </div>
      </section>

      <section className="border-b border-border py-10">
        <h2 className="text-2xl font-semibold text-foreground">Employment</h2>
        <p className="mt-4 font-semibold text-foreground">
          Tata Consultancy Services · Systems Engineer / Developer
        </p>
        <p className="mt-1 text-muted-foreground">August 14, 2017–present</p>
        <p className="mt-3 leading-7 text-muted-foreground">
          Formal employer title remained unchanged while functional responsibilities
          progressed across enterprise UI development, SAP BTP application work,
          technical leadership, mentoring, project coordination, integration support,
          solution-design contribution, and stakeholder-facing delivery.
        </p>
        <Link href="/career/experience" className="mt-5 inline-block font-semibold text-brand-primary hover:underline">
          Review work history →
        </Link>
      </section>

      <section className="border-b border-border py-10">
        <h2 className="text-2xl font-semibold text-foreground">Core skills</h2>
        <div className="mt-6 space-y-5">
          {skills.map(([label, value]) => (
            <div key={label} className="grid gap-2 sm:grid-cols-[7rem_1fr]">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-brand-primary">{label}</p>
              <p className="leading-7 text-muted-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-10">
        <h2 className="text-2xl font-semibold text-foreground">Selected evidence</h2>
        <ul className="mt-5 space-y-3 leading-7 text-muted-foreground">
          <li>• Delivered 25 SAPUI5 reporting applications plus 3 onboarding applications within a secure SAP BTP manufacturer experience.</li>
          <li>• Contributed SAP BTP architecture, CAP, Work Zone, identity, and production-delivery work across enterprise programs.</li>
          <li>• Built SAPUI5 workflow applications integrated with backend OData services.</li>
          <li>• Defined SAP BTP extensibility guidance supporting Clean Core implementation decisions.</li>
          <li>• Built and deployed a production Next.js product with authenticated, database-backed workflows.</li>
          <li>• Mentored developers, created technical documentation, and supported testing through release.</li>
        </ul>
        <Link href="/career/projects" className="mt-5 inline-block font-semibold text-brand-primary hover:underline">
          Review selected work →
        </Link>
      </section>

      <div className="mt-10 rounded-lg border border-brand-primary/20 bg-brand-soft p-5 text-sm leading-6 text-muted-foreground">
        <p><span className="font-semibold text-foreground">Contact:</span> hello@cashbryan.com</p>
        <p><span className="font-semibold text-foreground">LinkedIn:</span> linkedin.com/in/cashbryan</p>
      </div>
    </article>
  )
}
