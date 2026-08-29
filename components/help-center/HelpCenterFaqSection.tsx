import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What is the Zoiko HR Help Center?",
    answer:
      "The entry point for approved help content. It answers common questions directly and routes you to the owning destination — Documentation, the Administrator Guide, Developer Documentation, Product Updates, Service Status, or Contact Support — rather than duplicating volatile detail.",
  },
  {
    question: "Where do I find product documentation?",
    answer:
      "In Documentation, which owns conceptual and task guidance. The Help Center links you there instead of restating it.",
  },
  {
    question: "Where do administrators find configuration guidance?",
    answer:
      "In the Administrator Guide, the primary authority for admin configuration and governance instructions.",
  },
  {
    question: "Where do developers find integration guidance?",
    answer:
      "In Developer Documentation, which owns API, authentication, webhook and SDK reference truth.",
  },
  {
    question: "How do I check whether Zoiko HR is available?",
    answer:
      "Through the Service Status page, the single authoritative source for live availability and incidents. Status is never cached or restated in the Help Center.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Through Contact Support, which is reachable at any time. It is emphasized after unresolved search or troubleshooting, and collects only the minimum context needed to route your request.",
  },
  {
    question: "How current is Help Center content?",
    answer:
      "Only current, eligible articles and guides are featured, and each carries its review state. Anything not listed is covered by search and Contact Support.",
  },
];

export function HelpCenterFaqSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
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
