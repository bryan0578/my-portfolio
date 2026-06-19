import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getEcosystemBadgeColor } from "@/lib/ui/ecosystem-badge-colors"
import { cn } from "@/lib/utils"

interface BlogPostLayoutProps {
  title: string
  description: string
  tags?: string[]
  date: string
  category?: string
  children: React.ReactNode
}

export function BlogPostLayout({
  title,
  description,
  tags = [],
  date,
  category,
  children,
}: BlogPostLayoutProps) {
  return (
    <>
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {category ? <Badge variant="brand">{category}</Badge> : null}
            <Badge variant="brand">{date}</Badge>
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="tag"
                className={cn(getEcosystemBadgeColor(tag))}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1
            id="blog-post-title"
            className="text-h1 lg:text-hero font-heading text-foreground mb-8 text-pretty"
          >
            {title}
          </h1>

          <p className="text-body-lg text-muted-foreground text-pretty max-w-3xl">
            {description}
          </p>

          <div className="mt-12 h-px bg-linear-to-r from-brand-primary/50 via-border to-transparent" />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <Card variant="surface">
            <CardContent className="p-6 md:p-10 lg:p-12">
              <article
                id="article-content"
                aria-labelledby="blog-post-title"
                className="max-w-[68ch] mx-auto text-pretty [&_h2]:scroll-mt-28 [&_h3]:scroll-mt-28 [&_pre]:overflow-x-auto [&_a]:decoration-brand-primary/40"
              >
                {children}
              </article>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
