import { Container, Reveal } from "@/components/ui";
import { SectionHeading, StatusPill } from "./shared";

const COLUMNS = [
  "Document",
  "Type",
  "Current version",
  "Scope",
  "Language / variant",
  "Owner",
  "Status",
];

const DOCUMENTS = [
  {
    document: "Employee Handbook",
    type: "Handbook",
    version: "v6",
    scope: "All US employees",
    language: "EN (source)",
    owner: "HR Policy",
    status: "CURRENT",
  },
  {
    document: "Remote Work Policy",
    type: "Policy",
    version: "v3",
    scope: "All employees",
    language: "EN + 2 variants",
    owner: "People Ops",
    status: "CURRENT",
  },
  {
    document: "Code of Conduct",
    type: "Policy",
    version: "v9",
    scope: "All employees",
    language: "EN (source)",
    owner: "Compliance",
    status: "REVIEW DUE",
  },
  {
    document: "Expense Reimbursement Guide",
    type: "Document",
    version: "v2",
    scope: "US Finance",
    language: "EN",
    owner: "Finance Ops",
    status: "SCHEDULED",
  },
  {
    document: "Data Privacy Notice",
    type: "Policy",
    version: "v1",
    scope: "All employees",
    language: "EN",
    owner: "Legal",
    status: "DRAFT",
  },
  {
    document: "Site Safety Policy (LATAM)",
    type: "Policy",
    version: "v4",
    scope: "Brazil operations",
    language: "PT-BR (variant)",
    owner: "Regional HR",
    status: "SUPERSEDED",
  },
];

export function DocumentCatalogSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Every document, its current version and its owner — in one catalog."
          className="max-w-[700px]"
        >
          Search by title or type, then filter by status, owner, language, scope
          and review state — restricted content never leaks through the results.
        </SectionHeading>

        {/* Seven columns don't survive a phone, so below lg each row becomes a
            labelled card and no field is dropped. */}
        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-3 lg:hidden">
            {DOCUMENTS.map((row) => (
              <div
                key={row.document}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-sky-950">
                    {row.document}
                  </p>
                  <StatusPill status={row.status} />
                </div>
                <dl className="mt-3 grid grid-cols-2 gap-3">
                  {[
                    { label: "Type", value: row.type },
                    { label: "Current version", value: row.version },
                    { label: "Scope", value: row.scope },
                    { label: "Language / variant", value: row.language },
                    { label: "Owner", value: row.owner },
                  ].map((field) => (
                    <div key={field.label}>
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                        {field.label}
                      </dt>
                      <dd className="mt-0.5 text-xs font-bold text-slate-500">
                        {field.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-8 hidden overflow-x-auto rounded-xl border border-slate-200 bg-white lg:block">
            <table className="w-full min-w-[1080px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-100">
                  {COLUMNS.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-4 py-3 text-xs font-semibold text-slate-400"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DOCUMENTS.map((row) => (
                  <tr key={row.document} className="border-t border-gray-100">
                    <td className="px-4 py-3.5 text-sm font-semibold text-sky-950">
                      {row.document}
                    </td>
                    <td className="px-4 py-3.5 text-xs font-bold text-slate-500">
                      {row.type}
                    </td>
                    <td className="px-4 py-3.5 text-xs font-bold text-slate-500">
                      {row.version}
                    </td>
                    <td className="px-4 py-3.5 text-xs font-bold text-slate-500">
                      {row.scope}
                    </td>
                    <td className="px-4 py-3.5 text-xs font-bold text-slate-500">
                      {row.language}
                    </td>
                    <td className="px-4 py-3.5 text-xs font-bold text-slate-500">
                      {row.owner}
                    </td>
                    <td className="px-4 py-3">
                      <StatusPill status={row.status} />
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
