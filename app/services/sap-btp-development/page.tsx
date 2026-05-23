import type { Metadata } from "next"
import { MarketingLayout } from "@/components/marketing/marketing-layout"
import { ServicePageTemplate } from "@/components/marketing/service-page-template"
import { sapBtpDevelopment } from "@/lib/marketing/services-content"
import { sapBtpMetadata } from "@/lib/seo/page-metadata"

export const metadata: Metadata = sapBtpMetadata

export default function SapBtpDevelopmentPage() {
  return (
    <MarketingLayout>
      <ServicePageTemplate content={sapBtpDevelopment} />
    </MarketingLayout>
  )
}
