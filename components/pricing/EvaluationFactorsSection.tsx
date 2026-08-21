import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const LEFT_FACTORS = [
  {
    title: "Organization & population",
    items: [
      "Number and type of legal entities",
      "Business units and locations",
      "Employee, contractor, and manager populations",
      "Seasonal and peak scope",
      "Effective-dated structures",
    ],
  },
  {
    title: "Implementation & migration",
    items: [
      "Data sources, quality, and history",
      "Configuration and role setup",
      "Workflow and document requirements",
      "Testing, training, and launch",
      "Customer vs. Zoiko responsibilities",
    ],
  },
];

const RIGHT_FACTORS = [
  {
    title: "Integrations & technical scope",
    items: [
      "HRIS, payroll, and identity connections",
      "Custom and partner-built connectors",
      "Security and privacy review requirements",
      "Third-party charges (separate)",
      "Developer documentation route",
    ],
  },
  {
    title: "Contract, billing & tax",
    items: [
      "Subscription cadence and term",
      "Renewal, true-up, and cancellation",
      "Invoice, payment, and credit terms",
      "Tax qualification and currency",
      "Master terms, DPA, and AUP hierarchy",
    ],
  },
];

function FactorCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="font-semibold text-ink">{title}</p>
      <ul className="mt-3 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-ink/60">
            · {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EvaluationFactorsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Total evaluation framework
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Factors that may shape a commercial evaluation.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Understanding which factors apply to your organization
              helps resolve unscoped requirements before a pricing
              conversation begins. None of the factors below is a
              confirmed billing dimension unless stated in approved
              commercial content.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-center">
          <div className="flex flex-col gap-4">
            {LEFT_FACTORS.map((factor, i) => (
              <Reveal key={factor.title} delay={0.1 + i * 0.08}>
                <FactorCard title={factor.title} items={factor.items} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/pricing/evaluation-factors.png"
              alt="Team reviewing charts and data around a table"
              label="Every factor, transparent"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            {RIGHT_FACTORS.map((factor, i) => (
              <Reveal key={factor.title} delay={0.16 + i * 0.08}>
                <FactorCard title={factor.title} items={factor.items} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
