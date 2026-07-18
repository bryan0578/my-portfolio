import type { Metadata } from "next"
import { AnalyticsLink } from "@/components/analytics-link"

export const metadata: Metadata = {
  title: "Resume | Bryan Cash",
  description: "Resume overview for Bryan Cash, enterprise UI developer and technical lead specializing in SAPUI5, Fiori, SAP BTP applications, and enterprise frontend delivery.",
  alternates: { canonical: "/career/resume" },
}

export default function ResumePage() {
  return <article className="mx-auto max-w-4xl">
    <div className="flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
      <div><p className="text-sm font-semibold text-brand-primary">RESUME</p><h1 className="mt-2 text-4xl font-bold">Bryan Cash</h1><p className="mt-2 text-muted-foreground">Enterprise UI Developer · SAPUI5/Fiori · SAP BTP Applications · Technical Lead</p></div>
      <AnalyticsLink href="/resume/Bryan-Cash-Resume.pdf" event="resume_downloaded" className="rounded-md bg-brand-primary px-5 py-3 text-center font-semibold text-black">Download current resume</AnalyticsLink>
    </div>
    <section className="py-10"><h2 className="text-2xl font-semibold">Professional summary</h2><p className="mt-4 leading-8 text-muted-foreground">Enterprise UI developer and technical lead with nearly nine years of experience delivering applications and user experiences in large organizations. Strongest in SAPUI5, SAP Fiori, SAP BTP application development, OData/API consumption, Salesforce UI, requirements translation, technical documentation, mentoring, and cross-team delivery.</p></section>
    <section className="border-t border-border py-10"><h2 className="text-2xl font-semibold">Employment</h2><p className="mt-4 font-semibold">Tata Consultancy Services · Systems Engineer / Developer</p><p className="mt-1 text-muted-foreground">August 14, 2017–Present</p><p className="mt-3 leading-7 text-muted-foreground">Functional responsibilities progressed across UI development, SAP BTP application work, Salesforce UI, technical leadership, mentoring, project coordination, solution-design support, and stakeholder-facing delivery while the formal title remained unchanged.</p></section>
    <section className="border-t border-border py-10"><h2 className="text-2xl font-semibold">Core skills</h2><p className="mt-4 leading-8 text-muted-foreground">SAPUI5 · SAP Fiori · SAP BTP · OData · REST APIs · JavaScript · Enterprise UI/UX · React · HTML/CSS · Next.js · SAP CAP (working knowledge) · Technical documentation · Requirements gathering · Stakeholder communication · Testing and validation</p></section>
    <section className="border-t border-border py-10"><h2 className="text-2xl font-semibold">Selected evidence</h2><ul className="mt-4 space-y-3 text-muted-foreground"><li>• Enterprise SAPUI5 reporting and workflow applications</li><li>• SAP BTP portal and CAP-backed application delivery</li><li>• Salesforce Experience Cloud UI development</li><li>• Technical training, mentoring, and delivery leadership</li><li>• Requirements, documentation, testing, and production support</li></ul></section>
    <p className="rounded-lg border border-brand-primary/20 bg-brand-soft p-4 text-sm text-muted-foreground">Client identities and selected implementation details have been generalized to protect confidentiality. Contact: hello@cashbryan.com · LinkedIn: linkedin.com/in/cashbryan</p>
  </article>
}
