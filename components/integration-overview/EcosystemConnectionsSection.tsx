"use client";

import { Container, Reveal } from "@/components/ui";

const ECOSYSTEM_PRODUCTS = [
  {
    name: "ZoikoTime",
    icon: "◷",
    iconColor: "text-sky-700",
    rel: "Approved schedule, attendance and timesheet information.",
    boundary: "Route exact data objects, timing and sync rules to approved integration detail. Zoiko HR does not own time classification or timekeeping authority.",
  },
  {
    name: "Zoiko Payroll",
    icon: "⊟",
    iconColor: "text-violet-600",
    rel: "Employee and payroll-preparation information.",
    boundary: "Do not imply Zoiko HR owns payroll calculation, tax treatment, payment or filing authority. Handoff is explicit, not automatic.",
  },
  {
    name: "Zoiko Docs Pro",
    icon: "◈",
    iconColor: "text-amber-700",
    rel: "Workforce documentation, storage and templates.",
    boundary: "Governed document and reference relationship. Permissions and retention remain source-controlled. No unrestricted document replication.",
  },
  {
    name: "Zoiko Comply",
    icon: "◎",
    iconColor: "text-green-700",
    rel: "Policies, controls, evidence and compliance workflows.",
    boundary: "Show policy and evidence handoff. Do not imply automatic compliance or universal workflow synchronization across every Comply workflow.",
  },
  {
    name: "ZoikoID",
    icon: "⊙",
    iconColor: "text-blue-600",
    rel: "Identity, authentication and controlled access.",
    boundary: "Route identity-provider and access-control detail to Identity & Single Sign-On. This overview shows the connection class only.",
  },
  {
    name: "Zoiko One",
    icon: "✦",
    iconColor: "text-gray-500",
    rel: "Use Zoiko HR within the wider integrated suite.",
    boundary: "Optional integrated-suite path — not a requirement. No product in the Zoiko ecosystem is mandatory. Permission-controlled information flows, never mandatory suite adoption.",
  },
];

export function EcosystemConnectionsSection() {
  return (
    <section className="bg-slate-950 text-white py-16 lg:py-24 border-t border-slate-800" id="ecosystem">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl space-y-3">
              <Reveal>
                <span className="text-blue-600 text-xs font-medium font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
                  Zoiko Ecosystem Connections
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-10 max-w-[560px]">
                  Connected Zoiko products — each relationship is governed and optional
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="px-4 py-2 bg-blue-600/10 rounded-lg outline outline-1 outline-offset-[-1.01px] outline-blue-600/30 text-blue-600 text-xs font-medium font-['IBM_Plex_Sans'] leading-4 max-w-xs">
                Controlled Interoperability: permission-controlled information flows, never mandatory suite adoption.
              </div>
            </Reveal>
          </div>

          <div className="bg-slate-950 rounded-2xl outline outline-1 outline-offset-[-1.01px] outline-white/10 overflow-hidden divide-y divide-white/10 shadow-2xl">
            {ECOSYSTEM_PRODUCTS.map((prod, idx) => (
              <Reveal key={idx} delay={0.04 * idx + 0.1}>
                <div className="grid md:grid-cols-12 items-stretch text-xs hover:bg-white/[0.02] transition-colors">
                  <div className="md:col-span-3 p-6 md:border-r border-white/10 flex items-center gap-3 bg-white/5">
                    <span className={`text-xl font-normal font-['IBM_Plex_Sans'] leading-8 ${prod.iconColor}`}>{prod.icon}</span>
                    <span className="text-white text-sm font-semibold font-['IBM_Plex_Sans'] leading-5">{prod.name}</span>
                  </div>

                  <div className="md:col-span-4 p-6 md:border-r border-white/10 space-y-1.5 flex flex-col justify-center">
                    <span className="text-white/40 text-xs font-medium font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wide">
                      Relationship
                    </span>
                    <p className="text-white/75 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">
                      {prod.rel}
                    </p>
                  </div>

                  <div className="md:col-span-5 p-6 space-y-1.5 flex flex-col justify-center">
                    <span className="text-white/40 text-xs font-medium font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wide">
                      Boundary
                    </span>
                    <p className="text-white/50 text-xs font-normal font-['IBM_Plex_Sans'] leading-5 max-w-[491px]">
                      {prod.boundary}
                    </p>
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

