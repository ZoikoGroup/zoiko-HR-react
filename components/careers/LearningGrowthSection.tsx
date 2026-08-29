import { Container, Reveal } from "@/components/ui";

const ITEMS = [
  {
    title: "Learning & Development",
    icon: "📚",
    description: "Learning and development opportunities are published from approved benefit and programme records that carry a source owner, applicability scope, and effective date. Illustrative context only.",
  },
  {
    title: "Role Development",
    icon: "📈",
    description: "Role progression context is sourced from approved career framework records. No guarantees of promotion timeline or outcome are made on this page.",
  },
  {
    title: "Internal Opportunities",
    icon: "🔄",
    description: "Internal mobility and transfer opportunities are governed by the approved internal mobility policy. Eligible employees can access open internal roles through the Job Registry.",
  },
];

export function LearningGrowthSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Learning, Growth &amp; Internal Mobility
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-2 text-ink/60">
              Growth claims appear only from approved Benefit Claim
              records with source owner, applicability, and effective
              dates.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={0.08 + i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="text-2xl" aria-hidden>{item.icon}</span>
                <p className="mt-3 font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {item.description}
                </p>
                <span className="mt-3 inline-flex items-center rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                  Illustrative — source-governed
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.34}>
          <div className="mt-6 rounded-xl border-l-4 border-amber-400 bg-amber-50 px-5 py-3.5 text-center text-sm text-amber-900">
            Growth claims appear only from approved Benefit Claim
            records with source owner, applicability, and effective
            dates. No generic growth promises are made on this page.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
