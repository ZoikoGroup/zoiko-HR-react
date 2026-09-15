import { Container, Reveal } from "@/components/ui";
import { SectionHeading, SectionFootnote, StatusChip } from "./shared";

const COLUMNS = [
  "Asset",
  "Format",
  "Lang",
  "Version",
  "Status",
  "Alternative / contact",
];

const ASSETS = [
  {
    asset: "Accessibility Statement (HTML)",
    format: "HTML",
    lang: "en-US",
    version: "1.0",
    status: "Current",
    alternative: "This page is the primary source",
  },
  {
    asset: "Zoiko HR Privacy Notice",
    format: "HTML",
    lang: "en-US",
    version: "Current",
    status: "Current",
    alternative: "No download required",
  },
  {
    asset: "Data Processing Addendum",
    format: "HTML",
    lang: "en-US",
    version: "Current",
    status: "Current",
    alternative: "No download required",
  },
  {
    asset: "Product Documentation PDFs",
    format: "PDF",
    lang: "en-US",
    version: "Varies",
    status: "Limited / Partial",
    alternative: "HTML documentation — contact support for accessible format",
  },
  {
    asset: "Video content (if any)",
    format: "Video",
    lang: "en-US",
    version: "N/A",
    status: "Not Established",
    alternative: "No current video assets on this page",
  },
];

export function DocumentsMediaSection() {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="11 / Documents, Media & Download Accessibility"
          title="HTML first. Downloads and media disclose their status."
        >
          Critical accessibility information is available in HTML on this page.
          Each downloadable asset or media item identifies its format, language,
          version, accessibility status and any alternative or contact route.
        </SectionHeading>

        <Reveal delay={0.08}>
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-200 border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100">
                    {COLUMNS.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="px-5 py-3 text-xs font-medium uppercase leading-4 tracking-wide text-slate-600"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ASSETS.map((row, i) => (
                    <tr
                      key={row.asset}
                      className={
                        i < ASSETS.length - 1 ? "border-b border-slate-100" : ""
                      }
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left text-xs font-semibold leading-5 text-slate-900"
                      >
                        {row.asset}
                      </th>
                      <td className="px-5 py-4 font-mono text-xs text-slate-600">
                        {row.format}
                      </td>
                      <td className="px-5 py-4 font-mono text-xs text-slate-600">
                        {row.lang}
                      </td>
                      <td className="px-5 py-4 text-xs text-slate-600">
                        {row.version}
                      </td>
                      <td className="px-5 py-4">
                        <StatusChip status={row.status} />
                      </td>
                      <td className="px-5 py-4 text-xs leading-5 text-slate-600">
                        {row.alternative}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <SectionFootnote>
          Broken or obsolete assets are removed from the page and replaced where
          possible. Alternative format requests can be submitted via the
          feedback form above.
        </SectionFootnote>
      </Container>
    </section>
  );
}
