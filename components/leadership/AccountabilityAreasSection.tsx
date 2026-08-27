import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const AREAS = [
  "Product Direction",
  "Customer Experience",
  "Security & Trust",
  "Privacy & Data Governance",
  "Responsible AI & Technology",
  "People & Organizational Accountability",
];

export function AccountabilityAreasSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Leadership areas of accountability.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-5 leading-relaxed text-ink/60">
                This section maps public responsibility areas to current
                published leadership roles. It does not reveal internal
                reporting lines, team sizes, decision authority, or confidential
                organizational structure.
              </p>
            </Reveal>

            <Reveal delay={0.16} y={36}>
              <PlaceholderImage
                src="/images/leadership/accountability-areas.png"
                alt="A manager reviewing documents at a desk"
                label="Leadership areas of accountability"
                fit="contain"
                className="mt-8 w-full rounded-xl"
              />
            </Reveal>
          </div>

          <div>
            <div className="space-y-3">
              {AREAS.map((area, i) => (
                <Reveal key={area} delay={0.1 + i * 0.05}>
                  <div className="flex flex-col gap-2 rounded-xl border border-black/10 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <p className="text-sm font-semibold text-ink">{area}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-white">
                        [Published role title]
                      </span>
                      <span className="whitespace-nowrap text-xs text-primary">
                        → View profile
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.44}>
              <p className="mt-4 text-xs leading-relaxed text-ink/40">
                Accountability areas do not imply legal authority or sole
                statutory responsibility. Refer to owning trust and compliance
                destinations for verified compliance documentation.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
