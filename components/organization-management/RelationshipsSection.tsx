import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const RELATIONSHIPS = [
  {
    title: "Hierarchy",
    icon: "↑",
    chips: ["Child unit", "Parent unit"],
    description: "Structural parent-child relationship defined by the Organization Taxonomy. Determines path and breadcrumb. Does not imply reporting.",
    note: "Not the same as a reporting relationship. Moving a unit changes hierarchy; it does not change manager assignments.",
  },
  {
    title: "Ownership / Admin Scope",
    icon: "◇",
    chips: ["Organization unit", "Authorized role scope"],
    description: "Administrative accountability and delegated scope only where the product model supports ownership. Final vocabulary requires product role mapping.",
    note: "Does not grant system-wide admin; scope is bounded by the authorized delegation contract.",
  },
];

export function RelationshipsSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Relationships
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              distinct relationship types — explicitly labeled
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Hierarchy, reporting, ownership, and assignment reference
              are separate concepts with distinct semantics. No
              relationship meaning depends on connector lines alone.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr_1fr] lg:items-stretch">
          <div className="flex flex-col gap-4 lg:col-span-2">
            {RELATIONSHIPS.map((rel, i) => (
              <Reveal key={rel.title} delay={0.08 + i * 0.08}>
                <div className="h-full rounded-2xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-lg text-primary" aria-hidden>
                    {rel.icon}
                  </span>
                  <p className="mt-3 font-semibold">{rel.title}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {rel.chips.map((chip, ci) => (
                      <span key={chip} className="inline-flex items-center gap-2">
                        <span className="rounded-md bg-white/10 px-2 py-1 font-mono text-xs text-white/60">{chip}</span>
                        {ci === 0 && <span className="text-white/30" aria-hidden>→</span>}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{rel.description}</p>
                  <p className="mt-2 border-t border-white/10 pt-2 text-xs text-white/40">{rel.note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30} className="flex">
            <PlaceholderImage
              src="/images/organization-management/relationships.webp"
              alt="Team presenting reporting structure on a screen"
              label="Explicitly labeled relationships"
              className="h-full min-h-[280px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
