import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What are Employee Records in Zoiko HR?",
    answer:
      "A structured record workspace for employee and employment information — with organization context, sources, permissions, effective dates, documents, change history, and auditability.",
  },
  {
    question: "How is a record different from a simple profile?",
    answer:
      "A record pairs each field with its source, owner, sensitivity, and effective date, and preserves prior states — a simple profile typically shows only the current value with no history.",
  },
  {
    question: "How are record changes handled?",
    answer:
      "Changes move through proposal, validation, and approval before becoming effective, and prior states remain visible rather than being overwritten.",
  },
  {
    question: "Can employees and managers edit their own or team records directly?",
    answer:
      "No. Employees and managers can view approved information and request or propose changes within their permitted scope; direct edits go through validation and approval.",
  },
  {
    question: "How are sensitive fields protected?",
    answer:
      "Through field-level sensitivity classification and role-scoped visibility — restricted values never surface through search, filters, exports, or error messages.",
  },
  {
    question: "Are bulk changes safe?",
    answer:
      "Yes. Bulk update, import, merge, and archive actions run through validation, preview, approval, and audit — silent mass overwrite is prohibited.",
  },
  {
    question: "How are correction, access, and deletion requests handled?",
    answer:
      "Every request is checked against retention, legal hold, payroll, and other active obligations before a decision is recorded.",
  },
  {
    question: "Does Zoiko HR guarantee legal or payroll compliance?",
    answer:
      "No. Zoiko HR provides software for workforce administration; it does not guarantee local employment, privacy, tax, or payroll compliance.",
  },
];

export function EmployeeRecordsFaqSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Questions
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Direct answers about employee records.
            </h2>
          </Reveal>
        </div>

        <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group py-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold text-ink">{faq.question}</span>
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
