import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

const STAGES = [
  [
    "Discovery",
    "Operating model, stakeholders, product scope, markets/entities and success criteria.",
  ],
  [
    "Configuration",
    "Structures, roles, workflows, effective dates, policy/document and permissions context.",
  ],
  ["Data", "Inventory, mapping, validation, migration and source ownership."],
  [
    "Integrations",
    "Identity/time/payroll/other connections, testing and reconciliation.",
  ],
  [
    "Validation",
    "Configuration, records, permissions, workflows, integrations, reporting and acceptance.",
  ],
  ["Launch", "Cutover/activation, support, communications and monitoring."],
  ["Adoption", "Training/guidance, customer success, support, updates and review."],
];

export function ImplementationAdoptionSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[400px_minmax(0,1fr)]">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Implementation &amp; Adoption
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold leading-10 text-slate-900">
                Seven-stage implementation resource pathway.
              </h2>
              <p className="mt-4 leading-6 text-slate-500">
                Resources curated by stage. The Implementation Guide at
                /implementation/ is the authoritative end-to-end source.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-col gap-3">
                <Button
                  href="/implementation-guide"
                  className="!rounded-lg py-3"
                >
                  Open Implementation Guide →
                </Button>
                <Button
                  href="/contact-us"
                  variant="outline"
                  className="!rounded-lg !border-black/10 py-3 !text-primary"
                >
                  Contact Support
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <PlaceholderImage
                src="/images/resource-center/implementation-adoption.png"
                alt="Two colleagues reviewing dashboards on a wall display"
                label="Implementation and adoption"
                className="mt-6 aspect-[400/253] w-full rounded-xl bg-white"
              />
            </Reveal>
          </div>

          <div className="flex flex-col gap-4">
            {STAGES.map(([title, body], i) => (
              <Reveal key={title} delay={0.06 + i * 0.04}>
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center self-stretch">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-white text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    {i < STAGES.length - 1 ? (
                      <span
                        aria-hidden
                        className="w-px flex-1 bg-primary/20"
                      />
                    ) : null}
                  </div>
                  <div className="flex-1 rounded-xl border border-black/10 bg-white px-5 py-4">
                    <p className="text-sm font-semibold text-slate-900">
                      {title}
                    </p>
                    <p className="mt-1.5 text-xs leading-5 text-slate-500">
                      {body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
