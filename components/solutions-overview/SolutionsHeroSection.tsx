import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function SolutionsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] pb-20 pt-20 text-white sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_50%_at_60%_-10%,rgba(49,94,251,0.18),transparent)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Solutions
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Find the Zoiko HR path that fits how your organization
                works.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-white/70">
                Explore solution pathways by organization stage, operating
                complexity, team responsibility, and connected HR, time,
                and payroll needs.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-6 border-l border-white/10 pl-4 text-xs leading-relaxed text-white/40">
                These pathways organize evaluation of Zoiko HR.
                Capabilities, integrations, implementation, commercial
                terms, and availability may vary by plan, contract,
                configuration, and jurisdiction.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/book-a-demo">Book a Demo</Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
                >
                  Request Pricing
                </Button>
                <a
                  href="/resources/product-tour"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
                >
                  Take the Product Tour
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/solutions-overview/hero.png"
              alt="A team evaluating options together around a table of laptops"
              label="Choose your evaluation path"
              fit="contain"
              className="w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
