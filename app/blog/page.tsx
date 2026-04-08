import { BlogHeader } from "@/components/blog/blog-header"
import { AIChatBubble } from "@/components/ai-chat-bubble"
import { BlogIndexClient } from "@/components/blog/blog-index-client"
import { getAllPosts } from "@/lib/blog"

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      <BlogHeader />
      <main className="min-h-screen bg-background pt-32 pb-24 px-6">
        <BlogIndexClient posts={posts} />
        <AIChatBubble />
      </main>
    </>
  )
}