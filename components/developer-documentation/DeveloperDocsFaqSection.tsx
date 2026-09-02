import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const FAQS = [
  {
    question: "What developer documentation does Zoiko HR provide?",
    answer:
      "Source-governed technical guidance for approved integration surfaces: authentication, operations, schemas, events, examples, errors, and versioning. Each fact is version-scoped and published only where a current approved source establishes it.",
  },
  {
    question: "Does Zoiko HR have an API?",
    answer:
      "Approved integration surfaces are listed in the capability map above, with the access type and state on each. No capability is implied beyond what is documented for the stated version and scope.",
  },
  {
    question: "How do I authenticate?",
    answer:
      "Follow the approved credential acquisition route in the Authentication section. The mechanism type, token format, acquisition flow, and scope model come from the Authentication Mechanism Registry — never from ecosystem conventions.",
  },
  {
    question: "Does Zoiko HR support webhooks?",
    answer:
      "Webhooks / Events appears in the capability map as an event-delivery surface. Subscription, payload, and verification details are published only where the approved event source establishes them.",
  },
  {
    question: "Are SDKs available?",
    answer:
      "Code examples carry an explicit support label, verification state, version, environment, and auth assumptions. Any SDK is listed only where an approved source establishes it — none is inferred.",
  },
  {
    question: "What are the rate limits?",
    answer:
      "Rate-limit windows are version and environment scoped and come from the approved Operational Limits contract. No limit, retry timing, or backoff window is inferred from ecosystem standards.",
  },
  {
    question: "How do I test before production?",
    answer:
      "Use an approved test environment with synthetic data only — never real employee or customer data. Sandbox, staging, and test environments are not assumed; they appear only when the Environment Registry establishes them.",
  },
  {
    question: "How are breaking changes communicated?",
    answer:
      "Product Updates owns release change announcements. Developer Documentation labels each item Current, Preview / Beta, Deprecated, Sunset Scheduled, or Removed / Unsupported, with a migration path where one is approved.",
  },
  {
    question: "Where do I get technical support?",
    answer:
      "Start with the Developer / integration path in Contact Support. Confirmed or suspected security vulnerabilities route instead through the approved Security Reporting destination, and live availability belongs to Service Status.",
  },
];

export function DeveloperDocsFaqSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Section 14" title="Frequently asked questions.">
          Answers use current approved technical registries. Unknown
          implementation details are never converted to confident guesses.
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
