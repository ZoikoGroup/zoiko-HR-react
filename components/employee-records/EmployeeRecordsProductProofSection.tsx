"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const TABS = ["Overview", "People Directory", "Records", "Changes", "Documents", "Data Quality"];

const STATS = [
  { value: "2,140", label: "Active records" },
  { value: "18", label: "Upcoming starters" },
  { value: "7", label: "Future-dated changes" },
  { value: "5", label: "Source conflicts" },
];

const QUEUE = [
  "Missing required data — 5 records",
  "Documents expiring — 3 records",
  "Access reviews due — 12 records",
];

export function EmployeeRecordsProductProofSection() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Product proof
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              One operational home for record readiness, changes, and
              exceptions.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Scope filters, KPI visibility, an attention queue, and an
              action drawer bring record data, sources, and permissions
              into one governed workspace.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-[#0e1730] p-6 shadow-2xl shadow-black/40 sm:p-8">
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
                Attention queue
              </span>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {QUEUE.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white/[0.08]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            href="/product-tour"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            Take the Product Tour
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
