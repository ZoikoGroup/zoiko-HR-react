import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CAPABILITIES = [
  {
    label: "Group hierarchy",
    description:
      "Parent group → legal entity → business unit or location → team or worker relationships where supported.",
  },
  {
    label: "Entity profile",
    description:
      "Entity name, internal identifier, operating country or region, status, HR owner, configured defaults and related locations.",
  },
  {
    label: "Worker association",
    description:
      "Worker record shows primary entity and location with effective-dated organizational assignment.",
  },
  {
    label: "Reorganization",
    description:
      "Changes can be effective-dated or otherwise historically traceable where the platform supports it.",
  },
  {
    label: "Acquisition onboarding",
    description:
      "Controlled mapping from source organization to target entity structure, through validation to migration.",
  },
];

export function EntityArchitectureSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                Organization Architecture
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
                Represent the organization the way it actually operates.
              </h2>
            </Reveal>

            <ul className="mt-6 space-y-4">
              {CAPABILITIES.map((item, i) => (
                <Reveal key={item.label} delay={0.12 + i * 0.05}>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                    <p className="text-sm leading-relaxed text-ink/55">
                      <span className="font-semibold text-ink">
                        {item.label}{" "}
                      </span>
                      {item.description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/global-hr-operations/entity-architecture.png"
              alt="Executives reviewing organization structure with an HR team"
              label="Organization architecture, made explicit"
              fit="cover"
              className="aspect-[529/404] w-full rounded-[10px] shadow-lg shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
