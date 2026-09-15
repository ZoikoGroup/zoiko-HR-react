"use client";

import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const SERVICE_ID_FIELDS = [
  { label: "Identity reference", val: "SVC-IDCOORD-01", color: "text-violet-600 font-mono" },
  { label: "Owner", labelSub: "Integration Admin team — escalation: IAM Owner", color: "text-slate-950 font-medium" },
  { label: "Purpose", val: "Identity coordination inbound feed", color: "text-slate-600" },
  { label: "Environment", val: "Production", color: "text-emerald-700 font-mono" },
  { label: "Approved connections", val: "CONN-2025-001 (Workforce identity sync)", color: "text-slate-600" },
  { label: "Approved scope refs", val: "read, event-receive", color: "text-slate-600 font-mono" },
  { label: "Authentication status", val: "Valid", color: "text-emerald-700 font-mono" },
  { label: "Authorization status", val: "Separate — see Authorization record AUTH-2025-0047", color: "text-amber-700" },
  { label: "Created", val: "2025-07-22", color: "text-slate-500 font-mono" },
  { label: "Review due", val: "2026-01-22", color: "text-amber-700 font-mono" },
  { label: "Credential type", val: "Status: valid / Reference: see Identity Admin", color: "text-slate-500" },
];

export function ServiceIdentitiesSection() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24 border-t border-slate-200">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-6">
              <Reveal>
                <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest font-['IBM_Plex_Sans']">
                  Service Identities & Credential Boundary
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="text-3xl font-extrabold text-slate-950 font-['Manrope'] leading-tight">
                  Service identity reference, owner and status — never a secret value
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="text-slate-600 text-sm font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                  Service identities authenticate a connection on behalf of an approved purpose. Authentication is separate from and necessary but not sufficient for authorization.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/images/integration-security/image 449.png"
                    alt="Service Identity Reference Diagram"
                    width={340}
                    height={510}
                    className="w-full object-contain rounded-xl"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8 ">
              <Reveal delay={0.12}>
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-md">
                  <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                    <div>
                      <h3 className="text-slate-950 text-sm font-semibold font-['Manrope']">Service identity record</h3>
                      <p className="text-slate-400 text-xs font-medium font-['IBM_Plex_Sans']">Synthetic data — no real identifiers</p>
                    </div>
                    <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-700 text-xs font-medium rounded-full flex items-center gap-1.5 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      Valid — current
                    </span>
                  </div>

                  <div className="divide-y divide-slate-100 px-6 py-2 text-xs font-['IBM_Plex_Sans']">
                    {SERVICE_ID_FIELDS.map((item, idx) => (
                      <div key={idx} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-slate-400 font-medium">{item.label}</span>
                        <span className={item.color}>{item.val || item.labelSub}</span>
                      </div>
                    ))}

                    <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-slate-400 font-medium">Secret / credential value</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 font-mono tracking-widest">••••••••••••••••••••</span>
                        <span className="text-blue-600 text-[10px] underline cursor-pointer">boundary?</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-33 pt-3 bg-slate-50 border-t border-slate-100 text-slate-500 text-xs font-medium font-['IBM_Plex_Sans']">
                    Authentication validity is necessary but not sufficient for authorization. Compromise: route to Security authority — not generic support.
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
