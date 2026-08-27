import { Container, Reveal } from "@/components/ui";

const SERVICES = [
  "Implementation Support",
  "Data Migration",
  "Configuration Services",
  "Change & Adoption",
  "Training & Enablement",
  "Managed Services",
];

export function ImplementationServicesSection() {
  return (
    <section className="bg-[#F5F8FF] py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Implementation &amp; services partners.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal delay={0.06}>
              <p className="font-heading text-xl font-bold text-ink">
                Approved services relationships.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 leading-relaxed text-ink/60">
                Implementation and services partners may support Zoiko HR
                deployments in specific capability areas and territories where
                those records are approved and current. Availability and scope
                depend on the specific partner record.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-sm leading-relaxed text-amber-800">
                Zoiko HR does not warrant service quality, staffing timelines,
                pricing, SLA, or geographic coverage beyond what is published in
                approved partner records.
              </p>
            </Reveal>
          </div>

          <div>
            <div className="space-y-2">
              {SERVICES.map((service, i) => (
                <Reveal key={service} delay={0.1 + i * 0.05}>
                  <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-black/10 bg-white px-5 py-3">
                    <p className="text-sm font-medium text-ink">{service}</p>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-ink/50">
                      Evidence required
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.44}>
              <p className="mt-3 text-xs leading-relaxed text-ink/50">
                A partner capability only appears when a current Capability
                Mapping record with evidence and territory is approved.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
