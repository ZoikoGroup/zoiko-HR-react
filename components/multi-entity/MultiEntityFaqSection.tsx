import { Container, Reveal } from "@/components/ui";

/**
 * Questions come from the approved design. The first answer is design copy;
 * the remaining answers are drafts pending approval and only restate claims
 * already approved elsewhere on this page.
 */
const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is Multi-Entity Enterprises in Zoiko HR?",
    answer:
      "It is a solution pathway for governed HR administration across distinct entities and units, with recommended controls for definitions, relationships, configuration, ownership, access, shared services, reporting, integrations and evidence.",
  },
  {
    question:
      "Does the product hierarchy prove legal ownership or parent/subsidiary status?",
    answer:
      "No. A product hierarchy is administrative. It does not by itself establish legal ownership, tax grouping, employer status, financial consolidation or regulatory relationships, and legal meaning is never derived from an administrative relationship alone.",
  },
  {
    question: "Can different entities have different configuration?",
    answer:
      "Yes, through approved overrides on a shared baseline. Every effective value traces to a baseline, owner, version and effective date, and overrides stay inspectable rather than silently replacing the baseline.",
  },
  {
    question: "Can administrators be limited to selected entities?",
    answer:
      "Yes. Effective access is computed from role, entity scope, object, action, sensitivity, state and delegation — never hierarchy alone — so an entity admin can be restricted to a single entity and prohibited from cross-entity actions.",
  },
  {
    question: "Can a shared HR team work across entities?",
    answer:
      "Yes. A shared-service unit is its own governed concept with its own type, owner, source and status, and its access across entities is granted by explicit scope rather than inherited from the hierarchy.",
  },
  {
    question: "Can reporting combine information across entities?",
    answer:
      "Yes, as administrative visibility rather than financial consolidation. Every cross-entity metric names its included and excluded entities, aggregation rule, freshness and owner.",
  },
  {
    question: "How are employee moves between entities handled?",
    answer:
      "As a governed change with routing and approval authority that varies by entity scope, an effective date, and evidence. Automation never replaces required human or professional authority and cannot silently skip a required step.",
  },
  {
    question: "Can each entity use different integrations?",
    answer:
      "Yes. One connected system does not authorize every entity — a connector can have different participating entities and field authorities across the portfolio, with conflict rules and exception owners made explicit.",
  },
  {
    question: "How is a multi-entity rollout implemented?",
    answer:
      "Through staged work from discovery and modeling to migration, rollout waves and stabilization. No fixed duration, migration effort or “zero downtime” claim is published here without approved services evidence.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing is not published on this page. Cost depends on your approved scope, plan, contract, configuration, integrations and entities — request pricing for figures that apply to your organization.",
  },
  {
    question: "Where can existing customers get help?",
    answer:
      "Existing customers should use their approved support route rather than the public sales forms on this page. Support, documentation and status are never replaced by Book a Demo.",
  },
];

export function MultiEntityFaqSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Questions
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-sky-950 sm:text-4xl">
            Direct answers about Multi-Entity Enterprises.
          </h2>
        </Reveal>

        <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group py-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold text-sky-950">
                    {faq.question}
                  </span>
                  <span className="text-slate-400 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-500">
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
