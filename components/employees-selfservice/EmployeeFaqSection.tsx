import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * The design publishes the nine questions collapsed, with no answer text. Each
 * answer restates capability this page already describes, and keeps the two
 * limits the page is explicit about: Zoiko HR does not calculate payroll, and
 * jurisdiction-aware configuration is not a compliance guarantee.
 */
const FAQS = [
  {
    question: "What is employee self-service HR software?",
    answer:
      "Software that gives employees secure access to their own HR information, documents, requests and assigned actions, so routine HR tasks can be completed without going through an administrator for every step.",
  },
  {
    question: "What can employees do in Zoiko HR?",
    answer:
      "View the personal and employment information their role permits, manage permitted personal details, submit and track configured HR requests, read and acknowledge assigned documents, and complete onboarding, change and offboarding actions.",
  },
  {
    question: "Can employees update their personal information?",
    answer:
      "Where the organization has configured a field as directly editable, yes. Everything else is changed by submitting a request that routes to HR or the designated approver — self-service does not mean uncontrolled editing.",
  },
  {
    question: "Can employees track HR requests?",
    answer:
      "Yes. Requests move through a visible status model — draft, submitted, in review, action required, approved, declined and completed — so employees can see what was received and when another action is needed. Exact labels may vary by organization and request type.",
  },
  {
    question: "Can Zoiko HR support employee onboarding?",
    answer:
      "Onboarding actions, policies and essential organization information can be surfaced as a guided checklist with required tasks prioritized and clear due states. Before joining, employees can see what is required and what has already been completed.",
  },
  {
    question: "Can employees access HR documents and policies?",
    answer:
      "Relevant HR documents, handbook content, assigned acknowledgments and organization guidance are discoverable where the organization has configured them, with current version and effective date shown, and only within the employee's permitted scope.",
  },
  {
    question: "Does Zoiko HR include time tracking and payroll?",
    answer:
      "No. Time and attendance belong to ZoikoTime and payroll to Zoiko Payroll — separate connected products, available where purchased and configured. Zoiko HR does not calculate or process payroll.",
  },
  {
    question: "Can Zoiko HR support employees in multiple countries?",
    answer:
      "It can support organization-configured differences in workflows, content, fields and access where the product architecture permits. Jurisdiction-aware means it can be configured for local differences — not that it guarantees legal compliance in every country.",
  },
  {
    question: "How does Zoiko HR protect employee information?",
    answer:
      "Employees see their own information plus what their role and organizational scope explicitly permit. Sensitive fields require appropriate authorization, and authentication, session, MFA/SSO and device-security requirements are defined by the approved security architecture.",
  },
];

export function EmployeeFaqSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
          <SectionHeading
            eyebrow="Common questions"
            title="Answers for employees."
          >
            Each answer is written to be accurate, self-contained and honest
            about where configuration or jurisdiction affects capability.
          </SectionHeading>

          <Reveal delay={0.08} amount={0}>
            <div className="flex flex-col gap-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-slate-200 bg-white transition-colors hover:border-slate-300"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-6 py-5">
                    <span className="flex-1 break-words text-base font-semibold leading-5 text-slate-950">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className="flex-none text-xs text-slate-400 transition-transform group-open:rotate-180"
                    >
                      ⌄
                    </span>
                  </summary>
                  <p className="break-words px-6 pb-5 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
