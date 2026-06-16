import { cn } from "@/lib/utils"
import {
  ctaBlockDescription,
  ctaBlockShell,
  ctaBlockTitle,
  sectionEyebrow,
} from "@/lib/ui/brand-classes"

interface CtaBlockProps {
  id?: string
  eyebrow?: string
  title: string
  description: string
  children: React.ReactNode
  footer?: React.ReactNode
  align?: "center" | "left"
  className?: string
  padding?: "default" | "compact"
}

export function CtaBlock({
  id,
  eyebrow,
  title,
  description,
  children,
  footer,
  align = "center",
  className,
  padding = "default",
}: CtaBlockProps) {
  const isCentered = align === "center"

  return (
    <section
      id={id}
      className={cn(
        ctaBlockShell,
        padding === "compact" ? "p-5 sm:p-7 md:p-10" : "p-8 md:p-12",
        isCentered && "text-center",
        className
      )}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      {eyebrow ? (
        <p className={cn(sectionEyebrow, "mb-2")}>{eyebrow}</p>
      ) : null}
      <h2
        id={id ? `${id}-heading` : undefined}
        className={cn(
          ctaBlockTitle,
          isCentered ? "mb-4" : "mb-3 sm:mb-4 leading-tight"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          ctaBlockDescription,
          isCentered ? "mx-auto mb-8" : "mb-6 sm:mb-7 md:mb-8 leading-relaxed"
        )}
      >
        {description}
      </p>
      {children}
      {footer ? (
        <div className={cn("mt-5 sm:mt-6", isCentered && "text-center")}>
          {footer}
        </div>
      ) : null}
    </section>
  )
}
