import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cardLinkAction } from "@/lib/ui/brand-classes"
import {
  getProjectRelatedServices,
  type ContentLink,
} from "@/lib/content/content-ia"

type RelatedServicesProps = {
  slug: string
  categories: string[]
  stack: string[]
}

function ServiceLinksList({ links }: { links: ContentLink[] }) {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className={cardLinkAction}>
            {link.label}
            <ArrowRight className="ml-1 size-4" aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function RelatedServices({ slug, categories, stack }: RelatedServicesProps) {
  const serviceLinks = getProjectRelatedServices(slug, categories, stack)

  if (serviceLinks.length === 0) return null

  return (
    <section
      className="px-6 py-16 border-t border-border/50"
      aria-labelledby="related-services-heading"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-label uppercase tracking-wide text-brand-primary mb-2 font-semibold-plus">
          Practical delivery
        </p>
        <h2
          id="related-services-heading"
          className="text-h3 font-heading text-foreground mb-3"
        >
          Related services
        </h2>
        <p className="text-body-sm text-muted-foreground leading-body mb-5 max-w-2xl">
          This case study maps to the services below. For engagement models, fit
          criteria, and how programs start, see Work With Me.
        </p>

        <ServiceLinksList links={serviceLinks} />

        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <Link
            href="/work-with-me"
            className="inline-flex items-center text-body-sm font-medium text-brand-primary hover:text-brand-primary/80 transition-colors"
          >
            How engagements work
            <ArrowRight className="ml-1 size-4" aria-hidden />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center text-body-sm font-medium text-muted-foreground hover:text-brand-primary transition-colors"
          >
            Contact Bryan
            <ArrowRight className="ml-1 size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
