import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CARDS = [
  {
    title: "Role & scope controls",
    description:
      "Control access based on role, responsibility and organizational scope. See security and trust details for authoritative information.",
  },
  {
    title: "Privacy",
    description:
      "Link to Privacy, DPA and relevant data-protection materials. Legal text is not duplicated into marketing copy.",
  },
  {
    title: "Security",
    description:
      "Approved security statements only. Certifications, encryption specifications and residency claims are not stated without authorization.",
  },
  {
    title: "Accessibility",
    description:
      "This page and product examples are built to WCAG 2.2 AA standards. Inclusion is demonstrated by practice, not claimed by language.",
  },
];

export function TrustEnterpriseReadinessSection() {
  return (
    <section className="bg-[#040d18] py-24">
      <Container>
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Trust & Enterprise Readiness
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Global HR needs governance that scales with the organization.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Reveal delay={0.12}>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-sm font-semibold text-white">
                  {CARDS[0].title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {CARDS[0].description}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-sm font-semibold text-white">
                  {CARDS[2].title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {CARDS[2].description}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <PlaceholderImage
              src="/images/global-hr-operations/trust-enterprise-readiness.png"
              alt="Colleagues collaborating in a modern, secure office environment"
              label="Governance that scales"
              fit="cover"
              className="h-full min-h-[280px] w-full rounded-xl border border-white/10"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal delay={0.14}>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-sm font-semibold text-white">
                  {CARDS[1].title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {CARDS[1].description}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-sm font-semibold text-white">
                  {CARDS[3].title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {CARDS[3].description}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
