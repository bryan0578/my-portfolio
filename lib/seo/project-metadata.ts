import type { Project } from "@/src/data/projects"
import { createPageMetadata, getProjectOgImage } from "./metadata"

export function createProjectMetadata(project: Project) {
  const path = `/projects/${project.slug}`
  const title = `${project.title} Case Study`

  return createPageMetadata({
    title,
    description: project.summary,
    path,
    keywords: [...project.stack, ...project.categories],
    ogImage: getProjectOgImage(project),
  })
}
