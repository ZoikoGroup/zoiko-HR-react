import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const LAYERS = [
  {
    layer: "Metric definition",
    common: "Shared name/core formula where business meaning is consistent.",
    local: "Legal exclusions, worker categories, local employment semantics.",
  },
  {
    layer: "Access",
    common: "Global role framework.",
    local: "Local HR responsibility, works-council or privacy restrictions.",
  },
  {
    layer: "Reporting period",
    common: "Corporate reporting calendar.",
    local: "Local holidays, payroll/time cutoffs where relevant.",
  },
  {
    layer: "AI assistance",
    common: "Global governed capability.",
    local: "May be disabled or restricted by jurisdiction or customer policy.",
  },
  {
    layer: "Export",
    common: "Global formats.",
    local: "Local restrictions on sensitive fields or transfer destinations.",
  },
];

const HEADERS = ["Layer", "What can be common", "What may vary locally"];

export function GlobalLocalSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Global & local governance"
          title="Consolidate approved reporting without bypassing local boundaries."
          className="max-w-[640px]"
        >
          Zoiko Insights can consolidate authorized workforce information across
          approved entities and locations while preserving role, purpose,
          jurisdiction and privacy boundaries. It does not make local
          employment-law or compliance determinations for the customer.
        </SectionHeading>

        <Reveal amount={0.1}>
          {/* Stacked rows on phones; a real table from md up. */}
          <ul className="mt-10 flex flex-col gap-3 md:hidden">
            {LAYERS.map((row) => (
              <li key={row.layer} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-ink">{row.layer}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{HEADERS[1]}</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">{row.common}</p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{HEADERS[2]}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{row.local}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 hidden overflow-hidden rounded-2xl border border-slate-200 md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-100">
                  {HEADERS.map((header) => (
                    <th key={header} scope="col" className="px-5 py-3.5 text-xs font-semibold leading-5 text-slate-500">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {LAYERS.map((row, i) => (
                  <tr key={row.layer} className={`border-t border-slate-100 ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`}>
                    <th scope="row" className="px-5 py-3 align-top text-xs font-semibold leading-5 text-ink">
                      {row.layer}
                    </th>
                    <td className="px-5 py-3 align-top text-xs leading-5 text-slate-600">{row.common}</td>
                    <td className="px-5 py-3 align-top text-xs leading-5 text-slate-500">{row.local}</td>
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
