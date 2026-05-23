import { JsonLd } from "@/lib/seo/json-ld"
import { buildGlobalSchemas } from "@/lib/seo/schemas"

export function GlobalJsonLd() {
  return <JsonLd data={buildGlobalSchemas()} />
}
