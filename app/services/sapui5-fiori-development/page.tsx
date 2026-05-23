import type { Metadata } from "next"
import { MarketingLayout } from "@/components/marketing/marketing-layout"
import { ServicePageTemplate } from "@/components/marketing/service-page-template"
import { sapui5FioriDevelopment } from "@/lib/marketing/services-content"
import { sapui5Metadata } from "@/lib/seo/page-metadata"

export const metadata: Metadata = sapui5Metadata

export default function Sapui5FioriDevelopmentPage() {
  return (
    <MarketingLayout>
      <ServicePageTemplate content={sapui5FioriDevelopment} />
    </MarketingLayout>
  )
}
