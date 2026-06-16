import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categoryToService: Record<string, { href: string; label: string }> = {
  "SAP BTP": {
    href: "/services/sap-btp-development",
    label: "SAP BTP Development",
  },
  "UI/UX": {
    href: "/services/enterprise-ui-ux",
    label: "Enterprise UI/UX",
  },
  DevOps: {
    href: "/services/salesforce-devops",
    label: "Salesforce DevOps",
  },
  Salesforce: {
    href: "/services/salesforce-experience-cloud",
    label: "Salesforce Experience Cloud",
  },
}

type RelatedServicesProps = {
  categories: string[]
  stack: string[]
}

export function RelatedServices({ categories, stack }: RelatedServicesProps) {
  const links = new Map<string, { href: string; label: string }>()

  for (const category of categories) {
    const match = categoryToService[category]
    if (match) links.set(match.href, match)
  }

  if (stack.some((t) => /sapui5|fiori/i.test(t))) {
    links.set("/services/sapui5-fiori-development", {
      href: "/services/sapui5-fiori-development",
      label: "SAPUI5 & Fiori Development",
    })
  }

  if (links.size === 0) return null

  return (
    <section
      className="px-6 py-16 border-t border-border/50"
      aria-labelledby="related-services-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="related-services-heading"
          className="text-xl font-bold text-foreground mb-4"
        >
          Related Services
        </h2>
        <ul className="space-y-2">
          {Array.from(links.values()).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center text-sm font-medium text-brand-primary hover:text-brand-primary/80 transition-colors"
              >
                {link.label}
                <ArrowRight className="ml-1 size-4" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          See{" "}
          <Link
            href="/work-with-me"
            className="text-brand-primary hover:underline"
          >
            engagement options
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-brand-primary hover:underline">
            contact Bryan
          </Link>{" "}
          to discuss a similar engagement.
        </p>
      </div>
    </section>
  )
}
