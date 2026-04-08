"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface BlogCardProps {
  slug: string
  title: string
  description: string
  date: string
  tags?: string[]
  category?: string
  featured?: boolean
}

function getTagColor(tag: string): string {
  const normalizedTag = tag.trim().toUpperCase()

  switch (normalizedTag) {
    case "NEXT.JS":
    case "NEXTJS":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20"
    case "REACT":
      return "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
    case "MDX":
      return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
    case "PORTFOLIO":
      return "bg-teal-500/10 text-teal-400 border-teal-500/20"
    case "FRONTEND":
      return "bg-sky-500/10 text-sky-400 border-sky-500/20"
    case "ARCHITECTURE":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20"
    case "CAREER":
    case "PERSONAL BRANDING":
      return "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20"
    case "JAVASCRIPT":
      return "bg-yellow-500/10 text-yellow-300 border-yellow-500/20"
    case "TYPESCRIPT":
      return "bg-blue-500/10 text-blue-300 border-blue-500/20"
    default:
      return "bg-muted text-muted-foreground border-border"
  }
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
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
          <CardTitle className="text-xl leading-tight">{title}</CardTitle>

          <div className="flex flex-wrap gap-1.5 shrink-0">
            {tags.slice(0, 4).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={`text-[10px] sm:text-xs font-medium ${getTagColor(tag)}`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Badge
          variant="secondary"
          className="w-fit text-xs font-semibold bg-[#00FFC2]/10 text-[#00FFC2] border-[#00FFC2]/20"
        >
          {category || date}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
            Overview
          </p>
          <CardDescription className="text-sm leading-relaxed text-foreground/70 line-clamp-3">
            {description}
          </CardDescription>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
            Published
          </p>
          <CardDescription className="text-sm leading-relaxed text-foreground/70">
            {date}
          </CardDescription>
        </div>

        <Button
          variant="ghost"
          className="w-full mt-2 group/btn hover:bg-[#00FFC2]/5 text-muted-foreground hover:text-[#00FFC2] transition-colors"
          asChild
        >
          <Link href={`/blog/${slug}`}>
            Read Article
            <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}