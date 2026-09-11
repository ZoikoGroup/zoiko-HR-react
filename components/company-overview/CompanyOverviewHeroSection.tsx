import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function CompanyOverviewHeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-20 text-white sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_50%_at_20%_0%,rgba(49,94,251,0.35),transparent)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Company Overview
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                A clear view of Zoiko HR — the company and the platform.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-white/70">
                Zoiko HR is a commercially independent global SaaS
                platform within Zoiko Group. Explore the corporate
                profile, product context, company structure, and the
                right next step for your organization.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/contact-sales">Talk to Sales</Button>
                <Button
                  href="/about"
                  variant="outline"
                  className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
                >
                  Explore Zoiko HR
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="/company/about-zoiko-group"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
              >
                About Zoiko Group →
              </a>
            </Reveal>

            <Reveal delay={0.36}>
              <p className="mt-6 max-w-md text-xs leading-relaxed text-white/40">
                Corporate and product information presented with clear
                ownership, approved company routes, and evidence-first
                claims.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/company-overview/hero.webp"
              alt="A team gathered around laptops and monitors reviewing work together"
              label="The company and the platform"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
