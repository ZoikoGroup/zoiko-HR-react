import { Container, Reveal } from "@/components/ui";
import { SectionHeading, SectionFootnote, StatusChip } from "./shared";

const COLUMNS = [
  "Surface / Product",
  "Platform",
  "Locale",
  "Included areas",
  "Excluded areas",
  "Status",
  "Evidence owner",
];

const ROWS = [
  {
    surface: "Public Website",
    platform: "Web (all browsers)",
    locale: "en-US",
    included: "Marketing pages, Legal & Trust, /accessibility/",
    excluded: "None identified",
    status: "Current",
    owner: "Web Team",
  },
  {
    surface: "HR Platform — Web App",
    platform: "Web (desktop browsers)",
    locale: "en-US",
    included: "Core workflows — pending separate scope record",
    excluded: "Admin console, mobile web, custom integrations",
    status: "Not Established",
    owner: "Product Accessibility Lead",
  },
  {
    surface: "Admin Console",
    platform: "Web (desktop browsers)",
    locale: "en-US",
    included: "Scope not yet approved",
    excluded: "Excluded from this statement",
    status: "Not Established",
    owner: "Pending",
  },
  {
    surface: "Mobile Application",
    platform: "iOS / Android",
    locale: "en-US",
    included: "Scope not yet approved",
    excluded: "Excluded from this statement",
    status: "Not Established",
    owner: "Pending",
  },
  {
    surface: "Documentation Site",
    platform: "Web",
    locale: "en-US",
    included: "Accessibility statement page (HTML)",
    excluded: "PDF downloads — see Section 11",
    status: "Limited / Partial",
    owner: "Content Team",
  },
  {
    surface: "Third-party Integrations",
    platform: "Varies",
    locale: "Varies",
    included: "None — separate AT status per vendor",
    excluded: "Do not inherit Zoiko HR conformance",
    status: "Not Established",
    owner: "N/A",
  },
];

export function ScopeMatrixSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="05 / Scope Matrix"
          title="What surfaces are included in approved scope."
        >
          Scope inheritance is not automatic across web, mobile, admin, product,
          documentation or integrations. Each surface has its own status.
        </SectionHeading>

        <Reveal delay={0.08}>
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
            {/* The matrix needs its full width to stay legible, so it scrolls
                inside its own box rather than pushing the page sideways. */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-240 border-collapse text-left">
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
                  {ROWS.map((row, i) => (
                    <tr
                      key={row.surface}
                      className={
                        i < ROWS.length - 1 ? "border-b border-slate-100" : ""
                      }
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left text-xs font-semibold leading-5 text-slate-900"
                      >
                        {row.surface}
                      </th>
                      <td className="px-5 py-4 text-xs leading-5 text-slate-600">
                        {row.platform}
                      </td>
                      <td className="px-5 py-4 text-xs leading-5 text-slate-600">
                        {row.locale}
                      </td>
                      <td className="px-5 py-4 text-xs leading-5 text-slate-700">
                        {row.included}
                      </td>
                      <td className="px-5 py-4 text-xs leading-5 text-slate-500">
                        {row.excluded}
                      </td>
                      <td className="px-5 py-4">
                        <StatusChip status={row.status} />
                      </td>
                      <td className="px-5 py-4 text-xs leading-5 text-slate-600">
                        {row.owner}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <SectionFootnote>
          Scope table reflects current approved records only. Unlisted surfaces
          are excluded until a scope record is approved and published.
        </SectionFootnote>
      </Container>
    </section>
  );
}
