"use client";

import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const AUTH_DETAILS = [
  { label: "Authorization ID", val: "AUTH-2025-0047", valColor: "text-violet-400 font-['JetBrains_Mono']" },
  { label: "Policy version", val: "AUTH-POL-v4.2", valColor: "text-blue-400 font-['JetBrains_Mono']" },
  { label: "Principal / service identity", val: "SVC-IDCOORD-01 [status: valid]", valColor: "text-emerald-400 font-['JetBrains_Mono']" },
  { label: "Connection", val: "Workforce identity sync (CONN-2025-001)", valColor: "text-slate-400 font-['JetBrains_Mono']" },
  { label: "Object scope", val: "Workforce identity objects — approved classes", valColor: "text-slate-400 font-['JetBrains_Mono']" },
  { label: "Action scope", val: "read, event-receive", valColor: "text-slate-400 font-['JetBrains_Mono']" },
  { label: "Organization scope", val: "Entity group: approved entities only", valColor: "text-slate-400 font-['JetBrains_Mono']" },
  { label: "Environment", val: "Production", valColor: "text-emerald-400 font-['JetBrains_Mono']" },
  { label: "Purpose", val: "Identity coordination (PURPOSE-2025-04-v2)", valColor: "text-amber-400 font-['JetBrains_Mono']" },
  { label: "Effective period", val: "2025-06-01 → 2025-12-31", valColor: "text-slate-400 font-['JetBrains_Mono']" },
  { label: "Approved by", val: "SEC-ADMIN role — role/version recorded", valColor: "text-slate-400 font-['JetBrains_Mono']" },
  { label: "Explicit deny", val: "write, admin-scope, compensation-data", valColor: "text-rose-400 font-['JetBrains_Mono'] font-semibold" },
  { label: "Unknown condition", val: "→ DENY (fail closed)", valColor: "text-rose-500 font-['JetBrains_Mono'] font-bold" },
];

export function AuthorizationScopeSection() {
  return (
    <section className="bg-slate-950 py-16 lg:py-24 text-white border-t border-slate-800" id="authorization-model">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-6">
              <Reveal>
                <span className="text-blue-500 text-xs font-semibold uppercase tracking-widest font-['IBM_Plex_Sans']">
                  Authorization & Scope
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="text-3xl font-extrabold text-white font-['Manrope'] leading-tight">
                  Who/what may act, on which objects, in which environment, for which purpose
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="text-white/60 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Authorization is evaluated from a versioned policy — not from a connection-level badge or successful authentication. Every scope dimension is explicit and version-bound.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/integration-security/image 447.png"
                    alt="Authorization Policy Structure"
                    width={361}
                    height={541}
                    className="w-full object-contain rounded-xl"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.12}>
                <div className="bg-slate-900 rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                  <div className="px-6 py-32 border-b border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-white text-sm font-bold font-['Manrope']">Authorization detail</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 bg-violet-600/20 text-violet-400 text-xs font-mono rounded">
                          AUTH-2025-0047-v3
                        </span>
                        <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full flex items-center gap-1.5 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                          Authorized current
                        </span>
                      </div>
                    </div>
                    <span className="text-white/30 text-xs font-mono">Synthetic data</span>
                  </div>

                  <div className="divide-y divide-white/5 px-6 py-2 text-xs font-['IBM_Plex_Sans']">
                    {AUTH_DETAILS.map((item, idx) => (
                      <div key={idx} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-white/40 font-medium">{item.label}</span>
                        <span className={item.valColor}>{item.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="px-6 py-3 bg-slate-950/60 border-t border-white/10 text-white/30 text-xs font-medium font-['IBM_Plex_Sans']">
                    Security Decision Snapshot: SEC-SNAP-0047 · authentication is necessary but not sufficient for authorization
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
