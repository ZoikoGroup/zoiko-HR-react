import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CARDS = [
  { title: "Approval policy", description: "Shows assignment source, decision options, required evidence/reason, due/escalation policy reference, fallback and decision-right classification." },
  { title: "Sequential / parallel", description: "Only shows configuration modes actually supported; parallel steps define their completion rule — all, any, or threshold." },
  { title: "High-risk decision", description: "A workflow may assist routing and context, but a consequential employment decision keeps approved human review at its center." },
];

export function DecisionRightsSection() {
  return (
    <section className="bg-[#F1F5F9] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Decision rights stay explicit and human-accountable.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              A workflow can assist routing and context — but a
              consequential HR outcome keeps a named, authorized human
              decision at its center.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 space-y-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.06 + i * 0.06}>
              <div className="rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <p className="font-semibold text-ink">{card.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} y={30}>
          <PlaceholderImage
            src="/images/workflows-approvals/decision-rights.webp"
            alt="Colleagues reviewing information together at a table"
            label="Human-accountable decisions"
            fit="contain"
            className="mt-6 w-full rounded-2xl"
          />
        </Reveal>
      </Container>
    </section>
  );
}
