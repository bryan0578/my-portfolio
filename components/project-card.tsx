"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/src/data/projects"
import Link from "next/link"
import { cardFieldLabel, cardGhostAction } from "@/lib/ui/brand-classes"
import { getEcosystemBadgeColor } from "@/lib/ui/ecosystem-badge-colors"
import { cn } from "@/lib/utils"

type ProjectCardProps = Project

export function ProjectCard({
  slug,
  title,
  stack,
  impact,
  problem,
  solution,
}: ProjectCardProps) {
  const visibleStack = stack.slice(0, 4)
  const hiddenStackCount = stack.length - visibleStack.length

  return (
    <Card variant="surfaceInteractive">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
          <CardTitle className="text-h4 leading-heading">{title}</CardTitle>

          <div className="flex flex-wrap gap-1.5 shrink-0">
            {visibleStack.map((tech) => (
              <Badge
                key={tech}
                variant="tag"
                className={cn(getEcosystemBadgeColor(tech))}
              >
                {tech}
              </Badge>
            ))}

            {hiddenStackCount > 0 ? (
              <Badge variant="keyword">+{hiddenStackCount}</Badge>
            ) : null}
          </div>
        </div>

        <Badge variant="brand" className="w-fit">
          {impact}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p className={cardFieldLabel}>Challenge</p>
          <CardDescription className="line-clamp-3 text-foreground/70">
            {problem}
          </CardDescription>
        </div>

        <div>
          <p className={cardFieldLabel}>Solution</p>
          <CardDescription className="line-clamp-3 text-foreground/70">
            {solution}
          </CardDescription>
        </div>

        <Button variant="brandGhost" className={cardGhostAction} asChild>
          <Link href={`/projects/${slug}`}>
            View case study
            <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
