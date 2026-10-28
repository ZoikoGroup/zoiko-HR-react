"use client";

import { Container, Reveal } from "@/components/ui";

const EXPORT_CONTROLS = [
  {
    control: "Purpose",
    behavior: "Approved business purpose or category.",
    rule: "Required for sensitive/bulk export where policy dictates; constrains fields, scope and recipient.",
  },
  {
    control: "Dataset / object",
    behavior: "Approved report or object source.",
    rule: "Never a duplicate data-definition engine alongside Reporting & Insights.",
  },
  {
    control: "Fields",
    behavior: "Only permission- and purpose-approved fields, with sensitivity labels.",
    rule: "No hidden columns ever ship in the generated file.",
  },
  {
    control: "Filters / cohort",
    behavior: "Organization, location, status, effective period and similar.",
    rule: "Derived counts can never leak a restricted group.",
  },
  {
    control: "Time / snapshot",
    behavior: "As-of, data-through or effective context.",
    rule: "Every export is a fixed snapshot; metadata records the exact context and version.",
  },
  {
    control: "Format",
    behavior: "Only approved current formats.",
    rule: "Never a generic promise of CSV, XLSX, PDF or JSON support.",
  },
  {
    control: "Recipient / destination",
    behavior: "Self-download, an approved system, or another governed destination if supported.",
    rule: "Requires reauthorization of the external recipient or destination.",
  },
  {
    control: "Expiry / retention",
    behavior: "Artifact expiry or revocation, per approved policy.",
    rule: "Never a permanent public URL.",
  },
  {
    control: "Preview",
    behavior: "Row count, field list, sensitivity, masked sample, scope, snapshot and warnings.",
    rule: "No raw sensitive sample ever appears in public mockups.",
  },
];

export function GovernedExportSection() {
  return (
    <section className="bg-slate-100 py-16 lg:py-24 border-t border-slate-200">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                An export is a governed object, not a download button.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Purpose, fields, filters, snapshot, format, recipient and expiry are all fixed before a file is ever generated.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[650px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-100 text-slate-400 text-xs font-semibold font-['IBM_Plex_Sans']">
                      <th className="py-3.5 px-5 w-1/4">Field / control</th>
                      <th className="py-3.5 px-5 w-2/5">Required behavior</th>
                      <th className="py-3.5 px-5">Governance rule</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs font-['IBM_Plex_Sans']">
                    {EXPORT_CONTROLS.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-5 font-semibold text-sky-950 text-sm whitespace-nowrap">
                          {row.control}
                        </td>
                        <td className="py-4 px-5 text-slate-500 font-normal leading-relaxed">
                          {row.behavior}
                        </td>
                        <td className="py-4 px-5 text-slate-500 font-normal leading-relaxed">
                          {row.rule}
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
