import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const RECORD_ROWS = [
  {
    field: "Person identifier",
    source: "Source: HR system",
    value: "[Synthetic ID]",
    status: { label: "Current", className: "bg-emerald-400/10 text-emerald-600" },
  },
  {
    field: "Work relationship",
    source: "Source: HR source",
    value: "[Employment type]",
    status: { label: "Current", className: "bg-emerald-400/10 text-emerald-600" },
  },
  {
    field: "Organization scope",
    source: "Source: Structure record",
    value: "[EMEA division]",
    status: { label: "Current", className: "bg-emerald-400/10 text-emerald-600" },
  },
  {
    field: "Job / position",
    source: "Source: HR source",
    value: "[Role title — position]",
    status: { label: "Current", className: "bg-emerald-400/10 text-emerald-600" },
  },
  {
    field: "Manager",
    source: "Source: Structure record",
    value: "[Manager reference]",
    status: { label: "Review due", className: "bg-amber-400/10 text-amber-600" },
  },
  {
    field: "Work-location context",
    source: "Source: HR source",
    value: "[Configured location]",
    status: { label: "Future-dated", className: "bg-slate-200 text-slate-500" },
  },
  {
    field: "Local config profile",
    source: "Source: Config registry",
    value: "EMEA overlay v2",
    status: { label: "Active", className: "bg-emerald-400/10 text-emerald-600" },
  },
  {
    field: "Integration status",
    source: "Source: Identity provider",
    value: "Identity: synced",
    status: {
      label: "Connected",
      className: "bg-emerald-400/10 text-emerald-600",
    },
  },
];

export function WorkforceRecordsSection() {
  return (
    <section className="border-t border-black/10 bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Workforce Records with Global Context
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-sky-950">
            Effective dates, authoritative sources, and global context.
          </h2>
          <p className="mt-4 max-w-[660px] leading-6 text-slate-500">
            Synthetic record only. The platform must not infer tax residency,
            immigration status, payroll jurisdiction, or legal employer status
            from location or organization data.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.1} y={30}>
            <div className="h-full rounded-2xl border border-black/10 bg-white/70 p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Worker Record — Illustrative (Synthetic)
              </span>
              <ul className="mt-3">
                {RECORD_ROWS.map((row) => (
                  <li
                    key={row.field}
                    className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 py-2.5"
                  >
                    <span>
                      <span className="block text-xs font-bold text-sky-950">
                        {row.field}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-400">
                        {row.source}
                      </span>
                    </span>
                    <span className="flex items-center gap-2.5">
                      <span className="text-xs text-slate-500">
                        {row.value}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${row.status.className}`}
                      >
                        {row.status.label}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16} y={30} className="h-full">
            <PlaceholderImage
              src="/images/global-organizations/workforce-records.png"
              alt="Three colleagues reviewing records at a meeting table"
              label="Workforce records in context"
              className="h-full min-h-72 w-full rounded-2xl border border-black/10 bg-white"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-4 rounded-xl border border-black/10 bg-white/60 px-5 py-3.5">
            <p className="text-xs leading-5 text-slate-500">
              Sensitive fields respect field-level and organizational access. No
              tax residency, immigration, or payroll-jurisdiction inference from
              location data.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
