import fs from "node:fs"
import path from "node:path"

const postsDirectory = path.join(process.cwd(), "content/blog")

export type BlogPostFrontmatter = {
  title: string
  description: string
  date: string
  tags?: string[]
  categories?: string[]
  featured?: boolean
  published?: boolean
}

export type BlogPost = BlogPostFrontmatter & {
  slug: string
}

function getMdxFiles(dir: string) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"))
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = getMdxFiles(postsDirectory)

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "")
      const mod = await import(`@/content/blog/${slug}.mdx`)
      const metadata = mod.metadata as BlogPostFrontmatter

      const categories = Array.isArray(metadata.categories)
        ? metadata.categories
        : metadata.categories
          ? [metadata.categories]
          : ["General"]

      return {
        slug,
        title: metadata.title ?? "",
        description: metadata.description ?? "",
        date: metadata.date ?? "",
        tags: metadata.tags ?? [],
        categories,
        featured: metadata.featured ?? false,
        published: metadata.published ?? true,
      }
    })
  )

  return posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.featured)
}

export async function getPostBySlug(slug: string) {
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`)
    return {
      slug,
      frontmatter: mod.metadata as BlogPostFrontmatter,
    }
  } catch {
    return null
  }
}

export async function getAllPostSlugs() {
  const posts = await getAllPosts()
  return posts.map((post) => post.slug)
}

export async function getRelatedPosts(
  currentSlug: string,
  options?: {
    categories?: string[]
    tags?: string[]
    limit?: number
  }
): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  const limit = options?.limit ?? 3
  const categories = new Set(options?.categories ?? [])
  const tags = new Set(options?.tags ?? [])

  const ranked = posts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0
      for (const category of post.categories ?? []) {
        if (categories.has(category)) score += 2
      }
      for (const tag of post.tags ?? []) {
        if (tags.has(tag)) score += 1
      }
      return { post, score }
    })
    .filter(({ score }) => score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        new Date(b.post.date).getTime() - new Date(a.post.date).getTime()
    )

  const related = ranked.slice(0, limit).map(({ post }) => post)

  if (related.length >= limit) {
    return related
  }

  const usedSlugs = new Set([currentSlug, ...related.map((post) => post.slug)])
  const fallback = posts
    .filter((post) => !usedSlugs.has(post.slug))
    .slice(0, limit - related.length)

  return [...related, ...fallback]
}