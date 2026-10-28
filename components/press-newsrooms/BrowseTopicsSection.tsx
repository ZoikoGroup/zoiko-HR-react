import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

type Topic = { icon: string; title: string; body: string; className: string };

const LEFT: Topic[] = [
  {
    icon: "🏢",
    title: "Company Announcements",
    body: "Organizational and corporate milestones published from approved announcement records.",
    className: "bg-blue-50",
  },
  {
    icon: "🔒",
    title: "Trust & Security",
    body: "Governance, privacy, security, or trust-related announcements that meet the press taxonomy.",
    className: "bg-orange-50",
  },
];

const RIGHT: Topic[] = [
  {
    icon: "↗",
    title: "External Coverage",
    body: "Curated references to third-party reporting linked to the original publisher. Not authored by Zoiko HR.",
    className: "bg-green-50",
  },
  {
    icon: "⚙️",
    title: "Product & Platform",
    body: "Material public platform announcements, distinct from routine release notes or changelogs.",
    className: "bg-violet-50",
  },
];

function TopicCard({ topic }: { topic: Topic }) {
  return (
    <div className={`flex h-full flex-col gap-3 rounded-2xl border border-slate-200 p-5 ${topic.className}`}>
      <h3 className="flex items-center gap-3 text-base font-extrabold leading-6 text-ink">
        <span aria-hidden className="text-xl leading-7">
          {topic.icon}
        </span>
        {topic.title}
      </h3>
      <p className="text-xs leading-5 text-slate-500 sm:text-sm">{topic.body}</p>
    </div>
  );
}

export function BrowseTopicsSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading title="Browse by topic & content type." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,389px)_minmax(0,1fr)]">
          <div className="grid gap-4">
            {LEFT.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <TopicCard topic={t} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="order-last md:col-span-2 xl:order-none xl:col-span-1 xl:h-full">
            <PlaceholderImage
              src="/images/press-newsrooms/browse-topics.png"
              alt="Three colleagues seated together at a boardroom table"
              label="Colleagues at a boardroom table"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-slate-200 xl:aspect-auto xl:h-full"
            />
          </Reveal>
          <div className="grid gap-4">
            {RIGHT.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <TopicCard topic={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
