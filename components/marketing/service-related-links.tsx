import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { RelatedServiceLink } from "@/lib/marketing/types"

interface ServiceRelatedLinksProps {
  links: RelatedServiceLink[]
}

export function ServiceRelatedLinks({ links }: ServiceRelatedLinksProps) {
  if (!links.length) return null

  return (
    <section className="px-6 py-12 border-t border-border/50" aria-labelledby="related-services-heading">
      <div className="max-w-3xl mx-auto text-center">
        <h2 id="related-services-heading" className="text-lg font-semibold text-foreground mb-4">
          Related Services
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center rounded-full border border-border/50 bg-card/30 px-4 py-2 text-sm text-muted-foreground hover:text-brand-primary hover:border-brand-primary/30 transition-colors"
            >
              {link.label}
              <ArrowRight className="ml-1 size-3" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
