import Link from "next/link";
import { Container, Reveal, Button } from "@/components/ui";

const PLANS = [
  {
    name: "Zoiko HR Core",
    tagline: "Foundational records and processes.",
    features: [
      "Employee records & org structure",
      "Onboarding & document requests",
      "Leave & absence administration",
      "Standard reporting",
    ],
    featured: false,
  },
  {
    name: "Zoiko HR Advanced",
    tagline: "Governed workflows at scale.",
    features: [
      "Everything in Core",
      "Configurable approvals & workflows",
      "Performance review processes",
      "Governed AI assistance",
    ],
    featured: true,
  },
  {
    name: "Zoiko HR Enterprise",
    tagline: "Multi-entity, global operations.",
    features: [
      "Everything in Advanced",
      "Multi-entity & jurisdiction configuration",
      "Advanced permission-sensitive reporting",
      "Priority implementation support",
    ],
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Choose the Zoiko HR capability level that fits your
              organization.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Package and implementation scope should reflect workforce
              size, operating complexity, required capabilities,
              jurisdictions and integrations.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  plan.featured
                    ? "border-primary shadow-primary/10 hover:shadow-primary/20"
                    : "border-slate-100 shadow-slate-900/[0.03] hover:shadow-slate-900/10"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-md shadow-primary/30">
                    Most Chosen
                  </span>
                )}

                <p className="text-lg font-bold text-ink">{plan.name}</p>
                <p className="mt-1.5 text-sm text-ink/60">{plan.tagline}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
                          <path
                            d="M4 10l4 4 8-8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-sm text-ink/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button href="/pricing" className="mt-8 w-full">
                  Request Pricing
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.36}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm">
            <p className="text-ink/60">
              Need a connected business suite?{" "}
              <Link
                href="/zoiko-one"
                className="font-semibold text-primary hover:text-primary-dark"
              >
                Explore Zoiko One →
              </Link>
            </p>
            <Link
              href="/book-a-demo"
              className="font-semibold text-ink/60 hover:text-primary"
            >
              Book a Demo instead
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
