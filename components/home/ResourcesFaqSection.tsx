import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

const RESOURCES = [
  {
    title: "Global HR management guide",
    description:
      "Structuring HR across entities, locations and jurisdictions.",
    image: "/images/home/resource-global-hr.png",
  },
  {
    title: "HR data migration guide",
    description:
      "How to move employee data in with a validated checkpoint.",
    image: "/images/home/resource-data-migration.png",
  },
  {
    title: "Employee self-service adoption guide",
    description:
      "Driving adoption of employee and manager self-service.",
    image: "/images/home/resource-self-service.png",
  },
];

const FAQS = [
  {
    question: "What is Zoiko HR?",
    answer:
      "Zoiko HR is a global HR management platform that centralizes employee records, structures HR processes, and connects workforce operations across entities and countries.",
  },
  {
    question: "Is it an HRIS?",
    answer:
      "Yes. Zoiko HR serves as a system of record for employee and organizational data, with configurable workflows layered on top.",
  },
  {
    question: "Can it be used in multiple countries?",
    answer:
      "Yes. Zoiko HR is built for multi-entity, multi-country operations, with jurisdiction-aware configuration for policies, fields, and access.",
  },
  {
    question: "Does it guarantee employment-law compliance?",
    answer:
      "No. Zoiko HR provides software for workforce administration; customers remain responsible for their own policies, employment decisions, and compliance obligations.",
  },
  {
    question: "Can it be purchased without Zoiko One?",
    answer:
      "Yes. Zoiko HR has its own independent subscription, onboarding, and support journey and does not require Zoiko One.",
  },
  {
    question: "Does it connect with payroll and time?",
    answer:
      "Yes. Zoiko HR can connect approved payroll, time, and identity systems through its integrations layer when enabled.",
  },
];

export function ResourcesFaqSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Practical resources for building better HR operations.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Use clear guides, product documentation and direct answers to
              evaluate, implement and adopt Zoiko HR.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {RESOURCES.map((resource, i) => (
            <Reveal key={resource.title} delay={i * 0.08}>
              <div className="group h-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
                <PlaceholderImage
                  src={resource.image}
                  alt={resource.title}
                  label={resource.title}
                  className="aspect-7/3 w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <p className="font-semibold text-ink">{resource.title}</p>
                  <p className="mt-1.5 text-sm text-ink/60">
                    {resource.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col">
              <p className="text-xl font-semibold text-ink">
                Frequently asked questions
              </p>
              <div className="mt-4 divide-y divide-slate-100 border-t border-slate-100">
                {FAQS.map((faq) => (
                  <details key={faq.question} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-ink">
                      {faq.question}
                      <span className="ml-4 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-100 text-ink/50 transition-transform duration-200 group-open:rotate-45 group-open:bg-primary-light group-open:text-primary">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-ink/60">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
              <Button href="/product-tour" className="mt-6 self-start">
                Take the Product Tour
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={30}>
            <PlaceholderImage
              src="/images/home/faq-team.png"
              alt="Team collaborating around a laptop"
              label="Collaborative HR team"
              className="aspect-4/3  h-full w-full rounded-2xl border border-slate-100 shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
