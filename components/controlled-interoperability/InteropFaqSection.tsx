import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * The first answer is published verbatim by the design. The rest restate rules
 * already established elsewhere on this page — no connector, vendor or
 * compatibility claim is introduced beyond them.
 */
const FAQS = [
  {
    question: "What is Controlled Interoperability in Zoiko HR?",
    answer:
      "It's the Connect & Control approach for coordinating approved information flows through explicit permissions, source authority and data boundaries while avoiding an assumption that customers must adopt the wider Zoiko suite.",
  },
  {
    question: "Do I need Zoiko One to use Zoiko HR?",
    answer:
      "No. Zoiko One is presented as an optional suite path, never a default prerequisite. Wider suite adoption is never required — only capability-specific dependencies are stated as required, each with its reason and scope.",
  },
  {
    question: "Can Zoiko HR work with third-party systems?",
    answer:
      "Yes, through approved flow contracts. External systems are treated as peers of Zoiko ecosystem products, subject to the same contracts. Specific vendors, protocols and write-back behavior render only from the current approved Integration Catalog — this page never invents a vendor.",
  },
  {
    question: "Does bidirectional integration mean either system can overwrite the other?",
    answer:
      "No. Every data domain names its current authoritative system or explicitly says source-needed. There is no latest-write-wins default, and an authority conflict blocks or routes to review according to the Source Authority Registry rather than being resolved by convenience.",
  },
  {
    question: "Can I replace an external system with a Zoiko product later?",
    answer:
      "Moving from coexistence to replacement is a separate, customer-directed decision. The migration, import/export and cutover mechanics are owned by Data Import & Export — this page only references that route.",
  },
  {
    question: "Can I remove a connected Zoiko product later?",
    answer:
      "Yes. Exit is tracked as its own lifecycle group with explicit revoked, retired and offboarded states. A flow can always be paused or removed, and it is never silently restarted.",
  },
  {
    question:
      'Does "no mandatory suite adoption" mean there is no vendor lock-in at all?',
    answer:
      "No — and the page does not claim that. Optionality means wider suite adoption is not a prerequisite; it does not mean universal compatibility. Where a capability genuinely requires a current source-approved dependency, that is stated exactly, with its reason and scope, rather than hidden.",
  },
];

export function InteropFaqSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        {/* A centred ~900px column with its text left aligned inside. */}
        <div className="mx-auto max-w-[900px]">
          <SectionHeading
            eyebrow="Questions"
            title="Direct answers about Controlled Interoperability."
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
