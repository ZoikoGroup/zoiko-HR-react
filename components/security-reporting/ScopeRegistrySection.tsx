import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const COLUMNS = [
  "Scope ID",
  "Asset identifier",
  "Category",
  "Environment",
  "State",
  "Reviewed",
  "Notes",
];

const STATE_STYLES: Record<string, string> = {
  "Not Established": "border-amber-400/25 bg-amber-400/10 text-amber-500",
  "Out of Scope": "border-rose-400/25 bg-rose-400/10 text-rose-400",
};

const ROWS = [
  {
    id: "SR-001",
    asset: "[Asset identifier from approved registry]",
    category: "Web application",
    environment: "[Approved env]",
    state: "Not Established",
    reviewed: "[Date from registry]",
    notes:
      "Testing authorization is not established by this page until approved scope and rules are published.",
  },
  {
    id: "SR-002",
    asset: "[Asset identifier from approved registry]",
    category: "API / Integration surface",
    environment: "[Approved env]",
    state: "Not Established",
    reviewed: "[Date from registry]",
    notes:
      "Scope state alone does not authorize techniques; rules of engagement control permitted testing.",
  },
  {
    id: "SR-003",
    asset: "[Third-party / integration asset]",
    category: "External / provider",
    environment: "External",
    state: "Out of Scope",
    reviewed: "[Date from registry]",
    notes:
      "Explicitly excluded. Integration or subprocessor relationship does not authorize testing third-party assets.",
  },
];

export function ScopeRegistrySection() {
  return (
    <section
      id="scope-registry"
      className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20"
    >
      <Container>
        {/* The lede and the amber notice share the left column; the image runs
            beside them for the full height of that block, as in the design. */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] xl:grid-cols-[minmax(0,1fr)_476px]">
          <div>
            <SectionHeading eyebrow="Section 04" title="Security scope registry.">
              Approved in-scope and out-of-scope assets only. Absence of an
              asset listing is not authorization to test. Scope state alone
              does not authorize techniques.
            </SectionHeading>

            <Reveal delay={0.08}>
              <div className="mt-7 flex items-start gap-2.5 rounded-xl border border-amber-400/20 bg-amber-400/5 px-4 py-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/security-reporting/info.png"
                  alt=""
                  aria-hidden
                  className="mt-0.5 size-4 flex-none"
                />
                <p className="text-xs leading-5 text-amber-700">
                  Scope records are published only when approved by Security
                  and Legal. Current status: Not Established — testing
                  authorization has not been established by this public
                  source. You may still report a suspected vulnerability
                  through the approved intake channel.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="h-full">
            <PlaceholderImage
              src="/images/security-reporting/scope-registry.png"
              alt="A security team presenting scope coverage to stakeholders"
              label="Presenting scope coverage"
              className="aspect-[476/294] w-full rounded-2xl lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-225 border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100">
                    {COLUMNS.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, i) => (
                    <tr
                      key={row.id}
                      className={`border-b border-slate-100 last:border-b-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-slate-50"
                      }`}
                    >
                      <td className="px-4 py-4 align-top font-mono text-xs text-slate-500">
                        {row.id}
                      </td>
                      <td className="px-4 py-4 align-top text-xs text-slate-700">
                        {row.asset}
                      </td>
                      <td className="px-4 py-4 align-top text-xs text-slate-500">
                        {row.category}
                      </td>
                      <td className="px-4 py-4 align-top font-mono text-xs text-slate-400">
                        {row.environment}
                      </td>
                      <td className="px-4 py-4 align-top">
                        <span
                          className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold ${STATE_STYLES[row.state]}`}
                        >
                          {row.state}
                        </span>
                      </td>
                      <td className="px-4 py-4 align-top text-xs text-slate-400">
                        {row.reviewed}
                      </td>
                      <td className="px-4 py-4 align-top text-xs leading-5 text-slate-500">
                        {row.notes}
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
