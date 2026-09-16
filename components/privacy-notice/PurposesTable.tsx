import { SourceToken } from "./shared";

const ROWS = [
  {
    purpose: "Provide / respond to requests",
    categories: "Identifiers, communications",
  },
  {
    purpose: "Account & relationship administration",
    categories: "Identifiers, account metadata, commercial",
  },
  {
    purpose: "Security & fraud prevention",
    categories: "Identifiers, device & usage, account metadata",
  },
  {
    purpose: "Analytics & service improvement",
    categories: "Device & usage, consent state",
  },
  {
    purpose: "Marketing (with appropriate choice)",
    categories: "Identifiers, preferences",
  },
  {
    purpose: "Legal & regulatory obligations",
    categories: "Legal/compliance records",
  },
];

export function PurposesTable() {
  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="bg-slate-100">
            {["Purpose", "Data categories", "Lawful basis", "Retention source"].map(
              (heading) => (
                <th
                  key={heading}
                  scope="col"
                  className="border-b border-slate-200 px-4 py-3 text-xs font-semibold leading-5 text-slate-700"
                >
                  {heading}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, i) => (
            <tr key={row.purpose} className={i % 2 === 1 ? "bg-slate-50" : "bg-white"}>
              <td className="border-b border-slate-200 px-4 py-3 align-top text-xs leading-5 text-slate-600">
                {row.purpose}
              </td>
              <td className="border-b border-slate-200 px-4 py-3 align-top text-xs leading-5 text-slate-600">
                {row.categories}
              </td>
              <td className="border-b border-slate-200 px-4 py-3 align-top">
                <SourceToken>LEGAL SOURCE</SourceToken>
              </td>
              <td className="border-b border-slate-200 px-4 py-3 align-top">
                <SourceToken>RETENTION SOURCE</SourceToken>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
