import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What is the Zoiko HR Solutions page?",
    answer:
      "An entry point that organizes evaluation around seven approved pathways, so you can start from your organization context or your responsibility and reach the same Zoiko HR platform.",
  },
  {
    question: "Which solution is right for us?",
    answer:
      "More than one may fit. Use the selector as optional guidance, then browse the pathways directly — they are navigation routes, not eligibility categories.",
  },
  {
    question:
      "What is the difference between Global Organizations and Multi-Entity Enterprises?",
    answer:
      "Global Organizations focuses on coordinating shared structures across jurisdictions and locations. Multi-Entity Enterprises focuses on governance across distinct legal entities and business units. Many organizations are both.",
  },
  {
    question:
      "Are Growing Businesses and Mid-Market Organizations based on employee count?",
    answer:
      "No. No employee count, revenue, or geography thresholds apply. The distinction is the operating problem being solved — establishing foundations versus standardizing existing operations.",
  },
  {
    question: "What does Connect HR, Time & Payroll mean?",
    answer:
      "Authorized coordination across Zoiko HR, ZoikoTime, and Zoiko Payroll, with authoritative sources, approvals, timing, exceptions, and reconciliation kept explicit. Zoiko HR does not calculate payroll.",
  },
  {
    question: "Can Zoiko HR support every country?",
    answer:
      "No. Capabilities, integrations, localization, and availability vary by plan, contract, configuration, and jurisdiction. Confirm specific country requirements during evaluation.",
  },
  {
    question: "Does Zoiko HR guarantee legal or payroll compliance?",
    answer:
      "No. Zoiko HR provides software for workforce administration; it does not guarantee local employment, privacy, tax, or payroll compliance.",
  },
  {
    question: "Where can existing customers get help?",
    answer:
      "Existing customers should use their approved support route rather than the public sales forms on this page.",
  },
];

export function SolutionsFaqSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Common questions answered.
            </h2>
          </Reveal>
        </div>

        <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold text-ink">{faq.question}</span>
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white text-ink/50 transition-transform duration-200 group-open:rotate-45 group-open:bg-primary-light group-open:text-primary">
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
