"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

const JURISDICTION_STYLES: Record<string, string> = {
  Verified: "bg-emerald-400/15 text-emerald-300",
  "Prof. review req.": "bg-amber-400/15 text-amber-300",
  "Customer-configured": "bg-sky-400/15 text-sky-300",
  "Config pending": "bg-violet-400/15 text-violet-300",
};

const ENTITIES = [
  { name: "Zoiko US Inc.", region: "Americas", location: "Sacramento, CA", workers: 612, status: "Verified" },
  { name: "Zoiko UK Ltd.", region: "EMEA", location: "London, UK", workers: 298, status: "Verified" },
  { name: "Zoiko DE GmbH", region: "EMEA", location: "Berlin, DE", workers: 141, status: "Prof. review req." },
  { name: "Zoiko SG Pte.", region: "APAC", location: "Singapore", workers: 89, status: "Customer-configured" },
  { name: "Zoiko NG Ltd.", region: "Africa", location: "Lagos, NG", workers: 34, status: "Config pending" },
];

export function EntityPortfolioSection() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  return (
    <section id="entity-portfolio" className="bg-ink py-24 text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Section 8 — Global HR management
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Coordinate people operations across entities and locations.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Zoiko HR supports consistent organizational structures and
              shared HR operating practices while allowing approved local
              configuration, ownership, data, documents, workflows, and
              review.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-rose-400/30 bg-rose-400/5 px-5 py-3.5 text-center text-sm text-rose-200">
            Zoiko HR does not provide legal, tax, payroll, employment, or
            compliance advice and does not guarantee compliance with any
            law.
          </div>
        </Reveal>

        <Reveal delay={0.2} y={30}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0e1730] shadow-2xl shadow-black/40">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4">
              <span className="font-semibold">Entity Portfolio</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                HR Administrator
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/40">
                    <th className="px-6 py-3 font-medium">Entity</th>
                    <th className="px-6 py-3 font-medium">Region</th>
                    <th className="px-6 py-3 font-medium">Location</th>
                    <th className="px-6 py-3 font-medium">Workers</th>
                    <th className="px-6 py-3 font-medium">Jurisdiction Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {ENTITIES.map((entity) => (
                    <tr
                      key={entity.name}
                      onMouseEnter={() => setHoveredRow(entity.name)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`transition-colors duration-150 ${
                        hoveredRow === entity.name ? "bg-white/[0.06]" : ""
                      }`}
                    >
                      <td className="px-6 py-3.5 font-medium">{entity.name}</td>
                      <td className="px-6 py-3.5 text-white/60">{entity.region}</td>
                      <td className="px-6 py-3.5 text-white/60">{entity.location}</td>
                      <td className="px-6 py-3.5 text-white/60">{entity.workers}</td>
                      <td className="px-6 py-3.5">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${JURISDICTION_STYLES[entity.status] ?? "bg-white/10 text-white/70"}`}
                        >
                          {entity.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
