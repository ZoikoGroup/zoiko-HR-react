import { Container, Reveal } from "@/components/ui";

const LEFT_FAQS = [
  {
    question: "What is time and attendance software for HR teams?",
    answer:
      "Time and attendance software helps HR record, review, approve, and report work time, attendance, breaks, and related exceptions. ZoikoTime adds deterministic policy classification, evidence history, worker review, and human approval without invasive activity monitoring.",
  },
  {
    question: "Does ZoikoTime take screenshots or record keystrokes?",
    answer: "No. ZoikoTime does not capture screenshots, keystrokes, or other invasive activity monitoring at any tier or configuration.",
  },
  {
    question: "How does ZoikoTime handle attendance exceptions?",
    answer: "Exceptions are classified by policy, surfaced in a review queue by age and required reviewer, and resolved through worker context, manager review, or HR action.",
  },
  {
    question: "Does ZoikoTime integrate with payroll and HR systems?",
    answer: "Yes. Approved, traceable records flow into payroll preparation, and worker profile and organization data synchronize with connected HR systems.",
  },
  {
    question: "Can ZoikoTime support multiple countries?",
    answer: "Yes. Policies for time, attendance, breaks, approvals, and review can be configured by organization, location, role, and worker type under one governed record model.",
  },
];

const RIGHT_FAQS = [
  {
    question: "How does ZoikoTime help HR and People teams?",
    answer: "It gives HR one operational view of attendance, exceptions, corrections, approvals, and export readiness — reducing after-the-fact reconciliation across fragmented systems.",
  },
  {
    question: "Can workers see and correct their time records?",
    answer: "Yes. Workers can view their approved record, add context, request correction, and use configured escalation routes if they disagree with a status.",
  },
  {
    question: "Can ZoikoTime support remote and hybrid workforces?",
    answer: "Yes. ZoikoTime manages attendance, breaks, approvals, and disputes across office, remote, hybrid, and contractor work.",
  },
  {
    question: "How is AI used in ZoikoTime?",
    answer: "Policy application is deterministic. Any AI assistance requires an approved purpose, permission, and human review — it does not make autonomous employment decisions.",
  },
  {
    question: "Is ZoikoTime suitable for contractor-heavy organizations?",
    answer: "Yes. Worker type is a configurable policy dimension, so contractor time, attendance, and approval rules can differ from employee rules within the same governed system.",
  },
];

function FaqColumn({ faqs, firstOpen = false }: { faqs: { question: string; answer: string }[]; firstOpen?: boolean }) {
  return (
    <div className="divide-y divide-slate-200 border-t border-slate-200">
      {faqs.map((faq, i) => (
        <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
          <details className="group py-5" open={firstOpen && i === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
              <span className="font-semibold text-ink">{faq.question}</span>
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-200 text-ink/50 transition-transform duration-200 group-open:rotate-45 group-open:bg-emerald-100 group-open:text-emerald-600">
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

export function HrTeamsFaqSection() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <Container>
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            HR questions answered
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Direct Answers for HR and People Teams.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-10 gap-y-2 lg:grid-cols-2">
          <FaqColumn faqs={LEFT_FAQS} firstOpen />
          <FaqColumn faqs={RIGHT_FAQS} />
        </div>
      </Container>
    </section>
  );
}
