import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CAPABILITIES = [
  {
    title: "Identity & Access",
    accent: "border-l-primary",
    description:
      "Organizations with approved connection to HR identity and access management workflows.",
  },
  {
    title: "Payroll & Finance",
    accent: "border-l-emerald-400",
    description:
      "Organizations with approved payroll data exchange capability as documented in the integration record.",
  },
  {
    title: "Collaboration & Productivity",
    accent: "border-l-cyan-400",
    description:
      "Organizations with approved collaboration or workflow integration capability.",
  },
  {
    title: "Data & Analytics",
    accent: "border-l-violet-400",
    description:
      "Organizations supporting approved data output or analytics capability.",
  },
];

export function TechnologyPartnersSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Technology &amp; integration partners.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal delay={0.06}>
              <p className="font-heading text-xl font-bold text-ink">
                Approved technology relationships.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 leading-relaxed text-ink/60">
                Technology partners describe organizations with an approved
                connection to Zoiko HR systems in a defined capability area.
                Connections may support identity, payroll and finance,
                collaboration, data, or workflow integration where those
                capabilities are published.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-4 text-sm leading-relaxed text-red-400">
                A technology partner listing does not automatically imply native
                integration, API certification, data residency compliance,
                security certification, or bi-directional sync.
              </p>
            </Reveal>

            <Reveal delay={0.24} y={36}>
              <PlaceholderImage
                src="/images/partners/technology-partners.png"
                alt="Two colleagues reviewing an analytics dashboard on a monitor"
                label="Technology and integration partners"
                fit="contain"
                className="mt-6 w-full rounded-lg"
              />
            </Reveal>
          </div>

          <div className="space-y-3">
            {CAPABILITIES.map((capability, i) => (
              <Reveal key={capability.title} delay={0.1 + i * 0.06}>
                <div
                  className={`rounded-xl border border-black/10 border-l-2 bg-[#F5F7FA] p-5 ${capability.accent}`}
                >
                  <p className="font-heading text-base font-bold text-ink">
                    {capability.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/50">
                    {capability.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
