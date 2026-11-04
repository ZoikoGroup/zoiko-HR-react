import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * The first answer is published verbatim by the design. The rest restate
 * boundaries already established elsewhere on this page — no framework,
 * automation or legal claim is introduced beyond them.
 */
const FAQS = [
  {
    question: "What does Zoiko Comply do with Zoiko HR?",
    answer:
      "Zoiko Comply is the ecosystem relationship for approved policies, controls, evidence and compliance workflows, with scope, source authority, versions, permissions and review meaning preserved by current configuration.",
  },
  {
    question: "Does Zoiko Comply guarantee compliance?",
    answer:
      "No. Workflow status and evidence presence are governance-owned facts, never a guarantee of legal or regulatory compliance. A compliance conclusion can only come from a separately approved legal or compliance authority.",
  },
  {
    question: "Does Zoiko Comply provide legal advice?",
    answer:
      "No. Nothing shown here is legal advice, and no legal or regulatory interpretation should be inferred from this page. Legal meaning stays with the approved authority that owns it.",
  },
  {
    question: "Which frameworks or regulations are supported?",
    answer:
      "Named framework or jurisdiction coverage is shown only when a current Coverage Registry record exists for it. No universal applicability is implied, and coverage is not asserted outside that record.",
  },
  {
    question: "Is evidence collected automatically?",
    answer:
      "Automatic or continuous evidence collection is described only when a current Automation Capability record defines its source, cadence and limits. Where no such record exists, no automation is claimed.",
  },
  {
    question: "What does accepted evidence mean?",
    answer:
      "Accepted for requirement means the evidence meets the current stated evidence-review rule for the exact scope, version and period. It is not a legal or regulatory compliance conclusion, and received is not reviewed.",
  },
  {
    question: "Can an exception be closed automatically?",
    answer:
      "No. Closure requires explicit criteria and current evidence. A workflow moving forward or a date passing alone never closes a case, and expired evidence or a withdrawn source can reopen a closed one.",
  },
];

export function ComplyFaqSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        {/* A centred ~900px column with its text left aligned inside. */}
        <div className="mx-auto max-w-[900px]">
          <SectionHeading
            eyebrow="Questions"
            title="Claim-safe answers about Zoiko Comply."
          />

          <div className="mt-10 border-t border-slate-200">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.28)}>
                <details open={i === 0} className="group border-b border-slate-200">
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
