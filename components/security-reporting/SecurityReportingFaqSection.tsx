import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const FAQS = [
  {
    question: "Can I test Zoiko HR?",
    answer:
      "Only within the scope and rules an approved source establishes. Absence of an asset listing in the Security Scope Registry is not authorization to test, and scope state alone does not authorize any technique — the Rules of Engagement section controls what is permitted.",
  },
  {
    question: "My account may be compromised — what do I do?",
    answer:
      "This is a restricted route, not a vulnerability report. Go to Contact Support for immediate help without reproducing an exploit against your own account.",
  },
  {
    question: "Is there a bug bounty?",
    answer:
      "Not established. No bug-bounty program, reward, payment, or compensation is established by this page. A record is published only if an approved program actually exists — do not infer a reward from reporting.",
  },
  {
    question: "When will you respond or fix the issue?",
    answer:
      "No response-time or remediation commitment is established. Submission gives a non-sensitive case state such as Submitted, Triage, or Accepted for review — internal severity, timeline, and remediation detail stay restricted unless approved for disclosure.",
  },
  {
    question: "Can I test integrations or providers?",
    answer:
      "No. A shared integration boundary, third-party provider, partner asset, or customer-managed infrastructure is not automatically in scope. Being a Zoiko subprocessor does not make a provider's assets testable — stop and use that owner's own reporting route.",
  },
  {
    question: "Does reporting guarantee compliance or security?",
    answer:
      "No. Accepting a report for review is not a security or compliance guarantee, and it creates no severity, remediation, or timeline commitment beyond the neutral case state shown to the reporter.",
  },
  {
    question: "What should I report here?",
    answer:
      "A weakness in a Zoiko-controlled product, service, or asset. Product or functional bugs, account compromise, and service outages route elsewhere — see the route table above before submitting.",
  },
  {
    question: "What evidence should I include?",
    answer:
      "Minimal, reproducible evidence: a clear title, affected asset, observed vs. expected behavior, and steps that stop at the point of demonstration. Redact personal, customer, or credential data from any screenshot or log before attaching it.",
  },
  {
    question: "Do you provide safe harbor?",
    answer:
      "Not established. No safe-harbor text, legal protection, immunity, or confidentiality commitment is established by this page. Protection is never inferred from good-faith wording — it exists only where exact Security/Legal-approved language publishes it.",
  },
  {
    question: "Can I publish my findings?",
    answer:
      "Publication and disclosure are Security/Legal-controlled, with no default embargo or 30/60/90-day deadline. An advisory is released publicly only after Security/Legal review and approval of its content.",
  },
  {
    question: "Where are live incidents reported?",
    answer:
      "Service Status owns live availability and incident history. This page covers vulnerability reporting only — a service outage or availability issue should go through Service Status / Support instead.",
  },
];

export function SecurityReportingFaqSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Section 13" title="FAQ / AEO verification.">
          Direct safe answers. No safe-harbor, bounty, response-time, or
          disclosure-deadline claim unless source-backed. Unknown details are
          not converted to confident guesses.
        </SectionHeading>

        {/* Independent columns so opening one card cannot resize its neighbour;
            `display:contents` below lg keeps the cards in 1..n order there. */}
        <div className="mt-9 flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-4">
          {[0, 1].map((column) => (
            <div
              key={column}
              className="contents lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-2"
            >
              {FAQS.map((faq, i) => ({ faq, i }))
                .filter(({ i }) => i % 2 === column)
                .map(({ faq, i }) => (
                  <div key={faq.question} style={{ order: i }}>
                    <Reveal delay={Math.min(i * 0.04, 0.3)}>
                      <details className="group overflow-hidden rounded-xl border border-black/10 bg-white">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4">
                          <span className="text-sm font-semibold text-ink">
                            {faq.question}
                          </span>
                          <span
                            aria-hidden
                            className="flex-none text-lg text-slate-400 transition-transform duration-200 group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
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
