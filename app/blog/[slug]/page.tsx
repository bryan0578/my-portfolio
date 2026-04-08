import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogPostLayout } from "@/components/blog/blog-post-layout"
import { AIChatBubble } from "@/components/ai-chat-bubble"
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog"

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: `${post.frontmatter.title} — Bryan Cash`,
    description: post.frontmatter.description,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post || !post.frontmatter.published) {
    notFound()
  }

  let PostComponent

  try {
    PostComponent = (await import(`@/content/blog/${slug}.mdx`)).default
  } catch {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader postTitle={post.frontmatter.title} />

      <main className="pt-20">
        <BlogPostLayout
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          date={post.frontmatter.date}
          category={post.frontmatter.categories?.[0]}
          tags={post.frontmatter.tags}
        >
          <PostComponent />
        </BlogPostLayout>

        <AIChatBubble />
      </main>
    </div>
  )
}