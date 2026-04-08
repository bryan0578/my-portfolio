import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface BlogPostLayoutProps {
  title: string
  description: string
  tags?: string[]
  date: string
  category?: string
  children: React.ReactNode
}

function getTagColor(tag: string): string {
  const normalizedTag = tag.trim().toUpperCase()

  switch (normalizedTag) {
    case "NEXT.JS":
    case "NEXTJS":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20"
    case "REACT":
      return "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
    case "MDX":
      return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
    case "PORTFOLIO":
      return "bg-teal-500/10 text-teal-400 border-teal-500/20"
    case "FRONTEND":
      return "bg-sky-500/10 text-sky-400 border-sky-500/20"
    case "ARCHITECTURE":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20"
    case "CAREER":
    case "PERSONAL BRANDING":
      return "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20"
    case "JAVASCRIPT":
      return "bg-yellow-500/10 text-yellow-300 border-yellow-500/20"
    case "TYPESCRIPT":
      return "bg-blue-500/10 text-blue-300 border-blue-500/20"
    default:
      return "bg-muted text-muted-foreground border-border"
  }
}

export function BlogPostLayout({
  title,
  description,
  tags = [],
  date,
  category,
  children,
}: BlogPostLayoutProps) {
  return (
    <>
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {category ? (
              <Badge
                variant="secondary"
                className="bg-[#00FFC2]/10 text-[#00FFC2] border-[#00FFC2]/20 font-medium"
              >
                {category}
              </Badge>
            ) : null}

            <Badge
              variant="secondary"
              className="bg-[#00FFC2]/10 text-[#00FFC2] border-[#00FFC2]/20 font-medium"
            >
              {date}
            </Badge>

            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={`font-medium ${getTagColor(tag)}`}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-pretty leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl">
            {description}
          </p>

          <div className="mt-12 h-px bg-linear-to-r from-[#00FFC2]/50 via-border to-transparent" />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
            <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-10 lg:p-12">
                    <article className="max-w-none">
                    {children}
                    </article>
                </CardContent>
            </Card>
        </div>
      </section>
    </>
  )
}