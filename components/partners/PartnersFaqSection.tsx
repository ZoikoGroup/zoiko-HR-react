import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What is a Zoiko HR partner?",
    answer:
      "An organization holding an approved connection to Zoiko HR, published from the Partner Relationship Registry. A partner relationship is not automatic certification, exclusive endorsement, or a service warranty.",
  },
  {
    question: "What types of partners does Zoiko HR work with?",
    answer:
      "Five published relationship types: Technology & Integration, Implementation & Services, Advisory & Consulting, Referral & Channel, and Strategic Alliance. Each record shows its exact approved type.",
  },
  {
    question: "How do I find a Zoiko HR partner?",
    answer:
      "Use the partner finder above to search by capability or relationship type and filter by partner type. The directory renders from the approved public registry.",
  },
  {
    question: "How do I become a Zoiko HR partner?",
    answer:
      "Start a partner inquiry with your organization, geography, partner type interest, and capability context. Acceptance criteria, fees, and program terms are not promised through this route.",
  },
  {
    question: "Are Zoiko HR partners certified by Zoiko HR?",
    answer:
      "No organization is listed as certified, preferred, or endorsed without current source-governed evidence. A partner listing does not imply API certification, security certification, or compliance with a specific standard.",
  },
  {
    question: "Can a partner help implement Zoiko HR?",
    answer:
      "Implementation and services partners may support deployments in specific capability areas and territories where those records are approved and current. Availability and scope depend on the individual partner record.",
  },
  {
    question: "How are partner capabilities verified?",
    answer:
      "Through a five-stage process: submitted or identified, reviewed, approved, published, then re-reviewed or retired. A capability appears only when a current Capability Mapping record with evidence and territory is approved.",
  },
  {
    question: "Are partner services covered by Zoiko HR security or terms?",
    answer:
      "No. Partner services are subject to the partner's own privacy policy, terms of service, and security practices unless an approved agreement explicitly states otherwise. Zoiko HR does not extend its DPA or terms to third-party services.",
  },
  {
    question: "How do existing partners access resources?",
    answer:
      "Program mechanics — including commission models, resale rights, exclusivity, territory rights, and legal terms — are not published on this page. Route program inquiries through the appropriate contact path.",
  },
];

export function PartnersFaqSection() {
  return (
    <section className="bg-[#F5F7FA] py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Partner FAQ — direct answers.
          </h2>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
              <details className="group rounded-xl border border-black/5 bg-white px-6 py-4 shadow-sm transition-colors duration-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-sm font-semibold text-ink">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden
                    className="flex-none text-sm leading-none text-primary transition-transform duration-200 group-open:rotate-180"
                  >
                    ▾
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
