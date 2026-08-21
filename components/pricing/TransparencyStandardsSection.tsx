import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const LEFT_STANDARDS = [
  {
    number: "01",
    title: "Scope transparency",
    description:
      "Identify included product areas, populations, environments, entities, locations, roles, integrations, services, and dependencies.",
  },
  {
    number: "03",
    title: "Change transparency",
    description:
      "Show effective date, review date, renewal/true-up implications, promotion end, and change notice.",
  },
];

const RIGHT_STANDARDS = [
  {
    number: "02",
    title: "Entitlement transparency",
    description:
      "Define Included, Limited, Optional, Sales-assisted, Unavailable, and Not applicable.",
  },
  {
    number: "04",
    title: "Evidence transparency",
    description:
      "Connect claims to approved product, commercial, legal, support, and trust sources.",
  },
];

export function TransparencyStandardsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Commercial transparency
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              What a trustworthy pricing page discloses.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Zoiko HR publishes pricing information only when it meets
              six commercial transparency standards.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-center">
          <div className="flex flex-col gap-4">
            {LEFT_STANDARDS.map((standard, i) => (
              <Reveal key={standard.title} delay={0.1 + i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-xs font-semibold text-primary">
                    {standard.number}
                  </span>
                  <p className="mt-1.5 font-semibold text-ink">{standard.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                    {standard.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/pricing/transparency-standards.png"
              alt="Two colleagues reviewing documents at a table"
              label="Trustworthy by design"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            {RIGHT_STANDARDS.map((standard, i) => (
              <Reveal key={standard.title} delay={0.16 + i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="text-xs font-semibold text-primary">
                    {standard.number}
                  </span>
                  <p className="mt-1.5 font-semibold text-ink">{standard.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                    {standard.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-5">
            <p className="text-sm leading-relaxed text-emerald-900">
              <span className="font-semibold">Not permitted:</span> Fake
              scarcity, countdowns, hidden defaults, preselected paid
              options, deceptive crossed-out prices, vague
              &quot;unlimited,&quot; buried fees, or marketing consent
              bundled with pricing access.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
