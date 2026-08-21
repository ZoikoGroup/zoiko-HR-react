import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function HowPricedSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              How is Zoiko HR priced?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Zoiko HR pricing must be published from approved commercial
              content. The commercial evaluation may consider the
              selected product scope, employee and user populations,
              entities and locations, integrations, implementation,
              support, contract, currency, tax, and jurisdiction. Current
              package names, prices, entitlements, and availability are
              provided only after validation.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Reveal delay={0.14} y={30}>
            <PlaceholderImage
              src="/images/pricing/how-priced-1.png"
              alt="Hands reviewing notebooks and documents at a desk"
              label="Reviewing evaluation factors"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/pricing/how-priced-2.png"
              alt="Tablet showing a compliance dashboard beside signed documents"
              label="Validated before publication"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
