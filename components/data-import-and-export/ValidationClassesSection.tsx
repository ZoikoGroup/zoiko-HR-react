"use client";

import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const VALIDATIONS = [
  { cls: "Schema / type", ex: "Missing required field; invalid data type; unknown column or object." },
  { cls: "Identity / reference", ex: "Unknown employee, org or location reference; duplicate identifier; ambiguous match." },
  { cls: "Hierarchy / relationship", ex: "Invalid parent link, orphan record, cycle, or inactive reference." },
  { cls: "Effective-date", ex: "Overlapping, impossible sequence, invalid range, closed period." },
  { cls: "Authority / conflict", ex: "Source tries to change a target-authoritative field; conflicting source versions." },
  { cls: "Permission", ex: "Uploader or executor lacks object, field, action or scope permission." },
  { cls: "Privacy / sensitivity", ex: "Restricted fields, prohibited import/export content, unsupported attachment." },
  { cls: "Business rule", ex: "A product-specific invariant, if approved." },
  { cls: "Warning", ex: "A non-blocking issue with a stated consequence." },
  { cls: "Unknown dependency", ex: "A dependency that cannot be verified." },
];

export function ValidationClassesSection() {
  return (
    <section className="bg-slate-100 py-16 lg:py-24">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="max-w-2xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                Ten ways a record can be blocked before it ever executes.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Every dry run runs the same validation classes against the exact prepared snapshot — never a generic &quot;invalid row&quot; message.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <Reveal delay={0.16}>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[500px]">
                      <thead>
                        <tr className="bg-slate-100 text-slate-400 text-xs font-semibold font-['IBM_Plex_Sans'] border-b border-slate-200">
                          <th className="px-5 py-3.5 w-2/5">Validation class</th>
                          <th className="px-5 py-3.5">Examples &amp; behavior</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-xs font-['IBM_Plex_Sans']">
                        {VALIDATIONS.map((val, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-5 py-3.5 font-semibold text-sky-950 text-sm">
                              {val.cls}
                            </td>
                            <td className="px-5 py-3.5 text-slate-500 font-normal leading-relaxed">
                              {val.ex}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.24}>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex items-center justify-center p-2">
                  <Image
                    src="/images/data-import-and-export/image 441.png"
                    alt="Validation classes dry run graphic"
                    width={735}
                    height={490}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
