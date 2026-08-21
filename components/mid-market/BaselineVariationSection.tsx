import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TIMELINE = [
  {
    change: "Baseline v4 approved: Expense approval routing",
    meta: "HR Operations · Jan 1, 2026",
    status: "Active",
    badge: "bg-teal-600 text-white",
  },
  {
    change: "Variant approved: Acme DE works-council step",
    meta: "L. Hoffmann · Feb 1, 2026",
    status: "Approved",
    badge: "bg-gray-100 text-slate-500",
  },
  {
    change: "Variant expired: Temporary approver override",
    meta: "HR Operations · Jul 1, 2026",
    status: "Expired",
    badge: "bg-gray-100 text-slate-500",
  },
  {
    change: "Conflict flagged: Overlapping regional approval paths",
    meta: "System · Aug 12, 2026",
    status: "Review required",
    badge: "bg-amber-100 text-yellow-800",
  },
];

export function BaselineVariationSection() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <Reveal>
          <h2 className="max-w-[700px] font-heading text-3xl font-extrabold text-sky-950">
            Common baseline, governed variation.
          </h2>
          <p className="mt-3.5 max-w-[700px] leading-6 text-slate-600">
            Standardization coexists with legitimate differences —
            conflicts route to review rather than merging silently.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  Baseline
                </p>
                <p className="mt-1.5 font-bold text-sky-950">
                  Control: Expense approval routing
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Owner: HR Operations · Version 4 · Effective Jan 1, 2026 ·
                  Scope: All entities · Status: Active
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="overflow-hidden rounded-xl border border-slate-200 bg-white pt-3">
                {TIMELINE.map((row) => (
                  <li
                    key={row.change}
                    className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 px-5 py-3.5 sm:flex-nowrap"
                  >
                    <span className="min-w-0 text-sm text-gray-800 sm:truncate">
                      {row.change}
                    </span>
                    <span className="text-xs text-slate-400 sm:shrink-0 sm:whitespace-nowrap">
                      {row.meta}
                    </span>
                    <span
                      className={`rounded-lg px-2.5 py-1 text-xs font-semibold sm:shrink-0 sm:whitespace-nowrap ${row.badge}`}
                    >
                      {row.status}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.16} y={36} className="h-full">
            <PlaceholderImage
              src="/images/mid-market-organizations/baseline.png"
              alt="A colleague presenting a policy document to a small group"
              label="Common baseline, governed variation"
              className="h-full min-h-96 w-full rounded-xl border border-slate-200 border-l-2 border-l-primary bg-white"
            />
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <p className="mt-8 max-w-[820px] text-xs leading-5 text-slate-500">
            A product configuration hierarchy does not establish legal
            hierarchy, policy legality or regulatory compliance.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
