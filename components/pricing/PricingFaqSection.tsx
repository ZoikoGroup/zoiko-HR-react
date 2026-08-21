import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const FAQS = [
  {
    question: "Does Zoiko HR publish fixed prices?",
    answer:
      "No. Current package names, prices, and entitlements are governed commercial content, provided only after a qualified evaluation is completed.",
  },
  {
    question: "What affects a Zoiko HR commercial evaluation?",
    answer:
      "Organization and population, integrations and technical scope, implementation and migration, and contract, billing, and tax factors may all apply.",
  },
  {
    question: "What is included in a package?",
    answer:
      "Package contents are defined through approved commercial content using entitlement states such as Included, Limited, Optional, Sales-assisted, or Not applicable.",
  },
  {
    question: "Are implementation and migration included?",
    answer:
      "Implementation and migration scope, data sources, configuration, and launch requirements are confirmed during a scoped commercial evaluation.",
  },
  {
    question: "Are integrations included?",
    answer:
      "Integration scope depends on the connectors required, custom or partner-built work, and any separate third-party charges — confirmed during evaluation.",
  },
  {
    question: "Can I calculate an instant price?",
    answer:
      "No. Zoiko HR does not publish an instant price calculator; current pricing requires a scoped commercial evaluation.",
  },
  {
    question: "Are taxes included?",
    answer:
      "Tax qualification and currency are addressed as part of the contract, billing, and tax factors during evaluation.",
  },
  {
    question: "Can global organizations receive one price?",
    answer:
      "Multi-entity and multi-jurisdiction organizations can request a consolidated evaluation that accounts for entities, locations, and applicable jurisdictions.",
  },
  {
    question: "Can existing customers use this page for expansion?",
    answer:
      "Yes. Existing customers can request pricing for additional product areas, populations, or entities through the same evaluation process.",
  },
  {
    question: "How do I get current pricing?",
    answer:
      "Submit the Request Pricing form with business-level information; a member of the commercial team will follow up with current, validated pricing.",
  },
];

export function PricingFaqSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Pricing and commercial evaluation questions.
            </h2>
          </Reveal>
        </div>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3 lg:flex-1">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.question} delay={Math.min(i * 0.03, 0.3)}>
                <details className="group rounded-xl border border-slate-200 bg-white px-5 py-4 transition-colors duration-200 open:border-primary/30">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <span className="font-semibold text-ink">{faq.question}</span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 flex-none text-ink/40 transition-transform duration-200 group-open:rotate-180"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
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

          <Reveal delay={0.2} y={30} className="mx-auto w-full max-w-[390px] flex-none lg:mx-0">
            <PlaceholderImage
              src="/images/pricing/faq.png"
              alt="Colleagues reviewing charts together at a workstation"
              label="Questions, answered directly"
              className=" w-full max-w-[390px] rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
