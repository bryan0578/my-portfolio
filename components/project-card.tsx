"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/src/data/projects"
import Link from "next/link"

type ProjectCardProps = Project

function getStackColor(tech: string): string {
    const normalizedTech = tech.trim().toUpperCase()
  
    switch (normalizedTech) {
      // SAP ecosystem
      case "SAP":
      case "SAP BTP":
      case "BUILD WORK ZONE":
      case "WORK ZONE":
      case "FIORI LAUNCHPAD":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20"
  
      case "CAP":
      case "CAPM":
      case "SAP CAP":
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
  
      case "SAPUI5":
        return "bg-teal-500/10 text-teal-400 border-teal-500/20"
  
      case "FIORI":
      case "SAP FIORI":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  
      case "ODATA":
      case "API":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20"
  
      case "TECHNICAL DOCUMENTATION":
        return "bg-stone-500/10 text-stone-300 border-stone-500/20"
  
      // Salesforce ecosystem
      case "SALESFORCE":
      case "EXPERIENCE CLOUD":
        return "bg-sky-500/10 text-sky-400 border-sky-500/20"
  
      case "LWC":
        return "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
  
      case "AURA":
        return "bg-blue-500/10 text-blue-300 border-blue-500/20"
  
      case "APEX":
        return "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
  
      // DevOps / tooling
      case "DEVOPS":
      case "CI/CD":
      case "GITHUB":
      case "SFDX":
        return "bg-slate-500/10 text-slate-300 border-slate-500/20"
  
      // UI / frontend / design
      case "BOOTSTRAP":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20"
  
      case "UI/UX":
      case "UI/UX DESIGN":
      case "DESIGN":
        return "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20"
  
      case "JAVASCRIPT":
        return "bg-yellow-500/10 text-yellow-300 border-yellow-500/20"
  
      // Content / media
      case "ADOBE PREMIERE PRO":
        return "bg-violet-500/10 text-violet-300 border-violet-500/20"
  
      case "AFTER EFFECTS":
        return "bg-purple-500/10 text-purple-300 border-purple-500/20"
  
      case "AMAZON POLLY":
        return "bg-orange-500/10 text-orange-300 border-orange-500/20"
  
      default:
        return "bg-muted text-muted-foreground border-border"
    }
  }

export function ProjectCard({
  slug,
  title,
  stack,
  impact,
  problem,
  solution,
}: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
          <CardTitle className="text-xl leading-tight">{title}</CardTitle>

          <div className="flex flex-wrap gap-1.5 shrink-0">
            {stack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className={`text-[10px] sm:text-xs font-medium ${getStackColor(tech)}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <Badge
          variant="secondary"
          className="w-fit text-xs font-semibold bg-[#00FFC2]/10 text-[#00FFC2] border-[#00FFC2]/20"
        >
          {impact}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
            Challenge
          </p>
          <CardDescription className="text-sm leading-relaxed text-foreground/70 line-clamp-3">
            {problem}
          </CardDescription>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
            Solution
          </p>
          <CardDescription className="text-sm leading-relaxed text-foreground/70 line-clamp-3">
            {solution}
          </CardDescription>
        </div>

        <Button
          variant="ghost"
          className="w-full mt-2 group/btn hover:bg-[#00FFC2]/5 text-muted-foreground hover:text-[#00FFC2] transition-colors"
          asChild
        >
          <Link href={`/projects/${slug}`}>
            View Project
            <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}