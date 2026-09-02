import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const FAQS = [
  {
    question: "What does this page cover?",
    answer:
      "The control domains, evidence status and responsibility boundaries that apply to Zoiko HR security and privacy information. It states what is established by current approved evidence — and says so explicitly where a fact is not established publicly.",
  },
  {
    question: "How is access governed?",
    answer:
      "Effective access requires an active identity, an explicit role or grant, organization scope, a specific object and action, field sensitivity, workflow state, and any policy or deny condition — all of them, not a role label alone. An explicit deny overrides permissive role scope.",
  },
  {
    question: "Does Zoiko HR encrypt data?",
    answer:
      "Encryption and key claims require current approved evidence for the exact scope. Algorithm, HSM/KMS, customer-managed-key and “end-to-end” assertions are never published without that source — the evidence table shows what is established and what remains evidence-gated.",
  },
  {
    question: "How is software developed securely?",
    answer:
      "Vulnerability management runs identify, validate, assign, remediate, retest, close and learn. Showing testing classes does not imply tested equals secure, and no pen-test vendor, result or frequency is claimed without an approved source.",
  },
  {
    question: "How are incidents handled?",
    answer:
      "Through a prepare, detect, triage, contain, investigate, recover, communicate and review model. No notification hour or day is promised here — notification timing belongs to applicable law, the DPA and contract.",
  },
  {
    question: "Which certifications exist?",
    answer:
      "Only those established by a current approved record. Issuer, scope, period and limitations come from that record alone. Absence of a listing is not a claim in either direction — request access through the security review route.",
  },
  {
    question: "Where can I see current evidence?",
    answer:
      "The assurance evidence table lists each artifact with its access class, status, freshness and limitations. Public items open directly; controlled items route through a security review request. Expired or superseded evidence is never promoted as current.",
  },
  {
    question: "How do I report a vulnerability?",
    answer:
      "Through Security Reporting — always a distinct and separate route. Do not submit vulnerability details, credentials or exploit evidence in a security-review form or a general support ticket.",
  },
  {
    question: "Does Zoiko HR guarantee compliance?",
    answer:
      "No. Zoiko HR does not provide legal, tax or compliance advice, and nothing on this page constitutes a compliance guarantee. Your obligations depend on applicable law, your Privacy Notice, DPA and contract.",
  },
];

export function SecurityPrivacyFaqSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 11"
          title="FAQ, security reporting and next steps."
        >
          Direct answers from current approved records. Where the source does
          not establish a fact, it is stated as not established publicly.
        </SectionHeading>

        {/* Two independent columns rather than a 2-col grid: in a grid, opening
            one card grows its whole row, leaving a gap beside the neighbour.
            The columns are `display:contents` below lg so the cards become
            direct flex children there and `order` restores the 1..n sequence. */}
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
