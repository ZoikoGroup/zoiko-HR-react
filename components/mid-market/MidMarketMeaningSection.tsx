import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function MidMarketMeaningSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            What Zoiko HR for Mid-Market Organizations means
          </span>
          <p className="mx-auto mt-4 max-w-4xl font-heading text-xl font-bold leading-9 text-sky-950">
            Zoiko HR for Mid-Market Organizations is a solution pathway for
            organizations that need more standardized, governed HR
            operations as responsibilities, workflows, data and connected
            systems become more complex.
          </p>
        </Reveal>

        <Reveal delay={0.12} y={36}>
          <PlaceholderImage
            src="/images/mid-market-organizations/route-means.png"
            alt="A team reviewing process diagrams in a workshop"
            label="What this pathway means"
            className="mt-10 h-80 w-full rounded-[10px] bg-slate-100"
          />
        </Reveal>
      </Container>
    </section>
  );
}
