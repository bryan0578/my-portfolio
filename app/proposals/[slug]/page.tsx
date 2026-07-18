import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProposalTemplate } from "@/components/proposals/proposal-template"
import { proposals } from "@/lib/proposals/data"

export const dynamicParams = false
export const metadata: Metadata = { robots: { index: false, follow: false, nocache: true } }
export function generateStaticParams() { return Object.keys(proposals).map(slug => ({ slug })) }

export default async function ProposalPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ token?: string }> }) {
  const { slug } = await params
  const { token } = await searchParams
  const proposal = proposals[slug]
  if (!proposal?.active || (proposal.accessToken && token !== proposal.accessToken)) notFound()
  return <ProposalTemplate proposal={proposal} />
}
