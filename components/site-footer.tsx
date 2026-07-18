"use client"

import Link from "next/link"
import { serviceHubCards } from "@/lib/marketing/services-content"
import { SocialLinksWithLabels } from "@/components/social-links"

const footerLinks = [
  { href: "/career", label: "Career" },
  { href: "/consulting", label: "Consulting" },
  { href: "/web-apps", label: "Web Apps" },
  { href: "/projects", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const

export function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border/50 bg-surface-canvas px-4 sm:px-6 pt-16 pb-24 sm:pb-16"
    >
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3 min-w-0">
        <div className="min-w-0">
          <p className="text-body-sm font-semibold font-heading text-foreground mb-3">Bryan Cash</p>
          <p className="text-body-sm text-muted-foreground leading-body">
            Enterprise UI developer and technical lead building practical SAP,
            Salesforce, and modern web experiences with large delivery teams.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            <Link
              href="/career"
              className="text-body-sm font-medium text-brand-primary hover:text-brand-primary/80 transition-colors"
            >
              Career profile →
            </Link>
            <Link
              href="/contact"
              className="text-body-sm font-medium text-brand-primary hover:text-brand-primary/80 transition-colors"
            >
              Get in touch →
            </Link>
          </div>
          <div className="mt-5">
            <p
              id="footer-connect-heading"
              className="text-label uppercase tracking-wide text-muted-foreground/80 mb-2"
            >
              Connect
            </p>
            <SocialLinksWithLabels />
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-body-sm font-semibold font-heading text-foreground mb-3">Services</p>
          <ul className="space-y-2">
            {serviceHubCards.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="text-body-sm text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <p className="text-body-sm font-semibold font-heading text-foreground mb-3">Site</p>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-body-sm text-muted-foreground hover:text-brand-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-caption text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Bryan Cash. Enterprise development & consulting.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-1 text-caption">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-brand-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-brand-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
