import { Container, Reveal, Button } from "@/components/ui";

const FACTORS = [
  "Organization size and entity/location complexity",
  "Required product areas and user populations",
  "Integration needs and data complexity",
  "Security and privacy review requirements",
  "Support level and contract scope",
  "Jurisdiction and localization requirements",
];

export function PricingEvaluationSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Section 17 — Pricing & enterprise evaluation
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Evaluate Zoiko HR for your organization.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Prices, packages, implementation, support, integrations, and
              availability require approved commercial content and may vary
              by contract, configuration, and jurisdiction.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          <div>
            <Reveal delay={0.12}>
              <p className="text-sm font-semibold text-ink">
                Commercial evaluation factors
              </p>
            </Reveal>
            <ul className="mt-4 space-y-3">
              {FACTORS.map((factor, i) => (
                <Reveal key={factor} delay={0.16 + i * 0.05}>
                  <li className="group flex items-start gap-2.5">
                    <span className="mt-0.5 text-primary transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                    <span className="text-sm text-ink/70">{factor}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.2} y={30}>
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm shadow-slate-900/[0.03]">
              <div className="flex flex-col gap-4">
                <Button href="/book-a-demo" className="w-full">
                  Book a Demo
                </Button>
                <Button href="/pricing" variant="outline" className="w-full">
                  Request Pricing
                </Button>
                <a
                  href="/resources/product-tour"
                  className="group text-center text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Take the Product Tour
                  <span className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <p className="text-center text-sm text-ink/40">
                  + Request a pricing conversation
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink/40">
            For current pricing and plan details, use Request Pricing above.
            Published packages, prices, and availability require approved
            commercial content.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
