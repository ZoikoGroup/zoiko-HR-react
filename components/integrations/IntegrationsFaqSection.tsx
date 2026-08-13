import { Container, Reveal } from "@/components/ui";

const LEFT_FAQS = [
  {
    question: "What are Zoiko HR Integrations?",
    answer:
      "Approved connections between Zoiko HR and business systems — identity, time, payroll, recruiting, benefits, learning, documents, and analytics — governed by explicit purpose, authority, and evidence.",
  },
  {
    question: "Can HR, time, and payroll connect?",
    answer:
      "Yes. Approved worker, position, and schedule data flows to time tracking, and approved time results flow to payroll — calculation and filing remain with the payroll system.",
  },
  {
    question: "How are conflicts handled?",
    answer:
      "Every field has a declared source and direction. No sensitive value is silently overwritten by a \"last write wins\" rule.",
  },
  {
    question: "How are integrations monitored?",
    answer:
      "Through health status, exception panels, and reconciliation history for every connection, without an implied contractual SLA.",
  },
  {
    question: "Is every connector included in every plan?",
    answer:
      "No. Provider availability, scope, and setup route vary by plan, contract, configuration, and jurisdiction.",
  },
];

const RIGHT_FAQS = [
  {
    question: "Which systems integrate?",
    answer:
      "Identity and access, time and attendance, payroll, recruiting, benefits, learning, documents and e-signature, and the wider Zoiko ecosystem — subject to current validation.",
  },
  {
    question: "How is data protected?",
    answer:
      "Through least-privilege access, service identities, approved encryption, classification, and secure logs described in the Trust Center.",
  },
  {
    question: "Are APIs and webhooks available?",
    answer:
      "Yes, alongside file/batch and managed-connector patterns. Select a pattern by criticality, latency, volume, and recovery needs — see the developer documentation for specifics.",
  },
  {
    question: "How is a connection implemented?",
    answer:
      "Through a governed path of discovery, assessment, design, preparation, configuration, testing, acceptance, and launch, with ongoing operation and improvement.",
  },
  {
    question: "Where can I get help?",
    answer:
      "Through Developer Documentation, Service Status, Product Updates, and Contact Support links available in the site footer.",
  },
];

function FaqColumn({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-slate-200 border-t border-slate-200">
      {faqs.map((faq, i) => (
        <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
          <details className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
              <span className="font-semibold text-ink">{faq.question}</span>
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-200 text-ink/50 transition-transform duration-200 group-open:rotate-45 group-open:bg-primary-light group-open:text-primary">
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
  );
}

export function IntegrationsFaqSection() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <Container>
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Questions
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Direct answers about integrations.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-10 gap-y-2 lg:grid-cols-2">
          <FaqColumn faqs={LEFT_FAQS} />
          <FaqColumn faqs={RIGHT_FAQS} />
        </div>
      </Container>
    </section>
  );
}
