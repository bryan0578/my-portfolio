"use client"

import { useContext, type ComponentPropsWithoutRef, type ReactNode } from "react"
import { BlogMdxContext } from "@/components/blog/blog-mdx-shell"
import { cn } from "@/lib/utils"

function headingText(children: ReactNode): string {
  if (typeof children === "string") return children
  if (typeof children === "number") return String(children)
  if (Array.isArray(children)) {
    return children.map(headingText).join("")
  }
  if (children && typeof children === "object" && "props" in children) {
    const element = children as { props: { children?: ReactNode } }
    return headingText(element.props.children)
  }
  return ""
}

function normalizeHeading(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ")
}

type MdxHeadingProps = ComponentPropsWithoutRef<"h2"> & {
  className?: string
}

export function MdxHeading({ className, children, ...props }: MdxHeadingProps) {
  const ctx = useContext(BlogMdxContext)
  const text = headingText(children)

  if (ctx && text && normalizeHeading(text) === normalizeHeading(ctx.title)) {
    return null
  }

  return (
    <h2 className={cn(className)} {...props}>
      {children}
    </h2>
  )
}
