import type { Metadata } from "next"
import { blogIndexMetadata } from "@/lib/seo/page-metadata"

export const metadata: Metadata = blogIndexMetadata

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
