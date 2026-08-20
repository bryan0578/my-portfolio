import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { CaseStudyHero } from "@/components/case-study/case-study-hero"
import { CaseStudySnapshot } from "@/components/case-study/case-study-snapshot"
import { ProcessTimeline } from "@/components/case-study/process-timeline"
import { ArchitectureBlock } from "@/components/case-study/architecture-block"
import { ImpactResults } from "@/components/case-study/impact-results"
import { SecuritySection } from "@/components/case-study/security-section"
import { GlobalHeader } from "@/components/global-header"
import { SiteHeader } from "@/components/site-header"
import { projects } from "@/src/data/projects"
import { RoleSection } from "@/components/case-study/role-section"
import { ManufacturerArchitectureDiagram } from "@/components/case-study/maufacturerarchitecturediagram"
import { GovernanceDecisionMap } from "@/components/case-study/governance-decision-map"
import { FuelWorkflowAnnotatedUi } from "@/components/case-study/fuel-workflow-annotated-ui"
import { ProjectGallery } from "@/components/case-study/project-gallery"
import { BusinessChallenge } from "@/components/case-study/business-challenge"
import { TechnicalApproach } from "@/components/case-study/technical-approach"
import { ArchitecturalDecisions } from "@/components/case-study/architectural-decisions"
import { KeyTradeoffs } from "@/components/case-study/key-tradeoffs"
import { QualitativeOutcomes } from "@/components/case-study/qualitative-outcomes"
import { LessonsLearned } from "@/components/case-study/lessons-learned"
import { WhenItFits } from "@/components/case-study/when-it-fits"
import { CaseStudyCta } from "@/components/case-study/case-study-cta"
import { CaseStudyFallbackCta } from "@/components/case-study/case-study-fallback-cta"
import { CinemaVaultCaseStudy } from "@/components/case-study/cinema-vault-case-study"
import { CinemaVaultHiringIntro } from "@/components/case-study/cinema-vault-hiring-intro"
import { getConsultingCaseStudy } from "@/lib/case-studies/consulting"
import { JsonLd } from "@/lib/seo/json-ld"
import { createProjectMetadata } from "@/lib/seo/project-metadata"
import {
  buildBreadcrumbSchema,
  buildCreativeWorkSchema,
} from "@/lib/seo/schemas"

export function generateStaticParams() {
  return Object.keys(projects).map((id) => ({ id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = projects[id]

  if (!project) {
    return {
      title: { absolute: "Project Not Found | Bryan Cash" },
      robots: { index: false, follow: false },
    }
  }

  return createProjectMetadata(project)
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects[id]

  if (!project) {
    notFound()
  }

  const consulting = getConsultingCaseStudy(project.slug)
  const projectPath = `/projects/${project.slug}`
  const isManufacturerPortal = project.slug === "manufacturer-portal"
  const isGovernance = project.slug === "enterprise-governance"
  const isFuelManagement = project.slug === "fuel-management"

  const presentationMetrics =
    isManufacturerPortal
      ? [
          { label: "Applications delivered", value: "28" },
          ...project.metrics.slice(1),
        ]
      : project.metrics

  const presentationTechnicalApproach =
    isManufacturerPortal && consulting
      ? {
          ...consulting.technicalApproach,
          headline: "Owned application delivery across SAPUI5, CAP, and Work Zone",
          summary:
            "Delivered 25 SAPUI5 reporting applications plus 3 onboarding applications, designed and developed the Node.js CAP service over HANA, and configured the SAP BTP experience around Build Work Zone and enterprise identity. Shared-system responsibilities such as cross-layer troubleshooting, testing, and stabilization are called out separately rather than overstated as sole ownership.",
          points: [
            "Delivered 25 SAPUI5 reporting applications plus 3 onboarding applications and reusable frontend patterns",
            "Designed and developed the Node.js CAP service over HANA",
            "Configured SAP Build Work Zone and SAP Cloud Identity Services with Okta-based authentication",
            "Supported cross-layer troubleshooting across SAP IAS, XSUAA, and application layers",
            "Produced delivery documentation and supported testing, deployment, and stabilization",
          ],
        }
      : consulting?.technicalApproach

  const presentationOutcomes =
    isManufacturerPortal && consulting
      ? {
          ...consulting.outcomes,
          qualitative: consulting.outcomes.qualitative.filter(
            (item) => item !== "A more consistent reporting experience across analytical workflows",
          ),
        }
      : consulting?.outcomes

  const structuredData = [
    ...buildCreativeWorkSchema({
      path: projectPath,
      name: project.title,
      description: consulting?.executiveSummary ?? project.summary,
      keywords: [...project.stack, ...project.categories],
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/projects" },
      { name: project.title, path: projectPath },
    ]),
  ]

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={structuredData} />
      <SiteHeader />
      <GlobalHeader projectName={project.title} />

      <main id="main-content" className="pt-36">
        {project.caseStudyVariant === "cinema-vault" ? (
          <>
            <CinemaVaultHiringIntro />
            <div className="cinema-vault-deep-dive">
              <CinemaVaultCaseStudy />
            </div>
            <style>{`
              .cinema-vault-deep-dive > div > section:nth-of-type(1),
              .cinema-vault-deep-dive > div > section:nth-of-type(2),
              .cinema-vault-deep-dive > div > section:last-of-type {
                display: none;
              }
            `}</style>
            <CaseStudyFallbackCta projectTitle={project.title} />
          </>
        ) : (
          <>
            <CaseStudyHero
              title={project.title}
              stack={project.stack}
              summary={project.summary}
              eyebrow={project.projectLabel ?? project.categories[0]}
            />

            <CaseStudySnapshot
              focus={project.categories.slice(0, 2)}
              challenge={project.problem}
              contribution={
                consulting?.executiveSummary ??
                project.role?.description ??
                project.solution
              }
              outcome={consulting?.outcomes.summary ?? project.impact}
              metrics={presentationMetrics}
            />

            {project.gallery ? (
              <ProjectGallery gallery={project.gallery} />
            ) : null}

            {consulting ? (
              <BusinessChallenge data={consulting.businessChallenge} />
            ) : null}

            {project.securityArchitecture ? (
              <SecuritySection data={project.securityArchitecture} />
            ) : null}

            {presentationTechnicalApproach ? (
              <TechnicalApproach data={presentationTechnicalApproach} />
            ) : project.role ? (
              <RoleSection data={project.role} />
            ) : null}

            {project.timeline ? (
              <ProcessTimeline timeline={project.timeline} />
            ) : null}

            {isFuelManagement ? <FuelWorkflowAnnotatedUi /> : null}

            <ArchitectureBlock
              deepDive={project.deepDive}
              codeSnippet={project.codeSnippet}
              codeLanguage={project.codeLanguage}
            >
              {isManufacturerPortal ? (
                <ManufacturerArchitectureDiagram
                  description="SAP BTP experience architecture connecting Build Work Zone and SAPUI5 applications to CAP/OData services, HANA-backed enterprise data, and the Okta → IAS → XSUAA identity path."
                />
              ) : isGovernance ? (
                <GovernanceDecisionMap />
              ) : null}
            </ArchitectureBlock>

            {consulting ? (
              <ArchitecturalDecisions
                decisions={consulting.architecturalDecisions}
              />
            ) : null}

            {consulting ? <KeyTradeoffs tradeoffs={consulting.tradeoffs} /> : null}

            <ImpactResults
              metrics={presentationMetrics}
              impact={project.impact}
              showBackLink={!consulting}
            />

            {presentationOutcomes ? (
              <QualitativeOutcomes outcomes={presentationOutcomes} />
            ) : null}

            {consulting ? (
              <LessonsLearned lessons={consulting.lessonsLearned} />
            ) : null}

            {consulting ? <WhenItFits data={consulting.whenItFits} /> : null}

            {consulting ? (
              <CaseStudyCta cta={consulting.cta} />
            ) : (
              <CaseStudyFallbackCta projectTitle={project.title} />
            )}
          </>
        )}
      </main>
    </div>
  )
}
