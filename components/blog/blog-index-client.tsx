"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog/blog-card"
import type { BlogPost } from "@/lib/blog"
import { cn } from "@/lib/utils"

const categories = [
  "All",
  "SAP BTP",
  "Salesforce",
  "DevOps",
  "Enterprise",
  "Architecture",
  "Frontend",
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
        <h1 className="text-h1 lg:text-hero font-heading text-foreground mb-6">
          Enterprise Development <span className="text-brand-primary">Blog</span>
        </h1>

        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-body">
          Articles on enterprise software delivery, SAP and Salesforce ecosystems,
          frontend architecture, and practical lessons from Fortune 500 programs.{" "}
          <Link href="/services" className="text-brand-primary hover:underline font-medium">
            View services
          </Link>
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "brand" : "brandOutline"}
              onClick={() => setFilter(cat)}
              className={cn(
                filter !== cat &&
                  "border-border-default text-muted-foreground hover:border-brand-primary/30"
              )}
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
