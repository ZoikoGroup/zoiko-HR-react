import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROWS = [
  {
    record: "Acme Global GmbH",
    type: "Legal entity",
    owner: "Portfolio Owner",
    status: "Active",
    tone: "text-teal-600",
  },
  {
    record: "Acme DE GmbH",
    type: "Legal entity",
    owner: "Portfolio Owner",
    status: "Override active",
    tone: "text-blue-900",
  },
  {
    record: "Acme APAC Pte Ltd",
    type: "Legal entity",
    owner: "Portfolio Owner",
    status: "Active",
    tone: "text-teal-600",
  },
  {
    record: "APAC Regional Hub",
    type: "Business unit",
    owner: "Entity Admin",
    status: "Review required",
    tone: "text-yellow-600",
  },
  {
    record: "Finance Shared Services",
    type: "Shared-service unit",
    owner: "HR Operations",
    status: "Active",
    tone: "text-teal-600",
  },
];

export function EntityRegistrySection() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <Reveal className="max-w-[700px]">
          <h2 className="font-heading text-3xl font-extrabold text-sky-950">
            A governed registry, not a legal corporate register.
          </h2>
          <p className="mt-4 leading-6 text-slate-600">
            Archiving never deletes historical evidence or silently reparents
            children — dependencies stay visible.
          </p>
        </Reveal>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,710px)_1fr]">
          <Reveal delay={0.1} y={30} className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left">
                  <thead>
                    <tr className="bg-slate-100 text-xs font-semibold text-slate-400">
                      <th className="px-3.5 py-2.5 font-semibold">Record</th>
                      <th className="px-3.5 py-2.5 font-semibold">
                        Concept type
                      </th>
                      <th className="px-3.5 py-2.5 font-semibold">Owner</th>
                      <th className="px-3.5 py-2.5 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs">
                    {ROWS.map((row) => (
                      <tr key={row.record}>
                        <td className="px-3.5 py-3 font-semibold text-sky-950">
                          {row.record}
                        </td>
                        <td className="px-3.5 py-3 text-slate-500">
                          {row.type}
                        </td>
                        <td className="px-3.5 py-3 text-slate-500">
                          {row.owner}
                        </td>
                        <td className={`px-3.5 py-3 font-semibold ${row.tone}`}>
                          {row.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/multi-entity-enterprises/entity-registry.png"
              alt="Two colleagues in discussion at a desk by a city window"
              label="Governed entity registry"
              className="h-60 w-full rounded-xl border border-slate-200 bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
