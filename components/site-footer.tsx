import Link from "next/link"
import { serviceHubCards } from "@/lib/marketing/services-content"

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/contact", label: "Contact" },
] as const

export function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border/50 bg-[#050505] px-6 py-16"
    >
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Bryan Cash</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            SAP BTP lead and enterprise UI architect. SAP BTP, SAPUI5, Salesforce,
            and modern frontend delivery for complex organizations.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            <Link
              href="/work-with-me"
              className="text-sm font-medium text-[#00FFC2] hover:text-[#00FFC2]/80 transition-colors"
            >
              Engagement options →
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#00FFC2] hover:text-[#00FFC2]/80 transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Services</p>
          <ul className="space-y-2">
            {serviceHubCards.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="text-sm text-muted-foreground hover:text-[#00FFC2] transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Site</p>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-[#00FFC2] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="text-sm text-muted-foreground hover:text-[#00FFC2] transition-colors"
              >
                All services
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border/50">
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Bryan Cash. Enterprise consulting portfolio.
        </p>
      </div>
    </footer>
  )
}
