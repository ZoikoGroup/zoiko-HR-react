import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function MidMarketHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] py-20 text-white sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Solutions / Mid-Market Organizations
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Standardize HR operations as organizational complexity
                increases.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[480px] leading-7 text-slate-300">
                Build common records, policies and processes while keeping
                delegated responsibility, approved variation, exceptions
                and evidence visible.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-6 flex flex-wrap items-center gap-3.5">
                <Button href="/book-a-demo" className="px-7 py-3.5">
                  Book a Demo
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="!border-white/30 !bg-white/10 px-7 py-3.5 !text-white hover:!border-primary hover:!text-primary"
                >
                  Request Pricing
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="/resources/product-tour"
                className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-white"
              >
                Take the Product Tour
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.36}>
              <p className="mt-5 max-w-[460px] text-xs leading-5 text-slate-400">
                &quot;Mid-market&quot; is a solution-navigation context, not
                a public employee-count or package definition. Exact
                fields, workflows, integrations and availability vary by
                plan, contract, configuration and jurisdiction.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/mid-market-organizations/hero.png"
              alt="Three colleagues in conversation on an office sofa"
              label="Standardized HR operations"
              fit="contain"
              className="w-full rounded-2xl border border-blue-950 shadow-2xl shadow-black/35"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
