import { projects } from "@/src/data/projects"
import { ProjectCard } from "@/components/project-card"
import { SectionHeader } from "@/components/marketing/section-header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ProjectsSectionProps {
  limit?: number
  showHeader?: boolean
}

export function ProjectsSection({
  limit,
  showHeader = true,
}: ProjectsSectionProps) {
    let displayProjects = Object.values(projects)

    if (limit) {
      displayProjects = displayProjects.slice(0, limit)
    } else {
      displayProjects = displayProjects.filter(p => p.featured)
    }

  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {showHeader && (
          <SectionHeader
            className="mb-16"
            eyebrow="Case Studies"
            title="Case Studies"
            description={
              <>
                Delivering measurable business outcomes through production SAP, Salesforce, and UI programs.{" "}
                <Link
                  href="/services"
                  className="text-brand-primary hover:underline font-medium"
                >
                  Explore services
                </Link>
              </>
            }
          />
        )}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {displayProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
            <Button size="lg" variant="brand" asChild className="min-w-[160px] group">
                <Link href="/projects" aria-label="View all case studies">
                    View all case studies
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  )
}