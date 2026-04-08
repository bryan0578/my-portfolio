import { BlogCard } from "@/components/blog/blog-card"
import { Button } from "@/components/ui/button"
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
    <section className="px-6 py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        {showHeader && (
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#00FFC2] mb-3 font-semibold">
              Insights
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Articles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Practical writing on frontend engineering, architecture, and lessons from building real products.
            </p>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
          {displayPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            asChild
            className="min-w-[160px] bg-[#00FFC2] text-zinc-950 hover:bg-[#00FFC2]/90 shadow-[0_0_20px_rgba(0,255,194,0.3)] hover:shadow-[0_0_30px_rgba(0,255,194,0.5)] transition-all duration-300 font-bold group"
          >
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