"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog/blog-card"
import type { BlogPost } from "@/lib/blog"

const categories = [
  "All",
  "Frontend",
  "React",
  "Next.js",
  "Architecture",
  "Career",
  "Enterprise",
] as const

interface BlogIndexClientProps {
  posts: BlogPost[]
}

export function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All")

  const allPosts = useMemo(() => {
    return posts.filter(
      (post, index, arr) =>
        arr.findIndex((p) => p.slug === post.slug) === index
    )
  }, [posts])

  const filteredPosts =
    filter === "All"
      ? allPosts
      : allPosts.filter(
          (post) =>
            (post.categories ?? []).some(
              (category) => category.toLowerCase() === filter.toLowerCase()
            )
        )

  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Technical <span className="text-[#00FFC2]">Writing</span>
        </h1>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          A curated collection of articles on frontend architecture, engineering decisions,
          portfolio building, and practical lessons from real-world development.
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
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  )
}