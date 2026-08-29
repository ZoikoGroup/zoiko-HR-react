import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "Who leads Zoiko HR?",
    answer:
      "Approved executive leaders are published in the Executive leadership section. Each card renders from an eligible Role Mapping record — names and titles come from the Leadership Registry, never from this page.",
  },
  {
    question: "Who is on the Zoiko HR leadership team?",
    answer:
      "The published team includes approved executive leaders and product/functional leaders. Categories and cards render only when eligible registry records exist.",
  },
  {
    question: "What areas does Zoiko HR leadership cover?",
    answer:
      "Public responsibility areas are listed in Leadership areas of accountability. They do not reveal internal reporting lines, team sizes, decision authority, or confidential organizational structure.",
  },
  {
    question: "How is leadership information kept current?",
    answer:
      "Through a source-governed process: source owner, source validation, publish approval, and scheduled review. Review runs at minimum quarterly, plus event-driven review for role changes, departures, title updates, withdrawn consent, or material profile changes.",
  },
  {
    question: "Where can I find Zoiko HR careers information?",
    answer:
      "Through the Careers destination. Open roles, locations, benefits, and hiring terms are maintained there — no open-role counts, salary information, or hiring commitments appear on this page.",
  },
  {
    question: "Where can partners engage with Zoiko HR?",
    answer:
      "Partnership programs, partner types, and engagement pathways are managed through the Partners destination. This page provides leadership context only.",
  },
  {
    question: "Where are official Zoiko HR announcements published?",
    answer:
      "Through the Newsroom. Product update feeds, documentation changelogs, and blog posts are distinct from official corporate publications.",
  },
];

export function LeadershipFaqSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Leadership FAQ — direct answers.
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
              <details className="group rounded-xl border border-black/10 bg-white px-6 py-4 transition-colors duration-200 open:bg-slate-50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-sm font-semibold text-ink">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden
                    className="flex-none text-sm leading-none text-primary transition-transform duration-200 group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
