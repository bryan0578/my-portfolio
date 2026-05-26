import type { ComponentType, SVGProps } from "react"
import Link from "next/link"
import { Mail, ArrowUpRight } from "lucide-react"
import { LinkedinIcon, GithubIcon } from "@/components/brand-icons"
import { cn } from "@/lib/utils"

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>
import {
  CONTACT_EMAIL,
  GITHUB_HANDLE,
  GITHUB_URL,
  LINKEDIN_HANDLE,
  LINKEDIN_URL,
} from "@/lib/seo/site"

type ProfileLink = {
  id: "linkedin" | "github" | "email"
  label: string
  handle: string
  href: string
  external: boolean
  description: string
  Icon: IconComponent
}

const PROFILES: ProfileLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: LINKEDIN_HANDLE,
    href: LINKEDIN_URL,
    external: true,
    description:
      "Professional background, recommendations, and active enterprise consulting profile.",
    Icon: LinkedinIcon,
  },
  {
    id: "github",
    label: "GitHub",
    handle: GITHUB_HANDLE,
    href: GITHUB_URL,
    external: true,
    description:
      "Source for projects, open-source experiments, and code samples.",
    Icon: GithubIcon,
  },
  {
    id: "email",
    label: "Email",
    handle: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
    description:
      "Direct email — the fastest way to start a project or consulting conversation.",
    Icon: Mail,
  },
]

function externalProps(external: boolean) {
  return external
    ? {
        target: "_blank" as const,
        rel: "noopener noreferrer me" as const,
      }
    : {}
}

interface SocialLinksProps {
  /** Subset of profiles to render (default: all three). */
  include?: ProfileLink["id"][]
  className?: string
  /** Compact icon-only buttons with accessible aria-labels. */
  size?: "sm" | "md"
}

/**
 * Compact icon row of professional profile links. Each icon is a real anchor
 * with an aria-label and `rel="noopener noreferrer me"` for external links.
 */
export function SocialLinks({
  include,
  className,
  size = "md",
}: SocialLinksProps) {
  const items = include
    ? PROFILES.filter((p) => include.includes(p.id))
    : PROFILES

  const dimension = size === "sm" ? "size-9" : "size-10"
  const iconSize = size === "sm" ? "size-4" : "size-[18px]"

  return (
    <ul
      className={cn("flex flex-wrap items-center gap-2", className)}
      aria-label="Professional profiles"
    >
      {items.map(({ id, label, href, external, Icon }) => {
        const ariaLabel = external
          ? `${label} (opens in new tab)`
          : `Email Bryan Cash at ${href.replace("mailto:", "")}`

        return (
          <li key={id}>
            <a
              href={href}
              aria-label={ariaLabel}
              title={label}
              {...externalProps(external)}
              className={cn(
                "group inline-flex items-center justify-center rounded-md border border-border/60 bg-card/40 text-muted-foreground transition-colors",
                "hover:border-[#00FFC2]/40 hover:bg-[#00FFC2]/10 hover:text-[#00FFC2]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FFC2]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                dimension
              )}
            >
              <Icon className={iconSize} aria-hidden />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

interface SocialLinksWithLabelsProps {
  className?: string
  include?: ProfileLink["id"][]
}

/**
 * Icon + label row. Useful for the footer where both visual recognition and
 * a readable text label improve discoverability and accessibility.
 */
export function SocialLinksWithLabels({
  className,
  include,
}: SocialLinksWithLabelsProps) {
  const items = include
    ? PROFILES.filter((p) => include.includes(p.id))
    : PROFILES

  return (
    <ul
      className={cn("flex flex-wrap items-center gap-2", className)}
      aria-label="Professional profiles"
    >
      {items.map(({ id, label, href, external, Icon }) => (
        <li key={id}>
          <a
            href={href}
            {...externalProps(external)}
            className={cn(
              "group inline-flex items-center gap-2 rounded-md border border-border/60 bg-card/40 px-3 py-2 text-sm text-muted-foreground transition-colors",
              "hover:border-[#00FFC2]/40 hover:bg-[#00FFC2]/10 hover:text-[#00FFC2]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FFC2]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            )}
          >
            <Icon className="size-4" aria-hidden />
            <span className="font-medium">{label}</span>
            {external ? (
              <>
                <ArrowUpRight className="size-3.5 opacity-70" aria-hidden />
                <span className="sr-only"> (opens in new tab)</span>
              </>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  )
}

interface ProfileCardsProps {
  className?: string
  include?: ProfileLink["id"][]
  /** Optional heading and intro to display above the cards. */
  heading?: string
  description?: string
}

/**
 * Larger profile card grid for use inside long-form pages such as About and
 * Work With Me. Each card includes icon, label, handle, description, and CTA.
 */
export function ProfileCards({
  className,
  include,
  heading,
  description,
}: ProfileCardsProps) {
  const items = include
    ? PROFILES.filter((p) => include.includes(p.id))
    : PROFILES

  return (
    <div className={className}>
      {heading ? (
        <div className="mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {heading}
          </h2>
          {description ? (
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ id, label, handle, href, external, description: desc, Icon }) => {
          const isExternalLink = external
          const LinkComponent: typeof Link | "a" = isExternalLink ? "a" : Link

          const sharedProps = isExternalLink
            ? { href, ...externalProps(true) }
            : { href }

          return (
            <li key={id}>
              <LinkComponent
                {...(sharedProps as { href: string })}
                className={cn(
                  "group flex h-full flex-col rounded-xl border border-border/60 bg-card/40 p-5 transition-colors",
                  "hover:border-[#00FFC2]/40 hover:bg-[#00FFC2]/5",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FFC2]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex size-9 items-center justify-center rounded-md bg-[#00FFC2]/10 border border-[#00FFC2]/20 text-[#00FFC2]">
                      <Icon className="size-[18px]" aria-hidden />
                    </span>
                    <span className="text-base font-semibold text-foreground group-hover:text-[#00FFC2] transition-colors">
                      {label}
                    </span>
                  </div>
                  {isExternalLink ? (
                    <ArrowUpRight
                      className="size-4 text-muted-foreground group-hover:text-[#00FFC2] transition-colors"
                      aria-hidden
                    />
                  ) : (
                    <Mail
                      className="size-4 text-muted-foreground group-hover:text-[#00FFC2] transition-colors"
                      aria-hidden
                    />
                  )}
                </div>
                <p className="text-xs font-mono text-[#00FFC2]/80 mb-3 break-all">
                  {handle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
                {isExternalLink ? (
                  <span className="sr-only"> (opens in new tab)</span>
                ) : null}
              </LinkComponent>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
