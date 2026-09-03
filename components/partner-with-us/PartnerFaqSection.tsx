import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

/**
 * Answers restate boundaries already published in sections E4.3-E4.10 of this
 * page. No program terms, eligibility criteria, fees, tiers or response times
 * are introduced here.
 */
const FAQS = [
  {
    question: "How do I partner with Zoiko HR?",
    answer:
      "Choose the relationship area that best fits your organization and submit a short partner inquiry with minimum organization, contact, and relationship context. Available paths depend on current program and regional eligibility.",
  },
  {
    question: "What partnership types are available?",
    answer:
      "Only currently public relationship areas are shown on this page: Technology & Integration, Implementation & Services, Advisory / Consulting, Referral / Channel, Strategic Alliance, and Other / Not Sure. Selecting one does not create a relationship, right, certification, or commitment.",
  },
  {
    question: "Is there a formal partner program?",
    answer:
      "Program structure is not published on this page. Referral, channel, resale and similar activity apply only where an approved public program exists — a partnership, listing, badge or certification exists only after the applicable agreements, approvals, registries and publication gates are complete.",
  },
  {
    question: "Are there fees, commissions, tiers, or resale rights?",
    answer:
      "No fee, commission, tier or resale right is established here. Those are commercial terms that require separate authoritative workflows and agreements, and none of them follows from submitting this form.",
  },
  {
    question: "What information should I submit?",
    answer:
      "Organization name, work email, country or region for routing, and the relationship area — plus brief, non-confidential context if it helps. Do not include customer data, employee records, payroll or tax information, credentials, secrets, or vulnerability details.",
  },
  {
    question: "How long does review take?",
    answer:
      "No response time is published. Zoiko HR routes the inquiry according to current partnership area, geography, and ownership rules, and authorized teams may follow up through an approved channel where appropriate.",
  },
  {
    question: "Can I upload a deck or proposal?",
    answer:
      "No attachments are required or accepted at the inquiry stage. Keep the context field brief and non-confidential; if a potential relationship progresses, any further material is exchanged through approved channels rather than this form.",
  },
  {
    question: "I am already a partner. Should I use this form?",
    answer:
      "No. Use the partner resources route to reach support for an existing relationship — there is no need to reapply through this form.",
  },
];

export function PartnerFaqSection() {
  return (
    <section className="bg-[#040D18] py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-12">
          <SectionHeading
            eyebrow="FAQ · AEO · E4.11"
            title="Common questions"
            tone="dark"
          >
            Answers drawn from source-governed records only. No program terms,
            eligibility criteria, or response times are invented.
          </SectionHeading>

          <div className="flex flex-col">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.3)}>
                <details className="group border-b border-white/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4">
                    <span className="text-sm font-semibold text-white">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className="flex-none text-lg text-indigo-400 transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-4 text-sm leading-relaxed text-slate-400">
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
