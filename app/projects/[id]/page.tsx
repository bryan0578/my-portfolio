import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { CaseStudyHero } from "@/components/case-study/case-study-hero"
import { ProcessTimeline } from "@/components/case-study/process-timeline"
import { ArchitectureBlock } from "@/components/case-study/architecture-block"
import { ImpactResults } from "@/components/case-study/impact-results"
import { SecuritySection } from "@/components/case-study/security-section"
import { GlobalHeader } from "@/components/global-header"
import { SiteHeader } from "@/components/site-header"
import { projects } from "@/src/data/projects"
import { RoleSection } from "@/components/case-study/role-section"
import { ManufacturerArchitectureDiagram } from "@/components/case-study/maufacturerarchitecturediagram"
import { AIChatBubble } from "@/components/ai-chat-bubble"
import { ProjectGallery } from "@/components/case-study/project-gallery"
import { RelatedServices } from "@/components/case-study/related-services"
import { ExecutiveSummary } from "@/components/case-study/executive-summary"
import { BusinessChallenge } from "@/components/case-study/business-challenge"
import { TechnicalApproach } from "@/components/case-study/technical-approach"
import { ArchitecturalDecisions } from "@/components/case-study/architectural-decisions"
import { KeyTradeoffs } from "@/components/case-study/key-tradeoffs"
import { QualitativeOutcomes } from "@/components/case-study/qualitative-outcomes"
import { LessonsLearned } from "@/components/case-study/lessons-learned"
import { WhenItFits } from "@/components/case-study/when-it-fits"
import { CaseStudyCta } from "@/components/case-study/case-study-cta"
import { CaseStudyFallbackCta } from "@/components/case-study/case-study-fallback-cta"
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
        <CaseStudyHero
          title={project.title}
          stack={project.stack}
          summary={project.summary}
        />

        {consulting ? (
          <ExecutiveSummary summary={consulting.executiveSummary} />
        ) : null}

        {project.gallery ? (
          <ProjectGallery gallery={project.gallery} />
        ) : null}

        {consulting ? (
          <BusinessChallenge data={consulting.businessChallenge} />
        ) : null}

        {project.securityArchitecture ? (
          <SecuritySection data={project.securityArchitecture} />
        ) : null}

        {consulting ? (
          <TechnicalApproach data={consulting.technicalApproach} />
        ) : project.role ? (
          <RoleSection data={project.role} />
        ) : null}

        {project.timeline ? (
          <ProcessTimeline timeline={project.timeline} />
        ) : null}

        <ArchitectureBlock
          deepDive={project.deepDive}
          codeSnippet={project.codeSnippet}
          codeLanguage={project.codeLanguage}
        >
          {project.architectureDiagram?.type === "manufacturer-portal" ? (
            <ManufacturerArchitectureDiagram
              description={project.deepDive?.description}
            />
          ) : null}
        </ArchitectureBlock>

        {consulting ? (
          <ArchitecturalDecisions
            decisions={consulting.architecturalDecisions}
          />
        ) : null}

        {consulting ? <KeyTradeoffs tradeoffs={consulting.tradeoffs} /> : null}

        <ImpactResults
          metrics={project.metrics}
          impact={project.impact}
          showBackLink={!consulting}
        />

        {consulting ? (
          <QualitativeOutcomes outcomes={consulting.outcomes} />
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

        <RelatedServices
          slug={project.slug}
          categories={project.categories}
          stack={project.stack}
        />
      </main>
      <AIChatBubble />
    </div>
  )
}
