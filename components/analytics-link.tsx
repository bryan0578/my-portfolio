"use client"

import Link from "next/link"
import { track } from "@vercel/analytics"

export function AnalyticsLink({
  href,
  event,
  children,
  className,
}: {
  href: string
  event: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link href={href} className={className} onClick={() => track(event, { href })}>
      {children}
    </Link>
  )
}
