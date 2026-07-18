import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Career Experience",
  description: "Bryan Cash's verified enterprise delivery experience, responsibilities, and technical strengths.",
  alternates: { canonical: "/career/experience" },
}

const groups = [
  ["Primary strengths", ["SAPUI5 and SAP Fiori application development", "SAP BTP application development", "Enterprise frontend architecture", "OData and REST API consumption", "JavaScript, HTML, CSS, React, and Next.js"]],
  ["Enterprise delivery", ["Requirements gathering and translation", "Technical documentation", "Stakeholder communication", "Testing and validation", "Mentoring junior developers", "Coordinating work across distributed teams"]],
  ["Additional experience", ["SAP CAP with Node.js", "Salesforce Experience Cloud", "Salesforce UI and release support", "Build Work Zone exposure", "Cloud Foundry exposure"]],
]

export default function ExperiencePage() {
  return <>
    <p className="text-sm font-semibold text-brand-primary">EXPERIENCE</p>
    <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Experienced in the work between an unclear ask and a dependable release.</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">Bryan has worked continuously at Tata Consultancy Services since August 14, 2017. His formal title has remained Systems Engineer / Developer while his project responsibilities progressed across SAPUI5/Fiori development, SAP BTP applications, Salesforce UI, technical leadership, mentoring, coordination, documentation, and stakeholder-facing delivery.</p>
    <section className="mt-10 rounded-xl border border-brand-primary/20 bg-brand-soft p-6">
      <p className="text-sm font-semibold text-brand-primary">TATA CONSULTANCY SERVICES · AUGUST 14, 2017–PRESENT</p>
      <h2 className="mt-2 text-2xl font-semibold">Systems Engineer / Developer</h2>
      <p className="mt-3 leading-7 text-muted-foreground">One continuous employer and formal title. Functional roles varied by engagement and are presented as responsibilities—not invented promotions or HR title changes.</p>
    </section>
    <div className="mt-14 grid gap-6 md:grid-cols-3">{groups.map(([title, items]) => <section key={title as string} className="rounded-xl border border-border/60 p-6"><h2 className="text-xl font-semibold">{title}</h2><ul className="mt-5 space-y-3 text-muted-foreground">{(items as string[]).map(item => <li key={item}>• {item}</li>)}</ul></section>)}</div>
    <section className="mt-16"><h2 className="text-3xl font-bold">How I work</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">I collaborate across functional and technical teams, ask the questions that make requirements implementable, build the interface, document the decisions, and stay engaged through testing. When I lead, I remain close enough to the work to unblock developers and explain tradeoffs clearly.</p></section>
    <p className="mt-10 text-sm text-muted-foreground">Client identities and selected implementation details have been generalized to protect confidentiality.</p>
  </>
}
