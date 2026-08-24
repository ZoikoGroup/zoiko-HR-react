import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CARDS = [
  {
    icon: "🔀",
    title: "Structure divergence",
    body: "Organization, job, position, location, manager, and worker context can be modeled differently across systems.",
  },
  {
    icon: "🗂",
    title: "Distributed ownership",
    body: "Central and local responsibilities can overlap or leave gaps in coverage and accountability.",
  },
  {
    icon: "❓",
    title: "Unclear status",
    body: "Teams may not know what is configured, available, under review, or dependent on professional input.",
  },
  
  {
    icon: "🌊",
    title: "Rollout variation",
    body: "Readiness can differ by region, entity, location, system, data set, owner, and wave.",
  },
];

export function GlobalOperationsShiftSection() {
  return (
    <section className="border-t border-white/10 bg-slate-950 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            What Changes as Operations Become Global
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold">
            Shared standards and local realities need one visible operating
            model.
          </h2>
          <p className="mt-4 max-w-[680px] leading-6 text-slate-400">
            As people operations span regions, entities, locations, languages,
            owners, documents, workflows, and connected systems, differences
            can accumulate.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:order-1">
            {CARDS.slice(0, 2).map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <GlobalShiftCard {...card} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} y={36} className="lg:order-2">
            <PlaceholderImage
              src="/images/global-organizations/what-changes.png"
              alt="Colleagues discussing a process map drawn on a whiteboard"
              label="One visible operating model"
              className="h-full min-h-80 w-full rounded-xl border border-white/10 bg-sky-950"
            />
          </Reveal>

          <div className="flex flex-col gap-6 lg:order-3">
            {CARDS.slice(2).map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <GlobalShiftCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 rounded-xl border border-primary/20 bg-primary/10 px-6 py-4">
            <p className="text-xs font-semibold leading-5 text-indigo-400">
              Outcome: one reviewable operating model for shared structure,
              local configuration, ownership, effective dates, status,
              evidence, dependencies, and support.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function GlobalShiftCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div className="h-full rounded-xl border border-white/10 bg-sky-950 p-5">
      <span aria-hidden className="text-xl">
        {icon}
      </span>
      <p className="mt-3 font-heading font-bold">{title}</p>
      <p className="mt-2 text-xs leading-5 text-slate-400">{body}</p>
    </div>
  );
}
