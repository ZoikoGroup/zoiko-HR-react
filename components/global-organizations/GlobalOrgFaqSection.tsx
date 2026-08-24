import { Container, Reveal } from "@/components/ui";

/**
 * Questions come from the approved design, which shows the accordion collapsed
 * and therefore carries no answer copy. The answers below are drafts pending
 * approval — each one only restates statements already approved elsewhere on
 * this page (availability, localization, permissions, compliance boundary,
 * integrations, implementation, pricing and support routes).
 */
const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is Zoiko HR for Global Organizations?",
    answer:
      "It is a solution pathway for organizations that want consistent HR structures with controlled local configuration across regions, entities, locations, and teams. It focuses on shared definitions, locally owned variation, scoped permissions, effective dates, visible status, evidence, integrations, and implementation governance.",
  },
  {
    question: "Does Zoiko HR work in every country?",
    answer:
      "No. Universal country availability is not claimed. Market availability, localization, hosting, payroll connections, integrations, support, and jurisdiction coverage can vary by plan, contract, configuration, and market, and are shown as explicit status rather than a coverage map.",
  },
  {
    question: "How are global standards and local requirements handled?",
    answer:
      "Shared structure is defined once where approved, and local variation is a governed product concept — explicit, owned, versioned, and reviewable. Each variant carries an owner, scope, effective date, and review status through the configuration lifecycle.",
  },
  {
    question: "Can global and local HR teams have different permissions?",
    answer:
      "Yes. A title alone does not grant access: effective access is evaluated from role, organizational scope, purpose, data sensitivity, requested action, object state, and active delegation. Delegations carry approver, restrictions, expiry, status, and an audit record.",
  },
  {
    question: "Does Zoiko HR guarantee global compliance?",
    answer:
      "No. Zoiko HR provides software for workforce administration. It does not provide legal, tax, payroll, employment, immigration, or compliance advice and does not guarantee compliance with any law. Customers remain responsible for policies, employment decisions, configurations, professional review, and compliance obligations.",
  },
  {
    question: "How does localization work?",
    answer:
      "Language, document, workflow, and communication variation is configured per approved scope and carries its own owner, version, and review status. Complete localization for every market is not claimed — localization status is published per scope and market.",
  },
  {
    question: "Can Zoiko HR connect to time and payroll systems?",
    answer:
      "Connections coordinate approved data and events, with an explicit authoritative source, conflict rule, and reconcile owner per field or event. Zoiko HR does not calculate payroll; the payroll system remains authoritative for its own rules and outputs, and provider availability, data scope, and downstream correctness must be separately verified.",
  },
  {
    question: "How is a global rollout implemented?",
    answer:
      "Rollout is governed by scope, owner, effective date, and wave, because readiness can differ by region, entity, location, system, and data set. No fixed duration, staffing model, or go-live commitment is published here — implementation scope is agreed during evaluation.",
  },
  {
    question: "How much does Zoiko HR cost for a global organization?",
    answer:
      "Pricing is not published on this page. Cost depends on your approved scope, plan, contract, configuration, integrations, and markets — request pricing to get figures for your organization.",
  },
  {
    question: "Where do existing customers get help?",
    answer:
      "Existing customers should use their approved support route rather than the public sales forms on this page. The Help Center, documentation, administrator and developer guides, product updates, and support contact routes are available for product questions.",
  },
];

export function GlobalOrgFaqSection() {
  return (
    <section className="border-t border-white/10 bg-slate-950 py-24 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Frequently Asked Questions
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Common questions answered directly.
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-white/10 border-t border-white/10">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-sm font-semibold">{faq.question}</span>
                  <span className="text-slate-500 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-400">
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
