import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * The first answer is the one the design publishes verbatim. The rest restate
 * rules already established elsewhere on this page — no capability, entitlement
 * or availability is asserted beyond them.
 */
const FAQS = [
  {
    question: "What is Zoiko HR Self-Service?",
    answer:
      "A role-appropriate access layer for approved records, structured requests, documents and assigned tasks; what each user can see or do depends on current authorization, configuration and the owning product module.",
  },
  {
    question: "Can employees edit their own HR data?",
    answer:
      "It depends on the field. Each record row pairs an approved value with its source and an explicit action — view, direct edit, propose an update, or request a correction. A proposed update or correction never replaces the current record until the owning module confirms it.",
  },
  {
    question: "Can managers see all employee information?",
    answer:
      "No. Managers and delegated approvers see minimum necessary context for the work assigned to them — a scoped team task and approval queue, never a full-organization view. Access is computed from role, relationship, scope, purpose, object state and delegation, never from a job title alone.",
  },
  {
    question: "Does Self-Service replace Workflows & Approvals?",
    answer:
      "No. Self-Service surfaces information and actions; it is never a second system of record. Routing and approval remain with the owning module, and every card and task names the module that owns it.",
  },
  {
    question: "Can employees see leave balances and requests?",
    answer:
      "Self-Service surfaces your own leave request, balance and calendar entry points. Leave & Attendance remains the policy, balance and approval authority.",
  },
  {
    question: "Are document acknowledgments electronic signatures?",
    answer:
      "Acknowledgment meaning and version tracking are configured during implementation, so what an acknowledgment represents depends on that approved configuration. It is not asserted here to be an electronic signature.",
  },
  {
    question: "Does Self-Service use AI to decide what employees should do?",
    answer:
      "No. Effective access is computed at the moment of use from role, relationship, scope, purpose, object state and delegation. The decision output is always one of a fixed set — view, direct edit, propose, correct, request, complete task, decide, acknowledge or restricted — with a safe reason category.",
  },
];

export function SelfServiceFaqSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        {/* The whole block is a centred ~900px column, with its text left
            aligned inside — as the design lays it out. */}
        <div className="mx-auto max-w-[900px]">
          <SectionHeading
            eyebrow="Questions"
            title="Direct answers about Self-Service."
          />

          <div className="mt-10 border-t border-slate-200">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.28)}>
                <details className="group border-b border-slate-200">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5">
                    <span className="text-base font-bold text-sky-950">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className="pt-0.5 text-lg leading-none text-slate-500"
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
