"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const STATE_STYLES: Record<string, string> = {
  Current: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
  "Preview / Beta": "border-blue-400/30 bg-blue-400/10 text-blue-400",
};

const SURFACES = [
  { name: "Employee Data", access: "Read / Write", state: "Current" },
  { name: "Payroll Run Context", access: "Read", state: "Current" },
  { name: "Webhooks / Events", access: "Event delivery", state: "Current" },
  { name: "Time & Attendance", access: "Read", state: "Current" },
  { name: "Document Access", access: "Read", state: "Preview / Beta" },
  { name: "Bulk Import / Export", access: "Import / Export", state: "Current" },
];

function StateBadge({ state }: { state: string }) {
  return (
    <span
      className={`inline-flex flex-none rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide ${STATE_STYLES[state]}`}
    >
      {state}
    </span>
  );
}

export function CapabilityMapSection() {
  const [activeSurface, setActiveSurface] = useState(SURFACES[0]);

  return (
    <section className="border-b border-slate-200 bg-[radial-gradient(120%_100%_at_100%_0%,rgba(23,37,84,0.05)_0%,rgba(23,37,84,0)_60%)] py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Integration surfaces · Section 04"
          title="API / integration capability map."
        >
          Approved Technical Surface Registry labels only. No capability is
          implied beyond what is documented for the stated version and scope.
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-[0_2px_24px_rgba(0,0,0,0.07)] lg:grid lg:grid-cols-[270px_minmax(0,1fr)]">
            <div className="border-b border-slate-200 lg:border-b-0 lg:border-r">
              {SURFACES.map((surface) => {
                const isActive = surface.name === activeSurface.name;
                return (
                  <button
                    key={surface.name}
                    type="button"
                    onClick={() => setActiveSurface(surface)}
                    aria-pressed={isActive}
                    className={`flex w-full items-start justify-between gap-3 border-l-2 px-5 py-4 text-left transition-colors ${
                      isActive
                        ? "border-primary bg-blue-50"
                        : "border-transparent hover:bg-slate-50"
                    }`}
                  >
                    <span>
                      <span
                        className={`block text-sm font-semibold ${
                          isActive ? "text-primary" : "text-ink"
                        }`}
                      >
                        {surface.name}
                      </span>
                      <span className="mt-0.5 block font-mono text-[10px] leading-4 text-slate-400">
                        {surface.access}
                      </span>
                    </span>
                    <StateBadge state={surface.state} />
                  </button>
                );
              })}
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-xl font-bold text-ink sm:text-2xl">
                  {activeSurface.name}
                </h3>
                <StateBadge state={activeSurface.state} />
              </div>
              <PlaceholderImage
                src="/images/developer-documentation/capability-map.png"
                alt="Colleagues discussing an integration surface"
                label="Discussing an integration surface"
                className="mt-6 w-full rounded-[10px] bg-gray-50"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
