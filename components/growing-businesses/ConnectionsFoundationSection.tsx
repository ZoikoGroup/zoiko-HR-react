import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const COLUMNS = [
  "Object",
  "Creating System",
  "Direction",
  "Conflict Rule",
  "Owner",
];

const ROWS = [
  {
    object: "Worker record",
    system: "Zoiko HR",
    direction: "HR → downstream",
    rule: "HR is authoritative",
    owner: "HR Admin",
  },
  {
    object: "Time/schedule",
    system: "ZoikoTime",
    direction: "Time → HR context",
    rule: "Time is authoritative",
    owner: "Time Admin",
  },
  {
    object: "Payroll input",
    system: "Approved payroll",
    direction: "HR → payroll",
    rule: "Payroll system decides",
    owner: "Payroll team",
  },
];

export function ConnectionsFoundationSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Foundation 7 — Connections
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink">
            Integrations and authoritative source ownership.
          </h2>
          <p className="mt-3 max-w-[640px] text-ink/50">
            Governed connections with explicit source authority, mapping,
            error handling and reconciliation.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                Authoritative-Source Matrix — Illustrative
              </p>
              {/* Small screens: each object becomes a stacked card. */}
              <div className="mt-4 flex flex-col gap-3 sm:hidden">
                {ROWS.map((row) => (
                  <div
                    key={row.object}
                    className="rounded-lg border border-slate-200 bg-white p-3"
                  >
                    <p className="text-xs font-medium text-ink">
                      {row.object}
                    </p>
                    <dl className="mt-2 grid grid-cols-[6.5rem_1fr] gap-x-3 gap-y-1 text-xs leading-5">
                      <dt className="text-ink/40">Creating system</dt>
                      <dd className="text-ink/50">{row.system}</dd>
                      <dt className="text-ink/40">Direction</dt>
                      <dd className="text-ink/50">{row.direction}</dd>
                      <dt className="text-ink/40">Conflict rule</dt>
                      <dd className="text-ink/50">{row.rule}</dd>
                      <dt className="text-ink/40">Owner</dt>
                      <dd className="text-ink/50">{row.owner}</dd>
                    </dl>
                  </div>
                ))}
              </div>

              <div className="mt-4 hidden sm:block">
                <table className="w-full border-collapse text-left">
                  <caption className="sr-only">
                    Illustrative matrix of objects, creating systems, sync
                    direction, conflict rules and owners
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
                      <tr key={row.object}>
                        <th
                          scope="row"
                          className="border-b border-slate-200 px-1.5 py-2.5 text-xs font-medium text-ink"
                        >
                          {row.object}
                        </th>
                        <td className="border-b border-slate-200 px-1.5 py-2.5 text-xs text-ink/50">
                          {row.system}
                        </td>
                        <td className="border-b border-slate-200 px-1.5 py-2.5 text-xs text-ink/50">
                          {row.direction}
                        </td>
                        <td className="border-b border-slate-200 px-1.5 py-2.5 text-xs text-ink/50">
                          {row.rule}
                        </td>
                        <td className="border-b border-slate-200 px-1.5 py-2.5 text-xs text-ink/50">
                          {row.owner}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={36} className="h-full">
            <PlaceholderImage
              src="/images/growing-businesses/connections.png"
              alt="Two colleagues working together at connected laptops"
              label="Integrations and source ownership"
              className="h-full min-h-80 w-full rounded-lg"
            />
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <Link
            href="/integrations"
            className="group mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Explore Integrations
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
