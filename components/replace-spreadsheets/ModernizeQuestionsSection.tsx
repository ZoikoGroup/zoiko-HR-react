import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const QUESTIONS = [
  {
    question: "Can we move everything at once?",
    answer: "You do not have to. Prioritize the records and workflows that create the most operational value, then expand in controlled phases.",
  },
  {
    question: "How do we avoid disruption?",
    answer: "Use validation, representative-user testing, reconciliation and a documented cutover plan before retiring critical legacy workarounds.",
  },
  {
    question: "What if another system must stay?",
    answer: "Use a coexistence or integration pattern where supported rather than forcing unnecessary replacement.",
  },
];

export function ModernizeQuestionsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Modernize without stopping HR.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Direct answers to the questions that come up before a
              transition begins.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_1fr] lg:items-stretch">
          <div className="flex flex-col gap-3">
            {QUESTIONS.map((item, i) => (
              <Reveal key={item.question} delay={0.06 + i * 0.06} className="flex flex-1">
                <div className="flex w-full flex-col justify-center rounded-2xl bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <p className="font-semibold text-ink">{item.question}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{item.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24} y={30} className="flex">
            <PlaceholderImage
              src="/images/replace-spreadsheets/modernize-questions.png"
              alt="A team collaborating around laptops at a shared workspace"
              label="Modernize without stopping HR"
              className="h-full min-h-[280px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
