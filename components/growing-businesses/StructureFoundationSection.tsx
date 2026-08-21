import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const COLUMNS = ["Role", "Scope", "Action", "Approval"];

const ROWS = [
  {
    role: "HR Admin",
    scope: "Org-wide",
    action: "All governed HR actions",
    approval: "Configured",
  },
  {
    role: "Manager",
    scope: "Own team only",
    action: "Approved team actions",
    approval: "Required",
  },
  {
    role: "Employee",
    scope: "Own record",
    action: "Approved self-service",
    approval: "Per action",
  },
];

export function StructureFoundationSection() {
  return (
    <section className="border-t border-white/10 bg-slate-950 py-16 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            Foundation 2 — Structure
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            Organization and role structure.
          </h2>
          <p className="mt-3 max-w-[640px] text-white/50">
            Teams, roles, reporting relationships and scopes made explicit
            without implying legal hierarchy or automatic permission
            inheritance.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
          <Reveal y={36}>
            <PlaceholderImage
              src="/images/growing-businesses/structure.png"
              alt="A desk with a laptop, notebook and organized stationery"
              label="Organization and role structure"
              fit="contain"
              className="w-full rounded-2xl border border-white/10"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-sky-950 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                Role / Scope Matrix — Illustrative
              </p>
              {/* Small screens: each role becomes a stacked card. */}
              <div className="mt-4 flex flex-col gap-3 sm:hidden">
                {ROWS.map((row) => (
                  <div
                    key={row.role}
                    className="rounded-lg border border-white/10 p-3"
                  >
                    <p className="text-xs font-medium text-white">
                      {row.role}
                    </p>
                    <dl className="mt-2 grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-1 text-xs leading-5">
                      <dt className="text-white/40">Scope</dt>
                      <dd className="text-white/50">{row.scope}</dd>
                      <dt className="text-white/40">Action</dt>
                      <dd className="text-white/50">{row.action}</dd>
                      <dt className="text-white/40">Approval</dt>
                      <dd>
                        <span className="inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                          {row.approval}
                        </span>
                      </dd>
                    </dl>
                  </div>
                ))}
              </div>

              <div className="mt-4 hidden sm:block">
                <table className="w-full border-collapse text-left">
                  <caption className="sr-only">
                    Illustrative role, scope, action and approval matrix
                  </caption>
                  <thead>
                    <tr>
                      {COLUMNS.map((column) => (
                        <th
                          key={column}
                          scope="col"
                          className="border-b border-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/40"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((row) => (
                      <tr key={row.role}>
                        <th
                          scope="row"
                          className="border-b border-white/10 px-2.5 py-2 text-xs font-medium text-white"
                        >
                          {row.role}
                        </th>
                        <td className="border-b border-white/10 px-2.5 py-2 text-xs text-white/50">
                          {row.scope}
                        </td>
                        <td className="border-b border-white/10 px-2.5 py-2 text-xs text-white/50">
                          {row.action}
                        </td>
                        <td className="border-b border-white/10 px-2.5 py-2">
                          <span className="inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                            {row.approval}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 rounded-lg border border-red-400/20 bg-red-400/5 px-3.5 py-2.5 text-xs leading-4 text-red-400">
                Corporate hierarchy is not automatic permission
                inheritance. Manager relationships do not grant
                unrestricted access.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <Link
            href="/platform/core-hr"
            className="group mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            Explore Core HR
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
