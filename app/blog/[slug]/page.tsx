import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { BlogHeader } from "@/components/blog/blog-header"
import { SiteHeader } from "@/components/site-header"
import { BlogPostLayout } from "@/components/blog/blog-post-layout"
import { BlogCta } from "@/components/blog/blog-cta"
import { getBlogEngagementCta } from "@/lib/content/content-ia"
import { AIChatBubble } from "@/components/ai-chat-bubble"
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog"
import { JsonLd } from "@/lib/seo/json-ld"
import { createBlogPostMetadata } from "@/lib/seo/blog-metadata"
import { buildBlogPostingSchema, buildBreadcrumbSchema } from "@/lib/seo/schemas"

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
    return {
      title: { absolute: "Post Not Found | Bryan Cash" },
      robots: { index: false, follow: false },
    }
  }

  return createBlogPostMetadata(slug, post.frontmatter)
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

  const postPath = `/blog/${slug}`
  const structuredData = [
    ...buildBlogPostingSchema({
      path: postPath,
      headline: post.frontmatter.title,
      description: post.frontmatter.description,
      datePublished: post.frontmatter.date,
      keywords: [
        ...(post.frontmatter.tags ?? []),
        ...(post.frontmatter.categories ?? []),
      ],
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Insights", path: "/blog" },
      { name: post.frontmatter.title, path: postPath },
    ]),
  ]

  const engagementCta = getBlogEngagementCta(
    slug,
    post.frontmatter.categories ?? []
  )

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={structuredData} />
      <SiteHeader />
      <BlogHeader postTitle={post.frontmatter.title} />

      <main id="main-content" className="pt-36">
        <BlogPostLayout
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          date={post.frontmatter.date}
          category={post.frontmatter.categories?.[0]}
          tags={post.frontmatter.tags}
        >
          <PostComponent />
          {engagementCta ? <BlogCta {...engagementCta} /> : null}
        </BlogPostLayout>

        <AIChatBubble />
      </main>
    </div>
  )
}
