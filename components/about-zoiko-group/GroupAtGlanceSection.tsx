import { Container, Reveal } from "@/components/ui";

const FACTS = [
  { label: "Focus Area", value: "HR & Workforce Software", meta: "Part of a broader portfolio" },
  { label: "Portfolio Type", value: "Multi-product Group", meta: "Independent entities with governance" },
  { label: "Operational Model", value: "Source-governed", meta: "Facts maintained via structured registry" },
  { label: "Public Status", value: "Active", meta: "Portfolio visible for evaluation" },
];

export function GroupAtGlanceSection() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Group at a glance — verified context.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((fact, i) => (
            <Reveal key={fact.label} delay={0.08 + i * 0.06}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                  {fact.label}
                </span>
                <p className="mt-2 font-semibold text-ink">{fact.value}</p>
                <p className="mt-1 text-sm text-ink/50">{fact.meta}</p>
                <span className="mt-3 inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  Current
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.36}>
          <p className="mt-6 text-xs italic text-ink/40">
            Material corporate facts such as employee count, revenue,
            customer volume, and founding details are maintained in a
            source-governed registry and published only when all required
            approvals and review dates are current.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
