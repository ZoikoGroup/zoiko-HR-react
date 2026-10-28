import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const QUESTIONS = [
  {
    number: "01",
    question: "Where does each worker belong?",
    answer:
      "Group, legal entity, location, business unit, department and other supported organizational dimensions are represented explicitly.",
  },
  {
    number: "03",
    question: "Who can see and act on what?",
    answer:
      "Role-based access and scoped responsibilities reduce unnecessary visibility across entities and teams.",
  },
  {
    number: "05",
    question: "How can leaders see the whole organization?",
    answer:
      "Local views coexist with consolidated workforce reporting and operational visibility subject to permission scope.",
  },
];

export function ExpansionReadinessSection() {
  return (
    <section className="bg-[#f8fafc] py-24">
      <Container>
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Expansion Readiness
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            A global HR foundation should answer six questions before the
            next entity goes live.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {QUESTIONS.map((item, i) => (
              <Reveal key={item.number} delay={0.1 + i * 0.08}>
                <div className="rounded-xl border border-ink/[0.08] bg-white p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-primary/[0.08] px-2 py-1 font-mono text-xs text-primary">
                      {item.number}
                    </span>
                    <p className="text-sm font-semibold text-ink">
                      {item.question}
                    </p>
                  </div>
                  <p className="mt-3 pl-[44px] text-sm leading-relaxed text-ink/60">
                    {item.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/global-hr-operations/readiness-team.png"
              alt="HR team reviewing expansion readiness in a meeting room"
              label="Ready before the next entity goes live"
              fit="cover"
              className="h-full min-h-[300px] w-full rounded-xl border border-ink/[0.08] shadow-lg shadow-slate-900/5"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
