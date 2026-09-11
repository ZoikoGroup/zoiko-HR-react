import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const LEFT_CARDS = [
  { title: "Role & scope controls", description: "Control access based on role, responsibility and organizational scope. See security and trust details for authoritative information." },
  { title: "Security", description: "Approved security statements only. Certifications, encryption specifications and residency claims are not stated without authorization." },
];

const RIGHT_CARDS = [
  { title: "Privacy", description: "Link to Privacy, DPA and relevant data-protection materials. Legal text is not duplicated into marketing copy." },
  { title: "Accessibility", description: "This page and product examples are built to WCAG 2.2 AA standards. Inclusion is demonstrated by practice, not claimed by language." },
];

function TrustCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
      <p className="font-semibold">{title}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
}

export function TrustEnterpriseSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Trust &amp; enterprise readiness
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Global HR needs governance that scales with the
              organization.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1.3fr_1fr] lg:items-stretch">
          <div className="flex flex-col gap-4">
            {LEFT_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={0.06 + i * 0.06} className="flex flex-1">
                <div className="flex h-full w-full">
                  <TrustCard {...card} />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} y={30} className="flex">
            <PlaceholderImage
              src="/images/global-expansion/trust-enterprise.png"
              alt="Colleagues gathering around a table in a bright, plant-filled office"
              label="Governance that scales"
              className="h-full min-h-[280px] w-full rounded-2xl"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            {RIGHT_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={0.24 + i * 0.06} className="flex flex-1">
                <div className="flex h-full w-full">
                  <TrustCard {...card} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
