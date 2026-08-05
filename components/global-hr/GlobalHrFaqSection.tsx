import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What is Zoiko HR?",
    answer:
      "Zoiko HR is a global HR management platform for organizing employee and organizational information, coordinating onboarding and workforce changes, routing approvals, and supporting authorized employee and manager access.",
  },
  {
    question: "What does Core HR include?",
    answer:
      "Core HR organizes people, employment, position, department, entity, location, manager, team, document, policy acknowledgment, and lifecycle-event records with clear ownership and effective dates.",
  },
  {
    question: "Can Zoiko HR support multiple entities and locations?",
    answer:
      "Yes. Zoiko HR is built for multi-entity, multi-location operations, with an Entity Portfolio view and approved local configuration for jurisdiction-specific requirements.",
  },
  {
    question: "How are employee records protected?",
    answer:
      "Through role-appropriate, permission-sensitive access, field-level sensitivity labels, audit history, and platform security practices described in the Trust Center.",
  },
  {
    question: "Can employees and managers update information?",
    answer:
      "Authorized employees and managers can propose changes, request corrections, and complete assigned tasks within their permitted scope — all subject to approval and audit history.",
  },
  {
    question: "Does Zoiko HR provide payroll, legal, or compliance advice?",
    answer:
      "No. Zoiko HR provides software for workforce administration; it does not provide legal, tax, payroll, employment, or compliance advice and does not guarantee compliance with any law.",
  },
  {
    question: "Can Zoiko HR connect with time and payroll systems?",
    answer:
      "Zoiko HR can connect with approved time and payroll systems through its integrations layer, following an authoritative-source rule for every shared field.",
  },
  {
    question: "How is Zoiko HR implemented?",
    answer:
      "Through a controlled path of discovery, design, data preparation, configuration, validation, launch, and adoption — with scope and timing varying by contract, complexity, and jurisdiction.",
  },
  {
    question: "How much does Zoiko HR cost?",
    answer:
      "Pricing depends on organization size, entity/location complexity, required product areas, integrations, and support level. Use Request Pricing for a commercial conversation.",
  },
  {
    question: "Where can existing customers get help?",
    answer:
      "Through the Help Center, Documentation, Administrator Guide, and Contact Support links available in the site footer.",
  },
];

export function GlobalHrFaqSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Section 20 — FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Frequently asked questions.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 max-w-2xl divide-y divide-slate-200 rounded-2xl border border-slate-100 shadow-sm shadow-slate-900/[0.03]">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group px-6 py-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold text-ink">
                    {faq.question}
                  </span>
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-100 text-ink/50 transition-transform duration-200 group-open:rotate-45 group-open:bg-primary-light group-open:text-primary">
                    +
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
