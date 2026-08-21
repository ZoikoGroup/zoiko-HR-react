import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ConnectedSystemsSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Integrations &amp; Authoritative Sources
          </span>
          <h2 className="mt-4 max-w-[700px] font-heading text-3xl font-extrabold text-sky-950">
            Connected systems, without silent overwrite.
          </h2>
          <p className="mt-5 max-w-[700px] leading-6 text-slate-600">
            Each field or event names its authoritative system, approving
            role and conflict rule.
          </p>
        </Reveal>

        <Reveal delay={0.12} y={36}>
          <PlaceholderImage
            src="/images/mid-market-organizations/connected-systems.png"
            alt="A team reviewing connected reports and dashboards together"
            label="Connected systems"
            fit="contain"
            className="mt-8 w-full rounded-xl"
          />
        </Reveal>
      </Container>
    </section>
  );
}
