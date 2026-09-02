import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const FAQS = [
  {
    question: "What does this Accessibility page cover?",
    answer:
      "Our approved accessibility commitment, the current conformance record, the scope matrix of which surfaces are in and out of scope, testing methods, known limitations, document and media status, and the route for feedback or an evidence request.",
  },
  {
    question: "Does Zoiko HR conform to WCAG 2.2 AA?",
    answer:
      "No public conformance claim is established. WCAG 2.2 Level AA is the approved implementation target for this public page — a target is not automatically a claim, and no testing evidence record is approved for publication yet.",
  },
  {
    question: "Is Zoiko HR ADA, Section 508 or EN 301 549 compliant?",
    answer:
      "Not established. No legal framework applicability is inferred from the WCAG 2.2 AA implementation target, and nothing on this page is a declaration of legal compliance.",
  },
  {
    question: "Which parts of Zoiko HR were tested?",
    answer:
      "Testing method categories and their scope are listed in Section 6, each currently at Not Established. Named testing results are published only when scope, date, environment, reviewer and result state are approved.",
  },
  {
    question: "Which screen readers does Zoiko HR support?",
    answer:
      "No named screen reader, browser or assistive technology combination is published, because that requires current tested evidence and approved disclosure. We do not claim support for all screen readers.",
  },
  {
    question: "Are there known accessibility limitations?",
    answer:
      "Yes — three open limitations are listed in Section 9: PDF accessibility status not yet audited, mobile application scope not yet established, and screen reader testing evidence not yet published.",
  },
  {
    question: "How do I report an accessibility barrier?",
    answer:
      "Use the feedback form in Section 10. It requires no login, marketing consent, sales contact or disability category. If the form itself is inaccessible, reach support through the Help Center.",
  },
  {
    question: "Can I request an accessible document or alternative format?",
    answer:
      "Yes. Critical accessibility information is available in HTML on this page, and alternative-format requests for documents such as product PDFs can be submitted through the accessibility feedback form.",
  },
  {
    question: "Is a VPAT or Accessibility Conformance Report available?",
    answer:
      "No current testing evidence record is approved for public publication. Controlled materials can be requested with organization name and review context — submission does not guarantee access or document availability.",
  },
  {
    question: "How are accessibility issues corrected?",
    answer:
      "Reported issues are routed to the appropriate owner for triage. Material changes to conformance claims, limitations, scope or evidence create a change record, and resolved limitations are verified before removal from the list.",
  },
  {
    question: "Does a third-party integration inherit Zoiko HR's accessibility status?",
    answer:
      "No. Third-party integrations and embedded content have separate accessibility status and do not inherit the Zoiko HR conformance record. Review the relevant vendor's accessibility statement for their scope.",
  },
];

export function AccessibilityFaqSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="15 / FAQ, Verification & Next Steps"
          title="Direct answers to common questions."
        />

        {/* Independent columns so opening one card cannot resize its neighbour;
            `display:contents` below lg keeps the cards in 1..n order there. */}
        <div className="mt-10 flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-2.5">
          {[0, 1].map((column) => (
            <div
              key={column}
              className="contents lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-2.5"
            >
              {FAQS.map((faq, i) => ({ faq, i }))
                .filter(({ i }) => i % 2 === column)
                .map(({ faq, i }) => (
                  <div key={faq.question} style={{ order: i }}>
                    <Reveal delay={Math.min(i * 0.04, 0.3)}>
                      <details className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-6 py-5">
                          <span className="text-sm font-semibold text-slate-900">
                            {faq.question}
                          </span>
                          <span
                            aria-hidden
                            className="flex-none text-lg text-primary transition-transform duration-200 group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                          {faq.answer}
                        </p>
                      </details>
                    </Reveal>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
