import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What is Zoiko HR Documentation?",
    answer:
      "The source-controlled authority for product guidance: concepts, setup and how-to, configuration, role-aware task guidance, product-level reference and troubleshooting. Published guides state scope, prerequisites, currentness, permissions and expected outcome.",
  },
  {
    question: "How is Documentation different from the Help Center?",
    answer:
      "The Help Center owns support discovery and issue-oriented routing — it helps you find the right destination. Documentation owns the product guidance itself. Each routes to the other rather than duplicating it.",
  },
  {
    question: "Where can administrators find admin-specific guidance?",
    answer:
      "In the Administrator Guide, which owns broad admin governance and policy depth. Documentation covers configuration location, who can change a setting and its impact, then routes governance questions there.",
  },
  {
    question: "Where is the developer/API documentation?",
    answer:
      "In Developer Documentation, which owns API endpoints, authentication, tokens, scopes, SDKs, webhooks and events, payloads, rate limits, errors and code examples. Real API keys, client secrets, credentials, tenant IDs and webhook secrets are never shown here.",
  },
  {
    question: "Where can I see recent changes?",
    answer:
      "In Product Updates, which owns release chronology and change communication.",
  },
  {
    question: "Is Zoiko HR currently available?",
    answer:
      "Service Status owns live availability and incident state. Documentation never caches or restates it.",
  },
  {
    question: "What if the documentation does not match my screen?",
    answer:
      "Published guidance is versioned and source-controlled, so what you see depends on your version, role and permissions. If a product fact is not established by an approved source, the documentation does not infer it — treat the product as the observable result and contact support if they disagree.",
  },
  {
    question: "Can I rely on a deprecated article?",
    answer:
      "Article state is always visible in the text, so nothing stays silently stale. A Deprecated, Superseded or Archived article is kept for reference only — follow the current replacement where one is named.",
  },
];

export function DocumentationFaqSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Direct answers, scoped to what current sources establish.
          </p>
        </Reveal>

        <div className="mx-auto mt-8 max-w-3xl">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
              <details className="group border-b border-slate-200 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 sm:gap-6">
                  <span className="text-sm font-bold text-ink">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden
                    className="flex-none text-ink/40 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
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
