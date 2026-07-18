export type ProposalPackage = { name: string; price: string; description: string; deliverables: string[] }

export type Proposal = {
  slug: string
  client: string
  project: string
  overview: string
  problem: string
  solution: string
  timeline: string
  deliverables: string[]
  packages: ProposalPackage[]
  faq: { question: string; answer: string }[]
  active: boolean
  accessToken?: string
}
