import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const DIRECTORY_POINTS = [
  "Organization-scoped search with effective-date filter",
  "Profile preview shows summary, open changes, and access boundary",
  "Bulk actions require authorization, preview, and audit",
  "Sensitive fields omitted or shown with safe explanation by role",
];

const STATE_PILLS = [
  { label: "Draft", style: "bg-white/10 text-white/50" },
  { label: "Submitted", style: "bg-white/10 text-white/50" },
  { label: "Approval Pending", style: "bg-amber-400 text-ink" },
  { label: "Approved Future", style: "bg-white/10 text-white/50" },
  { label: "Effective", style: "bg-emerald-400/20 text-emerald-300" },
  { label: "Superseded", style: "bg-white/10 text-white/40" },
  { label: "Corrected", style: "bg-white/10 text-white/50" },
  { label: "Reversed", style: "bg-rose-400/20 text-rose-300" },
];

export function PeopleDirectoryChangesSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="grid gap-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal y={30}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/30">
                <PlaceholderImage
                  src="/images/core-hr/people-directory.png"
                  alt="Colleagues collaborating around laptops at a shared desk"
                  label="People Directory"
                  fit="contain"
                  className="w-full"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div>
                    <p className="text-sm font-semibold">People Directory</p>
                    <p className="mt-0.5 text-xs text-white/60">
                      4,218 records · Scoped by organization role · Sensitive
                      fields restricted
                    </p>
                  </div>
                  <p className="text-2xl font-bold">4,218</p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.08}>
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Section 06 — People directory
                </span>
                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Find the right workforce record with full context.
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-4 text-white/60">
                  Search by name, preferred name, approved identifier, work
                  email, position, department, manager, entity, or location —
                  all scoped to your organization role and field-sensitivity
                  configuration.
                </p>
              </Reveal>
              <div className="mt-5 space-y-3">
                {DIRECTORY_POINTS.map((point, i) => (
                  <Reveal key={point} delay={0.18 + i * 0.05}>
                    <p className="border-t border-white/10 pt-3 text-sm text-white/60">
                      {point}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                  Section 11 — Effective-dated changes
                </span>
                <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  No silent overwrite. Every state is traceable.
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-4 text-white/60">
                  Current, proposed, approved future, effective, superseded,
                  corrected, and reversed states remain distinguishable.
                  Reversal creates a new governed change — it does not
                  delete history.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-5 flex flex-wrap gap-2">
                  {STATE_PILLS.map((pill) => (
                    <span
                      key={pill.label}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${pill.style}`}
                    >
                      {pill.label}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} y={30}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/30">
                <PlaceholderImage
                  src="/images/core-hr/effective-dated-changes.png"
                  alt="HR team reviewing a workforce change in a meeting"
                  label="Every state, traceable"
                  fit="contain"
                  className="w-full"
                />
                <div className="absolute right-4 top-4 rounded-xl border border-white/10 bg-ink/90 p-3.5 shadow-lg shadow-black/40 backdrop-blur">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                    Approved future
                  </span>
                  <p className="mt-1 text-sm font-semibold">
                    Manager → A. Kim
                  </p>
                  <p className="mt-0.5 text-xs text-white/50">
                    Effective 01 Oct 2025
                  </p>
                  <p className="mt-1 text-[11px] text-white/40">
                    Current value remains authoritative
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
