import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function WhyGroupExistsSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Why Zoiko Group exists.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Zoiko Group exists to enable focused, accountable businesses
                within a coherent portfolio — not to create a single
                product monolith. Each entity operates with clear
                ownership, defined scope, and governed connections.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-xs italic text-ink/40">
                Design mandate: No &quot;all-in-one&quot; or &quot;seamless
                ecosystem&quot; claims are made. Each connection is
                explicitly scoped and approved.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/about-zoiko-group/why-exists.png"
              alt="Team gathered around a tablet at a wooden table"
              label="Focused, accountable businesses"
              fit="contain"
              className="w-full rounded-2xl border border-primary/30"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
