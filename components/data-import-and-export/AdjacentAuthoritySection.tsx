"use client";

import Image from "next/image";
import { Container, Reveal } from "@/components/ui";

const ADJACENT_PRODUCTS = [
  {
    title: "Integrations Overview",
    references: "Approved connection model, source/destination class, currentness.",
    doesNotOwn: "Connector/provider catalog and runtime integration truth.",
  },
  {
    title: "Identity & Single Sign-On",
    references: "Authenticated actor/service identity and approved access context.",
    doesNotOwn: "Authentication, SSO, MFA and session/authorization policy.",
  },
  {
    title: "Employee Records / Core HR",
    references: "Approved workforce master fields and authority.",
    doesNotOwn: "Employee/employment master-record semantics.",
  },
  {
    title: "Leave & Attendance",
    references: "Approved leave/attendance fields and state.",
    doesNotOwn: "Policy, balance, request and attendance rule authority.",
  },
  {
    title: "Workflows & Approvals",
    references: "Approval instance for governed high-impact imports/exports.",
    doesNotOwn: "The generic workflow engine.",
  },
  {
    title: "Reporting & Insights",
    references: "Approved report definition and aggregate snapshot for export.",
    doesNotOwn: "Metric/report definition engine.",
  },
];

export function AdjacentAuthoritySection() {
  return (
    <section className="bg-slate-100 py-16 lg:py-24 border-t border-slate-200">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          <div className="max-w-3xl space-y-3.5">
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sky-950 font-['Manrope'] leading-tight">
                Data Import &amp; Export moves information. It doesn&apos;t own its meaning.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-slate-600 text-base font-normal font-['IBM_Plex_Sans'] leading-relaxed">
                Every adjacent product keeps authority over its own records — this page only ever references them.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {ADJACENT_PRODUCTS.map((item, idx) => (
                <Reveal key={idx} delay={0.05 * idx + 0.1}>
                  <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2.5 h-full">
                    <h3 className="text-sky-950 text-sm font-bold font-['IBM_Plex_Sans']">
                      {item.title}
                    </h3>
                    <div className="space-y-1 text-xs font-['IBM_Plex_Sans']">
                      <p>
                        <span className="text-teal-600 font-semibold">References — </span>
                        <span className="text-slate-500">{item.references}</span>
                      </p>
                      <p>
                        <span className="text-amber-600 font-semibold">Does not own — </span>
                        <span className="text-slate-500">{item.doesNotOwn}</span>
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <Reveal delay={0.2}>
                <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white p-2">
                  <Image
                    src="/images/data-import-and-export/image 444.png"
                    alt="Adjacent Product Authority Diagram"
                    width={403}
                    height={605}
                    className=" object-contain rounded-lg"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
