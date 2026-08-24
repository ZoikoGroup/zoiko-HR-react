import { Container, Reveal } from "@/components/ui";

const ROWS = [
  {
    document: "Leave Policy — Portfolio Baseline",
    variant: "Source (global)",
    owner: "HR Operations",
    status: "Active",
    tone: "text-teal-600",
  },
  {
    document: "Leave Policy — Germany Works-Council Addendum",
    variant: "Acme DE GmbH",
    owner: "L. Hoffmann",
    status: "Active",
    tone: "text-teal-600",
  },
  {
    document: "Data Handling Notice — APAC",
    variant: "Acme APAC Pte Ltd",
    owner: "Privacy Admin",
    status: "Translation pending",
    tone: "text-blue-900",
  },
  {
    document: "Shared-Services Charter",
    variant: "Finance Shared Services",
    owner: "HR Operations",
    status: "Acknowledgment overdue",
    tone: "text-yellow-600",
  },
];

export function DocumentVariantsSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal className="max-w-[700px]">
          <h2 className="font-heading text-3xl font-extrabold text-sky-950">
            Controlled variants, not universal localization claims.
          </h2>
          <p className="mt-3.5 leading-6 text-slate-600">
            Platform acknowledgment does not establish legal enforceability or
            statutory compliance unless separately verified.
          </p>
        </Reveal>

        <Reveal delay={0.12} y={30}>
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] text-left">
                <thead>
                  <tr className="bg-slate-100 text-xs font-semibold text-slate-400">
                    <th className="px-4 py-2.5 font-semibold">Document</th>
                    <th className="w-56 px-4 py-2.5 font-semibold">
                      Entity variant
                    </th>
                    <th className="w-48 px-4 py-2.5 font-semibold">Owner</th>
                    <th className="w-56 px-4 py-2.5 font-semibold">
                      Acknowledgment
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs">
                  {ROWS.map((row) => (
                    <tr key={row.document}>
                      <td className="px-4 py-3 font-semibold text-sky-950">
                        {row.document}
                      </td>
                      <td className="px-4 py-3 text-slate-500">
                        {row.variant}
                      </td>
                      <td className="px-4 py-3 text-slate-500">{row.owner}</td>
                      <td className={`px-4 py-3 font-semibold ${row.tone}`}>
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
