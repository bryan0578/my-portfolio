import type { Metadata } from "next"
import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Leaf,
  Mail,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react"
import { buildMailtoHref, CONTACT_EMAIL } from "@/lib/contact"

export const metadata: Metadata = {
  title: "Website Proposal for Dylan's Landscaping",
  description:
    "A private proposal preview for a professional, mobile-friendly landscaping website.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

type SummaryCard = {
  icon: LucideIcon
  label: string
}

type AddOn = {
  title: string
  price: string
  description: string
  items: string[]
}

const packageItems = [
  "Custom-built website",
  "Mobile-friendly design",
  "Fast-loading layout",
  "Home page",
  "Services section",
  "About section",
  "Photo gallery / before-and-after work",
  "Service areas section",
  "Contact / request-a-quote form",
  "Click-to-call button for mobile visitors",
  "Basic SEO setup",
  "Contact form connected to email",
  "Google Maps or Google Business Profile link",
  "Basic launch support",
  "1–2 rounds of revisions before launch",
]

const seoItems = [
  "Page titles",
  "Meta descriptions",
  "Proper headings",
  "Mobile-friendly structure",
  "Image alt text",
  "Basic local keywords",
  "Service area mentions",
  "Sitemap setup",
  "Search engine indexing setup",
]

const services = [
  "Lawn Care",
  "Mulching",
  "Yard Cleanups",
  "Tree & Brush Trimming",
  "Seasonal Maintenance",
  "Hardscaping",
]

const addOns: AddOn[] = [
  {
    title: "Monthly Website Care",
    price: "$100/month",
    description:
      "Best for keeping the site current with photos, seasonal services, and small updates.",
    items: [
      "Small website updates",
      "Adding new project photos",
      "Seasonal service updates",
      "Basic site monitoring",
      "Contact form support",
      "Minor text or service changes",
    ],
  },
  {
    title: "Additional Pages",
    price: "$150/page",
    description:
      "Useful if you want dedicated pages for high-value services or seasonal offers.",
    items: [
      "Lawn care page",
      "Mulching page",
      "Hardscaping page",
      "Snow removal page",
      "Tree trimming page",
      "Drainage services page",
    ],
  },
  {
    title: "Optional Local SEO Boost",
    price: "$300–$500 one-time",
    description:
      "A stronger local search setup for service and location visibility after the site foundation is built.",
    items: [
      "Service/location keyword setup",
      "Google Business Profile cleanup guidance",
      "Local search recommendations",
      "Additional service area optimization",
    ],
  },
]

const summaryCards: SummaryCard[] = [
  { icon: MonitorSmartphone, label: "Mobile-friendly website" },
  { icon: Search, label: "Basic SEO setup included" },
  { icon: WalletCards, label: "$750 deposit / $750 before launch" },
  { icon: Clock3, label: "Estimated 2–3 week timeline" },
]

const timelineSteps = [
  "Approve package and deposit",
  "Gather business details and photos",
  "Build first version",
  "Review and revisions",
  "Final payment and launch",
]

const neededItems = [
  "Business name",
  "Logo, if available",
  "Phone number",
  "Email address",
  "List of services",
  "Service areas",
  "Photos of completed work",
  "Any real reviews or testimonials",
  "Preferred colors or style, if any",
]

function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-3 text-xs font-bold uppercase tracking-[0.24em] ${
        light ? "text-[#f3dfaa]" : "text-[#3f7a4b]"
      }`}
    >
      {children}
    </p>
  )
}

function CheckItem({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <li className={`flex gap-3 text-sm leading-6 ${light ? "text-[#dfeadc]" : "text-[#314031]"}`}>
      <CheckCircle2
        className={`mt-1 size-4 shrink-0 ${light ? "text-[#f3dfaa]" : "text-[#2f6f45]"}`}
        aria-hidden
      />
      <span>{children}</span>
    </li>
  )
}

function ProposalNav() {
  const links = [
    ["#package", "Package"],
    ["#seo", "SEO"],
    ["#mockup", "Mockup"],
    ["#addons", "Add-ons"],
    ["#timeline", "Timeline"],
  ]

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#172217]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 overflow-x-auto px-5 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-3 rounded-full text-white">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#2f6f45] font-heading text-sm font-bold text-[#f3dfaa]">
            D
          </span>
          <span className="font-heading text-sm font-bold tracking-tight sm:text-base">
            Dylan&apos;s Proposal
          </span>
        </a>
        <div className="flex shrink-0 items-center gap-2">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3 py-2 text-xs font-semibold text-[#cfe0cc] hover:bg-white/10 hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="#decision"
            className="rounded-full bg-[#f3dfaa] px-4 py-2 text-xs font-bold text-[#1d3b28] hover:bg-white"
          >
            Next Step
          </a>
        </div>
      </div>
    </nav>
  )
}

function DesktopMockup() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[#d6cfbd] bg-white shadow-2xl shadow-black/15">
      <div className="flex items-center gap-2 border-b border-[#e7dfcc] bg-[#f0eadc] px-5 py-4">
        <span className="size-3 rounded-full bg-[#e9a6a6]" />
        <span className="size-3 rounded-full bg-[#f1d783]" />
        <span className="size-3 rounded-full bg-[#9fca9f]" />
        <span className="ml-3 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-[#7b7565]">
          Desktop Homepage Concept
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ece6d7] px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#1f4b36] font-heading text-sm font-bold text-[#f3dfaa]">
            D
          </span>
          <div>
            <p className="font-heading text-sm font-bold text-[#172217]">Dylan&apos;s Landscaping</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#63725f]">
              Latonia & Kenton County
            </p>
          </div>
        </div>
        <div className="hidden gap-4 text-xs font-semibold text-[#576350] md:flex">
          <span>Services</span>
          <span>Gallery</span>
          <span>Why Us</span>
          <span>Areas</span>
          <span>Contact</span>
        </div>
        <span className="rounded-full bg-[#172217] px-4 py-2 text-xs font-bold text-white">
          Call Now
        </span>
      </div>

      <div className="grid min-h-[390px] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#193924] via-[#2f6f45] to-[#698147] p-8 sm:p-12">
          <div className="absolute left-[-4rem] top-[-4rem] size-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-[-5rem] right-[-3rem] size-72 rounded-full bg-[#f3dfaa]/15 blur-3xl" />
          <div className="relative max-w-lg">
            <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3dfaa]">
              Sample image area — final website will use actual project photos.
            </p>
            <h3 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              Professional Landscaping Services You Can Count On
            </h3>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#e3efdf]">
              Lawn care, mulching, cleanups, and outdoor improvements for homes and properties in your area.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-lg bg-[#f3dfaa] px-5 py-3 text-xs font-bold text-[#1d3b28]">
                Request a Free Estimate
              </span>
              <span className="rounded-lg border border-white/55 px-5 py-3 text-xs font-bold text-white">
                Call Now
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#fbf7ef] p-6 sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#3f7a4b]">
            What We Offer
          </p>
          <h4 className="mt-2 font-heading text-2xl font-bold text-[#172217]">Our Services</h4>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="rounded-2xl border border-[#e5ddca] bg-white p-4">
                <div className="mb-3 flex size-9 items-center justify-center rounded-xl bg-[#edf4e8]">
                  <Leaf className="size-4 text-[#2f6f45]" aria-hidden />
                </div>
                <p className="font-heading text-sm font-bold text-[#172217]">{service}</p>
                <p className="mt-1 text-xs leading-5 text-[#68705f]">
                  Clean, reliable outdoor service presented clearly for homeowners.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-0 border-t border-[#ece6d7] lg:grid-cols-3">
        {["Locally Owned", "Reliable Communication", "Free Estimates"].map((item, index) => (
          <div key={item} className="border-[#ece6d7] p-6 lg:border-r last:lg:border-r-0">
            <span className="text-xs font-bold text-[#3f7a4b]">0{index + 1}</span>
            <p className="mt-2 font-heading text-base font-bold text-[#172217]">{item}</p>
            <p className="mt-2 text-xs leading-5 text-[#68705f]">
              Trust-focused copy that helps new customers feel comfortable requesting a quote.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MobileMockup() {
  return (
    <div className="mx-auto w-[250px] rounded-[2.2rem] border-[10px] border-[#172217] bg-white shadow-2xl shadow-black/25">
      <div className="mx-auto mt-2 h-6 w-24 rounded-full bg-[#172217]" />
      <div className="overflow-hidden rounded-b-[1.45rem]">
        <div className="flex items-center justify-between border-b border-[#ece6d7] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-[#1f4b36] text-xs font-bold text-[#f3dfaa]">
              D
            </span>
            <span className="text-[11px] font-bold text-[#172217]">Dylan&apos;s Landscaping</span>
          </div>
          <span className="rounded-full bg-[#172217] px-3 py-1 text-[10px] font-bold text-white">
            Call
          </span>
        </div>
        <div className="bg-gradient-to-br from-[#193924] via-[#2f6f45] to-[#698147] px-5 py-10 text-white">
          <p className="rounded-xl border border-white/25 bg-white/15 px-2 py-1 text-[8px] font-semibold leading-4 text-[#f3dfaa]">
            Sample image area — final website will use your actual photos.
          </p>
          <h4 className="mt-5 font-heading text-xl font-bold leading-tight">
            Professional Landscaping Services You Can Count On
          </h4>
          <p className="mt-3 text-[11px] leading-5 text-[#e3efdf]">
            Lawn care, mulching, cleanups, and outdoor improvements.
          </p>
          <div className="mt-5 grid gap-2">
            <span className="rounded-lg bg-[#f3dfaa] px-4 py-2 text-center text-[11px] font-bold text-[#1d3b28]">
              Request Estimate
            </span>
            <span className="rounded-lg border border-white/55 px-4 py-2 text-center text-[11px] font-bold text-white">
              Call Now
            </span>
          </div>
        </div>
        <div className="bg-[#fbf7ef] px-5 py-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#3f7a4b]">
            What We Offer
          </p>
          <h4 className="mt-1 font-heading text-lg font-bold text-[#172217]">Our Services</h4>
          <div className="mt-4 space-y-2">
            {services.slice(0, 3).map((service) => (
              <div key={service} className="rounded-xl border border-[#e5ddca] bg-white p-3">
                <p className="text-xs font-bold text-[#172217]">{service}</p>
                <p className="mt-1 text-[10px] leading-4 text-[#68705f]">
                  Short service description for mobile visitors.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white px-5 py-6">
          <h4 className="font-heading text-lg font-bold text-[#172217]">Request a Free Estimate</h4>
          <div className="mt-4 space-y-2">
            {["Full Name", "Phone Number", "Service Needed"].map((field) => (
              <div key={field} className="rounded-lg border border-[#e5ddca] px-3 py-2 text-[10px] text-[#8a826f]">
                {field}
              </div>
            ))}
            <div className="rounded-lg bg-[#1f4b36] px-3 py-2 text-center text-[10px] font-bold text-white">
              Request My Free Estimate
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DecisionButton({ href, children, primary = false }: { href: string; children: ReactNode; primary?: boolean }) {
  return (
    <a
      href={href}
      className={
        primary
          ? "inline-flex items-center justify-center rounded-xl bg-[#f3dfaa] px-6 py-4 text-sm font-bold text-[#1d3b28] shadow-lg shadow-black/15 hover:bg-white"
          : "inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white hover:bg-white/15"
      }
    >
      {children}
    </a>
  )
}

export default function DylansLandscapingProposalPage() {
  const interestedHref = buildMailtoHref(
    "Dylan's Landscaping Website Proposal — Interested",
    [
      "Hi Bryan,",
      "",
      "I reviewed the Dylan's Landscaping website proposal and I am interested in moving forward.",
      "",
      "Let's talk through the next steps.",
      "",
      "Thanks,",
    ].join("\n")
  )

  const questionsHref = buildMailtoHref(
    "Dylan's Landscaping Website Proposal — Questions",
    [
      "Hi Bryan,",
      "",
      "I reviewed the Dylan's Landscaping website proposal and have a few questions.",
      "",
      "Questions:",
      "- ",
      "",
      "Thanks,",
    ].join("\n")
  )

  const notNowHref = buildMailtoHref(
    "Dylan's Landscaping Website Proposal — Not Right Now",
    [
      "Hi Bryan,",
      "",
      "I reviewed the Dylan's Landscaping website proposal and am not ready to move forward right now.",
      "",
      "Thanks,",
    ].join("\n")
  )

  return (
    <main id="top" className="min-h-screen bg-[#f4f0e6] text-[#172217]">
      <ProposalNav />

      <section className="relative overflow-hidden bg-[#172217] px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute left-[-8rem] top-[-8rem] size-96 rounded-full bg-[#2f6f45]/40 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-8rem] size-96 rounded-full bg-[#f3dfaa]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#f3dfaa]">
              <Sparkles className="size-4" aria-hidden />
              Proposal for Review
            </div>
            <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Website Proposal for Dylan&apos;s Landscaping
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#dfeadc]">
              A professional, mobile-friendly website designed to help customers understand your services, view your work, and request estimates.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#package"
                className="inline-flex items-center justify-center rounded-xl bg-[#f3dfaa] px-6 py-4 text-sm font-bold text-[#1d3b28] hover:bg-white"
              >
                View Website Package
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </a>
              <a
                href="#mockup"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-bold text-white hover:bg-white/15"
              >
                View Mockup Concept
                <MonitorSmartphone className="ml-2 size-4" aria-hidden />
              </a>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-[#b9ccb5]">
              This is a private proposal preview. Final website content, photos, services, and business details would be customized after project approval.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="rounded-[1.5rem] bg-[#fbf7ef] p-6 text-[#172217]">
              <div className="flex items-start justify-between gap-4 border-b border-[#e3dcc9] pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3f7a4b]">Recommended Package</p>
                  <h2 className="mt-2 font-heading text-2xl font-bold">Professional Landscaping Website</h2>
                </div>
                <div className="text-right">
                  <p className="font-heading text-4xl font-bold text-[#1f4b36]">$1,500</p>
                  <p className="text-xs font-semibold text-[#6d7568]">one-time project cost</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                {summaryCards.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 rounded-2xl border border-[#e3dcc9] bg-white p-4">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-[#edf4e8]">
                      <Icon className="size-5 text-[#2f6f45]" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold text-[#314031]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell id="package" className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Eyebrow>The Offer</Eyebrow>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#172217] sm:text-4xl">
              Professional Landscaping Website — $1,500
            </h2>
            <p className="mt-5 text-base leading-7 text-[#556052]">
              The goal is to create a clean online home for the business that makes it easy for customers to see services, trust the work, and request a quote.
            </p>
          </div>
          <div className="rounded-[2rem] bg-[#1f4b36] p-6 shadow-2xl shadow-[#1f4b36]/20 sm:p-8">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-white/15 pb-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-white">Included in the package</h3>
                <p className="mt-2 text-sm text-[#b9ccb5]">A practical launch package for a local service business.</p>
              </div>
              <span className="rounded-full bg-[#f3dfaa] px-4 py-2 text-sm font-bold text-[#1d3b28]">$1,500</span>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {packageItems.map((item) => (
                <CheckItem key={item} light>
                  {item}
                </CheckItem>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="seo" className="bg-[#f4f0e6]">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Included in the Package</Eyebrow>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#172217] sm:text-4xl">
            Basic SEO Setup Included
          </h2>
          <p className="mt-5 text-base leading-7 text-[#556052]">
            Basic SEO is included so the site launches with a clean foundation. It helps Google understand the business, services, and service area without promising first-page rankings.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {seoItems.map((item) => (
            <div key={item} className="rounded-2xl border border-[#ddd5c4] bg-white p-5">
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-[#edf4e8]">
                <Search className="size-5 text-[#2f6f45]" aria-hidden />
              </div>
              <p className="text-sm font-bold text-[#314031]">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-dashed border-[#b7a77d] bg-[#fbf7ef] p-5 text-sm leading-6 text-[#5d675b]">
          Basic SEO setup creates a strong foundation. Ongoing SEO work such as monthly ranking improvement, blog content, competitor research, and local listing management would be handled separately if needed.
        </div>
      </SectionShell>

      <SectionShell id="mockup" className="bg-white">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <Eyebrow>Visual Reference</Eyebrow>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#172217] sm:text-4xl">
              Sample Website Concept
            </h2>
          </div>
          <p className="text-base leading-7 text-[#556052]">
            This is the proposed design direction, not final content. Sample image areas would be replaced with Dylan&apos;s actual project photos, and review placeholders would only become real testimonials if Dylan provides real reviews.
          </p>
        </div>

        <div className="grid gap-10 xl:grid-cols-[1fr_300px] xl:items-start">
          <DesktopMockup />
          <div>
            <MobileMockup />
            <div className="mt-6 rounded-2xl border border-[#ddd5c4] bg-[#fbf7ef] p-5 text-sm leading-6 text-[#5d675b]">
              <p className="font-bold text-[#172217]">Mobile-first priority</p>
              <p className="mt-2">
                Most local service searches happen on phones, so the layout emphasizes fast contact actions, readable service cards, and a simple quote flow.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {["Front Yard Renovation", "Mulch Bed Refresh", "Seasonal Cleanup"].map((project) => (
            <div key={project} className="rounded-3xl border border-[#ddd5c4] bg-[#fbf7ef] p-5">
              <div className="grid h-40 grid-cols-2 overflow-hidden rounded-2xl border border-[#e5ddca]">
                <div className="flex items-end bg-[#c9bda7] p-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                  Before
                </div>
                <div className="flex items-end bg-[#6f8b52] p-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                  After
                </div>
              </div>
              <p className="mt-4 font-heading text-base font-bold text-[#172217]">{project}</p>
              <p className="mt-2 text-xs leading-5 text-[#68705f]">
                Sample image area — final website will use actual project photos.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-[#ddd5c4] bg-[#f4f0e6] p-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3f7a4b]">Review Placeholders</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-2xl border border-[#ddd5c4] bg-white p-5">
                <p className="text-sm leading-6 text-[#556052]">
                  “Customer review will go here once available.”
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#8a826f]">
                  Review Placeholder
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="addons" className="bg-[#f4f0e6]">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Optional Add-ons</Eyebrow>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#172217] sm:text-4xl">
            Add More Only If It Helps the Business
          </h2>
          <p className="mt-5 text-base leading-7 text-[#556052]">
            The core package is enough to launch. These options are available if Dylan wants ongoing updates, more service pages, or a stronger local SEO push.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {addOns.map((addOn) => (
            <article key={addOn.title} className="rounded-[2rem] border border-[#ddd5c4] bg-white p-6 shadow-xl shadow-black/5">
              <p className="font-heading text-xl font-bold text-[#172217]">{addOn.title}</p>
              <p className="mt-2 font-heading text-2xl font-bold text-[#2f6f45]">{addOn.price}</p>
              <p className="mt-4 text-sm leading-6 text-[#556052]">{addOn.description}</p>
              <ul className="mt-6 space-y-3">
                {addOn.items.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="payment" className="bg-white">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-[2rem] bg-[#172217] p-8 text-white">
            <Eyebrow light>Payment Structure</Eyebrow>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Simple, Split Payment</h2>
            <div className="mt-8 grid gap-4">
              {[
                ["Project total", "$1,500"],
                ["Deposit to start", "$750"],
                ["Final payment before launch", "$750"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 p-5">
                  <span className="text-sm text-[#dfeadc]">{label}</span>
                  <span className="font-heading text-xl font-bold text-[#f3dfaa]">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-[#b9ccb5]">
              Monthly website care is optional and would begin after the website is launched.
            </p>
          </div>

          <div id="timeline" className="rounded-[2rem] border border-[#ddd5c4] bg-[#fbf7ef] p-8">
            <Eyebrow>Estimated Timeline</Eyebrow>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#172217] sm:text-4xl">
              Estimated 2–3 Weeks
            </h2>
            <p className="mt-5 text-sm leading-6 text-[#556052]">
              Timeline depends on how quickly photos, service details, and business information are provided.
            </p>
            <ol className="mt-8 space-y-4">
              {timelineSteps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-2xl border border-[#ddd5c4] bg-white p-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#2f6f45] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm font-semibold text-[#314031]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#f4f0e6]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Eyebrow>What I Need From You</Eyebrow>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#172217] sm:text-4xl">
              The Build Starts With the Right Details
            </h2>
            <p className="mt-5 text-base leading-7 text-[#556052]">
              Once approved, these details help turn the concept into a real business website with Dylan&apos;s actual information and project photos.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {neededItems.map((item) => (
              <div key={item} className="rounded-2xl border border-[#ddd5c4] bg-white p-4 text-sm font-semibold text-[#314031]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <section id="decision" className="relative overflow-hidden bg-[#172217] px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute left-[-8rem] top-[-8rem] size-96 rounded-full bg-[#2f6f45]/35 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-8rem] size-96 rounded-full bg-[#f3dfaa]/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-white/10">
            <ShieldCheck className="size-7 text-[#f3dfaa]" aria-hidden />
          </div>
          <Eyebrow light>Next Step</Eyebrow>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Decide?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#dfeadc]">
            If this package looks like a good fit, the next step would be to confirm the package, collect the deposit, and gather the business details needed to start the website.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <DecisionButton href={interestedHref} primary>
              I&apos;m Interested — Let&apos;s Move Forward
            </DecisionButton>
            <DecisionButton href={questionsHref}>I Have Questions</DecisionButton>
            <DecisionButton href={notNowHref}>Not Right Now</DecisionButton>
          </div>
          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm text-[#dfeadc] sm:flex-row">
            <Mail className="size-5 text-[#f3dfaa]" aria-hidden />
            <span>Prefer to reply directly? Email Bryan at </span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-[#f3dfaa] hover:text-white">
              {CONTACT_EMAIL}
            </a>
          </div>
          <p className="mt-6 text-xs leading-5 text-[#91aa8d]">
            Temporary private proposal page for review only. This page is not linked from the main website navigation and is marked noindex for search engines.
          </p>
        </div>
      </section>
    </main>
  )
}
