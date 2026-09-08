"use client";

import { Container, Reveal } from "@/components/ui";

const CROSS_AUTHORITIES = [
  {
    icon: "⊟",
    name: "Integrations Overview",
    mayRef: ["Connection model and boundary context"],
    mustNotOwn: ["Connector/provider catalog", "Overall integration availability"],
  },
  {
    icon: "⊙",
    name: "Identity & Single Sign-On",
    mayRef: ["Identity/provider reference", "Auth state where approved"],
    mustNotOwn: ["SSO provider support", "Sign-in routing", "Account recovery", "Identity-provider setup"],
  },
  {
    icon: "◈",
    name: "Data Import & Export",
    mayRef: ["Execution/export/migration security context", "Current data-set reference"],
    mustNotOwn: ["Import/export mapping", "File execution", "Migration/cutover mechanics"],
  },
  {
    icon: "◎",
    name: "Security & Privacy / Trust Center",
    mayRef: ["Public assurance/evidence links", "Approved security claims"],
    mustNotOwn: ["Certifications", "Encryption claims", "Incident program", "Broad security posture"],
  },
  {
    icon: "↔",
    name: "Controlled Interoperability",
    statusNote: "(paused)",
    mayRef: ["Approved optional flow policy after release"],
    mustNotOwn: ["Future suite interoperability authority"],
  },
];

export function CrossModuleAuthoritySection() {
  return (
    <section className="bg-slate-900 text-white py-16 lg:py-24 border-t border-slate-800">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-3.5">
            <Reveal>
              <span className="text-blue-500 text-xs font-semibold uppercase tracking-widest font-['IBM_Plex_Sans']">
                Cross-Module Authority
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-tight">
                What Integration Security may consume — and what stays with the owning authority
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-slate-400 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Integration Security references other authorities but never duplicates or overrides their scope. Each border is a hard handoff.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="bg-slate-950/80 rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-wider font-['IBM_Plex_Sans']">
                      <th className="py-4 px-6 text-white/60">Authority</th>
                      <th className="py-4 px-6 text-emerald-400">Integration Security may reference</th>
                      <th className="py-4 px-6 text-rose-400">Must not duplicate / own</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs font-['IBM_Plex_Sans']">
                    {CROSS_AUTHORITIES.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-6 font-semibold text-white">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-500 font-mono text-sm">{row.icon}</span>
                            <span>{row.name}</span>
                            {row.statusNote && (
                              <span className="text-white/30 text-[10px]">{row.statusNote}</span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-emerald-200">
                          <div className="space-y-1">
                            {row.mayRef.map((item, i) => (
                              <div key={i} className="flex items-start gap-1.5">
                                <span className="text-emerald-400 font-bold">✓</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-rose-300">
                          <div className="space-y-1">
                            {row.mustNotOwn.map((item, i) => (
                              <div key={i} className="flex items-start gap-1.5">
                                <span className="text-rose-400 font-bold">→</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
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
