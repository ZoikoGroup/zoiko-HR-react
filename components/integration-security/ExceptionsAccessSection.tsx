"use client";

import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const EXCEPTION_FIELDS = [
  { label: "Exception ID", val: "EXC-2025-008-v1", color: "text-violet-400 font-mono" },
  { label: "Reason category", val: "Temporary handoff coverage — structured reason", color: "text-amber-400 font-mono" },
  { label: "Owner", val: "Integration Admin team (role reference)", color: "text-slate-400 font-mono" },
  { label: "Requested by", val: "INT-ADMIN role — identity reference", color: "text-slate-400 font-mono" },
  { label: "Connection scope", val: "CONN-2025-002 (Payroll preparation feed) only", color: "text-slate-400 font-mono" },
  { label: "Action scope", val: "export (within original authorization)", color: "text-amber-400 font-mono" },
  { label: "Organization scope", val: "As per authorization — no escalation", color: "text-slate-400 font-mono" },
  { label: "Environment", val: "Production", color: "text-emerald-400 font-mono" },
  { label: "Start", val: "2025-08-08 12:00 UTC", color: "text-slate-400 font-mono" },
  { label: "Expiry", val: "2025-10-08 12:00 UTC (62 days)", color: "text-rose-400 font-mono" },
  { label: "Approver", val: "SEC-ADMIN role — decision recorded", color: "text-emerald-400 font-mono" },
  { label: "Status", val: "Active — expiry / review actions visible", color: "text-amber-400 font-mono" },
  { label: "Revoke action", val: "Immediate — affected flows previewed before commit", color: "text-slate-400 font-mono" },
];

export function ExceptionsAccessSection() {
  return (
    <section className="bg-slate-950 py-16 lg:py-24 text-white border-t border-slate-800">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-6">
              <Reveal>
                <span className="text-blue-500 text-xs font-semibold uppercase tracking-widest font-['IBM_Plex_Sans']">
                  Exceptions & Temporary Access
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="text-3xl font-extrabold text-white font-['Manrope'] leading-tight">
                  Every exception is bounded, expiring, auditable and stack-evaluated
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="text-white/60 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Overlapping exceptions are evaluated together. Combinations that would produce broader effective access than any single exception permits are blocked. Expiry removes authorization eligibility and triggers runtime reconciliation.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/integration-security/image 451.png"
                    alt="Temporary Access Exception Rule"
                    width={520}
                    height={348}
                    className="w-full object-contain rounded-xl"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={0.12}>
                <div className="bg-slate-900 rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                  <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-white text-sm font-semibold font-['Manrope']">Exception record</div>
                      <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-mono rounded mt-1 inline-block">
                        EXC-2025-008-v1
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-400 text-xs font-medium rounded-full flex items-center gap-1.5 border border-amber-500/20">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                        Exception active
                      </span>
                      <span className="text-white/30 text-xs font-mono">Synthetic</span>
                    </div>
                  </div>

                  <div className="divide-y divide-white/5 px-6 py-2 text-xs font-['IBM_Plex_Sans']">
                    {EXCEPTION_FIELDS.map((item, idx) => (
                      <div key={idx} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-white/40 font-medium">{item.label}</span>
                        <span className={item.color}>{item.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="px-6 py-3 bg-slate-950/60 border-t border-white/10 text-white/30 text-xs font-medium font-['IBM_Plex_Sans']">
                    Expiry removes authorization eligibility — runtime reconciliation required. Superseded records append; original meaning preserved.
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
