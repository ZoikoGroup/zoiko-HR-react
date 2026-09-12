import { Container, Reveal } from "@/components/ui";

/**
 * Questions come from the approved design. Each answer is assembled from claims
 * this page already makes — the route definition, the foundation checklist, the
 * connections authority table, the trust/shared-responsibility controls and the
 * readiness timing rule — so none introduces a compliance, automation or
 * timeline promise of its own.
 */
const FAQS: { question: string; answer: string }[] = [
  {
    question: 'What does "Growing Businesses" mean here?',
    answer:
      "It is a solution pathway for organizations that want more structured HR foundations: reliable workforce information, clearer organization and role structures, repeatable lifecycle workflows, permissioned employee and manager experiences, reviewable reporting, and governed system connections. It is not a size threshold or an employee-count tier.",
  },
  {
    question: "Is Zoiko HR only for small businesses?",
    answer:
      "No. This route describes one pathway into Zoiko HR, not the limit of the platform. Zoiko HR also supports mid-market, multi-entity and global organizations — the difference is the foundations and scope an organization starts from, not the product itself.",
  },
  {
    question: "What foundations should a growing organization review?",
    answer:
      "Four areas: Data (records, ownership and effective dates), Structure (organization, roles and permissions), Insight (reviewable reporting) and Connections (governed links to the systems that already hold time, payroll or identity truth). Reviewing these before configuration is what keeps later stages predictable.",
  },
  {
    question: "Does Zoiko HR automate employment decisions?",
    answer:
      "No. Zoiko HR organizes records, routes workflows and records approvals and evidence. Employment decisions remain with the customer, who is responsible for policy, configuration and the decisions made within the system.",
  },
  {
    question: "Does Zoiko HR guarantee HR or employment compliance?",
    answer:
      "No. Zoiko HR provides software for workforce administration and does not provide legal, tax, payroll, employment, compliance or other professional advice. Compliance obligations remain with the customer; the platform supports them with audit history, effective dates and administrative controls.",
  },
  {
    question: "Can Zoiko HR connect to payroll and time systems?",
    answer:
      "Yes, through governed connections with an explicit authoritative source for each object. Worker records are authoritative in Zoiko HR and flow downstream, time and schedule data stays authoritative in the connected time system, and the payroll system decides payroll outcomes from HR-supplied input.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "There is no universal timeline. Scope depends on approved product areas, data, configuration, integrations, testing and customer decisions, and the readiness path above sets owners and exit criteria per stage rather than fixed durations. Launch is an authorized, evidence-based decision — not a date.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on organization size, the product areas in scope, integrations and support level, so it is confirmed through a commercial conversation rather than published as a fixed figure here. Use Request Pricing to get current pricing for your scope.",
  },
  {
    question: "Can existing customers use this page?",
    answer:
      "Yes, though this page is written for evaluation. Existing customers are usually better served by the direct routes — Documentation and Contact Support — which stay accessible and are never sales-gated.",
  },
];

export function GrowingFaqSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Common questions answered directly.
            </h2>
          </Reveal>
        </div>

        <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold text-ink">
                    {faq.question}
                  </span>
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white text-ink/50 transition-transform duration-200 group-open:rotate-45 group-open:bg-primary-light group-open:text-primary">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
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
