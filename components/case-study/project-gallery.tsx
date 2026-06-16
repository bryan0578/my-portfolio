import Image from "next/image"

type GalleryImage = {
  src: string
  alt: string
  caption?: string
}

type ProjectGalleryProps = {
  gallery: {
    title?: string
    description?: string
    images: GalleryImage[]
  }
}

export function ProjectGallery({ gallery }: ProjectGalleryProps) {
  if (!gallery.images?.length) return null

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-primary">
            Visual System
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            {gallery.title ?? "Project Gallery"}
          </h2>

          {gallery.description && (
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {gallery.description}
            </p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {gallery.images.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg"
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-6"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              {image.caption && (
                <figcaption className="border-t border-white/10 px-5 py-4 text-sm text-muted-foreground">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}