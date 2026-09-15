"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

const INSPECTOR_EXAMPLES = [
  {
    id: 1,
    title: "ZoikoTime → Zoiko HR",
    direction: "Inbound",
    directionIcon: "←",
    directionBg: "bg-sky-700/10 text-sky-400",
    status: "Available",
    statusBg: "bg-emerald-700/10 text-emerald-400",
    purpose: "Receive approved schedule and attendance context for leave administration and workforce coordination.",
    sourceSystem: "ZoikoTime (approved time system)",
    targetSystem: "Zoiko HR — Leave & Attendance",
    owner: "ZoikoTime — authoritative source for schedule and attendance truth.",
    capability: "Read-only",
    authBoundary: "HR Admin with Integration Admin scope — role-governed.",
    minimization: "Only schedule and attendance context required for leave administration. Full time-clock data is not transferred.",
    audit: "Connection lifecycle changes traceable where implementation authority provides audit trail.",
    tags: ["Schedule data", "Attendance context", "Absence status"],
  },
  {
    id: 2,
    title: "Zoiko HR → Zoiko Payroll",
    direction: "Outbound",
    directionIcon: "→",
    directionBg: "bg-emerald-700/10 text-emerald-400",
    status: "Contact to confirm",
    statusBg: "bg-slate-500/10 text-slate-400",
    purpose: "Export approved employee payroll-preparation records to external or connected payroll processing.",
    sourceSystem: "Zoiko HR — Core HR",
    targetSystem: "Zoiko Payroll",
    owner: "Zoiko HR — authoritative source for employee employment record.",
    capability: "Export-only",
    authBoundary: "Payroll Administrator — explicit permission boundary.",
    minimization: "Only preparation metadata and approved gross rates. Calculation authority stays in payroll.",
    audit: "Export events logged with user ID and timestamp.",
    tags: ["Employee master", "Payroll prep", "Gross rates"],
  },
  {
    id: 3,
    title: "ZoikoID → Zoiko HR",
    direction: "Identity",
    directionIcon: "⊙",
    directionBg: "bg-blue-600/10 text-blue-400",
    status: "Available",
    statusBg: "bg-emerald-700/10 text-emerald-400",
    purpose: "Authenticate user sign-in transactions and route single sign-on assertion tokens into Zoiko HR.",
    sourceSystem: "ZoikoID (approved identity provider)",
    targetSystem: "Zoiko HR — Access Control",
    owner: "ZoikoID — authoritative provider for authentication token validation.",
    capability: "Federated access",
    authBoundary: "Security Admin & Identity Provider Registry.",
    minimization: "User identity claim and email routing identifier only.",
    audit: "Full SSO transaction audit log captured in security records.",
    tags: ["SAML claim", "OIDC token", "Sign-in routing"],
  },
];

export function InformationBoundaryInspectorSection() {
  const [selectedId, setSelectedId] = useState<number>(1);
  const activeItem = INSPECTOR_EXAMPLES.find((ex) => ex.id === selectedId) ?? INSPECTOR_EXAMPLES[0];

  return (
    <section className="bg-slate-900 py-16 lg:py-24 text-white">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="space-y-3">
            <Reveal>
              <span className="text-blue-600 text-xs font-medium uppercase tracking-wider font-['IBM_Plex_Sans']">
                Information Boundary Inspector
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-tight max-w-3xl">
                Every approved flow has a purpose, data scope, direction and source-of-truth owner
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-white/60 text-sm font-normal font-['Inter'] leading-relaxed max-w-xl">
                Select a connection example to inspect its boundary record. All values below are illustrative — production boundaries come from the approved Information Boundary Registry.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="grid lg:grid-cols-12 bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Left Sidebar List */}
              <div className="lg:col-span-4 bg-slate-900/80 border-r border-white/10 divide-y divide-white/5">
                {INSPECTOR_EXAMPLES.map((ex) => {
                  const isSelected = ex.id === selectedId;
                  return (
                    <button
                      key={ex.id}
                      onClick={() => setSelectedId(ex.id)}
                      className={`w-full p-5 text-left transition-colors space-y-2 ${
                        isSelected
                          ? "bg-blue-600/20 border-l-2 border-blue-600"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <span
                        className={`text-xs font-semibold font-['Inter'] block ${
                          isSelected ? "text-white" : "text-white/60"
                        }`}
                      >
                        {ex.title}
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded-sm text-[11px] font-medium font-['IBM_Plex_Sans'] flex items-center gap-1 ${ex.directionBg}`}
                        >
                          <span>{ex.directionIcon}</span>
                          <span>{ex.direction}</span>
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium font-['IBM_Plex_Sans'] flex items-center gap-1 ${ex.statusBg}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          <span>{ex.status}</span>
                        </span>
                      </div>
                    </button>
                  );
                })}

                <div className="p-5 text-white/30 text-[11px] font-medium font-['IBM_Plex_Sans'] leading-normal">
                  Illustrative examples — production records from approved Registry
                </div>
              </div>

              {/* Right Active Detail Panel */}
              <div className="lg:col-span-8 p-6 space-y-4 bg-slate-950/40 text-xs font-['Inter']">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <h3 className="text-white text-base font-semibold font-['Inter']">
                    {activeItem.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-sm text-xs font-medium font-['IBM_Plex_Sans'] flex items-center gap-1 ${activeItem.directionBg}`}>
                      <span>{activeItem.directionIcon}</span>
                      <span>{activeItem.direction}</span>
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium font-['IBM_Plex_Sans'] flex items-center gap-1.5 ${activeItem.statusBg}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      <span>{activeItem.status}</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-3 divide-y divide-white/5">
                  <div className="pt-2">
                    <span className="text-white/40 text-[11px] font-medium font-['IBM_Plex_Sans'] block">
                      Connection purpose
                    </span>
                    <p className="text-white/80 leading-relaxed mt-0.5">
                      {activeItem.purpose}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-white/40 text-[11px] font-medium font-['IBM_Plex_Sans'] block">
                      Source system
                    </span>
                    <p className="text-white/80 mt-0.5">{activeItem.sourceSystem}</p>
                  </div>

                  <div className="pt-2">
                    <span className="text-white/40 text-[11px] font-medium font-['IBM_Plex_Sans'] block">
                      Target system
                    </span>
                    <p className="text-white/80 mt-0.5">{activeItem.targetSystem}</p>
                  </div>

                  <div className="pt-2">
                    <span className="text-white/40 text-[11px] font-medium font-['IBM_Plex_Sans'] block">
                      Authoritative record owner
                    </span>
                    <p className="text-white/80 mt-0.5">{activeItem.owner}</p>
                  </div>

                  <div className="pt-2">
                    <span className="text-white/40 text-[11px] font-medium font-['IBM_Plex_Sans'] block">
                      Read / write capability
                    </span>
                    <p className="text-white/80 mt-0.5 font-['JetBrains_Mono']">
                      {activeItem.capability}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-white/40 text-[11px] font-medium font-['IBM_Plex_Sans'] block">
                      Authorization boundary
                    </span>
                    <p className="text-white/80 mt-0.5">{activeItem.authBoundary}</p>
                  </div>

                  <div className="pt-2">
                    <span className="text-white/40 text-[11px] font-medium font-['IBM_Plex_Sans'] block">
                      Minimization statement
                    </span>
                    <p className="text-white/80 mt-0.5">{activeItem.minimization}</p>
                  </div>

                  <div className="pt-2">
                    <span className="text-white/40 text-[11px] font-medium font-['IBM_Plex_Sans'] block">
                      Audit / currentness
                    </span>
                    <p className="text-white/80 mt-0.5">{activeItem.audit}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  {activeItem.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-white/10 rounded-sm text-white/70 text-xs font-normal font-['JetBrains_Mono']"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
