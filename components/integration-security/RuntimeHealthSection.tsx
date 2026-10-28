"use client";

import { Container, Reveal } from "@/components/ui";

const HEALTH_DIMENSIONS = [
  {
    title: "Authentication",
    status: "Valid",
    statusBg: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    dotBg: "bg-emerald-600",
    desc: "Is the service identity presenting valid credentials for this environment?",
    badges: ["Valid", "Expired", "Revoked", "Unknown"],
    activeBadge: "Valid",
    footer: "Authentication is necessary but not sufficient. A valid credential does not grant authorization.",
  },
  {
    title: "Authorization",
    status: "Authorized current",
    statusBg: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    dotBg: "bg-emerald-600",
    desc: "Does the current policy grant the exact requested scope for the stated purpose?",
    badges: ["Authorized current", "Review due", "Expired", "Pending", "Denied"],
    activeBadge: "Authorized current",
    footer: "Authorization evaluates policy version, scope, purpose, conditions and denies — not just identity.",
  },
  {
    title: "Data exchange",
    status: "Degraded",
    statusBg: "bg-rose-500/10 text-rose-700 border-rose-500/20",
    dotBg: "bg-rose-600",
    desc: "Is the approved data movement operating within the permitted scope and minimization boundary?",
    badges: ["Operating", "Degraded", "Stale", "Paused", "Unknown"],
    activeBadge: "Degraded",
    footer: "Degraded data exchange does not upgrade to 'healthy' until the specific impaired layer is resolved.",
  },
  {
    title: "Reconciliation",
    status: "Pending",
    statusBg: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    dotBg: "bg-amber-600",
    desc: "Are downstream systems and pending operations aligned with the current authorization and revocation state?",
    badges: ["Reconciled", "Pending", "Unresolved", "Unknown"],
    activeBadge: "Pending",
    footer: "Requested revoke and observed downstream outcome are separate states. Outstanding work is surfaced explicitly.",
  },
];

export function RuntimeHealthSection() {
  return (
    <section className="bg-white py-16 lg:py-24 border-t border-slate-200">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-3.5">
            <Reveal>
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest font-['IBM_Plex_Sans']">
                Runtime Security & Connection Health
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Manrope'] leading-tight">
                Four separate health dimensions — no single green badge substitutes for all
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-slate-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Authentication, authorization, data exchange and reconciliation each have independent states and freshness. Degraded or unknown state is never shown as last-known-healthy without a visible staleness label.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {HEALTH_DIMENSIONS.map((dim, idx) => (
              <Reveal key={idx} delay={0.06 * idx + 0.1}>
                <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-slate-950 text-base font-extrabold font-['Manrope']">
                        {dim.title}
                      </h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border flex items-center gap-1.5 ${dim.statusBg}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${dim.dotBg}`} />
                        {dim.status}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                      {dim.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      {dim.badges.map((b, bIdx) => {
                        const isActive = b === dim.activeBadge;
                        return (
                          <span
                            key={bIdx}
                            className={`px-2 py-0.5 rounded-full text-xs font-medium font-['IBM_Plex_Sans'] border ${
                              isActive
                                ? `${dim.statusBg} font-bold`
                                : "bg-slate-50 text-slate-400 border-slate-200"
                            }`}
                          >
                            {b}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-slate-500 text-xs font-medium font-['IBM_Plex_Sans']">
                    {dim.footer}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
