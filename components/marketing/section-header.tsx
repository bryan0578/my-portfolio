import { cn } from "@/lib/utils"
import {
  sectionDescriptionCentered,
  sectionEyebrow,
  sectionTitleCentered,
} from "@/lib/ui/brand-classes"

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: React.ReactNode
  align?: "center" | "left"
  className?: string
  titleClassName?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  const isCentered = align === "center"

  return (
    <div
      className={cn(
        isCentered ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className={cn(sectionEyebrow, isCentered ? "mb-3" : "mb-2")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          isCentered ? sectionTitleCentered : "text-h2 font-heading text-foreground",
          description ? "mb-4" : undefined,
          titleClassName
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            isCentered ? sectionDescriptionCentered : "text-body text-muted-foreground leading-body max-w-2xl",
            !isCentered && "max-w-3xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
