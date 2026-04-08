"use client"

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Cloud, Palette, Code2 } from "lucide-react"

// Reuse your existing logic for brand consistency
function getTagStyle(tag: string): string {
    const normalized = tag.toUpperCase();
    
    // Grouping by Ecosystems
    switch (normalized) {
      // SAP ECOSYSTEM (Blue/Indigo/Teal)
      case "SAP BTP": case "SAP": case "BUILD WORK ZONE": case "WORK ZONE":
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "CAP": case "CAPM": case "IAS": case "HANA CLOUD": case "HANA": case "ODATA":
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
      case "SAPUI5": case "FIORI": case "SAP FIORI":
        return "bg-teal-500/10 text-teal-400 border-teal-500/20";

      // SALESFORCE ECOSYSTEM (Sky/Cyan)
      case "SALESFORCE": case "APEX": case "LWC": case "AURA COMPONENTS": case "LDS": case "EXPERIENCE CLOUD":
        return "bg-sky-500/10 text-sky-400 border-sky-500/20";

      // DEVOPS & INFRA (Slate/Zinc)
      case "DEVOPS": case "CI/CD": case "GITHUB ACTIONS": case "GIT":
        return "bg-slate-500/10 text-slate-400 border-slate-500/20";

      // DESIGN & CREATIVE (Purple/Pink/Rose)
      case "FIGMA": case "ADOBE XD": case "DESIGN SYSTEMS": case "AXURE": case "PROTOTYPING":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "PHOTOSHOP": case "ILLUSTRATOR": case "PREMIERE PRO":
        return "bg-rose-500/10 text-rose-400 border-rose-500/20";

      // MODERN WEB (Emerald/Green)
      case "NEXT.JS": case "REACT": case "TYPESCRIPT": case "JAVASCRIPT": case "NODE.JS": case "HTML5": case "CSS":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";

      // DEFAULT
      default:
        return "bg-[#00FFC2]/5 text-[#00FFC2]/70 border-[#00FFC2]/10";
    }
}

const skills = [
  {
    title: "SAP BTP",
    category: "Architecture",
    icon: Cloud,
    description: "Enterprise cloud solutions with SAP Business Technology Platform. CAP development, integration suites, and extensibility.",
    tags: ["CAP", "SAPUI5", "Fiori", "Build Work Zone", "IAS", "HANA Cloud"],
    themeColor: "text-blue-400 border-blue-500/50 bg-blue-500/10",
    hoverBorder: "hover:border-blue-500/50",
    color: "from-blue-600/20 to-transparent",
    borderGlow: "hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]",
  },
  {
    title: "Salesforce",
    category: "DevOps",
    icon: Database,
    description: "Salesforce platform development and DevOps automation. CI/CD pipelines, integrations, and Lightning components.",
    tags: ["Apex", "Aura Components", "LWC", "CI/CD", "LDS"],
    themeColor: "text-sky-400 border-sky-500/50 bg-sky-500/10",
    hoverBorder: "hover:border-sky-500/50",
    color: "from-sky-600/20 to-transparent",
    borderGlow: "hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)]",
  },
  {
    title: "UI/UX",
    category: "Figma/Adobe",
    icon: Palette,
    description: "User-centered design for enterprise applications. Design systems, prototyping, and accessibility-first approaches.",
    tags: ["Figma", "Adobe XD", "Design Systems", "Axure"],
    themeColor: "text-purple-400 border-purple-500/50 bg-purple-500/10",
    hoverBorder: "hover:border-purple-500/50",
    color: "from-purple-600/20 to-transparent",
    borderGlow: "hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]",
  },
  {
    title: "Full-Stack Dev",
    category: "Node.js/Next.js",
    icon: Code2,
    description: "Modern web development with React ecosystem. Server-side rendering, API design, and database architecture.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "JavaScript"],
    themeColor: "text-emerald-400 border-emerald-500/50 bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-500/50",
    color: "from-emerald-600/20 to-transparent",
    borderGlow: "hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]",
  },
]

export function SkillsBentoGrid() {
    return (
      <section className="px-6 py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#00FFC2] mb-3 font-semibold">
              Expertise
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Core Competencies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Card 
                key={skill.title}
                className={`
                    group relative overflow-hidden border-zinc-800 bg-zinc-950/50 backdrop-blur-md
                    transition-all duration-500 ${skill.hoverBorder} ${skill.borderGlow}
                `}
              >
                {/* Animated Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                    {/* Icon now matches the card's specific theme */}
                    <div className={`p-3 rounded-xl bg-zinc-900 border border-zinc-800 transition-colors group-hover:${skill.themeColor.split(' ')[1]}`}>
                        <skill.icon className={`size-6 ${skill.themeColor.split(' ')[0]}`} />
                    </div>
                    
                    {/* Category Badge now matches the card's specific theme */}
                    <Badge variant="outline" className={`text-[10px] tracking-tighter ${skill.themeColor}`}>
                        {skill.category}
                    </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold">{skill.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <Badge 
                        key={tag} 
                        variant="outline" 
                        // We override the global color and use the card's specific themeColor instead
                        className={`text-[10px] py-0 px-2 font-medium transition-all duration-300 ${skill.themeColor} opacity-80 group-hover:opacity-100`}
                    >
                        {tag}
                    </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }