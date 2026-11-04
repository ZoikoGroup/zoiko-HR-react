import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const FAQS = [
  {
    question: "What is the Zoiko HR DPA?",
    answer:
      "The approved Data Processing Addendum package covering processing terms for the covered services. This page is a navigation aid to it — the approved DPA text and any executed or account-specific terms control.",
  },
  {
    question: "Is this the DPA that governs my account?",
    answer:
      "Not necessarily. This page shows which package to review, not which one legally applies to you. Account-specific applicability depends on your order, contracting entity and any executed amendments — confirm through the authenticated or legal-review route.",
  },
  {
    question: "How do I get the current version?",
    answer:
      "The current approved package is shown in the DPA package section with its version, effective and published dates. Where the package is approved public, it is available without authentication; otherwise it routes through a controlled request.",
  },
  {
    question: "Who are the parties and what are the roles?",
    answer:
      "Party and role fields come from the approved DPA or legal source only. No controller, processor or legal-entity role is assumed or defaulted, and affiliate scope comes from the source clause where applicable.",
  },
  {
    question: "What data is covered by the DPA?",
    answer:
      "Subject matter, nature, purposes, duration, data-subject categories and personal data categories all come from the approved DPA Annex I. No category is inferred from the fact that Zoiko HR is HR software.",
  },
  {
    question: "Where are the security measures / TOMs?",
    answer:
      "Technical and organisational measure categories come from DPA Annex II. Detailed security evidence — control domains, evidence status and access class — is owned by Security & Privacy rather than this page.",
  },
  {
    question: "Where is the subprocessor list?",
    answer:
      "The DPA governs the contractual relationship. The current approved vendor list, change notifications and objection mechanics belong to the Subprocessors page — no provider names, counts or notice periods are maintained here.",
  },
  {
    question: "What international transfer terms apply?",
    answer:
      "Only the transfer mechanism, safeguard and module the approved DPA actually contains. No EU SCC, UK Addendum or adequacy mechanism is presented without an approved module record, and nothing is auto-selected from IP address or browser language.",
  },
  {
    question: "How are rights requests and incidents handled?",
    answer:
      "Assistance and cooperation obligations are split between Zoiko and customer responsibilities in the approved clause. This page summarises the areas only — it creates no obligation, timeline or cost.",
  },
  {
    question: "What happens to data at termination?",
    answer:
      "Deletion and return are governed by the approved DPA clause together with applicable law and contract. No retention period is asserted here without an approved source record.",
  },
  {
    question: "How do I get an executed copy?",
    answer:
      "Through the authenticated account route or a legal review request. Executed copy and amendment status are account-specific and are never concluded from a public page.",
  },
  {
    question: "Can we request custom terms?",
    answer:
      "You can submit a legal review request with minimum business data. Submitting a request does not imply acceptance of custom terms or any turnaround commitment.",
  },
  {
    question: "Does the DPA mean Zoiko HR is GDPR-compliant?",
    answer:
      "No. A DPA is a contractual instrument, not a compliance assertion. Nothing on this page asserts compliance or constitutes legal advice — your obligations depend on applicable law and your own processing.",
  },
];

export function DpaFaqSection() {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <SectionHeading eyebrow="Section 15" title="FAQ, related legal and trust resources.">
          Answers from current approved records only. Where source does not
          establish a fact, it is stated as not established and routed
          appropriately. No legal advice.
        </SectionHeading>

        {/* Independent columns so opening one card cannot resize its neighbour;
            `display:contents` below lg keeps the cards in 1..n order there. */}
        <div className="mt-7 flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-4">
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
                      <details className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
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
