import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const COLUMNS = ["Field", "Source", "Owner", "Quality state"];

const ROWS = [
  {
    field: "Employment status",
    source: "HR administrator",
    owner: "HR Operations",
    state: "Ready",
    tone: "text-teal-600",
  },
  {
    field: "Cost center",
    source: "Finance system",
    owner: "Finance Ops",
    state: "Source conflict",
    tone: "text-yellow-600",
  },
  {
    field: "Manager assignment",
    source: "Org structure",
    owner: "HR Operations",
    state: "Ready",
    tone: "text-teal-600",
  },
  {
    field: "Work location",
    source: "HR administrator",
    owner: "HR Operations",
    state: "Correction pending",
    tone: "text-blue-900",
  },
  {
    field: "Legal entity",
    source: "Global HR admin",
    owner: "Global HR Admin",
    state: "Ready",
    tone: "text-teal-600",
  },
];

export function StandardizedDataSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <h2 className="max-w-[700px] font-heading text-3xl font-extrabold text-sky-950">
            Standardized data, with ownership and quality attached.
          </h2>
          <p className="mt-5 max-w-[700px] leading-6 text-slate-600">
            Every field carries a source, owner, sensitivity class and
            effective-date behavior — illustrative, not real employee data.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2 xl:grid-cols-[1fr_528px]">
          <Reveal>
            {/* Small screens: each field becomes a stacked card. */}
            <div className="flex flex-col gap-3 sm:hidden">
              {ROWS.map((row) => (
                <div
                  key={row.field}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold text-sky-950">
                      {row.field}
                    </p>
                    <span
                      className={`flex-none text-xs font-semibold ${row.tone}`}
                    >
                      {row.state}
                    </span>
                  </div>
                  <dl className="mt-2 grid grid-cols-[4rem_1fr] gap-x-3 gap-y-1 text-xs leading-5">
                    <dt className="text-slate-400">Source</dt>
                    <dd className="text-slate-500">{row.source}</dd>
                    <dt className="text-slate-400">Owner</dt>
                    <dd className="text-slate-500">{row.owner}</dd>
                  </dl>
                </div>
              ))}
            </div>

            <div className="hidden overflow-hidden rounded-xl border border-slate-200 sm:block">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Illustrative fields with source, owner and quality state
                </caption>
                <thead className="bg-slate-100">
                  <tr>
                    {COLUMNS.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="px-3.5 py-2.5 text-xs font-semibold text-slate-400"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr key={row.field} className="border-t border-gray-100">
                      <th
                        scope="row"
                        className="px-3.5 py-3 text-xs font-semibold text-sky-950"
                      >
                        {row.field}
                      </th>
                      <td className="px-3.5 py-3 text-xs text-slate-500">
                        {row.source}
                      </td>
                      <td className="px-3.5 py-3 text-xs text-slate-500">
                        {row.owner}
                      </td>
                      <td
                        className={`px-3.5 py-3 text-xs font-semibold ${row.tone}`}
                      >
                        {row.state}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.12} y={36}>
            <PlaceholderImage
              src="/images/mid-market-organizations/standardized-data.png"
              alt="Four colleagues reviewing data together on a laptop"
              label="Standardized data with ownership"
              className="h-64 w-full rounded-xl bg-slate-100"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-xs text-slate-500">
            Data-quality indicators are operational definitions, not
            employee performance, risk or compliance scores.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
