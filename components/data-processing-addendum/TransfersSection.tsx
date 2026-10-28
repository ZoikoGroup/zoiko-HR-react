import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading, NonControllingBanner, StatusBadge, WarningIcon } from "./shared";

const COLUMNS = [
  "Context / jurisdiction",
  "Module",
  "Mechanism / safeguard",
  "Status",
  "Action",
];

const ROWS = [
  { context: "EEA / EU context", status: "Request Required" },
  { context: "UK context", status: "Request Required" },
  { context: "Other jurisdiction", status: "Not Established" },
  { context: "Adequacy / other", status: "Not Established" },
];

export function TransfersSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="Section 10"
          title="International transfers and jurisdiction modules."
        >
          Transfer mechanism, safeguard and module apply only where the
          approved DPA contains them. No EU SCC, UK Addendum, adequacy or other
          mechanism is presented without an approved module record.
        </SectionHeading>

        <div className="mt-7">
          <NonControllingBanner />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-200 border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100">
                    {COLUMNS.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, i) => (
                    <tr
                      key={row.context}
                      className={`border-b border-slate-100 last:border-b-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-slate-50"
                      }`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left text-xs font-semibold text-ink"
                      >
                        {row.context}
                      </th>
                      <td className="px-5 py-4 font-mono text-[11px] text-slate-400">
                        [From approved DPA module]
                      </td>
                      <td className="px-5 py-4 font-mono text-[11px] text-slate-400">
                        [From approved module]
                      </td>
                      <td className="px-5 py-4">
                        <StatusBadge status={row.status} />
                      </td>
                      <td className="px-5 py-4">
                        <Link
                          href="#legal-review"
                          className="text-xs font-semibold text-primary hover:text-primary-dark"
                        >
                          Request →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-4 flex max-w-md items-start gap-2 rounded-[10px] border border-amber-400/20 bg-amber-400/5 px-3.5 py-2.5">
            <WarningIcon className="mt-0.5 size-4 flex-none text-amber-600" />
            <p className="text-xs leading-4 text-amber-800">
              Missing required transfer module blocks execution rather than
              silently omitting. Routes to legal review. Selection is not based
              on IP address or browser language.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
