"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

interface StateConfig {
  label: string;
  badgeText: string;
  badgeClass: string;
  dotColor: string;
  isStrikethrough?: boolean;
  meaning: string;
  action: string;
}

const LIFECYCLE_STATES: Record<string, StateConfig> = {
  Preview: {
    label: "Preview",
    badgeText: "Preview",
    badgeClass: "bg-[#EDE9FE] text-[#5B21B6]",
    dotColor: "bg-[#5B21B6]",
    meaning: "Early integration surface shared under controlled evaluation.",
    action: "Test in non-production environments with synthetic data and provide feedback.",
  },
  Current: {
    label: "Current",
    badgeText: "Current",
    badgeClass: "bg-[#EAF0FF] text-[#2147C9]",
    dotColor: "bg-[#2147C9]",
    meaning: "The supported, documented contract for its version.",
    action: "Build against it, within the scopes and environments confirmed for you.",
  },
  Deprecated: {
    label: "Deprecated",
    badgeText: "Deprecated",
    badgeClass: "bg-[#FEF3C7] text-[#92400E]",
    dotColor: "bg-[#92400E]",
    meaning: "Superseded by newer surfaces. Continue use while planning migration.",
    action: "Review deprecation notes and schedule transition before the sunset date.",
  },
  "Sunset scheduled": {
    label: "Sunset scheduled",
    badgeText: "Sunset scheduled",
    badgeClass: "bg-[#FFEDD5] text-[#9A3412]",
    dotColor: "bg-[#9A3412]",
    meaning: "Older operations with a documented replacement and planned retirement date.",
    action: "Follow the migration guide in Product Updates before the sunset window closes.",
  },
  Removed: {
    label: "Removed",
    badgeText: "Removed",
    badgeClass: "bg-[#F1F5F9] text-[#64748B]",
    dotColor: "bg-[#64748B]",
    isStrikethrough: true,
    meaning: "Retired operation no longer accepting calls or returning data.",
    action: "Upgrade to the replacement contract immediately; calls return 410 Gone or 404.",
  },
};

export function VersioningSection() {
  const [selectedState, setSelectedState] = useState<string>("Current");
  const stateData = LIFECYCLE_STATES[selectedState];

  return (
    <section id="versioning" className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <div>
            <h2 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-[#0C1234] sm:text-[34px] sm:leading-[38px]">
              Every surface moves through a visible
              <br className="hidden sm:inline" /> lifecycle.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#64748B] sm:text-[17px] sm:leading-[27.2px]">
              Select a state to see what it means and what you should do. Product Updates
              <br className="hidden sm:inline" /> records when changes happen; Developer Documentation describes the current
              <br className="hidden sm:inline" /> contract.
            </p>
          </div>
        </Reveal>

        {/* Lifecycle Card */}
        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#EEF1F5] bg-white shadow-[0px_8px_24px_-12px_rgba(12,18,52,0.08)]">
            {/* 5-State Tablist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-b border-[#EEF1F5]">
              {Object.entries(LIFECYCLE_STATES).map(([key, config]) => {
                const isActive = selectedState === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedState(key)}
                    className={`relative flex flex-col items-start p-4 text-left transition-colors sm:p-5 border-r border-[#EEF1F5] last:border-r-0 ${
                      isActive ? "bg-[#FAFBFD]" : "bg-white hover:bg-slate-50/70"
                    }`}
                  >
                    <span className="text-xs font-semibold text-[#64748B]">State</span>
                    <span
                      className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        config.badgeClass
                      } ${config.isStrikethrough ? "line-through" : ""}`}
                    >
                      <span className={`h-[7px] w-[7px] rounded-full ${config.dotColor}`} />
                      {config.badgeText}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#305CF8]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Content Details Split */}
            <div className="grid grid-cols-1 divide-y divide-[#EEF1F5] md:grid-cols-2 md:divide-y-0 md:divide-x">
              {/* Left Column: State meaning */}
              <div className="p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[#0C1234]">
                  {selectedState}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  {stateData.meaning}
                </p>
              </div>

              {/* Right Column: What you should do */}
              <div className="bg-[#FAFBFD] p-6 sm:p-8">
                <h4 className="text-sm font-semibold text-[#64748B]">
                  What you should do
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  {stateData.action}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Links */}
        <Reveal delay={0.16}>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Link
              href="/product-updates"
              className="inline-flex items-center text-sm font-semibold text-[#305CF8] hover:underline"
            >
              See Product Updates →
            </Link>
            <Link
              href="/legal-notices"
              className="inline-flex items-center text-sm font-semibold text-[#305CF8] hover:underline"
            >
              Read the versioning policy →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
