"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { GlobalHeader } from "@/components/global-header"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { projects } from "@/src/data/projects"
import { cn } from "@/lib/utils"
import { AIChatBubble } from "@/components/ai-chat-bubble"
import type { Project } from "@/src/data/projects"

const CASE_STUDY_FILTER_OPTIONS = [
  "All",
  "SAP BTP",
  "SAPUI5",
  "Salesforce",
  "DevOps",
  "UI/UX",
  "Technical Documentation",
] as const

function matchesCaseStudyFilter(project: Project, filter: string): boolean {
  if (filter === "All") return true

  if (filter === "SAPUI5") {
    return (
      project.stack?.some((tech) => tech.toLowerCase().includes("sapui5")) ??
      false
    )
  }

  return (
    project.categories?.some(
      (cat) => cat.toLowerCase() === filter.toLowerCase()
    ) ?? false
  )
}

export default function AllProjectsPage() {
  const [filter, setFilter] = useState("All")

  const allProjects = useMemo(() => {
    const values = Object.values(projects)

    return values.filter(
      (project, index, arr) =>
        arr.findIndex((p) => p.slug === project.slug) === index
    )
  }, [])

  const categories = CASE_STUDY_FILTER_OPTIONS

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => matchesCaseStudyFilter(project, filter))

  return (
    <>
      <SiteHeader />
      <GlobalHeader />

      <main id="main-content" className="min-h-screen bg-background pt-36 pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-h1 lg:text-hero font-heading text-foreground mb-6">
              SAP BTP &amp; Salesforce{" "}
              <span className="text-brand-primary">Case Studies</span>
            </h1>

            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-body">
              SAP BTP, SAPUI5, Salesforce Experience Cloud, and DevOps case studies—proof
              of enterprise delivery. See{" "}
              <Link href="/services" className="text-brand-primary hover:underline font-medium">
                services
              </Link>{" "}
              for how I engage on similar programs.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={filter === cat ? "brand" : "brandOutline"}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    filter !== cat &&
                      "border-border-default text-muted-foreground hover:border-brand-primary/30"
                  )}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>

        <AIChatBubble />
      </main>
    </>
  )
}