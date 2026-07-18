import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Code2,
  LayoutTemplate,
  Sparkles,
} from "lucide-react"
import { AnalyticsLink } from "@/components/analytics-link"
import { FaqSection } from "@/components/marketing/faq-section"
import { MarketingLayout } from "@/components/marketing/marketing-layout"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: { absolute: "Next.js Web Applications | Bryan Cash" },
  description:
    "Next.js web applications, MVPs, and high-end sites for founders, small businesses, and marketing teams—from first wireframe through Vercel deployment.",
  alternates: { canonical: "/web-apps" },
}

const offerings = [
  {
    icon: LayoutTemplate,
    title: "Marketing sites and landing pages",
    text: "Focused, polished sites built to explain an offer clearly and turn attention into action.",
    chips: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
  },
  {
    icon: Code2,
    title: "Web applications and MVPs",
    text: "Production-minded applications that turn a defined product idea or workflow into something people can use.",
    chips: ["Next.js", "React", "TypeScript", "Node.js", "Postgres", "Vercel"],
  },
  {
    icon: Sparkles,
    title: "AI-assisted product features",
    text: "Purposeful AI features designed around a real user task, with a clear interface and maintainable application foundation.",
    chips: ["Next.js", "React", "TypeScript", "Node.js", "Vercel"],
  },
] as const

const process = [
  "Scope call",
  "Fixed proposal covering scope, timeline, and price",
  "Build in weekly increments with preview links",
  "Launch plus a 30-day support window",
] as const

const reasons = [
  "Nearly 9 years delivering enterprise software in complex global organizations",
  "Design and engineering in one person — Figma to production",
  "Enterprise habits: documentation, testing, and clean handoff",
] as const

const faq = [
  {
    question: "How long does a project take?",
    answer:
      "Timing depends on the agreed scope. The proposal defines the delivery plan before work begins, and weekly preview links make progress visible throughout the build.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Bring the business goal, target audience, known requirements, brand assets, and any content you already have. I will identify gaps during scoping and make responsibilities clear in the proposal.",
  },
  {
    question: "Who owns the code?",
    answer:
      "The proposal documents ownership and handoff terms. The standard goal is a clean, documented handoff that leaves you in control of the finished application.",
  },
  {
    question: "What happens after launch?",
    answer:
      "A completed build includes a 30-day support window for launch-related issues. Ongoing improvements can be scoped separately when useful.",
  },
]

const projectHref =
  "mailto:hello@cashbryan.com?subject=Web%20application%20project"

export default function WebAppsPage() {
  return (
    <MarketingLayout>
      <section className="px-5 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-brand-primary">WEB APPLICATIONS</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
            Modern web apps, designed and shipped.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            I design and build Next.js applications end to end — from first wireframe to production deployment on Vercel.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AnalyticsLink
              href={projectHref}
              event="web_app_inquiry_started"
              className="rounded-md bg-brand-primary px-5 py-3 text-center font-semibold text-black hover:opacity-90"
            >
              Start a project
            </AnalyticsLink>
            <Button variant="brandOutline" asChild className="min-h-12 px-5">
              <Link href="#process">See how I work</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-surface-canvas px-5 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-brand-primary">WHAT I BUILD</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A focused build for a defined outcome.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {offerings.map(({ icon: Icon, title, text, chips }) => (
              <article key={title} className="rounded-xl border border-border/60 bg-card/40 p-6">
                <Icon className="size-6 text-brand-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
                  {chips.map((chip) => (
                    <li key={chip} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      {chip}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 px-5 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-brand-primary">HOW IT WORKS</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Clear scope. Visible progress. Clean launch.</h2>
          </div>
          <ol className="space-y-4">
            {process.map((step, index) => (
              <li key={step} className="flex min-h-16 items-center gap-4 rounded-xl border border-border/60 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-soft font-semibold text-brand-primary">
                  {index + 1}
                </span>
                <span className="font-medium">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface-canvas px-5 py-16 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-brand-primary/20 bg-brand-soft p-7 md:p-9">
            <p className="text-sm font-semibold text-brand-primary">PROOF</p>
            <h2 className="mt-3 text-3xl font-bold">cashbryan.com</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              This portfolio is a self-build on Next.js and Tailwind, deployed on Vercel with an editorial design system, reusable content patterns, and responsive audience journeys.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center font-semibold text-brand-primary hover:underline">
              About the builder <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </Link>
          </article>
          <article className="rounded-2xl border border-border/60 p-7 md:p-9">
            <p className="text-sm font-semibold text-brand-primary">WHY ME</p>
            <h2 className="mt-3 text-3xl font-bold">Enterprise discipline without agency layers.</h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-brand-primary" aria-hidden="true" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg text-muted-foreground">
          Most projects are fixed-scope engagements designed around a clearly defined outcome.
        </p>
      </section>

      <FaqSection items={faq} />

      <section className="px-5 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-brand-primary/20 bg-brand-soft p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Have something you want built?</h2>
          <AnalyticsLink
            href={projectHref}
            event="web_app_inquiry_started"
            className="mt-7 inline-flex min-h-12 items-center rounded-md bg-brand-primary px-6 py-3 font-semibold text-black hover:opacity-90"
          >
            Start a project <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </AnalyticsLink>
        </div>
      </section>
    </MarketingLayout>
  )
}
