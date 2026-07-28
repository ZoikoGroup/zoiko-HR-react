import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What is Zoiko HR?",
    answer:
      "Zoiko HR is a global human resources management platform for employee records, organizational structures, onboarding, leave, documents, policies, approvals, performance processes, self-service, reporting, governed AI assistance, and workforce administration.",
  },
  {
    question: "Why was Zoiko HR established?",
    answer:
      "To replace fragmented, manual HR administration with one governed operating foundation for people operations.",
  },
  {
    question: "Who is Zoiko HR designed for?",
    answer:
      "Growing businesses, mid-market organizations, global organizations, and multi-entity enterprises, with role-appropriate experiences for HR teams, leaders, managers, employees, and authorized technical users.",
  },
  {
    question: "What services accompany the software?",
    answer:
      "Implementation, configuration, data migration, integration, enablement, and customer-support services where agreed.",
  },
  {
    question: "Can Zoiko HR support multiple countries and legal entities?",
    answer:
      "Yes. Zoiko HR is built for multi-entity, multi-jurisdiction operations with approved local configuration for fields, policies, and access.",
  },
  {
    question:
      "Does Zoiko HR guarantee employment-law or regulatory compliance?",
    answer:
      "No. Zoiko HR provides software for workforce administration; customers remain responsible for their own policies, employment decisions, and compliance obligations.",
  },
  {
    question: "Can Zoiko HR be purchased without Zoiko One?",
    answer:
      "Yes. Zoiko HR has its own independent subscription, onboarding, and support journey and does not require Zoiko One.",
  },
  {
    question: "Does Zoiko HR include payroll and time management?",
    answer:
      "Zoiko HR can connect with approved payroll and time systems through its integrations layer; it is not itself a payroll or time system.",
  },
  {
    question: "How does Zoiko HR use AI?",
    answer:
      "AI assistance helps users find information, summarize status, and draft content within permission and review boundaries — it does not silently perform autonomous, high-impact employment decisions.",
  },
  {
    question: "How is workforce information protected?",
    answer:
      "Through role-appropriate access, data protection controls, auditability, and platform security practices described in the Trust Center.",
  },
  {
    question: "How is Zoiko HR implemented and supported?",
    answer:
      "Through a controlled path of discovery, configuration, data, integration, validation, launch, and adoption, backed by documentation and customer support.",
  },
  {
    question: "Who owns and operates Zoiko HR, and where is it based?",
    answer:
      "Zoiko HR is owned and operated by Zoiko Tech Inc., a Zoiko Group company, headquartered in Sacramento, California, with a European headquarters in London.",
  },
  {
    question: "How can I contact, partner with, or work for Zoiko HR?",
    answer:
      "Through the Contact Us, Partner With Us, and Careers pages linked in the site footer.",
  },
];

export function AboutFaqSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Questions buyers and stakeholders ask
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Direct answers to common questions.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 divide-y divide-slate-200 border-t border-slate-200">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group py-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <span className="flex items-start gap-4">
                    <span className="font-serif text-lg italic text-primary/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold text-ink">
                      {faq.question}
                    </span>
                  </span>
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-100 text-ink/50 transition-transform duration-200 group-open:rotate-45 group-open:bg-primary-light group-open:text-primary">
                    +
                  </span>
                </summary>
                <p className="mt-3 pl-9 text-sm leading-relaxed text-ink/60">
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
