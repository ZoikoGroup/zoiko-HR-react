import { Container, Reveal } from "@/components/ui";

const FAQS = [
  { question: "What is global HR management?", answer: "Coordinating employee records, organizational structure, workflows and reporting across multiple countries or legal entities within one governed HR environment." },
  { question: "How can a company manage HR across multiple countries?", answer: "By representing each entity and location explicitly, applying a shared global foundation, and layering approved local configuration where jurisdictions require it." },
  { question: "Can HR processes be standardized across countries?", answer: "Yes, for the parts of a process that do not depend on local requirements. Where a local difference is required, it is applied as a deliberate, visible variant rather than a duplicated process." },
  { question: "Does Zoiko HR provide employer-of-record services?", answer: "No. Zoiko HR is a governed HR records and workflow platform, not an employer-of-record or professional employer organization service." },
  { question: "Does Zoiko HR automatically make an organization compliant in every country?", answer: "No. Configuration can reflect approved local operating requirements, but legal and regulatory compliance remains the organization's responsibility, informed by its own counsel." },
  { question: "Can Zoiko HR support multiple legal entities?", answer: "Yes. Group hierarchy, legal entities, business units and locations are represented explicitly, with entity-scoped configuration and access." },
  { question: "How does Zoiko HR connect with time and payroll?", answer: "Through approved integrations with products such as ZoikoTime and Zoiko Payroll, subject to each product's own approved scope and configuration." },
  { question: "How do we migrate from different local HR systems?", answer: "Through a structured implementation path — inventorying source systems, mapping and validating data, configuring global and local rules, then rolling out in controlled waves." },
];

export function GlobalExpansionFaqSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Frequently asked
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Questions global HR teams ask before expanding.
            </h2>
          </Reveal>
        </div>

        <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold text-ink">{faq.question}</span>
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-100 text-ink/50 transition-transform duration-200 group-open:rotate-45 group-open:bg-primary-light group-open:text-primary">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
