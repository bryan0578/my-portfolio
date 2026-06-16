/**
 * Shared Bryan Cash UI class strings.
 * Prefer Button/Badge/Card variants where available; use these for layout shells and prose.
 */

export const brandButtonPrimary =
  "bg-brand-primary text-text-inverse hover:bg-brand-secondary font-bold shadow-[0_0_20px_color-mix(in_srgb,var(--color-brand-primary)_25%,transparent)] hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-brand-primary)_40%,transparent)] transition-all duration-300"

export const brandButtonPrimarySubtle =
  "bg-brand-primary text-text-inverse hover:bg-brand-secondary font-bold shadow-[0_0_16px_color-mix(in_srgb,var(--color-brand-primary)_18%,transparent)] hover:shadow-[0_0_22px_color-mix(in_srgb,var(--color-brand-primary)_28%,transparent)] transition-all duration-300"

export const sectionEyebrow =
  "text-label uppercase tracking-wide text-brand-primary font-semibold-plus"

export const sectionTitle = "text-h2 font-heading text-foreground"

export const sectionTitleCentered = `${sectionTitle} text-balance`

export const sectionDescription =
  "text-body text-muted-foreground leading-body max-w-2xl"

export const sectionDescriptionCentered = `${sectionDescription} mx-auto`

export const cardSurface =
  "border-border/50 bg-card/50 backdrop-blur-sm"

export const cardSurfaceInteractive =
  "group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-border-default transition-all duration-300 hover:shadow-[0_0_40px_-10px_color-mix(in_srgb,var(--color-text-primary)_10%,transparent)]"

export const cardSurfaceBrand =
  "border-brand-primary/20 bg-brand-soft"

export const cardFieldLabel =
  "text-caption uppercase tracking-wide text-muted-foreground mb-1.5"

export const ctaBlockShell =
  "rounded-2xl border border-brand-primary/20 bg-brand-soft"

export const ctaBlockTitle =
  "text-h3 md:text-h2 font-heading text-foreground text-balance"

export const ctaBlockDescription = "text-body text-muted-foreground max-w-2xl"

export const cardLinkAction =
  "inline-flex items-center text-body-sm font-medium text-brand-primary hover:text-brand-primary/80 transition-colors"

export const cardGhostAction =
  "w-full mt-2 group/btn hover:bg-brand-soft text-muted-foreground hover:text-brand-primary transition-colors"

export const inlineCode =
  "rounded-md border border-border-default bg-surface-subtle px-1.5 py-0.5 font-mono text-code-inline text-brand-primary"

export const codeBlock =
  "mb-8 overflow-x-auto rounded-2xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm font-mono text-code-block"

export const blockquoteStyle =
  "mb-8 border-l-2 border-brand-primary/60 pl-5 text-body-lg italic text-foreground/80"

export const formFieldLabel = "text-label text-text-secondary"

export const formInput =
  "border-border-default bg-surface-subtle/50 placeholder:text-muted-foreground focus-visible:border-border-focus focus-visible:ring-brand-primary/20"
