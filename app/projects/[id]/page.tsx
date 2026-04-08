import { notFound } from "next/navigation"
import { Metadata } from "next"
import { CaseStudyHeader } from "@/components/case-study/case-study-header"
import { CaseStudyHero } from "@/components/case-study/case-study-hero"
import { ProcessTimeline } from "@/components/case-study/process-timeline"
import { ArchitectureBlock } from "@/components/case-study/architecture-block"
import { ImpactResults } from "@/components/case-study/impact-results"
import { SecuritySection } from "@/components/case-study/security-section"
import { GlobalHeader } from "@/components/global-header"
import { projects } from "@/src/data/projects"
import { RoleSection } from "@/components/case-study/role-section"
import { ManufacturerArchitectureDiagram } from "@/components/case-study/maufacturerarchitecturediagram"
import { AIChatBubble } from "@/components/ai-chat-bubble"


// Project data store


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const project = projects[id]
  
  if (!project) {
    return { title: "Project Not Found" }
  }
  
  return {
    title: `${project.title} — Bryan Cash`,
    description: project.summary,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects[id]
  
  if (!project) {
    notFound()
  }
  
  return (
    <div className="min-h-screen bg-background">
      <GlobalHeader projectName={project.title} />
      
      <main className="pt-20">
        <CaseStudyHero 
          title={project.title}
          stack={project.stack}
          summary={project.summary}
        />
        {/* This is the new section */}
        {project.securityArchitecture && (
          <SecuritySection data={project.securityArchitecture} />
        )}
        <RoleSection data={project.role} />
        <ProcessTimeline timeline={project.timeline} />
        
        <ArchitectureBlock
            deepDive={project.deepDive}
            codeSnippet={project.codeSnippet}
            codeLanguage={project.codeLanguage}
            >
            {project.architectureDiagram?.type === "manufacturer-portal" && (
                <ManufacturerArchitectureDiagram
                description={project.deepDive?.description}
                />
            )}
        </ArchitectureBlock>
        
        <ImpactResults 
          metrics={project.metrics}
          impact={project.impact}
        />
        <AIChatBubble />
      </main>
    </div>
  )
}
