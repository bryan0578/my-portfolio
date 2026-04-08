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