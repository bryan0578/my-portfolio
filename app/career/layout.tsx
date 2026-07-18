import { CareerShell } from "@/components/career/career-shell"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CareerShell>{children}</CareerShell>
}
