import { ArrowRight, BriefcaseBusiness, Handshake } from "lucide-react"
import { AnalyticsLink } from "@/components/analytics-link"

const paths = [
  { href: "/career", event: "career_journey_selected", icon: BriefcaseBusiness, eyebrow: "FOR HIRING TEAMS", title: "Hiring for a full-time role", text: "Review Bryan’s team contribution, enterprise experience, selected projects, skills, and resume." },
  { href: "/consulting", event: "consulting_journey_selected", icon: Handshake, eyebrow: "FOR CLIENTS", title: "Looking for consulting or project support", text: "Explore focused services, engagement fit, proof of work, process, and ways to start a scoped conversation." },
] as const

export function AudiencePaths() {
  return <section aria-labelledby="choose-path" className="bg-surface-canvas px-5 py-14 sm:px-6"><div className="mx-auto max-w-6xl"><div className="max-w-2xl"><p className="text-sm font-semibold text-brand-primary">CHOOSE YOUR PATH</p><h2 id="choose-path" className="mt-2 text-3xl font-bold sm:text-4xl">The same experience, organized around what you need to decide.</h2></div><div className="mt-8 grid gap-5 md:grid-cols-2">{paths.map(({ href, event, icon: Icon, eyebrow, title, text }) => <AnalyticsLink key={href} href={href} event={event} className="group rounded-xl border border-border/60 bg-card/40 p-6 transition hover:-translate-y-0.5 hover:border-brand-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"><Icon className="size-6 text-brand-primary" /><p className="mt-5 text-xs font-semibold text-brand-primary">{eyebrow}</p><h3 className="mt-2 text-2xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p><span className="mt-5 inline-flex items-center font-semibold text-brand-primary">Explore <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" /></span></AnalyticsLink>)}</div></div></section>
}
