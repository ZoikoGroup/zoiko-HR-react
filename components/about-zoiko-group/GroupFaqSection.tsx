import { Container, Reveal } from "@/components/ui";

const FAQS = [
  {
    question: "What is Zoiko Group?",
    answer:
      "Zoiko Group is the broader portfolio organization that Zoiko HR operates within — a multi-product group of focused, independently accountable businesses.",
  },
  {
    question: "How is Zoiko HR related to Zoiko Group?",
    answer:
      "Zoiko HR is a group member product. It operates with its own identity, billing, data handling, and contracts, governed by shared group-level operating principles.",
  },
  {
    question: "What is included in the Zoiko Group portfolio?",
    answer:
      "Approved entities include Zoiko HR, shared group services such as documentation and trust/security, and registry-governed partner integrations. See the portfolio map above.",
  },
  {
    question: "Are Zoiko Group products bundled?",
    answer:
      "No. Each product is sold and operated independently. A published relationship does not imply bundled access, common billing, or shared identity.",
  },
  {
    question: "Do Zoiko Group products share customer data?",
    answer:
      "No, not by default. Data flow between entities only occurs through explicitly documented and scoped approved connections.",
  },
  {
    question: "Where are official announcements published?",
    answer:
      "Official group and product announcements are published in the Newsroom section of Company.",
  },
  {
    question: "Where can I find careers information?",
    answer:
      "Careers information is available through the Company navigation, covering opportunities across Zoiko HR and related Zoiko platforms.",
  },
  {
    question: "How can organizations explore partnerships?",
    answer:
      "Technology, commercial, and strategic partnership pathways are managed through the Partners destination under Company.",
  },
];

export function GroupFaqSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Corporate FAQ — direct answers.
          </h2>
        </Reveal>

        <div className="mx-auto mt-8 max-w-2xl space-y-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
              <details className="group rounded-xl border border-slate-200 bg-white px-5 py-4 transition-colors duration-200 open:border-primary/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-semibold text-ink">{faq.question}</span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4 flex-none text-ink/40 transition-transform duration-200 group-open:rotate-90"
                  >
                    <path
                      d="M7.5 5L12.5 10L7.5 15"
                      stroke="currentColor"
                      strokeWidth="1.6"
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
