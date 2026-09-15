import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * Answers restate boundaries already established elsewhere on this page. No
 * storage provider, region, sync behavior, e-signature, malware/DLP or
 * compliance capability is asserted — each begins from a source qualifier.
 */
const FAQS = [
  {
    question: "What does Zoiko Docs Pro do with Zoiko HR?",
    answer:
      "It provides approved relationships for workforce documentation, storage and templates while preserving source authority, exact versions, permissions and lifecycle. Specific storage, file, sync, retention and security capabilities remain source-controlled.",
  },
  {
    question: "Does Zoiko HR copy all documents from Zoiko Docs Pro?",
    answer:
      "No. Four distinct modes exist — reference, approved copy, managed artifact and template source — and each is explicit. A reference points at source content without copying or storing the file in Zoiko HR.",
  },
  {
    question: "Does viewing a document count as acknowledgment?",
    answer:
      "No. Acknowledgment semantics are owned by Documents & Policies, where an acknowledgment is an explicit, version-bound action. Viewing is not treated as acknowledging.",
  },
  {
    question: "Does acknowledgment mean e-signature or consent?",
    answer:
      "No e-signature, consent or legal-effect claim is made here. Legal meaning is routed to Documents & Policies and the approved policy authority rather than asserted on this page.",
  },
  {
    question: "Where are documents stored?",
    answer:
      "No storage provider, region or capacity is named on this page. Repository authority, availability and storage details come from the approved Repository Authority Registry and current product contract.",
  },
  {
    question: "Are documents always synchronized?",
    answer:
      '"Sync" is not a default label for any relationship mode. Version binding is explicit per mode — a source version change marks a copy update-available rather than auto-replacing it, and a template update never rewrites already-issued copies.',
  },
  {
    question: "How is document access controlled?",
    answer:
      "Source and Zoiko HR access are intersected — repository permission does not automatically grant Zoiko HR access. Detailed authorization, minimization and audit controls are owned by Integration Security.",
  },
  {
    question: "Is Zoiko Docs Pro required to use Zoiko HR?",
    answer:
      "No. Zoiko Docs Pro and Zoiko One are not implied prerequisites for Zoiko HR. Controlled Interoperability allows heterogeneous environments where supported, and external document systems may coexist.",
  },
];

export function DocsProFaqSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="FAQ / AEO"
          title="Eight qualified answers — no storage, sync, signature or compliance claim without source"
          tone="dark"
        >
          Each answer states that exact capabilities depend on current approved
          configuration. Storage provider, region, automatic sync, e-signature
          and compliance answers begin with a source qualifier.
        </SectionHeading>

        {/* items-stretch so the image column matches the full height of the
            question list — the design top- and bottom-aligns them. */}
        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.28)}>
                <details className="group rounded-xl border border-white/10 bg-white/5">
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4">
                    <span className="font-mono text-xs text-indigo-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm font-semibold text-white">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className="flex-none text-white/40 transition-transform duration-200 group-open:rotate-180"
                    >
                      ⌄
                    </span>
                  </summary>
                  <p className="px-5 pb-4 pl-[52px] text-sm leading-6 text-white/60">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          {/* Absolutely positioned so the photo's intrinsic height never drives
              the row — the question list sets the height. */}
          <div className="relative hidden min-h-96 lg:block">
            <Reveal delay={0.16} className="absolute inset-0">
              <PlaceholderImage
                src="/images/zoiko-docs-pro/faq.webp"
                alt="A team collaborating around a workshop table"
                label="Common questions"
                className="h-full w-full rounded-xl bg-slate-900"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
