import { BlogHeader } from "@/components/blog/blog-header"
import { SiteHeader } from "@/components/site-header"
import { AIChatBubble } from "@/components/ai-chat-bubble"
import { BlogIndexClient } from "@/components/blog/blog-index-client"
import { JsonLd } from "@/lib/seo/json-ld"
import { getAllPosts } from "@/lib/blog"
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildWebPageSchema,
} from "@/lib/seo/schemas"
import { blogIndexMetadata } from "@/lib/seo/page-metadata"

export default async function BlogPage() {
  const posts = await getAllPosts()

  const structuredData = [
    buildWebPageSchema({
      path: "/blog",
      name: "Enterprise Development Blog",
      description: blogIndexMetadata.description as string,
    }),
    buildCollectionPageSchema({
      path: "/blog",
      name: "Enterprise Development Blog",
      description: blogIndexMetadata.description as string,
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Insights", path: "/blog" },
    ]),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      <SiteHeader />
      <BlogHeader />
      <main id="main-content" className="min-h-screen bg-background pt-36 pb-24 px-6">
        <BlogIndexClient posts={posts} />
        <AIChatBubble />
      </main>
    </>
  )
}
