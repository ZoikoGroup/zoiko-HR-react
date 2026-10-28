import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "Is Zoiko HR down right now?",
    answer:
      "This page reports only what an approved status source establishes. No source is connected for the public preview yet, so the current state is shown as not established — which is neither a report of an outage nor a confirmation of healthy service.",
  },
  {
    question: "Are all Zoiko HR services operational?",
    answer:
      "An unknown state is shown as unknown and never defaulted to operational. Until the Service Component Registry is approved, no component-level operational claim is published here.",
  },
  {
    question: "What services are affected during an incident?",
    answer:
      "Only the approved components named in the incident record, at the public scope that record establishes. A single affected component is never read as a platform-wide statement.",
  },
  {
    question: "When will an issue be fixed?",
    answer:
      "An expected resolution time is published only where an approved source establishes one. Otherwise the incident shows its current lifecycle state — investigating, identified, mitigating, monitoring, or resolved — rather than a predicted time.",
  },
  {
    question: "Was there a recent incident?",
    answer:
      "Incident history lists published incident records only. No incident records are currently published, which reflects the incident registry rather than a guarantee about past operation.",
  },
  {
    question: "Is maintenance scheduled?",
    answer:
      "Maintenance is planned work and is published separately from incidents, which are unplanned operational events. An approved maintenance window appears here once it is cleared for public display.",
  },
  {
    question: "What is Zoiko HR’s uptime?",
    answer:
      "Uptime is published only from an approved measurement source. No uptime figure is calculated, aggregated, or inferred on this page.",
  },
  {
    question: "How do I report an issue?",
    answer:
      "Start at the Help Center, which owns support discovery and issue-oriented routing. Contact Support is not yet approved as a public route.",
  },
  {
    question: "Where can I learn what changed in the product?",
    answer:
      "Product Updates owns release chronology and change communication. Service Status covers live operational state and incident history only.",
  },
];

export function ServiceStatusFaqSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
              Frequently asked questions
            </h2>
            <p className="mt-1.5 text-sm text-slate-500">
              Direct answers, qualified by source and freshness.
            </p>
          </Reveal>

          <div className="mt-5">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
                <details className="group border-b border-slate-200 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-base font-semibold text-ink">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className="flex-none font-semibold text-slate-500 transition-transform duration-200 group-open:rotate-45"
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
        </div>
      </Container>
    </section>
  );
}
