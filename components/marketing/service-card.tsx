import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cardLinkAction } from "@/lib/ui/brand-classes"
import type { ServiceHubCard } from "@/lib/marketing/types"

export function ServiceCard({ title, description, href, keywords }: ServiceHubCard) {
  return (
    <Card
      variant="surface"
      className="group h-full flex flex-col hover:border-brand-primary/30 transition-all duration-300"
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <p className="text-body-sm text-muted-foreground mb-4 flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {keywords.map((keyword) => (
            <Badge key={keyword} variant="keyword">
              {keyword}
            </Badge>
          ))}
        </div>
        <Link href={href} className={cardLinkAction}>
          Learn more
          <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </CardContent>
    </Card>
  )
}
