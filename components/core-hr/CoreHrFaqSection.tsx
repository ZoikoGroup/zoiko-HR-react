import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What is Core HR?",
    answer:
      "Core HR is the employee and organizational data foundation for structuring workforce records, employment relationships, positions, organization structures, permissions, documents, and effective-dated changes.",
  },
  {
    question: "How is a person different from an employment relationship?",
    answer:
      "A person represents the individual identity; an employment relationship represents a specific position, entity, and set of dates tied to that person — one person can have more than one employment relationship over time.",
  },
  {
    question: "Does Core HR preserve historical and future changes?",
    answer:
      "Yes. Current, proposed, approved future, effective, superseded, corrected, and reversed states remain distinguishable — nothing is silently overwritten.",
  },
  {
    question: "Can employees and managers edit records directly?",
    answer:
      "Authorized employees and managers can propose changes and submit required information within their permitted scope; changes route through validation and approval before becoming effective.",
  },
  {
    question: "How does Core HR support multiple entities and locations?",
    answer:
      "Records carry entity, location, and jurisdiction context, with approved local configuration for fields, policies, and access at each operating scope.",
  },
  {
    question: "Can Core HR connect to payroll and time systems?",
    answer:
      "Core HR can connect with approved payroll and time systems through the integrations layer, following an authoritative-source rule for every shared field.",
  },
  {
    question: "Does Zoiko HR guarantee employment, payroll, tax, or legal compliance?",
    answer:
      "No. Zoiko HR provides software for workforce administration; customers remain responsible for their own policies, employment decisions, and compliance obligations.",
  },
  {
    question: "How much does Core HR cost?",
    answer:
      "Pricing depends on organization size, entity/location complexity, required product areas, integrations, and support level. Use Request Pricing for a commercial conversation.",
  },
];

export function CoreHrFaqSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Common questions
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 max-w-2xl space-y-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details
                className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition-colors duration-200 open:bg-white/[0.08]"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold">{faq.question}</span>
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/10 text-white/60 transition-transform duration-200 group-open:rotate-45 group-open:bg-primary group-open:text-white">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
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
