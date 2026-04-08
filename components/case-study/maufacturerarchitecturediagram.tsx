import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers } from "lucide-react"

interface ManufacturerArchitectureDiagramProps {
  description?: string
}

export function ManufacturerArchitectureDiagram({
  description,
}: ManufacturerArchitectureDiagramProps) {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Layers className="size-5 text-mint" />
          <CardTitle className="text-lg">
            Multi-Tenant Analytics Architecture
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <div className="aspect-[4/3] rounded-lg border border-dashed border-border bg-muted/30 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="space-y-4">
              <div className="flex justify-center gap-2 flex-wrap">
                <div className="px-3 py-1.5 bg-mint/10 border border-mint/30 rounded text-xs text-mint">
                  SAPUI5 Apps
                </div>
                <div className="px-3 py-1.5 bg-mint/10 border border-mint/30 rounded text-xs text-mint">
                  Build Work Zone
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-4 bg-border" />
              </div>

              <div className="flex justify-center gap-2">
                <div className="px-3 py-1.5 bg-secondary border border-border rounded text-xs text-muted-foreground">
                  SAP CAP Services
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-4 bg-border" />
              </div>

              <div className="flex justify-center gap-2 flex-wrap">
                <div className="px-3 py-1.5 bg-secondary border border-border rounded text-xs text-muted-foreground">
                  XSUAA
                </div>
                <div className="px-3 py-1.5 bg-secondary border border-border rounded text-xs text-muted-foreground">
                  SAP IAS
                </div>
                <div className="px-3 py-1.5 bg-secondary border border-border rounded text-xs text-muted-foreground">
                  Okta
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-4 bg-border" />
              </div>

              <div className="flex justify-center gap-2">
                <div className="px-3 py-1.5 bg-mint/10 border border-mint/30 rounded text-xs text-mint">
                  Manufacturer Data
                </div>
              </div>
            </div>
          </div>
        </div>

        {description && (
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  )
}