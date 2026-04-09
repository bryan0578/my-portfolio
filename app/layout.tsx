import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Bryan Cash — SAP BTP Lead & UI Architect",
    template: "%s | Bryan Cash",
  },
  description:
    "Enterprise-focused developer and UI architect bridging SAP BTP, Salesforce DevOps, UI/UX design, and modern frontend development through case studies and technical writing.",
  keywords: [
    "Bryan Cash",
    "SAP BTP",
    "SAP UI5",
    "Salesforce DevOps",
    "Frontend Developer",
    "UI Architect",
    "Next.js Portfolio",
    "Technical Writing",
    "Enterprise Applications",
  ],
  authors: [{ name: "Bryan Cash" }],
  creator: "Bryan Cash",
  publisher: "Bryan Cash",
  applicationName: "Bryan Cash Portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
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
  openGraph: {
    type: "website",
    url: "https://cashbryan.com",
    siteName: "Bryan Cash Portfolio",
    title: "Bryan Cash — SAP BTP Lead & UI Architect",
    description:
      "Enterprise-focused developer and UI architect showcasing projects, case studies, and technical writing.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bryan Cash Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bryan Cash — SAP BTP Lead & UI Architect",
    description:
      "Enterprise-focused developer and UI architect showcasing projects, case studies, and technical writing.",
    images: ["/og-image.png"],
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
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}