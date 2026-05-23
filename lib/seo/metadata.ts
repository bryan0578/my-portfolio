import type { Metadata } from "next"
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  SITE_NAME,
  SITE_URL,
} from "./site"

export type OgImageInput =
  | string
  | {
      url: string
      alt?: string
      width?: number
      height?: number
    }

export type PageMetadataInput = {
  /** Page title without site name (site name is appended automatically). */
  title: string
  description: string
  /** Path only, e.g. `/services/sap-btp-development` */
  path: string
  keywords?: string[]
  ogImage?: OgImageInput
  ogType?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  tags?: string[]
  noIndex?: boolean
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

function resolveOgImage(ogImage?: OgImageInput, fallbackAlt?: string) {
  if (!ogImage) {
    return {
      url: DEFAULT_OG_IMAGE,
      alt: fallbackAlt ?? DEFAULT_OG_IMAGE_ALT,
      width: 1200,
      height: 630,
    }
  }

  if (typeof ogImage === "string") {
    return {
      url: ogImage,
      alt: fallbackAlt ?? DEFAULT_OG_IMAGE_ALT,
      width: 1200,
      height: 630,
    }
  }

  return {
    url: ogImage.url,
    alt: ogImage.alt ?? fallbackAlt ?? DEFAULT_OG_IMAGE_ALT,
    width: ogImage.width ?? 1200,
    height: ogImage.height ?? 630,
  }
}

function buildFullTitle(title: string): string {
  if (title.includes(SITE_NAME)) {
    return title
  }
  return `${title} | ${SITE_NAME}`
}

/**
 * Builds complete Next.js Metadata with canonical, Open Graph, and Twitter Cards.
 * Uses absolute titles to avoid duplicate suffixes from layout templates.
 */
export function createPageMetadata(input: PageMetadataInput): Metadata {
  const canonicalPath = input.path.startsWith("/") ? input.path : `/${input.path}`
  const url = absoluteUrl(canonicalPath)
  const fullTitle = buildFullTitle(input.title)
  const og = resolveOgImage(input.ogImage, `${input.title} — ${SITE_NAME}`)

  const openGraphBase = {
    type: input.ogType ?? "website",
    url,
    title: fullTitle,
    description: input.description,
    siteName: SITE_NAME,
    locale: "en_US" as const,
    images: [
      {
        url: og.url,
        width: og.width,
        height: og.height,
        alt: og.alt,
      },
    ],
  }

  const openGraph =
    input.ogType === "article"
      ? {
          ...openGraphBase,
          type: "article" as const,
          publishedTime: input.publishedTime,
          modifiedTime: input.modifiedTime,
          authors: input.authors ?? [SITE_NAME],
          tags: input.tags,
        }
      : openGraphBase

  return {
    title: { absolute: fullTitle },
    description: input.description,
    keywords: input.keywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    alternates: {
      canonical: canonicalPath,
    },
    robots: input.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: input.description,
      images: [og.url],
    },
  }
}

export function getProjectOgImage(project: {
  gallery?: { images: { src: string; alt: string }[] }
  images?: { src: string; alt: string }[]
  title: string
}): OgImageInput {
  const first =
    project.gallery?.images?.[0] ?? project.images?.[0]

  if (first?.src) {
    return { url: first.src, alt: first.alt || `${project.title} case study` }
  }

  return DEFAULT_OG_IMAGE
}
