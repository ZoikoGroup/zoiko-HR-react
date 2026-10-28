import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, NonControllingBanner } from "./shared";

const COLUMNS = [
  "Area",
  "Zoiko responsibility",
  "Customer responsibility",
  "Shared / interface",
];

const CLAUSE = "[From approved clause]";

const ROWS = [
  { area: "Processing instructions", shared: "[From approved DPA]" },
  { area: "Confidentiality", shared: "[From approved DPA]" },
  { area: "Security / TOM", shared: "See §8" },
  { area: "Rights-request assistance", shared: "[From approved DPA]" },
  { area: "Incident cooperation", shared: "[From approved DPA]" },
  { area: "Records", shared: "[From approved DPA]" },
  { area: "Subprocessors", shared: "See §9" },
  { area: "Deletion / return", shared: "See §12" },
];

export function ProcessorObligationsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="Section 7"
          title="Processor obligations and customer responsibilities."
        >
          Summaries are non-controlling navigation aids. No obligation,
          timeline, cost or waiver is created by this page. Exact approved DPA
          clause controls.
        </SectionHeading>

        <div className="mt-7">
          <NonControllingBanner />
        </div>

        {/* The table needs ~800px; only pair it with the image from xl, so at
            lg it gets the full width and avoids a horizontal scroll. */}
        <div className="mt-6 grid gap-5 xl:grid-cols-[220px_minmax(0,1fr)]">
          <Reveal delay={0.1} className="h-full">
            <PlaceholderImage
              src="/images/data-processing-addendum/processor-obligations.png"
              alt="A presenter walking a team through responsibility splits"
              label="Walking through responsibilities"
              className="aspect-[220/347] w-full max-w-55 rounded-2xl xl:aspect-auto xl:h-full xl:max-w-none"
            />
          </Reveal>

          <Reveal delay={0.14} className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-slate-200">
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
                        key={row.area}
                        className={`border-b border-slate-100 last:border-b-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-slate-50"
                        }`}
                      >
                        <th
                          scope="row"
                          className="px-5 py-3.5 text-left text-xs font-semibold text-ink"
                        >
                          {row.area}
                        </th>
                        <td className="px-5 py-3.5 font-mono text-[11px] text-slate-400">
                          {CLAUSE}
                        </td>
                        <td className="px-5 py-3.5 font-mono text-[11px] text-slate-400">
                          {CLAUSE}
                        </td>
                        <td className="px-5 py-3.5 text-xs text-slate-600">
                          {row.shared}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
