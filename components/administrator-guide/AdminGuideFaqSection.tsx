import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What is the Zoiko HR Administrator Guide?",
    answer:
      "The source-approved authority for administration guidance: setup, access, policy, data operations, integrations, governance, troubleshooting and escalation. Each guide states role, prerequisites, scope, impact, currentness, verification and recovery.",
  },
  {
    question: "How is the Administrator Guide different from Documentation?",
    answer:
      "Documentation owns general product concepts, setup and workflows for everyone. This guide covers admin-level responsibilities and controlled change, and routes to Documentation rather than duplicating it.",
  },
  {
    question: "Who can perform administrator tasks?",
    answer:
      "Only roles the product source establishes. An HR Administrator acts organization-wide within assigned permissions; a Manager is scoped to direct reports where approved and is never assumed to be an administrator by default.",
  },
  {
    question: "Where are API and integration technical details?",
    answer:
      "In Developer Documentation, which owns authentication, tokens, scopes, API endpoints, webhooks and events, SDKs, payloads, rate limits, errors and code examples. This guide covers admin-level setup only, and never displays example secrets, tokens, recovery codes or client credentials.",
  },
  {
    question: "Where can I see recent product changes?",
    answer:
      "In Product Updates, which owns release chronology and change communication.",
  },
  {
    question: "Is Zoiko HR currently available?",
    answer:
      "Service Status owns live availability and incident state. Availability is never cached or restated in this guide.",
  },
  {
    question: "What if an admin guide doesn't match my screen?",
    answer:
      "Administrative instructions are role-, scope- and version-aware, so what you see depends on your permissions and version. Unknown product behavior is never converted into an instruction — if the guidance and product disagree, treat the product as the observable result and contact support.",
  },
  {
    question: "Can I bypass a permission or approval if I'm blocked?",
    answer:
      "No. This guide publishes no bypass paths. Recovery uses only source-approved correction, retry or rollback, and a blocked action is resolved by requesting the approved permission.",
  },
];

export function AdminGuideFaqSection() {
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
