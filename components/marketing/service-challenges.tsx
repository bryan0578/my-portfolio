import type { ClientChallenge } from "@/lib/marketing/types"

interface ServiceChallengesProps {
  challenges: ClientChallenge[]
}

export function ServiceChallenges({ challenges }: ServiceChallengesProps) {
  return (
    <section className="px-6 py-16 md:py-20 bg-[#050505]" aria-labelledby="challenges-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="challenges-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-center">
          Challenges I Help Teams Solve
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          Common situations that bring enterprise clients to this service.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="rounded-xl border border-border/50 bg-card/30 p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {challenge.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
