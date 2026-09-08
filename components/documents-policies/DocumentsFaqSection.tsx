import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * The first answer is published verbatim by the design. The rest restate rules
 * already established elsewhere on this page — no legal effect, compliance
 * outcome or statutory term is asserted beyond them.
 */
const FAQS = [
  {
    question: "What is Documents & Policies in Zoiko HR?",
    answer:
      "Zoiko HR Documents & Policies is designed to manage approved workforce document and policy templates, version history, distribution assignments, acknowledgment records, access and review according to configured product governance.",
  },
  {
    question: "Does acknowledgment equal an electronic signature or legal consent?",
    answer:
      "No. Software publication, delivery, viewing or acknowledgment does not by itself establish signature, consent, enforceability or legal compliance. An acknowledgment is a recorded, version-bound action — what it represents legally depends on your own configuration and applicable law.",
  },
  {
    question: "Can Zoiko HR track policy acknowledgments?",
    answer:
      "Yes. A distribution freezes an exact version to a defined audience with an explicit acknowledgment requirement and due date, and recipients take a version-bound action against that assignment.",
  },
  {
    question: "Can documents have local or translated versions?",
    answer:
      "Yes. A variant is a derivative, never a detached copy — it stays linked to its source, and a source change flags every dependent variant for review.",
  },
  {
    question: "Does Zoiko HR guarantee policy compliance?",
    answer:
      "No. The product manages templates, versions, distribution, acknowledgment and review evidence. It does not establish compliance, and retention and legal-hold periods come from an approved registry rather than any statutory term invented here.",
  },
  {
    question: "Can administrators see who has read a policy?",
    answer:
      "Acknowledgment records are captured against a specific version and audience. Viewing, publishing and distributing are separate, auditable permissions, so what any given administrator can see depends on their own authorization rather than their role title.",
  },
  {
    question: "How are old versions handled?",
    answer:
      "A new current version supersedes the prior one, which remains read-only and searchable to authorized history. Published content is immutable — a correction creates a new version, and acknowledged content is never silently rewritten.",
  },
];

export function DocumentsFaqSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        {/* A centred ~900px column with its text left aligned inside. */}
        <div className="mx-auto max-w-[900px]">
          <SectionHeading
            eyebrow="Questions"
            title="Direct answers about Documents & Policies."
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
                  <p className="max-w-[780px] pb-5 text-sm font-semibold leading-6 text-slate-500">
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
