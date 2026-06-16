/**
 * Ecosystem-aware badge colors for tech tags.
 * Keeps category colors distinct while defaulting to brand tokens.
 */

export function getEcosystemBadgeColor(label: string): string {
  const normalized = label.trim().toUpperCase()

  switch (normalized) {
    // SAP ecosystem
    case "SAP":
    case "SAP BTP":
    case "BUILD WORK ZONE":
    case "WORK ZONE":
    case "FIORI LAUNCHPAD":
    case "NEXT.JS":
    case "NEXTJS":
    case "TYPESCRIPT":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20"

    case "CAP":
    case "CAPM":
    case "SAP CAP":
    case "IAS":
    case "HANA CLOUD":
    case "HANA":
    case "MDX":
    case "APEX":
      return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"

    case "SAPUI5":
    case "PORTFOLIO":
    case "CONSULTING":
      return "bg-teal-500/10 text-teal-400 border-teal-500/20"

    case "FIORI":
    case "SAP FIORI":
    case "REACT":
    case "LWC":
      return "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"

    case "ODATA":
    case "API":
    case "BRAND IDENTITY":
    case "LOGO DESIGN":
    case "VISUAL IDENTITY":
      return "bg-amber-500/10 text-amber-400 border-amber-500/20"

    case "TECHNICAL DOCUMENTATION":
      return "bg-stone-500/10 text-stone-300 border-stone-500/20"

    // Salesforce ecosystem
    case "SALESFORCE":
    case "EXPERIENCE CLOUD":
    case "DEVOPS":
    case "FRONTEND":
      return "bg-sky-500/10 text-sky-400 border-sky-500/20"

    case "AURA":
    case "AURA COMPONENTS":
      return "bg-blue-500/10 text-blue-300 border-blue-500/20"

    // DevOps / tooling
    case "CI/CD":
    case "GITHUB":
    case "GITHUB ACTIONS":
    case "GIT":
    case "SFDX":
      return "bg-slate-500/10 text-slate-300 border-slate-500/20"

    // UI / frontend / design
    case "BOOTSTRAP":
    case "ARCHITECTURE":
    case "FIGMA":
    case "ADOBE XD":
    case "DESIGN SYSTEMS":
    case "AXURE":
    case "PROTOTYPING":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20"

    case "UI/UX":
    case "UI/UX DESIGN":
    case "DESIGN":
    case "CAREER":
    case "PERSONAL BRANDING":
    case "PHOTOSHOP":
    case "ILLUSTRATOR":
    case "PREMIERE PRO":
      return "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20"

    case "JAVASCRIPT":
      return "bg-yellow-500/10 text-yellow-300 border-yellow-500/20"

    case "TAILWIND CSS":
    case "TAILWIND":
      return "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"

    case "FRAMER MOTION":
      return "bg-pink-500/10 text-pink-300 border-pink-500/20"

    case "RESEND":
      return "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"

    case "VERCEL":
      return "bg-neutral-500/10 text-neutral-300 border-neutral-500/20"

    case "FOURTHWALL":
    case "AMAZON POLLY":
      return "bg-orange-500/10 text-orange-300 border-orange-500/20"

    case "ADOBE PREMIERE PRO":
      return "bg-violet-500/10 text-violet-300 border-violet-500/20"

    case "AFTER EFFECTS":
      return "bg-purple-500/10 text-purple-300 border-purple-500/20"

    // Modern web
    case "NODE.JS":
    case "HTML5":
    case "CSS":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"

    case "LDS":
      return "bg-sky-500/10 text-sky-400 border-sky-500/20"

    default:
      return "bg-brand-soft text-brand-primary/70 border-brand-primary/10"
  }
}
