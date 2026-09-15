"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

const MODELS = [
  {
    id: 1,
    direction: "Inbound",
    directionIcon: "←",
    directionBg: "bg-sky-700/10 text-sky-700",
    title: "Reference / directory connection",
    status: "Available",
    statusBg: "bg-emerald-700/10 text-emerald-700",
    desc: "Read approved reference data from another authoritative system.",
    tags: ["Organization reference", "Location data", "Identity directory"],
    writeAuthority: "Read-only",
    note: "Zoiko HR must not imply ownership of external authoritative truth.",
  },
  {
    id: 2,
    direction: "Inbound",
    directionIcon: "←",
    directionBg: "bg-sky-700/10 text-sky-700",
    title: "Inbound operational feed",
    status: "Available",
    statusBg: "bg-emerald-700/10 text-emerald-700",
    desc: "Receive operational records, time data or activity events from approved source systems into Zoiko HR.",
    tags: ["Time clock feeds", "Absence updates", "Operational events"],
    writeAuthority: "Append-only",
    note: "Incoming events are logged with source timestamps.",
  },
  {
    id: 3,
    direction: "Outbound",
    directionIcon: "→",
    directionBg: "bg-emerald-700/10 text-emerald-700",
    title: "Outbound operational feed",
    status: "Contact to confirm",
    statusBg: "bg-slate-500/10 text-slate-500",
    desc: "Feed approved workforce preparation data outward to authorized downstream payroll or reporting tools.",
    tags: ["Payroll preparation", "Downstream analytics"],
    writeAuthority: "Export-only",
    note: "Outbound payloads follow minimization contracts.",
  },
  {
    id: 4,
    direction: "Bidirectional",
    directionIcon: "↔",
    directionBg: "bg-violet-600/10 text-violet-600",
    title: "Bidirectional synchronization",
    status: "Contact to confirm",
    statusBg: "bg-slate-500/10 text-slate-500",
    desc: "Sync specific governed attributes continuously between Zoiko HR and an authorized target system.",
    tags: ["Employee master sync", "Field mapping"],
    writeAuthority: "Dual-governed",
    note: "Requires conflict-resolution rules before activation.",
  },
  {
    id: 5,
    direction: "Event",
    directionIcon: "⚡",
    directionBg: "bg-amber-700/10 text-amber-700",
    title: "Event / notification integration",
    status: "Available",
    statusBg: "bg-emerald-700/10 text-emerald-700",
    desc: "Trigger webhook events or automated alerts on lifecycle status changes.",
    tags: ["Onboarding events", "Offboarding triggers"],
    writeAuthority: "Notification-only",
    note: "Event delivery is audit-logged.",
  },
  {
    id: 6,
    direction: "Identity",
    directionIcon: "⊙",
    directionBg: "bg-blue-600/10 text-blue-600",
    title: "Identity / access federation",
    status: "Available",
    statusBg: "bg-emerald-700/10 text-emerald-700",
    desc: "Federate single sign-on authentication and directory provisioning via SAML 2.0 or OIDC.",
    tags: ["SAML 2.0", "OIDC", "SCIM"],
    writeAuthority: "Federated access",
    note: "See Identity & Single Sign-On for provider registry details.",
  },
  {
    id: 7,
    direction: "Batch",
    directionIcon: "⊞",
    directionBg: "bg-slate-500/10 text-slate-500",
    title: "One-time / batch movement",
    status: "Available",
    statusBg: "bg-emerald-700/10 text-emerald-700",
    desc: "Perform validated bulk data imports or historical archive exports.",
    tags: ["CSV / Excel migration", "Archive export"],
    writeAuthority: "Staged batch",
    note: "Batch movements run through pre-import validation.",
  },
];

export function ConnectionModelDirectorySection() {
  const [openId, setOpenId] = useState<number>(1);

  const toggleModel = (id: number) => {
    setOpenId(openId === id ? 0 : id);
  };

  return (
    <section id="connection-models" className="bg-slate-50 py-16 lg:py-24">
      <Container>
        <div className="space-y-10 max-w-6xl mx-auto">
          <div className="space-y-3">
            <Reveal>
              <span className="text-blue-600 text-xs font-medium uppercase tracking-wider font-['IBM_Plex_Sans']">
                Connection Model Directory
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-950 font-['Manrope'] leading-tight max-w-xl">
                Seven catalog-backed connection model classes
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed max-w-xl">
                Model classes are a design contract for classification — not a promise that every type is supported for every organization, market or plan. Specific availability comes from the approved Integration Catalog.
              </p>
            </Reveal>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal delay={0.2}>
                <div className="bg-amber-50 rounded-xl border border-amber-200 overflow-hidden shadow-sm p-2 flex items-center justify-center">
                  <img
                    src="/images/integration-overview/image 434.png"
                    alt="Connection model directory graphic"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8 space-y-3">
              {MODELS.map((model) => {
                const isOpen = openId === model.id;
                return (
                  <Reveal key={model.id} delay={0.04 * model.id}>
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-colors">
                      <button
                        onClick={() => toggleModel(model.id)}
                        className="w-full px-5 py-4 flex flex-wrap items-center justify-between gap-3 text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <span
                            className={`px-2 py-0.5 rounded-sm text-xs font-medium font-['IBM_Plex_Sans'] flex items-center gap-1 shrink-0 ${model.directionBg}`}
                          >
                            <span>{model.directionIcon}</span>
                            <span>{model.direction}</span>
                          </span>
                          <span className="text-slate-950 text-xs sm:text-sm font-semibold font-['Inter'] truncate">
                            {model.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-medium font-['IBM_Plex_Sans'] flex items-center gap-1.5 ${model.statusBg}`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                            <span>{model.status}</span>
                          </span>
                          <span className="text-gray-400 text-xs font-bold font-['IBM_Plex_Sans']">
                            {isOpen ? "▲" : "▼"}
                          </span>
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-3 border-t border-slate-100 space-y-3 text-xs font-['Inter']">
                          <p className="text-slate-600 leading-relaxed">
                            {model.desc}
                          </p>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {model.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 bg-slate-100 rounded-sm text-slate-600 text-xs font-normal font-['JetBrains_Mono']"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="text-slate-600 font-['IBM_Plex_Sans']">
                            <span className="text-gray-400 font-medium">
                              Write authority:{" "}
                            </span>
                            <span className="text-slate-950 font-['JetBrains_Mono']">
                              {model.writeAuthority}
                            </span>
                          </div>
                          <div className="p-3 bg-slate-50 rounded-sm border border-slate-200 text-gray-500 text-xs font-medium font-['IBM_Plex_Sans'] flex items-center gap-2">
                            <span>→</span>
                            <span>{model.note}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
