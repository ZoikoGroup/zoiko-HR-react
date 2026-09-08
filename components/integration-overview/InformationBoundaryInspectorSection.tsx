"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

const INSPECTOR_EXAMPLES = [
  {
    id: 0,
    label: "ZoikoTime → Zoiko HR",
    dir: "Inbound",
    dirBg: "bg-sky-700/10 text-sky-700",
    dirIcon: "←",
    status: "Available",
    statusBg: "bg-green-700/10 text-green-700",
    statusDot: "bg-green-700",
    purpose: "Receive approved schedule and attendance context for leave administration and workforce coordination.",
    source: "ZoikoTime (approved time system)",
    target: "Zoiko HR — Leave & Attendance",
    owner: "ZoikoTime — authoritative source for schedule and attendance truth.",
    capability: "Read-only",
    authBoundary: "HR Admin with Integration Admin scope — role-governed.",
    minimization: "Only schedule and attendance context required for leave administration. Full time-clock data is not transferred.",
    audit: "Connection lifecycle changes traceable where implementation authority provides audit trail.",
    tags: ["Schedule data", "Attendance context", "Absence status"],
  },
  {
    id: 1,
    label: "Zoiko HR → Zoiko Payroll",
    dir: "Outbound",
    dirBg: "bg-green-700/10 text-green-700",
    dirIcon: "→",
    status: "Contact to confirm",
    statusBg: "bg-gray-500/10 text-gray-500",
    statusDot: "bg-gray-500",
    purpose: "Provide validated employee master changes and payroll preparation data to payroll processing engines.",
    source: "Zoiko HR — Core HR & Payroll Prep",
    target: "Zoiko Payroll",
    owner: "Zoiko HR — authoritative master for worker identity and position history.",
    capability: "Export stream",
    authBoundary: "Payroll Administrator with explicit export approval.",
    minimization: "Redacts unneeded PII fields. Transfers strictly active pay-period ledger events.",
    audit: "Export execution logged with SHA-256 payload checksum and timestamp.",
    tags: ["Worker master changes", "Pay rates", "Tax withholdings"],
  },
  {
    id: 2,
    label: "ZoikoID → Zoiko HR",
    dir: "Identity",
    dirBg: "bg-blue-600/10 text-blue-600",
    dirIcon: "⊙",
    status: "Available",
    statusBg: "bg-green-700/10 text-green-700",
    statusDot: "bg-green-700",
    purpose: "Federate user authentication, SAML assertions, and SCIM automated account provisioning.",
    source: "ZoikoID (Identity Provider)",
    target: "Zoiko HR — User Access & Role Engine",
    owner: "ZoikoID — single source of truth for user authentication credentials.",
    capability: "Federated auth & SCIM sync",
    authBoundary: "IAM Administrator — role & security policy governed.",
    minimization: "User principal name, email, active status, and group assignments.",
    audit: "Authentication tokens and provision events written to Security Audit Log.",
    tags: ["User Principal Name", "SAML token", "SCIM 2.0 provisioning"],
  },
];

export function InformationBoundaryInspectorSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = INSPECTOR_EXAMPLES[selectedIdx];

  return (
    <section className="bg-slate-950 text-white py-16 lg:py-24 border-t border-slate-800">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-3">
            <Reveal>
              <span className="text-blue-600 text-xs font-medium font-['IBM_Plex_Sans'] uppercase leading-4 tracking-wider">
                Information Boundary Inspector
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] leading-10">
                Every approved flow has a purpose, data scope, direction and source-of-truth owner
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-white/60 text-sm font-normal font-['IBM_Plex_Sans'] leading-5 max-w-[560px]">
                Select a connection example to inspect its boundary record. All values below are illustrative — production boundaries come from the approved Information Boundary Registry.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Selector List */}
            <div className="lg:col-span-4 space-y-0 bg-white/5 rounded-xl outline outline-1 outline-offset-[-1.01px] outline-white/10 overflow-hidden">
              {INSPECTOR_EXAMPLES.map((ex) => {
                const isSelected = selectedIdx === ex.id;
                return (
                  <button
                    key={ex.id}
                    onClick={() => setSelectedIdx(ex.id)}
                    className={`w-full p-5 text-left space-y-2 transition-all border-b border-white/5 ${
                      isSelected
                        ? "bg-blue-600/20 border-l-2 border-l-blue-600 border-b-white/10"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className={`text-xs font-semibold font-['IBM_Plex_Sans'] leading-5 ${isSelected ? "text-white" : "text-white/60"}`}>
                      {ex.label}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-sm text-xs font-medium font-['IBM_Plex_Sans'] leading-4 flex items-center gap-1 ${ex.dirBg}`}>
                        <span>{ex.dirIcon}</span>
                        <span>{ex.dir}</span>
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium font-['IBM_Plex_Sans'] leading-4 flex items-center gap-1.5 ${ex.statusBg}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${ex.statusDot}`} />
                        {ex.status}
                      </span>
                    </div>
                  </button>
                );
              })}
              <div className="p-5 text-white/30 text-xs font-medium font-['IBM_Plex_Sans'] leading-4">
                Illustrative examples — production records from approved Registry
              </div>
            </div>

            {/* Right Inspector Box */}
            <div className="lg:col-span-8">
              <Reveal delay={0.2}>
                <div className="p-6 bg-white/5 rounded-xl outline outline-1 outline-offset-[-1.01px] outline-white/10 space-y-5">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <h3 className="text-white text-base font-semibold font-['IBM_Plex_Sans'] leading-6">{current.label}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-sm text-xs font-medium font-['IBM_Plex_Sans'] leading-4 flex items-center gap-1 ${current.dirBg}`}>
                        <span>{current.dirIcon}</span>
                        <span>{current.dir}</span>
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium font-['IBM_Plex_Sans'] leading-4 flex items-center gap-1.5 ${current.statusBg}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${current.statusDot}`} />
                        {current.status}
                      </span>
                    </div>
                  </div>

                  <div className="divide-y divide-white/5 text-xs space-y-3">
                    <div className="space-y-1">
                      <span className="text-white/40 text-xs font-medium font-['IBM_Plex_Sans'] leading-4 block">Connection purpose</span>
                      <p className="text-white/70 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">{current.purpose}</p>
                    </div>

                    <div className="pt-3 space-y-1">
                      <span className="text-white/40 text-xs font-medium font-['IBM_Plex_Sans'] leading-4 block">Source system</span>
                      <p className="text-white/70 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">{current.source}</p>
                    </div>

                    <div className="pt-3 space-y-1">
                      <span className="text-white/40 text-xs font-medium font-['IBM_Plex_Sans'] leading-4 block">Target system</span>
                      <p className="text-white/70 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">{current.target}</p>
                    </div>

                    <div className="pt-3 space-y-1">
                      <span className="text-white/40 text-xs font-medium font-['IBM_Plex_Sans'] leading-4 block">Authoritative record owner</span>
                      <p className="text-white/70 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">{current.owner}</p>
                    </div>

                    <div className="pt-3 space-y-1">
                      <span className="text-white/40 text-xs font-medium font-['IBM_Plex_Sans'] leading-4 block">Direction</span>
                      <div className="pt-0.5">
                        <span className={`px-2 py-0.5 rounded-sm text-xs font-medium font-['IBM_Plex_Sans'] leading-4 inline-flex items-center gap-1 ${current.dirBg}`}>
                          <span>{current.dirIcon}</span>
                          <span>{current.dir}</span>
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 space-y-1">
                      <span className="text-white/40 text-xs font-medium font-['IBM_Plex_Sans'] leading-4 block">Read / write capability</span>
                      <p className="text-white/70 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">{current.capability}</p>
                    </div>

                    <div className="pt-3 space-y-1">
                      <span className="text-white/40 text-xs font-medium font-['IBM_Plex_Sans'] leading-4 block">Authorization boundary</span>
                      <p className="text-white/70 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">{current.authBoundary}</p>
                    </div>

                    <div className="pt-3 space-y-1">
                      <span className="text-white/40 text-xs font-medium font-['IBM_Plex_Sans'] leading-4 block">Minimization statement</span>
                      <p className="text-white/70 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">{current.minimization}</p>
                    </div>

                    <div className="pt-3 space-y-1">
                      <span className="text-white/40 text-xs font-medium font-['IBM_Plex_Sans'] leading-4 block">Audit / currentness</span>
                      <p className="text-white/70 text-xs font-normal font-['IBM_Plex_Sans'] leading-5">{current.audit}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {current.tags.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-white/10 text-white/50 rounded-sm text-xs font-normal font-['JetBrains_Mono'] leading-4">
                        {t}
                      </span>
                    ))}
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

