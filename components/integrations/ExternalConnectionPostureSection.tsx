"use client";

import { Container, Reveal } from "@/components/ui";

const POSTURE_STATES = [
  {
    state: "Approved public connector",
    badgeStyle: "bg-emerald-700/10 text-emerald-700",
    treatment: "Name, supported purpose/model, currentness and boundary summary from the approved Integration Catalog.",
    cta: "Open approved detail / setup / docs route",
    ctaColor: "text-blue-600",
  },
  {
    state: "Supported model — vendor not public",
    badgeStyle: "bg-sky-700/10 text-sky-700",
    treatment: "Describe the connection class and information boundary only. No vendor name or specific compatibility claim.",
    cta: "Talk to implementation / review docs",
    ctaColor: "text-sky-700",
  },
  {
    state: "Needs confirmation",
    badgeStyle: "bg-amber-700/10 text-amber-700",
    treatment: "Availability depends on configuration, market, plan or provider. State this plainly without implying yes.",
    cta: "Confirm compatibility",
    ctaColor: "text-amber-700",
  },
  {
    state: "Not supported",
    badgeStyle: "bg-red-600/10 text-red-600",
    treatment: "Say so plainly when an approved source establishes this. No workaround language unless an approved alternative exists.",
    cta: "Alternative / manual path if approved",
    ctaColor: "text-slate-500",
  },
  {
    state: "Retired / superseded",
    badgeStyle: "bg-slate-500/10 text-slate-500",
    treatment: "Do not present as current. Show replacement or history link when approved by the Integration Catalog.",
    cta: "Open current option",
    ctaColor: "text-blue-600",
  },
];

export function ExternalConnectionPostureSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="space-y-3">
            <Reveal>
              <span className="text-blue-600 text-xs font-medium uppercase tracking-wider font-['IBM_Plex_Sans']">
                External Connection Posture
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Manrope'] leading-tight max-w-xl">
                Third-party compatibility — five states, no invented vendor directory
              </h2>
            </Reveal>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal delay={0.16}>
                <div className="bg-rose-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm p-2 flex items-center justify-center">
                  <img
                    src="/images/integration-overview/image 435.png"
                    alt="External connection posture graphic"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.2}>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[640px]">
                      <thead>
                        <tr className="bg-slate-50 text-slate-950 text-xs font-medium font-['IBM_Plex_Sans'] border-b border-slate-200">
                          <th className="px-5 py-3.5 w-2/5">Availability state</th>
                          <th className="px-5 py-3.5 w-2/5">Public treatment</th>
                          <th className="px-5 py-3.5">CTA</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-xs font-['Inter']">
                        {POSTURE_STATES.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-5 py-4">
                              <span
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium font-['IBM_Plex_Sans'] ${row.badgeStyle}`}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                <span>{row.state}</span>
                              </span>
                            </td>
                            <td className="px-5 py-4 text-slate-600 leading-relaxed">
                              {row.treatment}
                            </td>
                            <td className={`px-5 py-4 font-medium font-['IBM_Plex_Sans'] ${row.ctaColor}`}>
                              {row.cta}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
