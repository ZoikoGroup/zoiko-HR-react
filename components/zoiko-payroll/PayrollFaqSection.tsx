import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * The first answer is published verbatim by the design. The rest restate
 * boundaries already established elsewhere on this page — no calculation,
 * payment, filing or cutoff claim is introduced beyond them.
 */
const FAQS = [
  {
    question: "What does Zoiko HR share with Zoiko Payroll?",
    answer:
      "Zoiko HR may coordinate approved employee and payroll-preparation information with Zoiko Payroll only within the configured source, purpose, permission, mapping and timing boundaries.",
  },
  {
    question: "Does this mean Zoiko HR calculates payroll?",
    answer:
      "No. Zoiko HR prepares and hands off approved context — it never calculates, approves, pays or files payroll. Payroll calculation, statutory treatment, payment, filing and accounting posting remain with the approved payroll process and its reviewers.",
  },
  {
    question: "Does accepted mean payroll is complete?",
    answer:
      "No. Acceptance is an intake state: the destination accepted the handoff according to approved semantics. It does not imply payroll was calculated, approved, paid, filed or posted — and sent is not accepted either.",
  },
  {
    question: "Can Zoiko HR send time information to payroll?",
    answer:
      "Only approved, mapped time-related context where configured. Schedule, attendance and timesheet information is owned by ZoikoTime or the applicable time authority, and only mapped approved context may reach payroll.",
  },
  {
    question: "Are payroll cutoffs automatic?",
    answer:
      "No universal cutoff window is assumed. Pay periods and cutoff rules are source-governed and versioned, and unknown or late timing becomes a review state rather than silently defaulting to the current period.",
  },
  {
    question: "Is Zoiko Payroll required to use Zoiko HR?",
    answer:
      "No. Zoiko Payroll is an optional ecosystem relationship, and using it never requires adopting Zoiko One or the wider suite.",
  },
];

export function PayrollFaqSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        {/* A centred ~900px column with its text left aligned inside. */}
        <div className="mx-auto max-w-[900px]">
          <SectionHeading
            eyebrow="Questions"
            title="Direct answers about Zoiko Payroll."
          />

          <div className="mt-10 border-t border-slate-200">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.28)}>
                <details
                  open={i === 0}
                  className="group border-b border-slate-200"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5">
                    <span className="text-base font-bold text-sky-950">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className="pt-0.5 text-lg leading-none text-slate-400"
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p className="max-w-[780px] pb-5 text-sm leading-6 text-slate-500">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
