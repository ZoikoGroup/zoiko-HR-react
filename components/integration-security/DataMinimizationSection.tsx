"use client";

import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const MINIMIZATION_ROWS = [
  {
    category: "Workforce identity reference",
    sensitivity: "Medium",
    sensitivityColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    necessity: "Required",
    purpose: "Identity coordination",
  },
  {
    category: "Employment status context",
    sensitivity: "Medium",
    sensitivityColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    necessity: "Required",
    purpose: "Eligibility check",
  },
  {
    category: "Role / assignment reference",
    sensitivity: "Low",
    sensitivityColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    necessity: "Required",
    purpose: "Routing context",
  },
  {
    category: "Location / timezone context",
    sensitivity: "Low",
    sensitivityColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    necessity: "Optional",
    purpose: "Schedule coordination",
  },
];

export function DataMinimizationSection() {
  return (
    <section className="bg-white py-16 lg:py-24 border-t border-slate-200">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-3.5">
            <Reveal>
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest font-['IBM_Plex_Sans']">
                Data Minimization & Purpose
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Manrope'] leading-tight">
                Only the minimum necessary data — purpose-linked, sensitivity-classified, exclusions explicit
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-slate-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Purpose change invalidates affected minimization approval. Derived data — counts, facets, previews and logs — inherits source sensitivity class. Collect-all is not a valid default for any connection.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <Reveal delay={0.16}>
                <div className="bg-green-50/60 rounded-xl border border-green-200 overflow-hidden shadow-sm">
                  <div className="px-5 py-3 border-b border-green-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-green-700 font-bold text-base">✓</span>
                      <span className="text-green-950 text-xs font-semibold font-['IBM_Plex_Sans']">
                        Approved minimum data set
                      </span>
                    </div>
                    <span className="px-2 py-0.5 bg-green-700/10 text-green-700 text-xs font-mono rounded">
                      DS-2025-09-A
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-['IBM_Plex_Sans']">
                      <thead>
                        <tr className="border-b border-green-200 text-slate-500 uppercase tracking-wider text-[10px]">
                          <th className="py-2.5 px-4">Category</th>
                          <th className="py-2.5 px-4">Sensitivity</th>
                          <th className="py-2.5 px-4">Necessity</th>
                          <th className="py-2.5 px-4">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-green-200/60">
                        {MINIMIZATION_ROWS.map((row, idx) => (
                          <tr key={idx} className="hover:bg-green-100/40 transition-colors">
                            <td className="py-3 px-4 font-medium text-green-950">{row.category}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold border ${row.sensitivityColor}`}>
                                {row.sensitivity}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-green-700 font-medium">{row.necessity}</td>
                            <td className="py-3 px-4 text-slate-600">{row.purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="px-5 py-3 border-t border-green-200 bg-green-100/40 text-green-800 text-xs font-medium font-['IBM_Plex_Sans']">
                    Derived counts / facets / previews apply the same sensitivity controls.
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <Reveal delay={0.2}>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/integration-security/image 448.png"
                    alt="Data Minimization Boundaries"
                    width={628}
                    height={629}
                    className=" object-contain rounded-xl"
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
