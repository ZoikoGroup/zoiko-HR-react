import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const WORK_MODES = [
  { label: "Onsite", dot: "bg-primary" },
  { label: "Hybrid", dot: "bg-amber-500" },
  { label: "Remote", dot: "bg-emerald-500" },
];

export function LocationsWorkModesSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Locations &amp; Work Modes
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-2 text-ink/60">
              Work-mode eligibility is role-specific and defined in each
              Job Registry record.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-semibold text-ink">Work-Mode Policy</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Work-mode eligibility — Onsite, Hybrid, or Remote — is
                specified at the individual role level and is not
                inferred from team or office. Each approved Job record
                carries its own work-mode designation. Candidates should
                review the work-mode field on each role page before
                applying.
              </p>
              <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900">
                Work-mode eligibility is role-specific and appears only
                from each Job record in the Registry. Generic office or
                team-level policies are not published here.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/careers/locations-work-modes.png"
              alt="Person presenting to colleagues in a meeting room"
              label="Locations and work modes"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {WORK_MODES.map((mode) => (
              <span
                key={mode.label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink"
              >
                <span className={`h-2 w-2 rounded-full ${mode.dot}`} />
                {mode.label}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
