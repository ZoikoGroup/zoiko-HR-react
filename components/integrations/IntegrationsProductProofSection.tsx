"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TABS = ["Overview", "Catalogue", "Connections", "Data Mappings", "Credentials", "Audit & Evidence"];

const STATS = [
  { value: "184", label: "Connected systems" },
  { value: "7", label: "Setup required" },
  { value: "5", label: "Degraded" },
  { value: "2", label: "Failed" },
];

const EXCEPTIONS = [
  "Expired credential — 1 connection",
  "Mapping under review — 3 connections",
  "Provider incident — 1 connection",
];

export function IntegrationsProductProofSection() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Product proof
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              One operational home for every governed connection.
            </h2>
            <p className="mt-4 text-white/60">
              Scope filters, KPI visibility, a connection table,
              credentials, and an attention queue bring integration
              admins, HR data owners, and security reviewers into one
              permission-aware workspace.
            </p>
          </Reveal>

          <Reveal delay={0.14} y={30}>
            <PlaceholderImage
              src="/images/integrations/product-proof.png"
              alt="Two colleagues reviewing a laptop screen"
              label="One operational home"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-black/30"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2} y={30}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0e1730] shadow-2xl shadow-black/40">
            <div className="h-1 bg-gradient-to-r from-primary via-sky-400 to-emerald-400" />
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-2">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      activeTab === tab
                        ? "bg-primary text-white shadow-md shadow-primary/30"
                        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-xs text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <span className="text-xs font-semibold uppercase tracking-wide text-white/40">
                  Exception panel
                </span>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {EXCEPTIONS.map((exception) => (
                    <div
                      key={exception}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white/[0.08]"
                    >
                      {exception}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
