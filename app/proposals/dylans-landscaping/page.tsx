import type { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Inactive Proposal",
  robots: { index: false, follow: false, nocache: true },
}

/**
 * Client-specific content is intentionally absent from the public repository.
 * Restore through the reusable proposal registry only after Bryan explicitly
 * approves the client name, scope, pricing, assets, and acceptance actions.
 */
export default function InactiveProposalPage() {
  notFound()
}
