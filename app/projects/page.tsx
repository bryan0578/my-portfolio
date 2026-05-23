"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { GlobalHeader } from "@/components/global-header"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { projects } from "@/src/data/projects"
import { AIChatBubble } from "@/components/ai-chat-bubble"

export default function AllProjectsPage() {
  const [filter, setFilter] = useState("All")

  const allProjects = useMemo(() => {
    const values = Object.values(projects)

    return values.filter(
      (project, index, arr) =>
        arr.findIndex((p) => p.slug === project.slug) === index
    )
  }, [])

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(allProjects.flatMap((project) => project.categories ?? []))
    ).sort()

    return ["All", ...uniqueCategories]
  }, [allProjects])

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) =>
          project.categories?.some(
            (cat) => cat.toLowerCase() === filter.toLowerCase()
          )
        )

  return (
    <>
      <SiteHeader />
      <GlobalHeader />

      <main id="main-content" className="min-h-screen bg-background pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              SAP BTP &amp; Salesforce{" "}
              <span className="text-[#00FFC2]">Case Studies</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              SAP BTP, SAPUI5, Salesforce Experience Cloud, and DevOps case studies—proof
              of enterprise delivery. See{" "}
              <Link href="/services" className="text-[#00FFC2] hover:underline font-medium">
                services
              </Link>{" "}
              for how I engage on similar programs.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={filter === cat ? "default" : "outline"}
                  onClick={() => setFilter(cat)}
                  className={
                    filter === cat
                      ? "bg-[#00FFC2] text-zinc-950 hover:bg-[#00FFC2]/90 shadow-[0_0_15px_rgba(0,255,194,0.2)]"
                      : "border-zinc-800 text-muted-foreground hover:border-[#00FFC2]/30"
                  }
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