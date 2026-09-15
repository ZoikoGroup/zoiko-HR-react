import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export function CrossModuleSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Cross-module authority"
          title="Self-Service surfaces information. It never owns the truth."
          className="max-w-[740px]"
        >
          Every card and task names its owning module — Self-Service is an
          access-and-action layer, not a second system of record.
        </SectionHeading>

        <Reveal delay={0.12}>
          <PlaceholderImage
            src="/images/self-service/cross-module.webp"
            alt="A team in discussion around a meeting table"
            label="Cross-module authority"
            className="mt-10 aspect-[16/9] w-full rounded-xl bg-slate-100 sm:aspect-[21/9] lg:aspect-[1278/300]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
