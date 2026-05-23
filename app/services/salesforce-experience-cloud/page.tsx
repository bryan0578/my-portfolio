import type { Metadata } from "next"
import { MarketingLayout } from "@/components/marketing/marketing-layout"
import { ServicePageTemplate } from "@/components/marketing/service-page-template"
import { salesforceExperienceCloud } from "@/lib/marketing/services-content"
import { salesforceCloudMetadata } from "@/lib/seo/page-metadata"

export const metadata: Metadata = salesforceCloudMetadata

export default function SalesforceExperienceCloudPage() {
  return (
    <MarketingLayout>
      <ServicePageTemplate content={salesforceExperienceCloud} />
    </MarketingLayout>
  )
}
