"use client"

import Link from "next/link"
import { SectionHeader } from "@/components/marketing/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getEcosystemBadgeColor } from "@/lib/ui/ecosystem-badge-colors"
import { Database, Cloud, Palette, Code2, ArrowRight } from "lucide-react"

const skills = [
  {
    title: "SAP BTP",
    category: "Architecture",
    icon: Cloud,
    href: "/services/sap-btp-development",
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
    href: "/services/salesforce-experience-cloud",
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
    href: "/services/enterprise-ui-ux",
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
    href: "/services",
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
      <section className="px-6 pt-10 pb-20 md:pt-12 md:pb-24 bg-surface-canvas">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            className="mb-12 md:mb-14"
            eyebrow="Expertise"
            title="Systems I build in"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <Link key={skill.title} href={skill.href} className="block h-full">
              <Card 
                className={`
                    group relative overflow-hidden border-zinc-800 bg-zinc-950/50 backdrop-blur-md h-full
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
                  <div className="flex flex-wrap gap-2 mb-4">
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
                  <span className={`inline-flex items-center text-xs font-medium ${skill.themeColor.split(" ")[0]} opacity-80 group-hover:opacity-100`}>
                    View service
                    <ArrowRight className="ml-1 size-3" />
                  </span>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
  }