import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const FILTERS = [
  "All",
  "Awaiting approval",
  "Rejected",
  "Source conflict",
  "Reconciliation open",
];

const STATS = [
  {
    label: "Authentication health",
    value: "Healthy",
    valueClass: "text-emerald-400",
    note: "Credential status — separate from data freshness",
  },
  {
    label: "Last successful exchange",
    value: "22 Aug 2026 · 09:14 UTC",
    valueClass: "text-sky-500",
    note: "Does not prove data is current or accepted",
  },
  {
    label: "Reconciliation open cases",
    value: "2",
    valueClass: "text-amber-500",
    note: "Operational scope only — not GL or statutory close",
  },
];

export function CommandCenterSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
            Section 5 — Connected Operations Command Center
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight sm:text-3xl">
            Every open handoff has an owner, state, cutoff impact and actionable
            next step.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-400">
            Synthetic data only. No real employee identifiers, compensation,
            bank, tax or configuration values.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-7 flex flex-wrap items-center gap-2">
            {FILTERS.map((filter, i) => (
              <span
                key={filter}
                className={`rounded-md border px-3.5 py-1.5 text-xs font-semibold leading-4 ${
                  i === 0
                    ? "border-sky-500/50 bg-sky-500/10 text-sky-500"
                    : "border-white/10 text-slate-400"
                }`}
              >
                {filter}
              </span>
            ))}
            <span className="pl-2 text-xs leading-4 text-slate-500">
              6 items
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.14} y={30}>
          <PlaceholderImage
            src="/images/connect-hr/command-center.png"
            alt="Two colleagues reviewing open handoffs together"
            label="Connected operations command center"
            className="mt-5 aspect-[1280/288] min-h-48 w-full rounded-xl border border-white/10 bg-slate-800"
          />
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={0.2 + i * 0.06}>
              <div className="h-full rounded-[10px] border border-white/10 bg-white/5 px-4 py-3.5">
                <p className="text-xs font-semibold leading-4 text-slate-400">
                  {stat.label}
                </p>
                <p
                  className={`mt-1.5 text-base font-semibold leading-6 ${stat.valueClass}`}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] leading-4 text-slate-500">
                  {stat.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
