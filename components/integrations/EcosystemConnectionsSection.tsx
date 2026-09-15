"use client";

import { Container, Reveal } from "@/components/ui";

const ECOSYSTEM_PRODUCTS = [
  {
    name: "ZoikoTime",
    icon: "◷",
    iconColor: "text-sky-400",
    relationship: "Approved schedule, attendance and timesheet information.",
    boundary:
      "Route exact data objects, timing and sync rules to approved integration detail. Zoiko HR does not own time classification or timekeeping authority.",
  },
  {
    name: "Zoiko Payroll",
    icon: "⊟",
    iconColor: "text-violet-400",
    relationship: "Employee and payroll-preparation information.",
    boundary:
      "Do not imply Zoiko HR owns payroll calculation, tax treatment, payment or filing authority. Handoff is explicit, not automatic.",
  },
  {
    name: "Zoiko Docs Pro",
    icon: "◈",
    iconColor: "text-amber-400",
    relationship: "Workforce documentation, storage and templates.",
    boundary:
      "Governed document and reference relationship. Permissions and retention remain source-controlled. No unrestricted document replication.",
  },
  {
    name: "Zoiko Comply",
    icon: "◎",
    iconColor: "text-emerald-400",
    relationship: "Policies, controls, evidence and compliance workflows.",
    boundary:
      "Show policy and evidence handoff. Do not imply automatic compliance or universal workflow synchronization across every Comply workflow.",
  },
  {
    name: "ZoikoID",
    icon: "⊙",
    iconColor: "text-blue-400",
    relationship: "Identity, authentication and controlled access.",
    boundary:
      "Route identity-provider and access-control detail to Identity & Single Sign-On. This overview shows the connection class only.",
  },
  {
    name: "Zoiko One",
    icon: "✦",
    iconColor: "text-slate-400",
    relationship: "Use Zoiko HR within the wider integrated suite.",
    boundary:
      "Optional integrated-suite path — not a requirement. No product in the Zoiko ecosystem is mandatory. Permission-controlled information flows, never mandatory suite adoption.",
  },
];

export function EcosystemConnectionsSection() {
  return (
    <section id="zoiko-ecosystem" className="bg-slate-950 py-16 lg:py-24 text-white">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <Reveal>
                <span className="text-blue-600 text-xs font-medium uppercase tracking-wider font-['IBM_Plex_Sans']">
                  Zoiko Ecosystem Connections
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-tight">
                  Connected Zoiko products — each relationship is governed and optional
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.16}>
              <div className="p-3 bg-blue-600/10 rounded-lg border border-blue-600/30 text-blue-400 text-xs font-medium font-['IBM_Plex_Sans'] leading-relaxed max-w-xs">
                Controlled Interoperability: permission-controlled information flows, never mandatory suite adoption.
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden divide-y divide-white/10">
              {ECOSYSTEM_PRODUCTS.map((prod, idx) => (
                <div
                  key={idx}
                  className="grid lg:grid-cols-12 items-center p-6 gap-4 hover:bg-white/5 transition-colors"
                >
                  <div className="lg:col-span-3 flex items-center gap-3">
                    <span className={`text-2xl font-normal font-['Inter'] ${prod.iconColor}`}>
                      {prod.icon}
                    </span>
                    <span className="text-white text-base font-semibold font-['Inter']">
                      {prod.name}
                    </span>
                  </div>

                  <div className="lg:col-span-4 space-y-1">
                    <span className="text-white/40 text-[11px] font-medium font-['IBM_Plex_Sans'] uppercase tracking-wider block">
                      Relationship
                    </span>
                    <p className="text-white/80 text-xs font-normal font-['Inter'] leading-relaxed">
                      {prod.relationship}
                    </p>
                  </div>

                  <div className="lg:col-span-5 space-y-1">
                    <span className="text-white/40 text-[11px] font-medium font-['IBM_Plex_Sans'] uppercase tracking-wider block">
                      Boundary
                    </span>
                    <p className="text-white/50 text-xs font-normal font-['Inter'] leading-relaxed">
                      {prod.boundary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
