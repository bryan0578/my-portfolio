import { ShieldCheck, Lock, UserPlus } from "lucide-react"

interface SecurityProps {
  data: {
    title: string
    description: string
    highlights: string[]
  }
}

export function SecuritySection({ data }: SecurityProps) {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Left Side: Context & Icon */}
          <div className="md:w-1/3 sticky top-32">
            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-[#00FFC2]/10 border border-[#00FFC2]/20 mb-6">
              <ShieldCheck className="size-8 text-[#00FFC2]" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              {data.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Right Side: Technical Highlights Grid */}
          <div className="md:w-2/3 grid gap-6">
            {data.highlights.map((highlight, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-[#00FFC2]/30 transition-all duration-300"
              >
                {/* Decorative glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FFC2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative flex gap-4">
                  <div className="mt-1 text-[#00FFC2]">
                    <div className="size-2 rounded-full bg-[#00FFC2] shadow-[0_0_8px_#00FFC2]" />
                  </div>
                  <p className="text-lg text-zinc-300 leading-snug">
                    {highlight}
                  </p>
                </div>
              </div>
            ))}

            {/* Visual Indicator of the 3 User Management Apps */}
            <div className="mt-4 p-6 rounded-2xl border border-dashed border-zinc-800 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <UserPlus className="size-5 text-muted-foreground group-hover:text-[#00FFC2] transition-colors" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Identity Governance Suite: 3 Apps Integrated
                </span>
              </div>
              <Lock className="size-4 text-zinc-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}