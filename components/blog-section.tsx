import { BlogCard } from "@/components/blog/blog-card"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/marketing/section-header"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { getFeaturedPosts, type BlogPost } from "@/lib/blog"

interface BlogSectionProps {
  limit?: number
  showHeader?: boolean
  posts?: BlogPost[]
}

export async function BlogSection({
  limit,
  showHeader = true,
  posts,
}: BlogSectionProps) {
  let displayPosts = posts ?? await getFeaturedPosts()

  if (limit) {
    displayPosts = displayPosts.slice(0, limit)
  }

  return (
    <section className="px-6 py-24 lg:py-20 bg-surface-canvas">
      <div className="max-w-7xl mx-auto">
        {showHeader && (
          <SectionHeader
            className="mb-16 lg:mb-12"
            eyebrow="Insights"
            title="Insights"
            description="Practical writing on enterprise UI, SAP and Salesforce delivery, frontend architecture, and the systems behind real-world implementation."
          />
        )}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {displayPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" variant="brand" asChild className="min-w-[160px] group">
            <Link href="/blog" aria-label="View all articles">
              View All Articles
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}