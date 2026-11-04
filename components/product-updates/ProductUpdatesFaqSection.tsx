import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What is Product Updates in Zoiko HR?",
    answer:
      "The approved, published record of what changed in the product. Product Updates is change history: Service Status owns live availability, Documentation owns current how-to guidance, and future roadmap is not implied.",
  },
  {
    question: "Do I need to take action on an update?",
    answer:
      "Every update carries a source-backed action class — Required, Recommended, Optional, No action required, or Not established. Required and recommended actions name who must act and link to the authoritative Administrator Guide or Documentation. No action required is shown only when an approved source explicitly establishes it.",
  },
  {
    question: "Where can I see technical or API changes?",
    answer:
      "Updates classified as Developer Change cover technical surfaces — API, webhook, schema and SDK behaviour. The change is announced here; Developer Documentation owns the current technical reference.",
  },
  {
    question: "How are corrections to published updates handled?",
    answer:
      "A record amended after publication is labeled Corrected, and a record replaced by a newer one is labeled Superseded. Record state is always visible, so nothing stays silently stale.",
  },
  {
    question: "Where can I check whether Zoiko HR is currently available?",
    answer:
      "Service Status owns live availability and incident state. Product Updates is change history and never caches or restates it.",
  },
  {
    question: "How do I understand the availability scope of a change?",
    answer:
      "Each record states its date semantics explicitly — Published, Effective and Rollout start — and a change still reaching customers is labeled Rolling. Scope comes from the approved update record and is never inferred.",
  },
];

export function ProductUpdatesFaqSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Frequently asked questions.
          </h2>
          <p className="mt-1.5 text-slate-500">
            Answers use current approved records and do not infer scope,
            availability, or action from unsupported sources.
          </p>
        </Reveal>

        <div className="mt-8 space-y-2">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
              <details className="group overflow-hidden rounded-xl border border-black/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4">
                  <span className="text-base font-semibold text-ink">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden
                    className="flex-none pl-4 text-lg text-slate-400 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-4 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
