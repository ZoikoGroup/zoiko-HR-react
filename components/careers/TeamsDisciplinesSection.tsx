import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TEAMS = [
  { name: "Product & Design", count: 2, description: "Defining and refining the product experience across all Zoiko HR surfaces." },
  { name: "Sales & Revenue", count: 1, description: "Growing and supporting customer relationships across enterprise and commercial segments." },
  { name: "Customer & Operations", count: 0, description: "Ensuring customers get ongoing value from the platform throughout their lifecycle." },
  { name: "Finance & Legal", count: 0, description: "Governing financial reporting, commercial contracts, and regulatory compliance." },
];

export function TeamsDisciplinesSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Teams &amp; Disciplines
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-2 text-white/60">
                Six functional areas. Roles published only from the
                approved Job Registry.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <span className="rounded-full bg-amber-400/20 px-3 py-1.5 text-xs font-semibold text-amber-300">
              Illustrative — source-governed
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-6 flex items-start gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
            <span aria-hidden>⚠</span>
            Role counts are illustrative. Actual open roles appear only
            from the Job Registry.
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-3 lg:items-center">
          <div className="flex flex-col gap-4">
            {TEAMS.slice(0, 2).map((team, i) => (
              <Reveal key={team.name} delay={0.08 + i * 0.06}>
                <div className="rounded-2xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <p className="font-semibold">{team.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{team.description}</p>
                  <span className="mt-3 inline-flex items-center rounded-full bg-primary/20 px-2.5 py-1 text-xs font-semibold text-primary">
                    {team.count} illustrative role{team.count === 1 ? "" : "s"}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/careers/teams-disciplines.png"
              alt="Person presenting to a team at a whiteboard"
              label="Teams and disciplines"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            {TEAMS.slice(2, 4).map((team, i) => (
              <Reveal key={team.name} delay={0.12 + i * 0.06}>
                <div className="rounded-2xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <p className="font-semibold">{team.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{team.description}</p>
                  <span className="mt-3 inline-flex items-center rounded-full bg-primary/20 px-2.5 py-1 text-xs font-semibold text-primary">
                    {team.count} illustrative role{team.count === 1 ? "" : "s"}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
