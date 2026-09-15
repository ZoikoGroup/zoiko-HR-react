import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What is global HR management?",
    answer:
      "Global HR management coordinates employee records, organizational structure, workflows and reporting across multiple entities, countries and locations within one governed platform, rather than in disconnected local tools.",
  },
  {
    question: "How can a company manage HR across multiple countries?",
    answer:
      "By representing entities and locations explicitly, applying a shared global foundation with approved local configuration, and giving group and local teams appropriately scoped visibility into workforce data and workflows.",
  },
  {
    question: "Can HR processes be standardized across countries?",
    answer:
      "Common processes can be standardized as global defaults, with deliberate, approved local variants for policy, workflow, calendar or terminology differences where the organization requires them.",
  },
  {
    question: "Does Zoiko HR provide employer-of-record services?",
    answer:
      "No. Zoiko HR provides workforce-administration software for entities you already operate. It does not act as an employer of record and does not provide legal, tax, payroll or employment services.",
  },
  {
    question:
      "Does Zoiko HR automatically make an organization compliant in every country?",
    answer:
      "No. Zoiko HR provides configurable structure and controls that can support jurisdiction-aware operating practices, but legal and regulatory compliance remains the organization's own responsibility, guided by its counsel and policies.",
  },
  {
    question: "Can Zoiko HR support multiple legal entities?",
    answer:
      "Yes. Zoiko HR is built around an explicit entity and location model, with entity-level configuration, ownership and reporting alongside consolidated group visibility within permission scope.",
  },
  {
    question: "How does Zoiko HR connect with time and payroll?",
    answer:
      "Zoiko HR connects with products such as ZoikoTime and Zoiko Payroll through approved integration relationships, each operating within its own defined product scope rather than duplicating functionality.",
  },
  {
    question: "How do we migrate from different local HR systems?",
    answer:
      "Through a controlled implementation path: modeling the organization, mapping source data, configuring global and local rules, validating access and workflows, and rolling out in staged, monitored waves.",
  },
];

export function GlobalHrOperationsFaqSection() {
  return (
    <section className="bg-white py-24">
      <Container>
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Frequently Asked
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Questions global HR teams ask before expanding.
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-ink/[0.08] border-t border-ink/[0.08]">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-sm font-semibold text-ink">
                    {faq.question}
                  </span>
                  <svg
                    className="size-4 flex-none text-ink/40 transition-transform duration-200 group-open:rotate-180"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
