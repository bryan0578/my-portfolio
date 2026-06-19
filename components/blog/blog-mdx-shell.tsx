"use client"

import { createContext, useRef, type ReactNode } from "react"

type BlogMdxContextValue = {
  title: string
  suppressRef: React.MutableRefObject<boolean>
}

export const BlogMdxContext = createContext<BlogMdxContextValue | null>(null)

interface BlogMdxShellProps {
  title: string
  children: ReactNode
}

export function BlogMdxShell({ title, children }: BlogMdxShellProps) {
  const suppressRef = useRef(false)

  return (
    <BlogMdxContext.Provider value={{ title, suppressRef }}>
      {children}
    </BlogMdxContext.Provider>
  )
}
