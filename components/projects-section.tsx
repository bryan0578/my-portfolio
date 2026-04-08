"use client"

import { projects } from "@/src/data/projects"
import { ProjectCard } from "@/components/project-card"
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
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#00FFC2] mb-3 font-semibold">
              Case Studies
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Enterprise Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delivering measurable business outcomes through strategic technology solutions.
            </p>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {displayProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
            <Button
                size="lg"
                asChild
                className="min-w-[160px] bg-[#00FFC2] text-zinc-950 hover:bg-[#00FFC2]/90 shadow-[0_0_20px_rgba(0,255,194,0.3)] hover:shadow-[0_0_30px_rgba(0,255,194,0.5)] transition-all duration-300 font-bold group"
                >
                <Link href="/projects" aria-label="View all projects">
                    View All Projects
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  )
}