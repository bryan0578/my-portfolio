import type { Metadata } from "next"
import { Sora, Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteFooter } from "@/components/site-footer"
import { GlobalJsonLd } from "@/components/seo/global-json-ld"
import { SkipLink } from "@/components/seo/skip-link"
import {
  SITE_NAME,
  SITE_TAGLINE,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  RSS_FEED_PATH,
  SITE_URL,
} from "@/lib/seo/site"
import { SITE_DESCRIPTION } from "@/lib/seo/brand-copy"
import "./globals.css"

const defaultDescription = SITE_DESCRIPTION

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--bc-font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--bc-font-body",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--bc-font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_TAGLINE} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      "application/rss+xml": `${SITE_URL}${RSS_FEED_PATH}`,
    },
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    title: `${SITE_TAGLINE} | ${SITE_NAME}`,
    description: defaultDescription,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: DEFAULT_OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_TAGLINE} | ${SITE_NAME}`,
    description: defaultDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [{ url: "/apple-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body antialiased">
        <SkipLink />
        <GlobalJsonLd />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
