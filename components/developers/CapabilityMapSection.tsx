"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const SURFACES = [
  {
    title: "Employee records",
    icon: "/images/developers/icons/icon-employees.svg",
    description: "Read and update core employee data within granted scopes.",
    status: "Current",
    statusVariant: "current",
    operations: ["read", "update"],
  },
  {
    title: "Organization structure",
    icon: "/images/developers/icons/icon-org.svg",
    description: "Entities, departments, locations and reporting lines.",
    status: "Current",
    statusVariant: "current",
    operations: ["read"],
  },
  {
    title: "Leave & absence",
    icon: "/images/developers/icons/icon-leave.svg",
    description: "Leave requests and their approval status.",
    status: "Current",
    statusVariant: "current",
    operations: ["read", "create"],
  },
  {
    title: "Documents",
    icon: "/images/developers/icons/icon-documents.svg",
    description: "Document metadata and acknowledgment status.",
    status: "Preview",
    statusVariant: "preview",
    operations: ["read"],
  },
  {
    title: "Events",
    icon: "/images/developers/icons/icon-events.svg",
    description: "Notifications when records or workflows change.",
    status: "Preview",
    statusVariant: "preview",
    operations: ["subscribe"],
  },
  {
    title: "Reporting exports",
    icon: "/images/developers/icons/icon-reports.svg",
    description: "Governed exports that keep report permissions.",
    status: "Restricted",
    statusVariant: "restricted",
    operations: ["by agreement"],
  },
  {
    title: "Payroll calculation",
    icon: "/images/developers/icons/icon-payroll.svg",
    description: "Not a Zoiko HR surface. Your payroll system stays authoritative for pay.",
    status: "Not offered",
    statusVariant: "not-offered",
    operations: [],
  },
  {
    title: "Legacy list operations",
    icon: "/images/developers/icons/icon-legacy.svg",
    description: "Older operations with a documented replacement.",
    status: "Deprecated",
    statusVariant: "deprecated",
    operations: ["sunset scheduled"],
  },
  {
    title: "Something not listed?",
    icon: "/images/developers/icons/icon-docs.svg",
    description: "If a surface isn't in the registry, treat it as unsupported.",
    isAction: true,
    actionText: "Check the registry →",
    href: "#reference-explorer",
  },
];

export function CapabilityMapSection() {
  return (
    <section id="capability-map" className="border-t border-[#E2E8F0] bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0C1234] sm:text-4xl">
              A map of integration surfaces, each with its state.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#64748B]">
              Every surface shows whether it&apos;s current, in preview, deprecated or restricted. If it
              isn&apos;t listed in the technical registry, it isn&apos;t implied here.
            </p>
          </div>
        </Reveal>

        {/* Authoritative bar */}
        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 rounded-t-2xl border border-[#E2E8F0] bg-[#FAFBFD] px-6 py-4">
            <span className="text-sm text-[#64748B]">
              Illustrative map. The technical registry in Developer Documentation is authoritative.
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#305CF8] shadow-sm">
              Current Registry
            </span>
          </div>
        </Reveal>

        {/* 3x3 Grid of Surfaces */}
        <div className="grid grid-cols-1 border-x border-b border-[#E2E8F0] md:grid-cols-2 lg:grid-cols-3">
          {SURFACES.map((item, idx) => (
            <div
              key={item.title}
              className={`flex flex-col justify-between border-t border-[#E2E8F0] p-6 transition-colors hover:bg-slate-50/60 sm:p-7 ${
                (idx % 3 !== 0 ? "lg:border-l" : "") + (idx % 2 !== 0 ? " md:border-l lg:border-l-0" : "")
              }`}
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F1F5F9]">
                    <Image
                      src={item.icon}
                      alt=""
                      width={18}
                      height={18}
                      unoptimized
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#0C1234]">{item.title}</h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.operations &&
                    item.operations.map((op) => (
                      <span
                        key={op}
                        className="rounded bg-[#F1F5F9] px-2 py-0.5 font-mono text-xs font-semibold text-[#334155]"
                      >
                        {op}
                      </span>
                    ))}
                </div>

                {item.status && (
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      item.statusVariant === "current"
                        ? "bg-[#DCFCE7] text-[#166534]"
                        : item.statusVariant === "preview"
                        ? "bg-[#DBEAFE] text-[#1E40AF]"
                        : item.statusVariant === "restricted"
                        ? "bg-[#EDE9FE] text-[#5B21B6]"
                        : item.statusVariant === "deprecated"
                        ? "bg-[#FEF3C7] text-[#92400E]"
                        : "bg-[#F1F5F9] text-[#64748B]"
                    }`}
                  >
                    {item.statusVariant === "current" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#166534]" />
                    )}
                    {item.statusVariant === "deprecated" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#92400E]" />
                    )}
                    {item.status}
                  </span>
                )}

                {item.isAction && item.href && (
                  <a
                    href={item.href}
                    className="inline-flex items-center text-sm font-semibold text-[#305CF8] hover:underline"
                  >
                    {item.actionText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
