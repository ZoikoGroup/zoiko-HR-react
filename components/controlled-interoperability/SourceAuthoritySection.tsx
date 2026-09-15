import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const COLUMNS = [
  "Data domain",
  "Authoritative system",
  "Reference consumer",
  "Conflict rule",
];

const DOMAINS = [
  {
    domain: "Employee / workforce",
    authority: "Zoiko HR — Employee Records",
    consumer: "ZoikoTime, Zoiko Payroll, external capability classes",
    conflict: "Zoiko HR wins; manual review on dispute",
  },
  {
    domain: "Organization",
    authority: "Organization Management",
    consumer: "All connected systems",
    conflict: "Source-approved registry — no timestamp override",
  },
  {
    domain: "Schedule / time",
    authority: "ZoikoTime or external time capability class (where connected)",
    consumer: "Zoiko HR — read-only",
    conflict: "Source-needed if no current authority approved",
  },
  {
    domain: "Payroll-preparation",
    authority: "Zoiko HR — Employee Records",
    consumer: "Zoiko Payroll or external payroll capability class",
    conflict: "Zoiko HR wins; payroll consumes only",
  },
  {
    domain: "Documentation",
    authority: "Zoiko Docs Pro or owning source system per document type",
    consumer: "Zoiko HR — links/metadata only",
    conflict: "Owning system wins",
  },
  {
    domain: "Policy / compliance",
    authority: "Zoiko Comply or external compliance capability class",
    consumer: "Zoiko HR — acknowledgment status only",
    conflict: "Owning system wins",
  },
  {
    domain: "Identity / access",
    authority: "ZoikoID or approved external identity provider",
    consumer: "Zoiko HR — authenticated context only",
    conflict: "Identity & Single Sign-On boundary — not decided here",
  },
];

export function SourceAuthoritySection() {
  return (
    <section id="source-authority" className="scroll-mt-24 bg-slate-100 py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Bidirectional does not mean equal authority."
          className="max-w-[700px]"
        >
          Every data domain names its current authoritative system or explicitly
          says source-needed — never a latest-write-wins default.
        </SectionHeading>

        {/* Four columns don't survive a phone, so below lg each domain becomes a
            labelled card and no field is dropped. */}
        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-3 lg:hidden">
            {DOMAINS.map((row) => (
              <div
                key={row.domain}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <p className="text-sm font-semibold text-sky-950">
                  {row.domain}
                </p>
                <dl className="mt-3 space-y-3">
                  {[
                    { label: "Authoritative system", value: row.authority },
                    { label: "Reference consumer", value: row.consumer },
                    { label: "Conflict rule", value: row.conflict },
                  ].map((field) => (
                    <div key={field.label}>
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                        {field.label}
                      </dt>
                      <dd className="mt-0.5 text-xs leading-5 text-slate-500">
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
                {DOMAINS.map((row) => (
                  <tr key={row.domain} className="border-t border-gray-100">
                    <td className="w-44 px-4 py-4 align-top text-sm font-semibold text-sky-950">
                      {row.domain}
                    </td>
                    <td className="px-4 py-4 align-top text-xs leading-5 text-slate-500">
                      {row.authority}
                    </td>
                    <td className="px-4 py-4 align-top text-xs leading-5 text-slate-500">
                      {row.consumer}
                    </td>
                    <td className="px-4 py-4 align-top text-xs leading-5 text-slate-500">
                      {row.conflict}
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
