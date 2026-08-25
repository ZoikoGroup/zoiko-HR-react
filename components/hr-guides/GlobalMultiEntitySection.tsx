import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CARDS = [
  {
    icon: "🌐",
    title: "Multi-entity org structure",
    body: "Configure legal entities, local HR rules, and org hierarchies across regions.",
  },
  {
    icon: "📋",
    title: "Local HR context rules",
    body: "Manage jurisdiction-specific settings without overriding global defaults.",
  },
  {
    icon: "🔄",
    title: "Cross-entity data flow",
    body: "Understand how records and approvals move across entity boundaries.",
  },
];

export function GlobalMultiEntitySection() {
  return (
    <section className="bg-[#0e2038] py-18 text-white">
      <Container>
        <Reveal>
          <span className="font-heading text-xs font-bold uppercase tracking-wide text-indigo-400">
            Global, Multi-Entity &amp; Manager Operations
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold leading-10">
            Operating across entities and teams
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 font-heading font-bold text-indigo-300">
            Global &amp; Multi-Entity
          </p>
        </Reveal>

        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {CARDS.map((card, i) => (
              <Reveal key={card.title} delay={0.12 + i * 0.05} className="h-full">
                <div className="h-full rounded-xl border border-primary/20 bg-[#132c4a] p-5">
                  <span aria-hidden className="block text-base leading-6">
                    {card.icon}
                  </span>
                  <p className="mt-3 font-heading text-sm font-bold text-white">
                    {card.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-slate-400">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="h-full">
            <PlaceholderImage
              src="/images/hr-guides/global-multi-entity.png"
              alt="Colleagues talking over coffee in an office"
              label="Operating across entities"
              className="h-full min-h-56 w-full rounded-xl bg-white"
            />
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 px-5 py-4">
            <p className="text-sm text-amber-400">
              Scope: These guides cover Zoiko platform concepts only — not local
              employment law or tax advice.
            </p>
            <span className="text-sm font-semibold text-indigo-400">
              Trust Center →
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
