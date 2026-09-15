import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const QUESTIONS = [
  {
    number: "01",
    question: "Where does each worker belong?",
    answer: "Group, legal entity, location, business unit, department and other supported organizational dimensions are represented explicitly.",
  },
  {
    number: "03",
    question: "Who can see and act on what?",
    answer: "Role-based access and scoped responsibilities reduce unnecessary visibility across entities and teams.",
  },
  {
    number: "05",
    question: "How can leaders see the whole organization?",
    answer: "Local views coexist with consolidated workforce reporting and operational visibility subject to permission scope.",
  },
];

export function ReadinessQuestionsSection() {
  return (
    <section className="bg-[#F1F5F9] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Expansion readiness
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              A global HR foundation should answer six questions before
              the next entity goes live.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_1fr] lg:items-stretch">
          <div className="flex flex-col gap-3">
            {QUESTIONS.map((item, i) => (
              <Reveal key={item.number} delay={0.06 + i * 0.06} className="flex flex-1">
                <div className="flex w-full flex-col justify-center rounded-2xl bg-white p-5 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="inline-flex w-fit items-center rounded-md bg-primary-light px-2 py-0.5 text-xs font-semibold text-primary">
                    {item.number}
                  </span>
                  <p className="mt-2 font-semibold text-ink">{item.question}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{item.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24} y={30} className="flex">
            <PlaceholderImage
              src="/images/global-expansion/readiness-questions.png"
              alt="A team meeting in a bright room with plants and natural light"
              label="Expansion readiness"
              className="h-full min-h-[280px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
