import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function CorporateProductProfileSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Corporate + product profile
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                One overview. The company context and product context
                buyers need first.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Company Overview explains Zoiko HR at executive-summary
                level: corporate identity, platform context, group
                relationship, operating independence, and where to go
                next — whether that is product, company, sales,
                partnership, careers, press, or contact information.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <a
                href="/about"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore Zoiko HR →
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/company-overview/corporate-product-profile.png"
              alt="A team collaborating around laptops at a shared table"
              label="Company and product context, together"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
