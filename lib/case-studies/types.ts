export type ArchitecturalDecision = {
  title: string
  decision: string
  rationale: string
}

export type Tradeoff = {
  title: string
  chose: string
  insteadOf: string
  reasoning: string
}

export type BusinessChallenge = {
  context: string
  keyProblems: string[]
  stakeholders?: string
}

export type TechnicalApproach = {
  headline: string
  summary: string
  points: string[]
}

export type Outcomes = {
  qualitative: string[]
  summary?: string
}

export type WhenItFits = {
  fitsWhen: string[]
  avoidWhen?: string[]
}

export type CaseStudyCta = {
  headline: string
  description: string
  subject: string
  primaryServiceHref: string
  primaryServiceLabel: string
  secondaryHref?: string
  secondaryLabel?: string
}

export type ConsultingCaseStudy = {
  executiveSummary: string
  businessChallenge: BusinessChallenge
  technicalApproach: TechnicalApproach
  architecturalDecisions: ArchitecturalDecision[]
  tradeoffs: Tradeoff[]
  outcomes: Outcomes
  lessonsLearned: string[]
  whenItFits: WhenItFits
  cta: CaseStudyCta
}
