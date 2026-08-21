import { Container, Reveal } from "@/components/ui";

/**
 * Questions come from the approved design. Answers are intentionally empty
 * until the approved answer copy is supplied — nothing is drafted here.
 */
const FAQS: { question: string; answer: string }[] = [
  { question: 'What does "Growing Businesses" mean here?', answer: "" },
  { question: "Is Zoiko HR only for small businesses?", answer: "" },
  {
    question: "What foundations should a growing organization review?",
    answer: "",
  },
  { question: "Does Zoiko HR automate employment decisions?", answer: "" },
  {
    question: "Does Zoiko HR guarantee HR or employment compliance?",
    answer: "",
  },
  {
    question: "Can Zoiko HR connect to payroll and time systems?",
    answer: "",
  },
  { question: "How long does implementation take?", answer: "" },
  { question: "How much does it cost?", answer: "" },
  { question: "Can existing customers use this page?", answer: "" },
];

export function GrowingFaqSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Common questions answered directly.
            </h2>
          </Reveal>
        </div>

        <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold text-ink">
                    {faq.question}
                  </span>
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white text-ink/50 transition-transform duration-200 group-open:rotate-45 group-open:bg-primary-light group-open:text-primary">
                    +
                  </span>
                </summary>
                {faq.answer && (
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {faq.answer}
                  </p>
                )}
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
