import type { Metadata } from "next"
import { MarketingLayout } from "@/components/marketing/marketing-layout"
import { ServicePageTemplate } from "@/components/marketing/service-page-template"
import { salesforceDevops } from "@/lib/marketing/services-content"
import { salesforceDevopsMetadata } from "@/lib/seo/page-metadata"

export const metadata: Metadata = salesforceDevopsMetadata

export default function SalesforceDevopsPage() {
  return (
    <MarketingLayout>
      <ServicePageTemplate content={salesforceDevops} />
    </MarketingLayout>
  )
}
