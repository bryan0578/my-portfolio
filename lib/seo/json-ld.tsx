type JsonLdValue = Record<string, unknown>

type JsonLdProps = {
  data: JsonLdValue | JsonLdValue[]
}

/**
 * Renders schema.org JSON-LD. Pass a single node or array; arrays are wrapped in @graph.
 */
export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
