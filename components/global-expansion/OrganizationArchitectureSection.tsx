import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ITEMS = [
  { label: "Group hierarchy", description: "Parent group → legal entity → business unit or location → team or worker relationships where supported." },
  { label: "Entity profile", description: "Entity name, internal identifier, operating country or region, status, HR owner, configured defaults and related locations." },
  { label: "Worker association", description: "Worker record shows primary entity and location with effective-dated organizational assignment." },
  { label: "Reorganization", description: "Changes can be effective-dated or otherwise historically traceable where the platform supports it." },
  { label: "Acquisition onboarding", description: "Controlled mapping from source organization to target entity structure, through validation to migration." },
];

export function OrganizationArchitectureSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
          <div className="flex flex-col">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Organization architecture
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Represent the organization the way it actually operates.
              </h2>
            </Reveal>

            <div className="mt-6 divide-y divide-slate-200 border-t border-slate-200">
              {ITEMS.map((item, i) => (
                <Reveal key={item.label} delay={0.06 + i * 0.05}>
                  <p className="flex gap-2 py-3.5 text-sm leading-relaxed text-ink/70">
                    <span className="mt-2 size-1.5 flex-none rounded-full bg-primary" />
                    <span>
                      <span className="font-semibold text-ink">{item.label}: </span>
                      {item.description}
                    </span>
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} y={30} className="flex">
            <PlaceholderImage
              src="/images/global-expansion/organization-architecture.webp"
              alt="Colleagues shaking hands during a meeting in a glass-walled office"
              label="Organization architecture"
              className="h-full min-h-[320px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
