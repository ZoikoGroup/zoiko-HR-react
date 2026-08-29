import { Container, Reveal } from "@/components/ui";

const STAGES = [
  {
    title: "Submitted / Identified",
    description:
      "Organization and relationship details are provided or identified through an approved sourcing process.",
  },
  {
    title: "Reviewed",
    description:
      "Relationship type, capabilities, territory, media rights, and required evidence are validated against registry rules.",
  },
  {
    title: "Approved",
    description:
      "All required gates pass: active relationship, eligible capabilities, valid rights, route availability.",
  },
  {
    title: "Published",
    description:
      "Partner record becomes public-eligible and may appear in finder and profiles where all publication checks pass.",
  },
  {
    title: "Re-reviewed / Retired",
    description:
      "Records are reviewed on schedule or triggered by relationship change, expiry, or rights withdrawal.",
  },
];

export function PartnerStandardsSection() {
  return (
    <section className="bg-[#F5F7FA] py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Partner standards &amp; verification.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STAGES.map((stage, i) => (
            <Reveal key={stage.title} delay={0.08 + i * 0.05}>
              <div className="relative h-full rounded-xl border border-black/10 bg-white p-5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm font-bold text-ink">{stage.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-ink/50">
                  {stage.description}
                </p>
                {i < STAGES.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-lg font-bold text-primary lg:block"
                  >
                    →
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.36}>
          <p className="mt-6 rounded-xl border border-black/10 bg-white p-5 text-sm leading-relaxed text-ink/60">
            The verification process does not expose internal scoring, due
            diligence notes, legal review detail, sanctions screening, or
            financial assessment. Review dates may appear on profiles where
            available.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
