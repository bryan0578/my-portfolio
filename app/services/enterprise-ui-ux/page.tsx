import type { Metadata } from "next"
import { MarketingLayout } from "@/components/marketing/marketing-layout"
import { ServicePageTemplate } from "@/components/marketing/service-page-template"
import { enterpriseUiUx } from "@/lib/marketing/services-content"
import { enterpriseUiUxMetadata } from "@/lib/seo/page-metadata"

export const metadata: Metadata = enterpriseUiUxMetadata

export default function EnterpriseUiUxPage() {
  return (
    <MarketingLayout>
      <ServicePageTemplate content={enterpriseUiUx} />
    </MarketingLayout>
  )
}
