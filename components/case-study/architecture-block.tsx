"use client"

import { useState, type ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layers, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ArchitectureBlockProps {
  deepDive?: {
    eyebrow?: string
    title?: string
    description?: string
  }
  codeSnippet?: string
  codeLanguage?: string
  children?: ReactNode
}

export function ArchitectureBlock({
  deepDive,
  codeSnippet,
  codeLanguage,
  children,
}: ArchitectureBlockProps) {
  const [copied, setCopied] = useState(false)

  const hasDeepDive = Boolean(deepDive?.title || deepDive?.description)
  const hasCodeSnippet = Boolean(codeSnippet)
  const hasCustomVisual = Boolean(children)

  const hasLeftContent = hasCustomVisual || hasDeepDive
  const isTwoColumn = hasLeftContent && hasCodeSnippet

  const handleCopy = async () => {
    if (!codeSnippet) return

    await navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!hasDeepDive && !hasCodeSnippet && !hasCustomVisual) {
    return null
  }

  const sectionEyebrow = deepDive?.eyebrow || "Technical Details"
  const sectionTitle =
    hasLeftContent && hasCodeSnippet
      ? "Project Details"
      : hasDeepDive
        ? deepDive?.title || "Project Details"
        : "Implementation"

  return (
    <section className="px-6 py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-mint mb-3">
            {sectionEyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {sectionTitle}
          </h2>
        </div>

        <div
          className={`grid gap-8 ${
            isTwoColumn ? "lg:grid-cols-2 items-start" : "lg:grid-cols-1"
          }`}
        >
          {hasCustomVisual ? (
            <div>{children}</div>
          ) : (
            hasDeepDive && (
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Layers className="size-5 text-mint" />
                    <CardTitle className="text-lg">
                      {deepDive?.title || "Project Details"}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  {deepDive?.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {deepDive.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            )
          )}

          {hasCodeSnippet && (
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardHeader className="flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {codeLanguage && (
                    <Badge
                      variant="outline"
                      className="font-mono text-xs bg-muted/50"
                    >
                      {codeLanguage}
                    </Badge>
                  )}
                  <CardTitle className="text-lg">Implementation</CardTitle>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {copied ? (
                    <Check className="size-4 text-mint" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </Button>
              </CardHeader>

              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <pre className="p-6 text-sm font-mono leading-relaxed text-foreground/80 bg-muted/30">
                    <code>{codeSnippet}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}