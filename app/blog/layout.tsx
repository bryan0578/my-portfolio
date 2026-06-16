import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/seo/metadata"
import { blogIndexMetadata } from "@/lib/seo/page-metadata"
import { RSS_FEED_PATH } from "@/lib/seo/site"

export const metadata: Metadata = {
  ...blogIndexMetadata,
  alternates: {
    ...blogIndexMetadata.alternates,
    types: {
      "application/rss+xml": absoluteUrl(RSS_FEED_PATH),
    },
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
