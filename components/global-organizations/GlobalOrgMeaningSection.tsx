import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PILLARS = [
  {
    number: "01",
    title: "Shared structure",
    body: "Common organization, workforce, workflow, document, reporting, and integration concepts are defined consistently where approved.",
  },
  {
    number: "02",
    title: "Local configuration",
    body: "Regional, entity, location, language, document, workflow, and communication variation is explicit, owned, versioned, and reviewable.",
  },
  {
    number: "03",
    title: "Distributed authority",
    body: "Central, regional, entity, local, security, privacy, integration, and review responsibilities use explicit scopes and permissions.",
  },
];

export function GlobalOrgMeaningSection() {
  return (
    <section className="border-t border-black/10 bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            What Global Organizations Means
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-sky-950">
            What does Zoiko HR for Global Organizations mean?
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div>
            <Reveal delay={0.08}>
              <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
                <p className="leading-7 text-slate-700">
                  Zoiko HR for Global Organizations is a solution pathway for
                  organizations that want{" "}
                  <strong className="font-bold text-sky-950">
                    consistent HR structures with controlled local
                    configuration
                  </strong>{" "}
                  across regions, entities, locations, and teams. It focuses on
                  shared definitions, locally owned variation, scoped
                  permissions, effective dates, visible status, evidence,
                  integrations, and implementation governance.
                </p>
              </div>
            </Reveal>

            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.number} delay={0.12 + i * 0.08}>
                  <div className="h-full rounded-xl border border-black/10 bg-white p-5 shadow-sm">
                    <p className="text-xl font-black text-primary">
                      {pillar.number}
                    </p>
                    <p className="mt-2.5 font-heading font-bold text-sky-950">
                      {pillar.title}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {pillar.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.16} y={36} className="h-full">
            <PlaceholderImage
              src="/images/global-organizations/route-means.png"
              alt="A team mapping an application flow with sticky notes on a whiteboard"
              label="What this pathway means"
              className="h-full min-h-72 w-full rounded-xl border border-black/10 bg-white shadow-sm"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 max-w-[860px] rounded-[10px] border border-red-400/20 bg-red-400/5 px-5 py-3.5">
            <p className="text-xs font-semibold text-red-700">
              Does not claim
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Universal country availability, automatic legal interpretation,
              legal/tax/payroll/employment advice, guaranteed compliance,
              guaranteed payroll correctness, or complete localization for
              every market.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
