/**
 * Decorative enterprise orbital graphic for the homepage hero.
 * Pure SVG — no image assets, no client JS.
 */
export function HeroOrbitalVisual() {
  return (
    <div
      className="relative ml-auto mr-0 w-full max-w-[220px] sm:max-w-[255px] md:max-w-[275px] lg:max-w-[min(100%,305px)] xl:max-w-[min(100%,330px)] 2xl:max-w-[min(100%,355px)] aspect-square shrink-0"
      aria-hidden="true"
    >
      <div className="absolute inset-[14%] rounded-full bg-brand-primary/[0.06] blur-2xl" />

      <svg
        viewBox="0 0 400 400"
        className="relative h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hero-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--bc-brand-primary)" stopOpacity="0.65" />
            <stop offset="55%" stopColor="var(--bc-brand-primary)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--bc-brand-primary)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hero-ring-front" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3f4a52" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#6b7a85" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#1a2228" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="hero-ring-back" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a343c" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0f1418" stopOpacity="0.2" />
          </linearGradient>
          <filter id="hero-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Back orbital plane */}
        <ellipse
          cx="200"
          cy="210"
          rx="155"
          ry="48"
          fill="url(#hero-ring-back)"
          transform="rotate(-18 200 210)"
        />

        {/* Mid ring */}
        <ellipse
          cx="200"
          cy="200"
          rx="130"
          ry="42"
          fill="none"
          stroke="var(--bc-brand-primary)"
          strokeOpacity="0.12"
          strokeWidth="1.5"
          transform="rotate(12 200 200)"
        />

        {/* Front disc */}
        <ellipse
          cx="200"
          cy="195"
          rx="118"
          ry="38"
          fill="url(#hero-ring-front)"
          transform="rotate(-8 200 195)"
        />

        {/* Inner tilted ring */}
        <ellipse
          cx="200"
          cy="200"
          rx="88"
          ry="28"
          fill="none"
          stroke="var(--bc-brand-primary)"
          strokeOpacity="0.35"
          strokeWidth="2"
          transform="rotate(22 200 200)"
        />

        {/* Core glow */}
        <circle cx="200" cy="200" r="72" fill="url(#hero-core-glow)" />
        <circle
          cx="200"
          cy="200"
          r="28"
          fill="var(--bc-brand-primary)"
          fillOpacity="0.72"
          filter="url(#hero-soft-glow)"
        />
        <circle cx="200" cy="200" r="14" fill="#0a1218" fillOpacity="0.6" />
        <circle cx="200" cy="200" r="8" fill="var(--bc-brand-primary)" />

        {/* Orbital paths */}
        <ellipse
          cx="200"
          cy="200"
          rx="165"
          ry="62"
          fill="none"
          stroke="var(--bc-brand-primary)"
          strokeOpacity="0.2"
          strokeWidth="1"
          strokeDasharray="4 8"
          transform="rotate(-24 200 200)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="140"
          ry="52"
          fill="none"
          stroke="var(--bc-brand-primary)"
          strokeOpacity="0.15"
          strokeWidth="1"
          transform="rotate(35 200 200)"
        />

        {/* Orbital nodes */}
        <circle cx="318" cy="168" r="5" fill="var(--bc-brand-primary)" fillOpacity="0.9" />
        <circle cx="92" cy="228" r="4" fill="var(--bc-brand-primary)" fillOpacity="0.7" />
        <circle cx="248" cy="118" r="3" fill="var(--bc-brand-primary)" fillOpacity="0.6" />
        <circle cx="142" cy="278" r="3.5" fill="var(--bc-brand-primary)" fillOpacity="0.65" />
        <circle cx="285" cy="248" r="2.5" fill="var(--bc-brand-primary)" fillOpacity="0.5" />

        {/* Connection accents */}
        <path
          d="M200 200 L318 168"
          stroke="var(--bc-brand-primary)"
          strokeOpacity="0.15"
          strokeWidth="1"
        />
        <path
          d="M200 200 L92 228"
          stroke="var(--bc-brand-primary)"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
        <path
          d="M200 200 L248 118"
          stroke="var(--bc-brand-primary)"
          strokeOpacity="0.1"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}
