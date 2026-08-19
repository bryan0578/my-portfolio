/**
 * Decorative enterprise system topology for the homepage hero.
 * Pure SVG — no image assets, no client JS.
 */
export function HeroOrbitalVisual() {
  return (
    <div
      className="relative ml-auto mr-0 w-full max-w-[240px] sm:max-w-[270px] md:max-w-[290px] lg:max-w-[min(100%,325px)] xl:max-w-[min(100%,350px)] 2xl:max-w-[min(100%,370px)] aspect-square shrink-0"
      aria-hidden="true"
    >
      <div className="absolute inset-[12%] rounded-full bg-brand-primary/[0.045] blur-3xl" />

      <svg
        viewBox="0 0 420 420"
        className="relative h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="topology-core" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--bc-brand-primary)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--bc-brand-primary)" stopOpacity="0.04" />
          </linearGradient>
          <filter id="topology-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect
          x="34"
          y="42"
          width="352"
          height="330"
          rx="22"
          fill="none"
          stroke="var(--bc-brand-primary)"
          strokeOpacity="0.08"
          strokeDasharray="4 8"
        />

        <text
          x="54"
          y="68"
          fill="var(--bc-brand-primary)"
          fillOpacity="0.55"
          fontFamily="var(--bc-font-mono)"
          fontSize="10"
          letterSpacing="2"
        >
          SYSTEM MAP / ENTERPRISE DELIVERY
        </text>

        {/* connection lines */}
        <g stroke="var(--bc-brand-primary)" strokeWidth="1.2" strokeOpacity="0.22" fill="none">
          <path d="M210 192 L105 117" />
          <path d="M210 192 L315 117" />
          <path d="M210 192 L92 272" />
          <path d="M210 192 L328 272" />
          <path d="M210 225 L210 322" />
        </g>

        {/* subtle connection nodes */}
        <g fill="var(--bc-brand-primary)" fillOpacity="0.75">
          <circle cx="159" cy="156" r="2.5" />
          <circle cx="261" cy="156" r="2.5" />
          <circle cx="151" cy="232" r="2.5" />
          <circle cx="269" cy="232" r="2.5" />
          <circle cx="210" cy="272" r="2.5" />
        </g>

        {/* center */}
        <rect
          x="155"
          y="158"
          width="110"
          height="68"
          rx="12"
          fill="url(#topology-core)"
          stroke="var(--bc-brand-primary)"
          strokeOpacity="0.55"
          filter="url(#topology-glow)"
        />
        <text
          x="210"
          y="187"
          textAnchor="middle"
          fill="var(--bc-brand-primary)"
          fontFamily="var(--bc-font-mono)"
          fontSize="17"
          fontWeight="600"
        >
          SAP BTP
        </text>
        <text
          x="210"
          y="207"
          textAnchor="middle"
          fill="currentColor"
          fillOpacity="0.55"
          fontFamily="var(--bc-font-mono)"
          fontSize="9"
          letterSpacing="1"
        >
          ARCHITECTURE / DELIVERY
        </text>

        {/* peripheral nodes */}
        <g fontFamily="var(--bc-font-mono)">
          <g>
            <rect x="58" y="92" width="94" height="48" rx="9" fill="#0a0f13" fillOpacity="0.88" stroke="var(--bc-brand-primary)" strokeOpacity="0.18" />
            <text x="105" y="112" textAnchor="middle" fill="var(--bc-brand-primary)" fillOpacity="0.68" fontSize="8" letterSpacing="1">EXPERIENCE</text>
            <text x="105" y="128" textAnchor="middle" fill="currentColor" fillOpacity="0.72" fontSize="11">WORK ZONE</text>
          </g>

          <g>
            <rect x="268" y="92" width="94" height="48" rx="9" fill="#0a0f13" fillOpacity="0.88" stroke="var(--bc-brand-primary)" strokeOpacity="0.18" />
            <text x="315" y="112" textAnchor="middle" fill="var(--bc-brand-primary)" fillOpacity="0.68" fontSize="8" letterSpacing="1">APPLICATION UI</text>
            <text x="315" y="128" textAnchor="middle" fill="currentColor" fillOpacity="0.72" fontSize="11">SAPUI5</text>
          </g>

          <g>
            <rect x="45" y="248" width="94" height="48" rx="9" fill="#0a0f13" fillOpacity="0.88" stroke="var(--bc-brand-primary)" strokeOpacity="0.18" />
            <text x="92" y="268" textAnchor="middle" fill="var(--bc-brand-primary)" fillOpacity="0.68" fontSize="8" letterSpacing="1">SERVICES</text>
            <text x="92" y="284" textAnchor="middle" fill="currentColor" fillOpacity="0.72" fontSize="11">CAP</text>
          </g>

          <g>
            <rect x="281" y="248" width="94" height="48" rx="9" fill="#0a0f13" fillOpacity="0.88" stroke="var(--bc-brand-primary)" strokeOpacity="0.18" />
            <text x="328" y="268" textAnchor="middle" fill="var(--bc-brand-primary)" fillOpacity="0.68" fontSize="8" letterSpacing="1">INTEGRATION</text>
            <text x="328" y="284" textAnchor="middle" fill="currentColor" fillOpacity="0.72" fontSize="11">ODATA</text>
          </g>

          <g>
            <rect x="163" y="318" width="94" height="48" rx="9" fill="#0a0f13" fillOpacity="0.88" stroke="var(--bc-brand-primary)" strokeOpacity="0.18" />
            <text x="210" y="338" textAnchor="middle" fill="var(--bc-brand-primary)" fillOpacity="0.68" fontSize="8" letterSpacing="1">DATA</text>
            <text x="210" y="354" textAnchor="middle" fill="currentColor" fillOpacity="0.72" fontSize="11">HANA</text>
          </g>
        </g>
      </svg>
    </div>
  )
}
