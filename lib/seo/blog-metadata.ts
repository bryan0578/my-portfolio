import type { BlogPostFrontmatter } from "@/lib/blog"
import { createPageMetadata } from "./metadata"

export function createBlogPostMetadata(
  slug: string,
  frontmatter: BlogPostFrontmatter
) {
  return createPageMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: `/blog/${slug}`,
    keywords: [
      ...(frontmatter.tags ?? []),
      ...(frontmatter.categories ?? []),
    ],
    ogType: "article",
    publishedTime: frontmatter.date,
    modifiedTime: frontmatter.date,
    authors: ["Bryan Cash"],
    tags: frontmatter.tags,
  })
}
