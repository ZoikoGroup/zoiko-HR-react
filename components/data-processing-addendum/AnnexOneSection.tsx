import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading, NonControllingBanner, StatusBadge, ProhibitedIcon } from "./shared";

const COLUMNS = ["Annex I field", "Current public value", "Status", "Annex / clause"];

const ROWS = [
  { field: "Subject matter", value: "[From approved DPA annex]", status: "Request Required" },
  { field: "Nature of processing", value: "[From approved DPA annex]", status: "Request Required" },
  { field: "Purpose(s)", value: "[From approved DPA annex]", status: "Request Required" },
  { field: "Duration", value: "[From approved DPA annex]", status: "Request Required" },
  { field: "Frequency", value: "[From approved DPA annex]", status: "Request Required" },
  {
    field: "Data subject categories",
    value: "Not inferred — from approved annex only",
    status: "Not Established",
  },
  {
    field: "Personal data categories",
    value: "Not inferred — from approved annex only",
    status: "Not Established",
  },
  {
    field: "Special/sensitive categ.",
    value: "Not inferred — from approved annex only",
    status: "Not Established",
  },
  {
    field: "Processing locations",
    value: "Not inferred from hosting — approved annex only",
    status: "Not Established",
  },
  {
    field: "Customer instructions",
    value: "[From approved DPA clause]",
    status: "Request Required",
  },
];

export function AnnexOneSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="Section 6"
          title="Processing instructions, subject matter and Annex I."
        >
          No data-subject category, personal data category, purpose or location
          is inferred from HR product context. Every field comes from the
          approved DPA annex.
        </SectionHeading>

        <div className="mt-7">
          <NonControllingBanner />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
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
                      key={row.field}
                      className={`border-b border-slate-100 last:border-b-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-slate-50"
                      }`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left text-xs font-semibold text-ink"
                      >
                        {row.field}
                      </th>
                      <td className="px-5 py-4 font-mono text-[11px] text-slate-400">
                        {row.value}
                      </td>
                      <td className="px-5 py-4">
                        <StatusBadge status={row.status} />
                      </td>
                      <td className="px-5 py-4">
                        <Link
                          href="#legal-review"
                          className="text-xs font-semibold text-primary hover:text-primary-dark"
                        >
                          Annex ref →
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
          <div className="mt-4 flex max-w-xl items-start gap-2 rounded-[10px] border border-rose-400/20 bg-rose-400/5 px-3.5 py-2.5">
            <ProhibitedIcon className="mt-0.5 size-4 flex-none text-rose-400" />
            <p className="text-xs leading-4 text-rose-400">
              No worker, candidate, payroll, health, financial or biometric data
              category is assumed merely because Zoiko HR is HR software.
              Categories are annex-controlled.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
