import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import { projects } from "@/src/data/projects"
import { SITE_URL } from "@/lib/seo/site"

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: `${SITE_URL}/about`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/work-with-me`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.95,
  },
  {
    url: `${SITE_URL}/services`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/services/sap-btp-development`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${SITE_URL}/services/sapui5-fiori-development`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${SITE_URL}/services/salesforce-experience-cloud`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${SITE_URL}/services/salesforce-devops`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${SITE_URL}/services/enterprise-ui-ux`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    url: `${SITE_URL}/projects`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    url: `${SITE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.75,
  },
  {
    url: `${SITE_URL}/privacy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${SITE_URL}/terms`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
  const postDates = new Map(
    posts.map((post) => [post.slug, new Date(post.date)])
  )

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: postDates.get(post.slug) ?? new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  const projectEntries: MetadataRoute.Sitemap = Object.keys(projects).map(
    (slug) => ({
      url: `${SITE_URL}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  )

  return [...staticRoutes, ...projectEntries, ...blogEntries]
}
