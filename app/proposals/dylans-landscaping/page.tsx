import type { Metadata } from "next"
import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MonitorSmartphone,
  Search,
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
  {
    title: "Lawn Care",
    description:
      "Regular mowing, edging, and seasonal fertilization to keep your lawn healthy and green.",
    color: "bg-[#2f7745]",
  },
  {
    title: "Mulching",
    description:
      "Fresh mulch installation that locks in moisture and gives garden beds a clean, finished look.",
    color: "bg-[#765239]",
  },
  {
    title: "Yard Cleanups",
    description: "Spring and fall cleanups — leaf removal, debris hauling, and bed tidying.",
    color: "bg-[#cfad75]",
  },
  {
    title: "Tree & Brush Trimming",
    description: "Pruning and trimming to keep trees, shrubs, and brush healthy and under control.",
    color: "bg-[#1f4b36]",
  },
  {
    title: "Seasonal Maintenance",
    description: "Ongoing care plans tailored to each season so your property always looks its best.",
    color: "bg-[#4d813e]",
  },
  {
    title: "Hardscaping",
    description: "Patios, walkways, and retaining walls built to add lasting value to your outdoor space.",
    color: "bg-[#936f4d]",
  },
]

const trustItems = [
  {
    title: "Locally Owned",
    description: "Proudly serving Latonia, Covington, and Kenton County families and businesses.",
  },
  {
    title: "Reliable Scheduling",
    description: "Clear scheduling and dependable communication from start to finish.",
  },
  {
    title: "Quality Work",
    description: "Attention to detail on every job, big or small.",
  },
  {
    title: "Free Estimates",
    description: "No-obligation quotes so customers know the cost upfront.",
  },
]

const projects = [
  { title: "Front Yard Renovation", area: "Latonia, KY", after: "bg-[#347743]" },
  { title: "Mulch Bed Refresh", area: "Covington, KY", after: "bg-[#805a3d]" },
  { title: "Backyard Patio Install", area: "Kenton County, KY", after: "bg-[#c6a66f]" },
  { title: "Seasonal Cleanup", area: "Latonia, KY", after: "bg-[#246b43]" },
]

const serviceAreas = ["Latonia", "Covington", "Kenton County", "Edgewood", "Fort Wright", "Erlanger"]

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
      "Useful for dedicated pages around high-value services or seasonal offers.",
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
      className={`mb-3 text-xs font-black uppercase tracking-[0.24em] ${
        light ? "text-[#f3dfaa]" : "text-[#2f7745]"
      }`}
    >
      {children}
    </p>
  )
}

function CheckItem({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <li className={`flex gap-3 text-sm leading-6 ${light ? "text-[#dfeadc]" : "text-[#314031]"}`}>
      <CheckCircle2 className={`mt-1 size-4 shrink-0 ${light ? "text-[#f3dfaa]" : "text-[#2f6f45]"}`} aria-hidden />
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

function BrowserChrome({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-[#d7d0bf] bg-white shadow-2xl shadow-black/20">
      <div className="flex items-center gap-2 border-b border-[#e7dfcc] bg-[#f0eadc] px-5 py-4">
        <span className="size-3 rounded-full bg-[#e9a6a6]" />
        <span className="size-3 rounded-full bg-[#f1d783]" />
        <span className="size-3 rounded-full bg-[#9fca9f]" />
        <span className="ml-3 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold text-[#7b7565]">
          Desktop Homepage Concept
        </span>
      </div>
      {children}
    </div>
  )
}

function DesktopConcept() {
  return (
    <BrowserChrome>
      <div className="bg-white text-[#24251f]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#ece6d7] px-7 py-5 sm:px-10">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-[#1f4b36] font-heading text-lg font-bold text-[#f3dfaa]">
              D
            </span>
            <div>
              <p className="font-heading text-lg font-bold leading-none text-[#24251f]">Dylan&apos;s Landscaping</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#6f745f]">
                Latonia & Kenton County
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm font-bold text-[#33342d] lg:flex">
            <span>Services</span>
            <span>Gallery</span>
            <span>Why Us</span>
            <span>Areas</span>
            <span>Contact</span>
          </div>
          <span className="rounded-lg bg-[#24251f] px-5 py-3 text-sm font-bold text-white">
            ☎ Call Now
          </span>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-[#163322] via-[#2e673f] to-[#607a45] px-7 py-20 text-white sm:px-10 lg:px-14 lg:py-28">
          <div className="absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(112deg,rgba(255,255,255,.22)_0_1px,transparent_1px_29px)]" />
          <div className="relative max-w-2xl">
            <p className="mb-12 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-[#f4edcf]">
              Sample image area — final website will use your actual project photos.
            </p>
            <h3 className="font-heading text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Professional Landscaping Services You Can Count On
            </h3>
            <p className="mt-7 max-w-xl text-base font-medium leading-8 text-[#f3f5eb] sm:text-lg">
              Lawn care, mulching, cleanups, and outdoor improvements for homes and properties in your area.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <span className="rounded-lg bg-[#f3dfaa] px-6 py-4 text-sm font-black text-[#1d4a33]">
                Request a Free Estimate
              </span>
              <span className="rounded-lg border-2 border-white/55 px-6 py-4 text-sm font-black text-white">
                Call Now
              </span>
            </div>
          </div>
        </div>

        <div className="px-7 py-16 sm:px-10 lg:px-14 lg:py-20">
          <div className="text-center">
            <Eyebrow>What We Offer</Eyebrow>
            <h3 className="font-heading text-4xl font-black tracking-tight text-[#24251f]">Our Services</h3>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#68685d]">
              Full-service lawn and landscape care for homes and properties throughout the area.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-[#e2dccb] bg-[#fbfaf6] p-7 shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className={`mb-7 size-12 rounded-xl ${service.color}`} />
                <h4 className="font-heading text-xl font-black text-[#24251f]">{service.title}</h4>
                <p className="mt-4 text-[15px] leading-7 text-[#68685d]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#f2f0e7] px-7 py-16 text-center sm:px-10 lg:px-14">
          <Eyebrow>Why Choose Us</Eyebrow>
          <h3 className="font-heading text-4xl font-black tracking-tight text-[#24251f]">A Crew You Can Trust</h3>
          <div className="mt-12 grid gap-8 lg:grid-cols-4">
            {trustItems.map((item, index) => (
              <div key={item.title}>
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#1f4b36] font-heading text-xl font-black text-[#f4edcf]">
                  {index + 1}
                </span>
                <h4 className="mt-6 font-heading text-lg font-black text-[#24251f]">{item.title}</h4>
                <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-6 text-[#68685d]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-7 py-16 sm:px-10 lg:px-14 lg:py-20">
          <div className="text-center">
            <Eyebrow>Our Work</Eyebrow>
            <h3 className="font-heading text-4xl font-black tracking-tight text-[#24251f]">Recent Projects</h3>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#68685d]">
              A few before-and-after transformations from around the area.
            </p>
            <p className="mt-2 text-sm italic text-[#777568]">
              Sample image area — final website will use your actual project photos.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <div key={project.title} className="overflow-hidden rounded-xl border border-[#e2dccb] bg-[#fbfaf6] shadow-sm">
                <div className="grid h-40 grid-cols-2">
                  <div className="relative bg-[#89836a]">
                    <span className="absolute bottom-3 left-3 rounded bg-[#39362a]/85 px-2 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                      Before
                    </span>
                  </div>
                  <div className={`relative ${project.after}`}>
                    <span className="absolute bottom-3 left-3 rounded bg-[#39362a]/85 px-2 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-heading text-base font-black text-[#24251f]">{project.title}</h4>
                  <p className="mt-1 text-sm text-[#777568]">{project.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#f2f0e7] px-7 py-16 sm:px-10 lg:px-14">
          <div className="text-center">
            <Eyebrow>Testimonials</Eyebrow>
            <h3 className="font-heading text-4xl font-black tracking-tight text-[#24251f]">
              What Neighbors Are Saying
            </h3>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-xl border border-dashed border-[#cfc5aa] bg-[#fbfaf6] p-7">
                <div className="mb-3 flex justify-end">
                  <span className="rounded-full bg-[#e1ddcf] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#908b7a]">
                    Placeholder
                  </span>
                </div>
                <p className="italic leading-7 text-[#777568]">
                  “Customer review will go here once available.”
                </p>
                <p className="mt-5 text-sm font-black text-[#6b6a60]">Review Placeholder</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1f4b36] px-7 py-16 text-white sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <Eyebrow light>Service Areas</Eyebrow>
              <h3 className="max-w-md font-heading text-4xl font-black tracking-tight text-white">
                Proudly Serving Your Neighborhood
              </h3>
              <p className="mt-6 max-w-md text-base leading-7 text-[#dfeadc]">
                Not sure if you&apos;re in our service area? Give us a call — we&apos;re happy to check.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-10 px-7 py-16 sm:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-14 lg:py-20">
          <div>
            <Eyebrow>Get in Touch</Eyebrow>
            <h3 className="font-heading text-4xl font-black tracking-tight text-[#24251f]">Request a Free Estimate</h3>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#68685d]">
              Tell us about your property and what you need — we&apos;ll follow up to discuss your estimate.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <FormField>Full Name</FormField>
              <FormField>Phone Number</FormField>
              <div className="sm:col-span-2">
                <FormField>Email Address</FormField>
              </div>
              <div className="sm:col-span-2">
                <FormField>Service Needed</FormField>
              </div>
              <div className="h-24 rounded-lg border border-[#d8cfba] bg-[#fbfaf6] px-4 py-4 text-sm text-[#7b7565] sm:col-span-2">
                Tell us about your project...
              </div>
              <div className="rounded-lg bg-[#2f7647] px-6 py-4 text-center text-sm font-black text-white sm:col-span-2">
                Request My Free Estimate
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-[#f2f0e7] p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a887c]">Call Us</p>
            <p className="mt-2 font-heading text-2xl font-black text-[#1f4b36]">(555) 123-4567</p>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-[#8a887c]">Email Us</p>
            <p className="mt-2 text-base font-medium text-[#33342d]">info@dylanslandscaping.com</p>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-[#8a887c]">Hours</p>
            <p className="mt-2 text-base leading-7 text-[#33342d]">Mon – Sat: 7:00 AM – 6:00 PM<br />Sunday: Closed</p>
            <div className="mt-8 border-t border-[#d6cfbd] pt-7 text-sm leading-6 text-[#777568]">
              Serving Latonia, Covington, Kenton County, and surrounding areas.
            </div>
          </div>
        </div>

        <div className="bg-[#24251f] px-7 py-12 text-white sm:px-10 lg:px-14">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-[#2f7745] font-heading text-sm font-bold text-[#f3dfaa]">
                  D
                </span>
                <p className="font-heading text-lg font-black">Dylan&apos;s Landscaping</p>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-6 text-[#c9c9bd]">
                Reliable, high-quality landscaping services for homes and properties throughout Kenton County.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-base font-black">Contact</h4>
              <p className="mt-4 text-sm leading-7 text-[#c9c9bd]">(555) 123-4567<br />info@dylanslandscaping.com<br />Latonia, Covington & Kenton County</p>
            </div>
            <div>
              <h4 className="font-heading text-base font-black">Quick Links</h4>
              <p className="mt-4 text-sm leading-7 text-[#c9c9bd]">Services<br />Gallery<br />Get a Quote</p>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-[#9f9f94]">
            © 2026 Dylan&apos;s Landscaping. All rights reserved. — Concept mockup for client proposal.
          </div>
        </div>
      </div>
    </BrowserChrome>
  )
}

function FormField({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-[#d8cfba] bg-[#fbfaf6] px-4 py-4 text-sm text-[#7b7565]">{children}</div>
}

function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-[350px] max-w-full rounded-[2.5rem] border-[10px] border-[#172217] bg-white shadow-2xl shadow-black/25">
      <div className="relative h-[760px] overflow-hidden rounded-[1.85rem] bg-white">
        <div className="absolute left-1/2 top-2 z-10 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative h-full overflow-hidden rounded-[1.85rem] bg-white">{children}</div>
      </div>
    </div>
  )
}

function MobileConcept() {
  return (
    <PhoneShell>
      <div className="flex items-center justify-between border-b border-[#ece6d7] bg-white px-5 py-12 pb-4 text-[#24251f]">
        <div className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-lg bg-[#1f4b36] text-sm font-black text-[#f3dfaa]">D</span>
          <span className="font-heading text-sm font-black">Dylan&apos;s Landscaping</span>
        </div>
        <span className="rounded-lg bg-[#24251f] px-3 py-2 text-xs font-black text-white">☎ Call</span>
      </div>
      <div className="relative overflow-hidden bg-gradient-to-br from-[#163322] via-[#2e673f] to-[#607a45] px-5 py-9 text-white">
        <div className="absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(112deg,rgba(255,255,255,.22)_0_1px,transparent_1px_29px)]" />
        <div className="relative">
          <p className="rounded-full border border-white/30 bg-white/15 px-3 py-2 text-[10px] font-black leading-4 text-[#f4edcf]">
            Sample image area — final website will use your actual project photos.
          </p>
          <h4 className="mt-5 font-heading text-3xl font-black leading-tight text-white">
            Professional Landscaping Services You Can Count On
          </h4>
          <p className="mt-4 text-sm leading-6 text-[#f3f5eb]">
            Lawn care, mulching, cleanups, and outdoor improvements for your property.
          </p>
          <div className="mt-6 grid gap-3">
            <span className="rounded-lg bg-[#f3dfaa] px-4 py-3 text-center text-sm font-black text-[#1d4a33]">
              Request a Free Estimate
            </span>
            <span className="rounded-lg border-2 border-white/55 px-4 py-3 text-center text-sm font-black text-white">
              Call Now
            </span>
          </div>
        </div>
      </div>
      <div className="rounded-t-[1.85rem] bg-white px-5 py-9 text-center">
        <Eyebrow>What We Offer</Eyebrow>
        <h4 className="font-heading text-2xl font-black text-[#24251f]">Our Services</h4>
        <div className="mt-7 space-y-4 text-left">
          {services.slice(0, 2).map((service) => (
            <div key={service.title} className="rounded-2xl border border-[#e2dccb] bg-[#fbfaf6] p-5">
              <div className={`mb-5 size-10 rounded-xl ${service.color}`} />
              <h5 className="font-heading text-lg font-black text-[#24251f]">{service.title}</h5>
              <p className="mt-3 text-sm leading-6 text-[#68685d]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PhoneShell>
  )
}

function SectionPreview() {
  return (
    <div className="rounded-[1.5rem] border border-[#d7d0bf] bg-white p-7 shadow-2xl shadow-black/10 sm:p-9">
      <Eyebrow>Optional — Section Preview</Eyebrow>
      <h3 className="font-heading text-3xl font-black text-[#24251f]">Services + Quote Preview</h3>
      <div className="mt-8 space-y-4">
        {services.slice(0, 3).map((service) => (
          <div key={service.title} className="flex gap-5 rounded-2xl border border-[#e2dccb] bg-[#fbfaf6] p-5">
            <div className={`size-11 shrink-0 rounded-xl ${service.color}`} />
            <div>
              <h4 className="font-heading text-base font-black text-[#24251f]">{service.title}</h4>
              <p className="mt-1 text-sm leading-6 text-[#68685d]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-9 border-t border-[#ece6d7] pt-8">
        <Eyebrow>Get in Touch</Eyebrow>
        <h4 className="font-heading text-2xl font-black text-[#24251f]">Request a Free Estimate</h4>
        <p className="mt-3 text-sm leading-6 text-[#68685d]">
          Tell us about your property and what you need — we&apos;ll follow up to discuss your estimate.
        </p>
        <div className="mt-5 grid gap-3">
          <FormField>Full Name</FormField>
          <FormField>Phone Number</FormField>
          <FormField>Service Needed</FormField>
          <div className="rounded-lg bg-[#2f7647] px-6 py-4 text-center text-sm font-black text-white">
            Request My Free Estimate
          </div>
        </div>
      </div>
    </div>
  )
}

function PaymentCard({ label, amount }: { label: string; amount: string }) {
  return (
    <div className="min-h-40 rounded-2xl border border-white/20 bg-white/12 p-7 shadow-lg shadow-black/10">
      <p className="whitespace-nowrap text-[11px] font-black uppercase tracking-[0.2em] text-[#d3e0cf] sm:text-xs">
        {label}
      </p>
      <p className="mt-6 font-heading text-4xl font-black text-[#f3dfaa]">{amount}</p>
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
                <CheckItem key={item} light>{item}</CheckItem>
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
            Basic SEO setup is included in the $1,500 package so the site is built correctly from day one. It creates a strong foundation, but ongoing ranking work would be handled separately if needed.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {seoItems.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#ddd5c3] bg-white p-5 shadow-sm">
              <CheckCircle2 className="size-5 shrink-0 text-[#2f6f45]" aria-hidden />
              <span className="text-sm font-semibold text-[#314031]">{item}</span>
            </div>
          ))}
        </div>
      </SectionShell>

      <section id="mockup" className="bg-[#e9e5d9] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Visual Reference</Eyebrow>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#172217] sm:text-4xl">
              Full Website Concept Preview
            </h2>
            <p className="mt-5 text-base leading-7 text-[#556052]">
              This shows the proposed direction and structure. Final photos, reviews, service details, and contact information would be customized after project approval.
            </p>
          </div>

          <div className="mt-12">
            <div className="mb-5 inline-flex rounded-full border border-[#d7d0bf] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#24251f]">
              Desktop — 1440px
            </div>
            <DesktopConcept />
          </div>

          <div className="mt-16 grid items-start gap-10 lg:grid-cols-[minmax(300px,390px)_minmax(460px,1fr)] lg:justify-center">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-[#d7d0bf] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#24251f]">
                Mobile — 390px
              </div>
              <MobileConcept />
            </div>
            <div>
              <div className="mb-5 inline-flex rounded-full border border-[#d7d0bf] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#24251f]">
                Optional — Section Preview
              </div>
              <SectionPreview />
            </div>
          </div>
        </div>
      </section>

      <SectionShell id="addons" className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Optional Add-ons</Eyebrow>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#172217] sm:text-4xl">
            Flexible Extras If Needed
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {addOns.map((addon) => (
            <div key={addon.title} className="rounded-[1.5rem] border border-[#ddd5c3] bg-[#fbf7ef] p-7 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-[#172217]">{addon.title}</h3>
              <p className="mt-2 font-heading text-2xl font-bold text-[#1f4b36]">{addon.price}</p>
              <p className="mt-4 text-sm leading-6 text-[#556052]">{addon.description}</p>
              <ul className="mt-6 space-y-3">
                {addon.items.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionShell>

      <section id="payment" className="bg-[#132417] px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_minmax(680px,1fr)] lg:items-center">
          <div>
            <Eyebrow light>Payment Structure</Eyebrow>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Simple 50/50 Payment Plan</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#dfeadc]">
              A deposit starts the project. The final payment is due before launch after review and approved revisions.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <PaymentCard label="Project Total" amount="$1,500" />
            <PaymentCard label="Deposit to Start" amount="$750" />
            <PaymentCard label="Before Launch" amount="$750" />
          </div>
        </div>
      </section>

      <SectionShell id="timeline" className="bg-[#f4f0e6]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Eyebrow>Estimated Timeline</Eyebrow>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#172217] sm:text-4xl">2–3 Weeks to Launch</h2>
            <p className="mt-5 text-base leading-7 text-[#556052]">
              Timeline depends on how quickly photos, service details, and business information are provided.
            </p>
          </div>
          <div className="space-y-4">
            {timelineSteps.map((step, index) => (
              <div key={step} className="flex gap-5 rounded-2xl border border-[#ddd5c3] bg-white p-6 shadow-sm">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#1f4b36] font-heading text-sm font-bold text-[#f3dfaa]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#172217]">{step}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#556052]">A clear step so the project stays organized and easy to approve.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Eyebrow>What I Need From You</Eyebrow>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#172217] sm:text-4xl">Simple Info to Get Started</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {neededItems.map((item) => (
              <div key={item} className="rounded-2xl border border-[#ddd5c3] bg-[#fbf7ef] p-5 text-sm font-semibold text-[#314031]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <section id="decision" className="bg-[#172217] px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow light>Next Step</Eyebrow>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-5xl">Ready to Make a Decision?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#dfeadc]">
            If this package looks like a good fit, the next step would be to confirm the package, collect the deposit, and gather the business details needed to start the website.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <DecisionButton href={interestedHref} primary>
              I&apos;m Interested — Let&apos;s Move Forward
              <ArrowRight className="ml-2 size-4" aria-hidden />
            </DecisionButton>
            <DecisionButton href={questionsHref}>I Have Questions</DecisionButton>
            <DecisionButton href={notNowHref}>Not Right Now</DecisionButton>
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-[#b9ccb5]">
            <Mail className="size-4" aria-hidden />
            Prepared by Bryan • {CONTACT_EMAIL}
          </p>
        </div>
      </section>
    </main>
  )
}
