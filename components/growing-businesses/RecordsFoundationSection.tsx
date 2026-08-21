import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const COLUMNS = ["Field", "Source", "Owner", "Effective", "Status"];

const STATUS_STYLES: Record<string, string> = {
  ready: "bg-emerald-400/10 text-emerald-500",
  review: "bg-amber-400/10 text-amber-500",
  future: "bg-primary/10 text-primary",
};

const ROWS = [
  {
    field: "Full name",
    source: "HR Source",
    owner: "HR Administrator",
    effective: "Current",
    status: "ready",
  },
  {
    field: "Employment type",
    source: "HR Source",
    owner: "HR Administrator",
    effective: "Current",
    status: "ready",
  },
  {
    field: "Manager",
    source: "Structure record",
    owner: "HR Administrator",
    effective: "Current",
    status: "review",
  },
  {
    field: "Work location",
    source: "HR Source",
    owner: "HR Administrator",
    effective: "Future-dated",
    status: "future",
  },
  {
    field: "Start date",
    source: "HR Source",
    owner: "HR Administrator",
    effective: "Current",
    status: "ready",
  },
];

export function RecordsFoundationSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Foundation 1 — Records
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink">
            Reliable workforce information.
          </h2>
          <p className="mt-3 text-ink/50">
            Structured data with clear ownership, sources, effective dates
            and reviewable change history.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                Workforce Record — Illustrative
              </p>
              {/* Small screens: each field becomes a stacked card. */}
              <div className="mt-4 flex flex-col gap-3 sm:hidden">
                {ROWS.map((row) => (
                  <div
                    key={row.field}
                    className="rounded-lg border border-slate-200 p-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-medium text-ink">
                        {row.field}
                      </p>
                      <span
                        className={`inline-flex flex-none rounded-full px-2 py-0.5 text-xs font-semibold ${STATUS_STYLES[row.status]}`}
                      >
                        {row.status}
                      </span>
                    </div>
                    <dl className="mt-2 grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-1 text-xs leading-5">
                      <dt className="text-ink/40">Source</dt>
                      <dd className="text-ink/50">{row.source}</dd>
                      <dt className="text-ink/40">Owner</dt>
                      <dd className="text-ink/50">{row.owner}</dd>
                      <dt className="text-ink/40">Effective</dt>
                      <dd className="text-ink/50">{row.effective}</dd>
                    </dl>
                  </div>
                ))}
              </div>

              <div className="mt-4 hidden sm:block">
                <table className="w-full border-collapse text-left">
                  <caption className="sr-only">
                    Illustrative workforce record fields with source, owner,
                    effective date and status
                  </caption>
                  <thead>
                    <tr>
                      {COLUMNS.map((column) => (
                        <th
                          key={column}
                          scope="col"
                          className="border-b border-slate-200 px-1.5 py-1.5 text-xs font-semibold text-ink/40"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((row) => (
                      <tr key={row.field}>
                        <th
                          scope="row"
                          className="border-b border-slate-200 px-1.5 py-2 text-xs font-medium text-ink"
                        >
                          {row.field}
                        </th>
                        <td className="border-b border-slate-200 px-1.5 py-2 text-xs text-ink/50">
                          {row.source}
                        </td>
                        <td className="border-b border-slate-200 px-1.5 py-2 text-xs text-ink/50">
                          {row.owner}
                        </td>
                        <td className="border-b border-slate-200 px-1.5 py-2 text-xs text-ink/50">
                          {row.effective}
                        </td>
                        <td className="border-b border-slate-200 px-1.5 py-2">
                          <span
                            className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${STATUS_STYLES[row.status]}`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={36}>
            <PlaceholderImage
              src="/images/growing-businesses/records.png"
              alt="A team welcoming a new colleague with a handshake"
              label="Reliable workforce information"
              fit="contain"
              className="w-full rounded-lg"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
