import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const STATES = [
  { label: "Open", detail: "18 items awaiting action" },
  { label: "Waiting", detail: "6 items pending input" },
  { label: "Blocked", detail: "3 items need resolution" },
  { label: "Review required", detail: "5 items flagged" },
];

const COLUMNS = ["Change", "Actor / approver", "Effective", "Evidence"];

const CHANGES = [
  {
    change: "Policy v4 approved: Expense approval routing",
    actor: "HR Operations",
    effective: "Jan 1, 2026",
  },
  {
    change: "Delegation granted: M. Osei (Finance Ops)",
    actor: "R. Chen",
    effective: "Aug 1, 2026",
  },
  {
    change: "Integration mapping updated: Cost center field",
    actor: "HRIS Owner",
    effective: "Jul 18, 2026",
  },
  {
    change: "Variant approved: DE works-council step",
    actor: "L. Hoffmann",
    effective: "Feb 1, 2026",
  },
];

export function ReviewablePictureSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <h2 className="max-w-[700px] font-heading text-3xl font-extrabold text-sky-950">
            A reviewable picture of work, exceptions and change.
          </h2>
          <p className="mt-3.5 max-w-[700px] leading-6 text-slate-600">
            Defined operational states — never fabricated customer counts
            or percentages.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 grid gap-px overflow-hidden rounded-[10px] border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {STATES.map((state) => (
              <div key={state.label} className="bg-white p-4">
                <p className="text-sm font-bold text-sky-950">{state.label}</p>
                <p className="mt-1 text-xs text-slate-400">{state.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          {/* Small screens: each change becomes a stacked card. */}
          <div className="mt-6 flex flex-col gap-3 md:hidden">
            {CHANGES.map((row) => (
              <div
                key={row.change}
                className="rounded-xl border border-slate-200 p-4"
              >
                <p className="text-xs font-semibold text-sky-950">
                  {row.change}
                </p>
                <dl className="mt-2 grid grid-cols-[6rem_1fr] gap-x-3 gap-y-1 text-xs leading-5">
                  <dt className="text-slate-400">Actor / approver</dt>
                  <dd className="text-slate-500">{row.actor}</dd>
                  <dt className="text-slate-400">Effective</dt>
                  <dd className="text-slate-500">{row.effective}</dd>
                </dl>
                <Link
                  href="/platform/workflows-approvals"
                  className="mt-2 inline-flex text-xs font-semibold text-primary hover:text-primary-dark"
                >
                  View record
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-6 hidden overflow-hidden rounded-xl border border-slate-200 md:block">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Recent governed changes with actor, effective date and
                evidence
              </caption>
              <thead className="bg-slate-100">
                <tr>
                  {COLUMNS.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-4 py-2.5 text-xs font-semibold text-slate-400"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CHANGES.map((row) => (
                  <tr key={row.change} className="border-t border-gray-100">
                    <th
                      scope="row"
                      className="px-4 py-3 text-xs font-semibold text-sky-950"
                    >
                      {row.change}
                    </th>
                    <td className="px-4 py-3 text-xs text-slate-500">
                      {row.actor}
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500">
                      {row.effective}
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        href="/platform/workflows-approvals"
                        className="text-xs font-semibold text-primary hover:text-primary-dark"
                      >
                        View record
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
