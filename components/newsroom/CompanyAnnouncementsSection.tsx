import { Container, Reveal, PlaceholderImage } from "@/components/ui";

function AnnouncementMeta() {
  return (
    <div className="flex items-center gap-2">
      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-xs font-semibold text-emerald-600">
        Announcement
      </span>
      <span className="text-xs text-ink/40">[Date]</span>
    </div>
  );
}

function ReadAnnouncement() {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold text-primary">
        Read announcement →
      </span>
      <span className="rounded-md border border-amber-500/25 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-amber-500">
        Illustrative
      </span>
    </div>
  );
}

export function CompanyAnnouncementsSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Company announcements — corporate milestones.
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-2 text-ink/50">
            Formal company announcements sourced from the approved News Item
            Registry.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <article className="mt-8 rounded-[20px] border border-black/10 bg-white p-7">
            <AnnouncementMeta />
            <h3 className="mt-4 font-heading text-xl font-bold text-ink">
              [Announcement headline from News Item Registry]
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink/50">
              [Approved summary — no invented milestones, metrics, or partner
              names]
            </p>
            <ReadAnnouncement />
          </article>
        </Reveal>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Reveal delay={0.18}>
            <article className="h-full rounded-[20px] border border-black/10 bg-white p-7">
              <AnnouncementMeta />
              <h3 className="mt-4 font-heading text-base font-bold text-ink">
                [Announcement headline from News Item Registry]
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/50">
                [Approved summary — no invented milestones, metrics, or partner
                names]
              </p>
              <ReadAnnouncement />
            </article>
          </Reveal>

          <Reveal delay={0.24}>
            <PlaceholderImage
              src="/images/newsroom/announcements.png"
              alt="Three colleagues reviewing documents at a desk"
              label="Company announcements"
              className="h-full min-h-56 w-full rounded-[20px] border border-black/10"
            />
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-5 text-xs leading-relaxed text-ink/40">
            Company announcements render only from approved published News Item
            records with required fields, claims approval, and valid rights.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
