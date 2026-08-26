import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const customerRoles = [
  { title: "Executive Sponsor", detail: "Scope approval authority" },
  { title: "HR Project Lead", detail: "Configuration decisions" },
  { title: "IT Lead", detail: "Access & integrations" },
  { title: "Data Owner", detail: "Data acceptance sign-off" },
  { title: "Change Lead", detail: "Adoption planning" },
];

const zoikoRoles = [
  { title: "Implementation Lead", detail: "Program coordination" },
  { title: "Solution Architect", detail: "Configuration delivery" },
  { title: "Data Engineer", detail: "Migration & reconciliation" },
  { title: "Support Lead", detail: "Handover & stabilization" },
  { title: "Product", detail: "Scope interpretation" },
];

const decisionRights = [
  {
    decision: "Scope approval",
    proposer: "Zoiko",
    reviewer: "Customer",
    approver: "Customer",
  },
  {
    decision: "Configuration sign-off",
    proposer: "Zoiko",
    reviewer: "Customer HR Lead",
    approver: "Customer",
  },
  {
    decision: "Data acceptance",
    proposer: "Zoiko",
    reviewer: "Customer Data Owner",
    approver: "Customer",
  },
  {
    decision: "Launch authorization",
    proposer: "Zoiko",
    reviewer: "Customer Exec",
    approver: "Customer",
  },
  {
    decision: "Handover acceptance",
    proposer: "Zoiko",
    reviewer: "Customer",
    approver: "Customer",
  },
];

export function RolesAndResponsibilitiesSection() {
  return (
    <section className="bg-slate-100 py-20 text-slate-900 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8">
          {/* Title */}
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
              Roles, responsibilities and decision rights.
            </h2>
          </Reveal>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Customer Roles */}
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-black/10">
                <h3 className="text-base font-bold text-blue-600">
                  Customer
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {customerRoles.map((role, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-xs font-semibold text-sky-950">
                        {role.title}
                      </span>
                      <span className="text-xs text-gray-500">
                        {role.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Zoiko Roles */}
            <Reveal delay={0.14}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-black/10">
                <h3 className="text-base font-bold text-violet-400">
                  Zoiko
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {zoikoRoles.map((role, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-xs font-semibold text-sky-950">
                        {role.title}
                      </span>
                      <span className="text-xs text-gray-500">
                        {role.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Image */}
            <Reveal delay={0.2}>
              <PlaceholderImage
                src="/images/implementation-guide/Roles.png"
                alt="Team collaboration"
                label="Roles & Responsibilities"
                className="aspect-[3/2] w-full rounded-2xl bg-slate-200 ring-1 ring-black/10 md:col-span-2 lg:col-span-1"
              />
            </Reveal>
          </div>

          {/* Decision Matrix Table */}
          <Reveal delay={0.12}>
            <div className="w-full overflow-hidden rounded-2xl bg-white ring-1 ring-black/10">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-slate-50 font-bold text-gray-500">
                      <th className="px-6 py-3 font-bold">Decision</th>
                      <th className="px-6 py-3 font-bold">Proposer</th>
                      <th className="px-6 py-3 font-bold">Reviewer</th>
                      <th className="px-6 py-3 font-bold">Approver</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/10">
                    {decisionRights.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4 font-semibold text-sky-950">
                          {row.decision}
                        </td>
                        <td className="px-6 py-4 text-gray-500">
                          {row.proposer}
                        </td>
                        <td className="px-6 py-4 text-gray-500">
                          {row.reviewer}
                        </td>
                        <td className="px-6 py-4 font-semibold text-blue-600">
                          {row.approver}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* Footnote */}
          <Reveal delay={0.18}>
            <p className="text-xs text-gray-400">
              Customer-specific contract is authoritative.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
