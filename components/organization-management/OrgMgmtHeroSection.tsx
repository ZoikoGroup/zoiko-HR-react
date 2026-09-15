import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";

export function OrgMgmtHeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-20 text-white sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_50%_at_20%_0%,rgba(49,94,251,0.35),transparent)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Organization Management
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Model your organization clearly. Keep change governed.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-white/70">
                Represent entities, departments, teams, locations, and
                reporting lines with explicit structure, relationships,
                ownership, effective context, and auditability — using
                only product-validated capabilities.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="#organization-model">Explore organization model →</Button>
                <Button
                  href="#governed-change"
                  variant="outline"
                  className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
                >
                  See governed change
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="/book-a-demo"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
              >
                Request a demo →
              </a>
            </Reveal>

            <Reveal delay={0.36}>
              <p className="mt-6 max-w-md text-xs leading-relaxed text-white/40">
                Structure should be understandable, auditable, and
                changed deliberately. Public copy reflects only
                product-validated capabilities.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/organization-management/hero.webp"
              alt="Hands pointing at an organization chart diagram"
              label="Model your organization clearly"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
