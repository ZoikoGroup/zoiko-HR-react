"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const EXAMPLES = {
  Request: `# Illustrative request · synthetic data
POST /leave-requests
Authorization: Bearer <token from your secret store>
# Include an idempotency key as documented, where supported
Content-Type: application/json

{
  "employee_id": "E-20417",
  "type": "annual_leave",
  "start_date": "2026-06-01",
  "end_date": "2026-06-05"
}`,
  Response: `201 Created
Content-Type: application/json

{
  "id": "LR-91823",
  "status": "pending_approval",
  "employee_id": "E-20417",
  "days_requested": 5,
  "created_at": "2026-03-01T10:00:00Z"
}`,
  Error: `403 Forbidden
Content-Type: application/problem+json

{
  "type": "https://errors.zoikohr.com/insufficient_scope",
  "title": "Scope required: leave.write",
  "status": 403,
  "detail": "Integration lacks approved entitlement for leave mutation.",
  "request_id": "req_88f29c01"
}`,
};

const PRINCIPLES = [
  {
    title: "Synthetic by default",
    icon: "/images/developers/icons/icon-synthetic.svg",
    description: "No real people, organizations or tenant data appear in any example.",
  },
  {
    title: "Placeholders, never secrets",
    icon: "/images/developers/icons/icon-placeholders.svg",
    description: "Credentials appear only as clearly named placeholders.",
  },
  {
    title: "Labeled for version",
    icon: "/images/developers/icons/icon-labeled.svg",
    description: "Each example says which documented version it belongs to.",
  },
];

export function CodeExamplesSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof EXAMPLES>("Request");

  return (
    <section id="code-examples" className="border-t border-[#E2E8F0] bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0C1234] sm:text-4xl">
              Examples you can read safely and adapt carefully.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#64748B]">
              Every example uses synthetic data and carries labels for version and environment. SDK
              availability, languages and package versions are listed only in Developer Documentation.
            </p>
          </div>
        </Reveal>

        {/* Example Terminal Box */}
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0A0F2C] shadow-lg">
            {/* Header with tabs & version label */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] px-6 py-4">
              <div className="flex items-center gap-2">
                {(["Request", "Response", "Error"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      activeTab === tab
                        ? "bg-[#305CF8] text-white"
                        : "text-[#AEB7D0] hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <span className="rounded-full bg-white/[0.06] px-3 py-1 font-mono text-xs font-medium text-[#AEB7D0]">
                Version: per docs
              </span>
            </div>

            {/* Code Content */}
            <div className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-[#D6DEFF] sm:text-sm">
              <pre>{EXAMPLES[activeTab]}</pre>
            </div>

            {/* Footer Environment Note */}
            <div className="border-t border-white/[0.08] px-6 py-3 text-xs text-[#8A93B2]">
              Synthetic data · Environment: as confirmed in your Environment Registry
            </div>
          </div>
        </Reveal>

        {/* 3 Principles Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PRINCIPLES.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08}>
              <div className="rounded-xl border border-[#E2E8F0] bg-[#FAFBFD] p-6 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm border border-[#E2E8F0]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={18}
                    height={18}
                    unoptimized
                  />
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0C1234]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
