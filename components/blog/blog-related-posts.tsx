import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface BlogRelatedPostsProps {
  posts: BlogPost[]
}

export function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section
      className="not-prose mt-10 sm:mt-14 md:mt-16 border-t border-border/50 pt-10"
      aria-labelledby="related-posts-heading"
    >
      <h2
        id="related-posts-heading"
        className="text-h3 font-heading text-foreground mb-6"
      >
        Related insights
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Card variant="surfaceInteractive" className="h-full">
              <CardContent className="flex h-full flex-col p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.categories?.[0] ? (
                    <Badge variant="brand">{post.categories[0]}</Badge>
                  ) : null}
                  <Badge variant="brand">{post.date}</Badge>
                </div>
                <h3 className="text-body font-semibold font-heading text-foreground mb-2 text-pretty">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-brand-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-body-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-body-sm font-medium text-brand-primary hover:text-brand-primary/80 transition-colors"
                >
                  Read insight
                  <ArrowRight className="ml-1.5 size-4" aria-hidden />
                </Link>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}
