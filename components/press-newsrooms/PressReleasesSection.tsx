import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { NewsCard } from "./NewsCard";
import { NEWS } from "./newsData";
import { InfoNote, SectionHeading } from "./shared";

export function PressReleasesSection() {
  const release = NEWS.find((item) => item.type === "Press Release")!;
  return (
    <section id="press-releases" className="scroll-mt-24 border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading title="Press releases — formal communications." />
        <Reveal>
          <InfoNote className="mt-6">
            HTML is the primary accessible format for every press release.
            Supplementary PDF is offered only where rights, accessibility, and
            version metadata are current.
          </InfoNote>
        </Reveal>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <NewsCard item={release} />
          </Reveal>
          <Reveal delay={0.1} className="lg:h-full">
            <PlaceholderImage
              src="/images/press-newsrooms/press-releases.png"
              alt="Three colleagues reviewing work closely at a laptop"
              label="Colleagues reviewing a release"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-slate-200 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
