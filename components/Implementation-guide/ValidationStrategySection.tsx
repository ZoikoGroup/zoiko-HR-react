"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const validationTabs = [
  "Functional",
  "Role/Access",
  "Data",
  "Integrations",
  "Recovery",
  "Non-functional",
];

export function ValidationStrategySection() {
  const [activeTab, setActiveTab] = useState("Functional");

  return (
    <section className="bg-slate-50 py-20 text-slate-900 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8">
          {/* Title */}
          <Reveal>
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-sky-950 md:text-4xl">
              Validation strategy and evidence.
            </h2>
          </Reveal>

          {/* Content Area: Sidebar Tabs + Image Panel */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
              {/* Sidebar / Tabs List */}
              <div className="flex flex-row flex-wrap gap-2.5 lg:w-48 lg:flex-col lg:flex-nowrap">
                {validationTabs.map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex w-fit items-center justify-center rounded-[10px] px-3.5 py-2.5 text-xs transition-colors lg:w-full lg:justify-start ${
                        isActive
                          ? "bg-blue-600 font-bold text-white ring-1 ring-blue-600"
                          : "bg-white font-normal text-gray-700 ring-1 ring-black/10 hover:bg-slate-100"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Image Panel */}
              <div className="relative min-h-[300px] w-full flex-1 overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 md:min-h-[400px]">
                <PlaceholderImage
                  src="/images/implementation-guide/Validation.png"
                  alt={`${activeTab} validation strategy diagram`}
                  label={activeTab}
                  className="aspect-[2/1] w-full"
                />
              </div>
            </div>
          </Reveal>

          {/* Footnote */}
          <Reveal delay={0.16}>
            <p className="text-xs text-gray-400">
              No readiness percentage without approved metric contract.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
