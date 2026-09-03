import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * Answers restate governed statements already published in sections 03-13 of
 * this page. Nothing here establishes a fact the approved registry or DPA does
 * not — where a fact is not established, the answer says so and routes.
 */
const FAQS = [
  {
    question: "What is a subprocessor?",
    answer:
      "A provider carrying a Legal/Privacy-approved relationship classification for Zoiko HR — Subprocessor, Affiliate Subprocessor or another class explicitly defined for Zoiko HR. Legal entity is the primary identity field, and an unknown classification blocks publication rather than being guessed.",
  },
  {
    question: "Which subprocessors does Zoiko HR use?",
    answer:
      "The current approved registry above is the public source. Provider names, legal entities, classifications, purposes, locations and effective dates come only from the governed registry release — no live registry has been supplied for the rows shown, so they carry synthetic placeholder labels.",
  },
  {
    question: "Why are subprocessors used?",
    answer:
      "Each record carries a concise Legal/Privacy-approved processing purpose describing why the provider is engaged in the disclosed scope. Purposes are never filled from provider marketing copy or a vendor website, and a material purpose change creates a change event.",
  },
  {
    question: "Where do they process data?",
    answer:
      "Processing location is the approved country, region or location exactly as stated in the governed registry source, with multiple values preserved. It is not a headquarters address, a cloud marketing region or a CDN edge, and location never proves a transfer mechanism — that authority sits in the DPA.",
  },
  {
    question: "How will I know when the list changes?",
    answer:
      "Material changes are appended to the public event ledger with before/after state and a link to the current record. No email subscription, RSS feed, webhook, in-product alert or advance notice period is established for public publication — where the DPA establishes a contractual notice period, the DPA controls.",
  },
  {
    question: "Can I object to a subprocessor?",
    answer:
      "Any right to object, along with its conditions, grounds, deadlines and remedies, comes from the approved DPA or legal source. This page routes to that authority; it does not create rights, invent deadlines or publish an objection workflow that no approved source establishes.",
  },
  {
    question: "Are integrations automatically subprocessors?",
    answer:
      "No. Integration existence alone does not establish a subprocessor relationship, and an operational supplier or infrastructure vendor is not automatically a subprocessor either. Classification requires explicit Legal and Privacy approval.",
  },
  {
    question: "Does a provider's certification cover Zoiko HR?",
    answer:
      "No. A provider's ISO certification, SOC 2 report or other security posture does not become Zoiko HR certification or assurance. Evidence links route to scoped Security and Trust evidence with their own current-as-of context.",
  },
  {
    question: "What if a field is missing or blank?",
    answer:
      "An unsupported field is omitted or explicitly shown as not established in the approved registry. A blank is never filled from a vendor website or model knowledge, and a source failure is never presented as a zero-records result.",
  },
  {
    question: "Does this registry guarantee legal compliance?",
    answer:
      "No. The registry publishes approved facts and routes to the governing authorities. It is not a compliance assertion and not legal advice — your obligations depend on applicable law, your own processing and your contract.",
  },
];

export function SubprocessorsFaqSection() {
  return (
    <section className="bg-[#0b1b2d] py-16">
      <Container>
        <SectionHeading
          eyebrow="14 / FAQ / AEO Verification"
          title="Direct qualified answers."
          tone="dark"
        >
          Answers use only approved current registry facts. Currentness and
          canonical route are preserved. Provider identity, location and
          transfer conclusions are never supplemented from vendor websites or
          model knowledge.
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
                      <details className="group overflow-hidden rounded-xl border border-cyan-900 bg-slate-900/40">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4">
                          <span className="text-sm font-semibold text-white">
                            {faq.question}
                          </span>
                          <span
                            aria-hidden
                            className="flex-none text-lg text-indigo-400 transition-transform duration-200 group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="px-5 pb-4 text-sm leading-relaxed text-slate-400">
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
