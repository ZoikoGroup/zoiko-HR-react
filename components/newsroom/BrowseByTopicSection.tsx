import { Container, Reveal, PlaceholderImage } from "@/components/ui";

function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-primary">
      <path d="M4 10v4a1 1 0 001 1h3l6 4V5L8 9H5a1 1 0 00-1 1zM18 9a4 4 0 010 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-primary">
      <path d="M6 3h9l3 3v15H6V3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 11h6M9 15h6M9 7h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-primary">
      <path d="M10 14a4 4 0 005.66 0l3-3A4 4 0 1013 5.34l-1 1M14 10a4 4 0 00-5.66 0l-3 3A4 4 0 1011 18.66l1-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-primary">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-primary">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 8a3 3 0 110 6M21 20c0-2.5-1.8-4.6-4.2-5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-primary">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18-2.5-2.6-2.5-15.4 0-18z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

const TOPICS = [
  {
    title: "Company Announcements",
    Icon: MegaphoneIcon,
    description: "Organizational and corporate milestones",
  },
  {
    title: "Press Releases",
    Icon: DocIcon,
    description: "Formal approved press communications",
  },
  {
    title: "External Coverage",
    Icon: LinkIcon,
    description: "Curated third-party reporting",
  },
  {
    title: "Trust & Security",
    Icon: ShieldIcon,
    description: "Governance and security disclosures",
  },
  {
    title: "Leadership",
    Icon: PeopleIcon,
    description: "Leadership and team news",
  },
  {
    title: "Product & Platform",
    Icon: GlobeIcon,
    description: "Platform capability news",
  },
];

export function BrowseByTopicSection() {
  return (
    <section className="bg-[#040D18] py-16 text-white sm:py-24">
      <Container>
        <div className="mx-auto max-w-[960px]">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Browse by topic &amp; content type.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {TOPICS.map((topic, i) => (
                <Reveal key={topic.title} delay={0.08 + i * 0.05}>
                  <div className="flex h-full min-h-56 flex-col items-center rounded-2xl border border-white/10 bg-[#1E3450] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                    <topic.Icon />
                    <p className="mt-2.5 font-heading text-base font-bold">
                      {topic.title}
                    </p>
                    <p className="mt-1.5 flex-1 text-xs leading-relaxed text-white/50">
                      {topic.description}
                    </p>
                    <p className="mt-3 text-xs font-semibold text-primary">
                      View →
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.38}>
              <PlaceholderImage
                src="/images/newsroom/browse-topics.png"
                alt="Two colleagues discussing notes beside a whiteboard"
                label="Browse by topic"
                className="h-full min-h-64 w-full rounded-2xl border border-white/10"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
