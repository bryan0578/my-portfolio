import type { Metadata } from "next"
import { JsonLd } from "@/lib/seo/json-ld"
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildWebPageSchema,
} from "@/lib/seo/schemas"
import { projectsIndexMetadata } from "@/lib/seo/page-metadata"

export const metadata: Metadata = projectsIndexMetadata

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = [
    buildWebPageSchema({
      path: "/projects",
      name: "Enterprise & Product Engineering Case Studies",
      description: projectsIndexMetadata.description as string,
    }),
    buildCollectionPageSchema({
      path: "/projects",
      name: "Enterprise & Product Engineering Case Studies",
      description: projectsIndexMetadata.description as string,
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/projects" },
    ]),
  ]

  return (
    <>
      <JsonLd data={structuredData} />
      {children}
    </>
  )
}
