import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function IntegrationsAuthoritySection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal className="max-w-[700px]">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Integrations &amp; Authoritative Sources
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-extrabold text-sky-950">
            One connected system does not authorize every entity.
          </h2>
          <p className="mt-3.5 leading-6 text-slate-600">
            A connector can have different participating entities and field
            authorities across the portfolio.
          </p>
        </Reveal>

        <Reveal delay={0.12} y={30}>
          <PlaceholderImage
            src="/images/multi-entity-enterprises/integrations.png"
            alt="Two colleagues looking at a laptop screen together"
            label="Connected systems per entity"
            className="mt-8 h-72 w-full rounded-xl border border-slate-200 bg-slate-100"
          />
        </Reveal>
      </Container>
    </section>
  );
}
