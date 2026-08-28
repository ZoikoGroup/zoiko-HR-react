import { Container, Reveal } from "@/components/ui";

const PRACTICES = [
  {
    title: "Review & replacement",
    description:
      "Review-due items trigger an owner workflow. Superseded artifacts point to a current replacement where appropriate.",
  },
  {
    title: "Corrections",
    description:
      "Material errors use a transparent correction or replacement rather than silent history rewriting.",
  },
  {
    title: "Source conflicts",
    description:
      "A conflicted claim fails closed from public display until resolved.",
  },
];

export function EvidenceGovernanceSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Evidence governance, freshness &amp; corrections.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Every trust claim and artifact carries an owner, scope and review
            status before it publishes.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICES.map((practice, i) => (
            <Reveal key={practice.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-sm font-bold text-ink">{practice.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {practice.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
