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
  {
    title: "Lawn Care",
    description:
      "Regular mowing, edging, and seasonal fertilization to keep your lawn healthy and green.",
    color: "bg-[#2f7647]",
  },
  {
    title: "Mulching",
    description:
      "Fresh mulch installation that locks in moisture and gives garden beds a clean, finished look.",
    color: "bg-[#76513a]",
  },
  {
    title: "Yard Cleanups",
    description:
      "Spring and fall cleanups — leaf removal, debris hauling, and bed tidying.",
    color: "bg-[#cbaa70]",
  },
  {
    title: "Tree & Brush Trimming",
    description:
      "Pruning and trimming to keep trees, shrubs, and brush healthy and under control.",
    color: "bg-[#1f5138]",
  },
  {
    title: "Seasonal Maintenance",
    description:
      "Ongoing care plans tailored to each season so your property always looks its best.",
    color: "bg-[#4f8442]",
  },
  {
    title: "Hardscaping",
    description:
      "Patios, walkways, and retaining walls built to add lasting value to your outdoor space.",
    color: "bg-[#92704d]",
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
    description: "No-obligation quotes so you know the cost upfront.",
  },
]

const projects = [
  { title: "Front Yard Renovation", area: "Latonia, KY", after: "bg-[#33723f]" },
  { title: "Mulch Bed Refresh", area: "Covington, KY", after: "bg-[#836044]" },
  { title: "Backyard Patio Install", area: "Kenton County, KY", after: "bg-[#c0a06d]" },
  { title: "Seasonal Cleanup", area: "Latonia, KY", after: "bg-[#24633d]" },
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
        light ? "text-[#f3dfaa]" : "text-[#2f7647]"
      }`}
    >
      {children}
    </p>
  )
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-[#dfeadc]">
      <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#f3dfaa]" aria-hidden />
      <span>{children}</span>
    </li>
  )
}

function LightCheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-[#314031]">
      <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#2f6f45]" aria-hidden />
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
    <div className="overflow-hidden rounded-[1.75rem] border border-[#d7d1c1] bg-white shadow-2xl shadow-[#2d2617]/20">
      <div className="flex items-center gap-2 border-b border-[#e7dfcc] bg-[#efe9db] px-5 py-4">
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
                <span className="flex size-9 items-center justify-center rounded-lg bg-[#2f7647] font-heading font-black text-[#f3dfaa]">D</span>
                <span className="font-heading text-lg font-black">Dylan&apos;s Landscaping</span>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#d9d6ca]">
                Reliable, high-quality landscaping services for homes and properties throughout Kenton County.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-black">Contact</h4>
              <p className="mt-4 text-sm leading-7 text-[#d9d6ca]">(555) 123-4567<br />info@dylanslandscaping.com<br />Latonia, Covington & Kenton County</p>
            </div>
            <div>
              <h4 className="font-heading font-black">Quick Links</h4>
              <p className="mt-4 text-sm leading-7 text-[#d9d6ca]">Services<br />Gallery<br />Get a Quote</p>
            </div>
          </div>
          <p className="mt-10 border-t border-white/10 pt-7 text-center text-xs text-[#9c998d]">
            © 2026 Dylan&apos;s Landscaping. All rights reserved. — Concept mockup for client proposal.
          </p>
        </div>
      </div>
    </BrowserChrome>
  )
}

function FormField({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-[#d8cfba] bg-[#fbfaf6] px-4 py-4 text-sm text-[#7b7565]">
      {children}
    </div>
  )
}

function MobileConcept() {
  return (
    <div className="mx-auto w-[285px] rounded-[2.5rem] border-[10px] border-[#f5f1e8] bg-white shadow-2xl shadow-[#2d2617]/25 ring-1 ring-[#cfc8b9] sm:w-[330px]">
      <div className="rounded-[1.85rem] bg-white">
        <div className="relative flex h-12 items-center justify-between px-6 pt-2">
          <span className="text-sm font-black text-black">9:41</span>
          <span className="absolute left-1/2 top-3 h-8 w-28 -translate-x-1/2 rounded-full bg-black" />
          <span className="text-xs font-black text-black">▮▮▮</span>
        </div>
        <div className="flex items-center justify-between border-b border-[#ece6d7] px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-[#1f4b36] text-sm font-black text-[#f3dfaa]">
              D
            </span>
            <span className="text-sm font-black text-[#24251f]">Dylan&apos;s Landscaping</span>
          </div>
          <span className="rounded-lg bg-[#24251f] px-3 py-2 text-xs font-black text-white">☎ Call</span>
        </div>
        <div className="bg-gradient-to-br from-[#163322] via-[#2f6f45] to-[#607a45] px-5 py-10 text-white">
          <p className="rounded-xl border border-white/25 bg-white/15 px-3 py-2 text-[10px] font-bold leading-4 text-[#f4edcf]">
            Sample image area — final website will use your actual project photos.
          </p>
          <h4 className="mt-5 font-heading text-[1.72rem] font-black leading-[1.08] tracking-tight">
            Professional Landscaping Services You Can Count On
          </h4>
          <p className="mt-5 text-sm leading-6 text-[#f3f5eb]">
            Lawn care, mulching, cleanups, and outdoor improvements for your property.
          </p>
          <div className="mt-7 grid gap-3">
            <span className="rounded-lg bg-[#f3dfaa] px-4 py-4 text-center text-sm font-black text-[#1d4a33]">
              Request a Free Estimate
            </span>
            <span className="rounded-lg border-2 border-white/55 px-4 py-4 text-center text-sm font-black text-white">
              Call Now
            </span>
          </div>
        </div>
        <div className="bg-white px-5 py-10 text-center">
          <Eyebrow>What We Offer</Eyebrow>
          <h4 className="font-heading text-2xl font-black text-[#24251f]">Our Services</h4>
          <div className="mt-8 space-y-4 text-left">
            {services.slice(0, 2).map((service) => (
              <div key={service.title} className="rounded-2xl border border-[#e2dccb] bg-[#fbfaf6] p-5">
                <div className={`mb-4 size-10 rounded-xl ${service.color}`} />
                <p className="font-heading text-base font-black text-[#24251f]">{service.title}</p>
                <p className="mt-3 text-sm leading-6 text-[#68685d]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionPreviewCard() {
  return (
    <div className="rounded-[1.75rem] border border-[#d7d1c1] bg-white p-7 shadow-2xl shadow-[#2d2617]/15 sm:p-9">
      <Eyebrow>What We Offer</Eyebrow>
      <h3 className="font-heading text-3xl font-black text-[#24251f]">Our Services</h3>
      <div className="mt-7 space-y-4">
        {services.slice(0, 3).map((service) => (
          <div key={service.title} className="flex gap-5 rounded-2xl border border-[#e2dccb] bg-[#fbfaf6] p-5">
            <div className={`size-12 shrink-0 rounded-xl ${service.color}`} />
            <div>
              <h4 className="font-heading text-base font-black text-[#24251f]">{service.title}</h4>
              <p className="mt-2 text-sm leading-6 text-[#68685d]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Eyebrow>Get in Touch</Eyebrow>
        <h3 className="font-heading text-3xl font-black text-[#24251f]">Request a Free Estimate</h3>
        <p className="mt-4 text-sm leading-6 text-[#68685d]">
          Tell us about your property and what you need — we&apos;ll follow up to discuss your estimate.
        </p>
        <div className="mt-6 space-y-3">
          <FormField>Full Name</FormField>
          <FormField>Phone Number</FormField>
          <FormField>Service Needed</FormField>
          <div className="rounded-lg bg-[#2f7647] px-5 py-4 text-center text-sm font-black text-white">
            Request My Free Estimate
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
                <CheckItem key={item}>{item}</CheckItem>
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
            Basic SEO setup is included in the $1,500 package so the website has the right search foundation from day one.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {seoItems.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#ded7c5] bg-white p-4 shadow-sm">
              <CheckCircle2 className="size-5 shrink-0 text-[#2f6f45]" aria-hidden />
              <span className="text-sm font-semibold text-[#314031]">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-dashed border-[#c8b991] bg-[#fbf7ef] p-6">
          <p className="text-sm leading-6 text-[#5d6559]">
            Basic SEO setup creates a strong foundation, but ongoing SEO work such as monthly ranking improvement, blog content, competitor research, and local listing management would be handled separately if needed. No first-page ranking promises are included.
          </p>
        </div>
      </SectionShell>

      <SectionShell id="mockup" className="bg-[#e9e4d8]">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Eyebrow>Visual Reference</Eyebrow>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#172217] sm:text-4xl">
              Full Website Concept Preview
            </h2>
            <p className="mt-5 text-base leading-7 text-[#556052]">
              This is a polished concept view of how the landscaping website could feel. Final photos, reviews, services, and contact details would be replaced with Dylan&apos;s actual business information.
            </p>
          </div>
          <a
            href="#decision"
            className="inline-flex items-center justify-center rounded-xl bg-[#1f4b36] px-6 py-4 text-sm font-bold text-white hover:bg-[#2f6f45]"
          >
            Review Next Step
            <ArrowRight className="ml-2 size-4" aria-hidden />
          </a>
        </div>

        <div className="mb-5 inline-flex rounded-full border border-[#d7d1c1] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#24251f]">
          Desktop — 1440px
        </div>
        <DesktopConcept />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-[#d7d1c1] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#24251f]">
              Mobile — 390px
            </div>
            <MobileConcept />
          </div>
          <div>
            <div className="mb-5 inline-flex rounded-full border border-[#d7d1c1] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#24251f]">
              Optional — Section Preview
            </div>
            <SectionPreviewCard />
          </div>
        </div>
      </SectionShell>

      <SectionShell id="addons" className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Optional Add-ons</Eyebrow>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#172217] sm:text-4xl">
            Flexible Extras If Needed
          </h2>
          <p className="mt-5 text-base leading-7 text-[#556052]">
            The base package is enough to launch. These add-ons are available if Dylan wants ongoing updates or deeper local search support.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {addOns.map((addOn) => (
            <div key={addOn.title} className="rounded-[1.5rem] border border-[#ded7c5] bg-[#fbf7ef] p-6 shadow-sm">
              <p className="text-sm font-bold text-[#2f6f45]">{addOn.price}</p>
              <h3 className="mt-2 font-heading text-xl font-bold text-[#172217]">{addOn.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#5d6559]">{addOn.description}</p>
              <ul className="mt-6 space-y-3">
                {addOn.items.map((item) => (
                  <LightCheckItem key={item}>{item}</LightCheckItem>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="payment" className="bg-[#172217] text-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow light>Payment Structure</Eyebrow>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Simple 50/50 Payment Plan
            </h2>
            <p className="mt-5 text-base leading-7 text-[#dfeadc]">
              A deposit starts the project. The final payment is due before launch after review and approved revisions.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              ["Project Total", "$1,500"],
              ["Deposit to Start", "$750"],
              ["Before Launch", "$750"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b9ccb5]">{label}</p>
                <p className="mt-3 font-heading text-3xl font-bold text-[#f3dfaa]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="timeline" className="bg-[#f4f0e6]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Estimated Timeline</Eyebrow>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#172217] sm:text-4xl">
              2–3 Weeks to Launch
            </h2>
            <p className="mt-5 text-base leading-7 text-[#556052]">
              Timeline depends on how quickly photos, service details, and business information are provided.
            </p>
          </div>
          <div className="space-y-4">
            {timelineSteps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-[#ded7c5] bg-white p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#1f4b36] font-heading font-bold text-[#f3dfaa]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#172217]">{step}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#5d6559]">
                    A clear step so the project stays organized and easy to approve.
                  </p>
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
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#172217] sm:text-4xl">
              A Few Details to Start
            </h2>
            <p className="mt-5 text-base leading-7 text-[#556052]">
              These items help replace the mockup placeholders with real business content.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {neededItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#ded7c5] bg-[#fbf7ef] p-4">
                <ShieldCheck className="size-5 shrink-0 text-[#2f6f45]" aria-hidden />
                <span className="text-sm font-semibold text-[#314031]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <section id="decision" className="bg-[#1f4b36] px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow light>Next Step</Eyebrow>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Move Forward?
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
          <p className="mt-8 text-sm text-[#cfe0cc]">
            Prefer to reach out directly? Email {CONTACT_EMAIL}.
          </p>
        </div>
      </section>
    </main>
  )
}
