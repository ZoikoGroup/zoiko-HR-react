"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const OPERATING_AREAS = [
  {
    id: "records",
    title: "Employee records",
    subtitle: "Effective-dated, shared fields",
    description:
      "One structured, effective-dated record for each person, with a shared field set across entities.",
    standardized: "Core fields, field definitions and effective dating.",
    variation: "Additional entity-required fields where configured.",
    typicalOwner: "HR Operations",
    evidenceKept: "Change history with who, what and effective date.",
  },
  {
    id: "structure",
    title: "Organization structure",
    subtitle: "Entities, departments, locations",
    description:
      "A single hierarchy connecting legal entities, operating units, locations and reporting lines.",
    standardized: "Entity boundaries, reporting relationships and location codes.",
    variation: "Local cost center mapping and subsidiary-specific tiers.",
    typicalOwner: "Corporate HR & Legal",
    evidenceKept: "Entity creation logs, organogram revisions and timestamps.",
  },
  {
    id: "policies",
    title: "Policies",
    subtitle: "Baseline plus approved variants",
    description:
      "Group-wide standards published centrally with explicit, time-bound local exceptions.",
    standardized: "Global baseline terms, mandatory review cycles and owners.",
    variation: "Approved regional variations (e.g. statutory leave or probation).",
    typicalOwner: "People Policy Committee",
    evidenceKept: "Versioned policy documents, sign-off logs and expiry dates.",
  },
  {
    id: "workflows",
    title: "Workflows & approvals",
    subtitle: "Defined once, applied by scope",
    description:
      "Automated routing engine that applies baseline checks, entity variants and threshold gates.",
    standardized: "Standard review stages, routing algorithms and required sign-offs.",
    variation: "Additional entity approvals (e.g. local finance or legal check).",
    typicalOwner: "Process Excellence Lead",
    evidenceKept: "Step-by-step audit trails, timestamps and decision comments.",
  },
  {
    id: "delegation",
    title: "Delegation",
    subtitle: "Scoped, time-bound, revocable",
    description:
      "Temporary transfer of approval authority without transferring root permissions or access.",
    standardized: "Defined delegable actions, maximum windows and revocation protocols.",
    variation: "Emergency acting-lead designations by local entity.",
    typicalOwner: "HR Governance Lead",
    evidenceKept: "Delegation grant logs, active windows and revocations.",
  },
  {
    id: "documents",
    title: "Documents & evidence",
    subtitle: "Retained with the record",
    description:
      "Contracts, licenses, certifications and acknowledgments linked directly to the employee or action.",
    standardized: "Mandatory document types, retention rules and classification levels.",
    variation: "Jurisdiction-specific filings and statutory worker disclosures.",
    typicalOwner: "Compliance & Records Lead",
    evidenceKept: "Signed e-signatures, upload metadata and retention schedules.",
  },
  {
    id: "reporting",
    title: "Reporting",
    subtitle: "Scoped to authorized view",
    description:
      "Workforce metrics aggregated globally while maintaining granular access controls and entity privacy.",
    standardized: "Metric definitions, calculation formulas and reporting cadence.",
    variation: "Local regulatory filing reports and works council extracts.",
    typicalOwner: "People Analytics Lead",
    evidenceKept: "Export audit trails, recipient logs and access queries.",
  },
  {
    id: "connected",
    title: "Connected systems",
    subtitle: "Source of truth stays with its owner",
    description:
      "Bidirectional integrations with time, payroll, and identity systems that enforce single sources of truth.",
    standardized: "Authoritative system-of-record assignments and sync cadence.",
    variation: "Regional payroll engine formats and specialized local clocks.",
    typicalOwner: "HR Systems / IT Lead",
    evidenceKept: "API transaction logs, sync conflict flags and hold records.",
  },
];

export function OperatingControlModelSection() {
  const [selectedAreaIndex, setSelectedAreaIndex] = useState(0);
  const currentArea = OPERATING_AREAS[selectedAreaIndex];

  return (
    <section className="bg-[#0C1234] py-20 text-white lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-4xl lg:text-[40px]">
              Eight areas where standardization has to hold together.
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 text-base leading-relaxed text-[#AEB7D0]">
              Standardizing one area while the others stay informal just moves
              the gap. Zoiko HR treats these eight as one operating model, each
              with a named owner, a baseline and a defined place for
              variation.
            </p>
          </Reveal>
        </div>

        {/* Operating Model Interactive Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Common Baseline Header + 8 Tabs + Team Image */}
          <div className="space-y-4 lg:col-span-7">
            {/* Top Dashed Baseline Banner */}
            <Reveal delay={0.12}>
              <div className="rounded-[14px] border border-dashed border-white/20 px-4 py-3 text-center sm:text-left">
                <span className="text-sm font-semibold text-[#00D592]">
                  Common baseline
                </span>
                <span className="text-sm text-[#C3CADF]">
                  {" "}
                  · applied by entity, location and role scope
                </span>
              </div>
            </Reveal>

            {/* 8 Areas 2-column Grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {OPERATING_AREAS.map((area, index) => {
                const isSelected = selectedAreaIndex === index;
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedAreaIndex(index)}
                    className={`flex flex-col rounded-[14px] border p-4 text-left transition-all duration-200 ${
                      isSelected
                        ? "border-[#305CF8] bg-[#1B2450] shadow-[inset_0_0_0_2px_#305CF8]"
                        : "border-white/10 bg-[#141C3C] hover:border-white/30 hover:bg-[#1B2450]/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-[#305CF8]/20 text-[#305CF8]">
                        <span className="h-2 w-2 rounded-full bg-[#305CF8]" />
                      </span>
                      <p className="text-sm font-semibold text-white">
                        {area.title}
                      </p>
                    </div>
                    <p className="mt-2 text-xs text-[#8A93B2]">
                      {area.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Team Image Banner */}
            <Reveal delay={0.24}>
              <div className="overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1B2450] to-[#2A4CC8] shadow-lg">
                <PlaceholderImage
                  src="/images/standardize-hr-operations/operating-model-team-56a065.png"
                  alt="HR and operations leads aligning on shared standards"
                  className="h-[200px] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Active Tab Details Card with Header Photo */}
          <div className="overflow-hidden rounded-[18px] bg-white text-[#0C1234] shadow-2xl lg:col-span-5">
            {/* Card Header Image */}
            <div className="h-[190px] w-full overflow-hidden bg-gradient-to-br from-[#1B2450] to-[#2A4CC8]">
              <PlaceholderImage
                src="/images/standardize-hr-operations/operating-model-preview-3e4b67.png"
                alt="Operating control model preview"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-7">
              <span className="inline-flex rounded-full bg-[#D1FAE5] px-2.5 py-1 text-xs font-semibold text-[#047857]">
                Active domain
              </span>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#0C1234]">
                {currentArea.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                {currentArea.description}
              </p>

              {/* Table / Description List */}
              <div className="mt-6 divide-y divide-[#EEF1F5] border-t border-[#EEF1F5] text-sm">
                <div className="grid grid-cols-3 py-3">
                  <span className="font-medium text-[#64748B]">Standardized</span>
                  <span className="col-span-2 font-medium text-[#0C1234]">
                    {currentArea.standardized}
                  </span>
                </div>

                <div className="grid grid-cols-3 py-3">
                  <span className="font-medium text-[#64748B]">Variation</span>
                  <span className="col-span-2 font-medium text-[#0C1234]">
                    {currentArea.variation}
                  </span>
                </div>

                <div className="grid grid-cols-3 py-3">
                  <span className="font-medium text-[#64748B]">Typical owner</span>
                  <span className="col-span-2 font-medium text-[#0C1234]">
                    {currentArea.typicalOwner}
                  </span>
                </div>

                <div className="grid grid-cols-3 py-3">
                  <span className="font-medium text-[#64748B]">Evidence kept</span>
                  <span className="col-span-2 font-medium text-[#0C1234]">
                    {currentArea.evidenceKept}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Platform Link */}
        <Reveal delay={0.3}>
          <div className="mt-10">
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#6F8DFF] transition-colors hover:text-white"
            >
              Explore the platform overview →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
