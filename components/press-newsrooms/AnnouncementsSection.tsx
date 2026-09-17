import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { NewsCard } from "./NewsCard";
import { JULY_ANNOUNCEMENT, NEWS } from "./newsData";
import { SectionHeading } from "./shared";

export function AnnouncementsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title="Company announcements — corporate milestones." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Reveal>
            <NewsCard item={NEWS[0]} />
          </Reveal>
          <Reveal delay={0.06} className="order-last md:col-span-2 xl:order-none xl:col-span-1 xl:h-full">
            <PlaceholderImage
              src="/images/press-newsrooms/announcements.png"
              alt="Colleagues reviewing information on a monitor in a library office"
              label="Colleagues reviewing a milestone"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-slate-200 xl:aspect-auto xl:h-full"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <NewsCard item={JULY_ANNOUNCEMENT} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
