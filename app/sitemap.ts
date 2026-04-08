import type { MetadataRoute } from "next"
import { getAllPostSlugs } from "@/lib/blog"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await getAllPostSlugs()

  const blogEntries = blogSlugs.map((slug) => ({
    url: `https://cashbryan.com/blog/${slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: "https://cashbryan.com",
      lastModified: new Date(),
    },
    {
      url: "https://cashbryan.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://cashbryan.com/blog",
      lastModified: new Date(),
    },
    ...blogEntries,
  ]
}