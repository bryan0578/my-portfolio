import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Selected Work for Hiring Teams",
  description:
    "Hiring-focused summaries of Bryan Cash's contributions across SAP BTP, SAPUI5/Fiori, enterprise architecture, and modern product engineering.",
  alternates: { canonical: "/career/projects" },
}

const projects = [
  {
    code: "SAP BTP · FLAGSHIP DELIVERY",
    title: "Manufacturer Analytics Portal",
    href: "/projects/manufacturer-portal",
    proof: "25 reporting apps + 3 onboarding apps",
    contribution:
      "Configured Build Work Zone and identity with Okta-based authentication, designed and developed the Node.js CAP service over HANA, and delivered SAPUI5 reporting and onboarding applications within the broader portal program.",
    shows:
      "SAP BTP delivery, SAPUI5 engineering, CAP, identity, architecture contribution, stakeholder coordination, testing, and production support.",
  },
  {
    code: "SAPUI5 · WORKFLOW ENGINEERING",
    title: "Fuel Vendor Invoice Applications",
    href: "/projects/fuel-management",
    proof: "4 applications · production workflow",
    contribution:
      "Built four SAPUI5 applications for structured fuel data entry and validation, translating vendor-payment workflows into usable interfaces integrated with backend OData services.",
    shows:
      "Hands-on SAPUI5 development, OData integration, requirements translation, validation design, and delivery ownership.",
  },
  {
    code: "SAP BTP · ARCHITECTURE & GOVERNANCE",
    title: "SAP BTP Extensibility Governance",
    href: "/projects/enterprise-governance",
    proof: "Clean Core · standards · technical guidance",
    contribution:
      "Produced practical enterprise guidance for side-by-side and in-app extensibility, mapping implementation scenarios to SAP BTP services, patterns, and decision criteria.",
    shows:
      "Architecture thinking, Clean Core alignment, technical documentation, platform evaluation, and decision support for development teams.",
  },
  {
    code: "NEXT.JS · PRODUCT ENGINEERING",
    title: "Cinema Vault",
    href: "/projects/cinema-vault",
    proof: "37 passing tests · 24 routes · production deployed",
    contribution:
      "Designed and built a production-deployed collection application with edition-aware ownership, box sets, wishlist workflows, authenticated data, TMDB enrichment, and responsive product UX.",
    shows:
      "Modern frontend engineering, product architecture, TypeScript, Next.js, database-backed workflows, testing, and production deployment.",
  },
] as const

export default function ProjectsPage() {
  return (
    <>
      <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-brand-primary">
        Selected work / hiring view
      </p>
      <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
        What I contributed—not just what the program delivered.
      </h1>
      <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
        These summaries are written for hiring teams. They prioritize my role,
        implementation responsibility, and the capability each project demonstrates
        before sending you into the deeper technical case study.
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
        Enterprise client identities and selected implementation details are generalized
        where needed to protect confidentiality. Owned-product work is identified separately.
      </p>

      <div className="mt-10 space-y-5 sm:mt-12">
        {projects.map((project) => (
          <article
            key={project.title}
            className="grid gap-6 rounded-xl border border-border/60 bg-card/30 p-6 md:grid-cols-[1fr_0.8fr] md:p-8"
          >
            <div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="font-mono text-xs text-brand-primary">{project.code}</p>
                <span className="text-xs text-muted-foreground">{project.proof}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
                {project.title}
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">{project.contribution}</p>
            </div>

            <div className="border-t border-border/50 pt-5 md:border-t-0 md:border-l md:pl-7 md:pt-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Demonstrates
              </p>
              <p className="mt-3 leading-7 text-foreground/80">{project.shows}</p>
              <Link
                href={project.href}
                className="mt-5 inline-flex items-center font-semibold text-brand-primary transition-colors hover:text-foreground"
              >
                View case study
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-xl border border-border/60 p-5 text-sm leading-6 text-muted-foreground">
        <p>
          <span className="font-semibold text-foreground">Additional platform evidence:</span>{" "}
          Salesforce Experience Cloud UI development and release support remain part of my
          background, but SAP BTP, SAPUI5/Fiori, integration, and enterprise frontend
          delivery are the primary focus of this hiring portfolio.{" "}
          <Link href="/projects/partner-portal" className="font-semibold text-brand-primary hover:underline">
            View Salesforce case study →
          </Link>
        </p>
      </section>
    </>
  )
}
