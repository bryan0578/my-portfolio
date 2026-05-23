import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ServiceHubCard } from "@/lib/marketing/types"

export function ServiceCard({ title, description, href, keywords }: ServiceHubCard) {
  return (
    <Card className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-[#00FFC2]/30 transition-all duration-300 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {keywords.map((keyword) => (
            <Badge
              key={keyword}
              variant="outline"
              className="text-[10px] bg-muted/50 text-muted-foreground"
            >
              {keyword}
            </Badge>
          ))}
        </div>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-medium text-[#00FFC2] hover:text-[#00FFC2]/80 transition-colors"
        >
          Learn more
          <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </CardContent>
    </Card>
  )
}
