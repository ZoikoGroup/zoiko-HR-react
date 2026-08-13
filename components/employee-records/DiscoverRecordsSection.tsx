import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function DiscoverRecordsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Discover records without exposing what isn&apos;t permitted.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Search and filters respect effective access — restricted
              values never surface through autocomplete, counts, filters,
              URLs, exports, or error messages.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Reveal delay={0.14} y={30}>
            <PlaceholderImage
              src="/images/employee-records/discover-records-1.png"
              alt="Team reviewing charts together around a table"
              label="Permission-aware discovery"
              fit="contain"
              className="w-full rounded-2xl border-l-4 border-rose-400 shadow-lg shadow-slate-900/10"
            />
          </Reveal>
          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/employee-records/discover-records-2.png"
              alt="Team reviewing a world map and data around a table"
              label="Restricted values never surface"
              fit="contain"
              className="w-full rounded-2xl border-l-4 border-emerald-400 shadow-lg shadow-slate-900/10"
            />
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-4 text-xs text-ink/40">
            Restricted rows show a role-appropriate summary and an
            approved request route instead of hidden values.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
