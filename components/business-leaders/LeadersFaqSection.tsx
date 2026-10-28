import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * The design publishes the six questions collapsed, with no answer text. Each
 * answer below restates capability the page already describes — the executive
 * view, the role/scope/policy governance rule, growth configuration and the
 * connected-product boundary — and adds no numeric or legal claim.
 */
const FAQS = [
  {
    question: "What is HR software for business leaders?",
    answer:
      "A governed platform that brings employee records, organizational structure, HR workflows, documents, policies and reporting together, so leaders can see approved workforce information without administering it directly.",
  },
  {
    question: "How does Zoiko HR help leaders manage workforce information?",
    answer:
      "It can surface a concise, permission-aware executive view — permitted metrics and workforce signals, authorized filters by time period, entity, business unit and team, workflow exceptions and approval status, and organizational structure and headcount — without HR administration overhead.",
  },
  {
    question: "Can business leaders see employee information in Zoiko HR?",
    answer:
      "Only what their role, business scope and configured policy permit. Business leaders receive authorized organizational and workforce visibility aligned to role, scope and policy — a senior role does not equal unrestricted visibility.",
  },
  {
    question: "Can Zoiko HR support growing or multi-entity organizations?",
    answer:
      "Teams, business units, entities and locations can be added without rebuilding HR processes from scratch, and HR operations can be configured by entity, team and jurisdiction within one governed environment.",
  },
  {
    question: "Does Zoiko HR connect with time and payroll workflows?",
    answer:
      "Approved schedule, attendance and timesheet information can be connected from ZoikoTime, and structured HR and employment data can act as the authoritative source for payroll preparation workflows. These remain connected products with clear boundaries rather than being collapsed into Zoiko HR.",
  },
  {
    question: "Is Zoiko HR a replacement for legal or HR advice?",
    answer:
      "No. Zoiko HR supports HR administration and record-keeping; it does not provide legal or HR advice and makes no legal guarantees. Decisions requiring legal or professional judgment remain with your own advisors.",
  },
];

export function LeadersFaqSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Common questions"
              title="Answers for business leaders."
            >
              Each answer is written to be clear, self-contained and accurate
              without overstating product capabilities or making legal
              guarantees.
            </SectionHeading>

            <Reveal delay={0.1}>
              <PlaceholderImage
                src="/images/business-leaders/faq.webp"
                alt="Colleagues laughing during a meeting"
                label="Common questions"
                className="mt-6 aspect-[320/150] w-full rounded-lg bg-slate-100"
              />
            </Reveal>
          </div>

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
