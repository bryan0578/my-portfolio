"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { cardFieldLabel, cardGhostAction } from "@/lib/ui/brand-classes"
import { getEcosystemBadgeColor } from "@/lib/ui/ecosystem-badge-colors"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  slug: string
  title: string
  description: string
  date: string
  tags?: string[]
  category?: string
  featured?: boolean
}

export function BlogCard({
  slug,
  title,
  description,
  date,
  tags = [],
  category,
}: BlogCardProps) {
  return (
    <Card variant="surfaceInteractive">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
          <CardTitle className="text-h4 leading-heading">{title}</CardTitle>

          <div className="flex flex-wrap gap-1.5 shrink-0">
            {tags.slice(0, 4).map((tag) => (
              <Badge
                key={tag}
                variant="tag"
                className={cn(getEcosystemBadgeColor(tag))}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Badge variant="brand" className="w-fit">
          {category || date}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p className={cardFieldLabel}>Overview</p>
          <CardDescription className="line-clamp-3 text-foreground/70">
            {description}
          </CardDescription>
        </div>

        <div>
          <p className={cardFieldLabel}>Published</p>
          <CardDescription className="text-foreground/70">{date}</CardDescription>
        </div>

        <Button variant="brandGhost" className={cardGhostAction} asChild>
          <Link href={`/blog/${slug}`}>
            Read insight
            <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
