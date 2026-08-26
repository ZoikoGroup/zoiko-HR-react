"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const FILTERS = ["All", "HR Software", "Shared Services", "Integrations"];

const STATUS_STYLES: Record<string, string> = {
  Live: "bg-emerald-400/20 text-emerald-300",
  "Registry-governed": "bg-white/10 text-white/60",
};

const BADGE_STYLES: Record<string, string> = {
  "Group member": "bg-emerald-400/20 text-emerald-300",
  "Shared group service": "bg-violet-400/20 text-violet-300",
  "Approved connection": "bg-sky-400/20 text-sky-300",
};

const ENTITIES = [
  {
    name: "Zoiko HR",
    badge: "Group member",
    category: "HR Software",
    description: "Workforce administration platform for global and multi-entity organizations.",
    status: "Live",
  },
  {
    name: "Zoiko HR Documentation",
    badge: "Shared group service",
    category: "Shared Services",
    description: "Official product documentation and implementation knowledge base for Zoiko HR.",
    status: "Live",
  },
  {
    name: "Zoiko HR Trust & Security",
    badge: "Shared group service",
    category: "Shared Services",
    description: "Centralized trust, privacy, and security documentation for Zoiko HR platform.",
    status: "Live",
  },
  {
    name: "Partner Integrations",
    badge: "Approved connection",
    category: "Integrations",
    description: "Approved third-party connections for payroll, time, and adjacent systems.",
    status: "Registry-governed",
  },
];

export function PortfolioMapSection() {
  const [filter, setFilter] = useState("All");
  const visible = ENTITIES.filter((e) => filter === "All" || e.category === filter);

  return (
    <section id="portfolio-map" className="bg-ink py-24 text-white">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Portfolio map — approved entities.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 flex flex-wrap gap-2">
            {FILTERS.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setFilter(label)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  filter === label
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((entity, i) => (
            <Reveal key={entity.name} delay={0.06 + i * 0.06}>
              <div className="h-full rounded-2xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold">{entity.name}</p>
                  <span className={`flex-none rounded-full px-2.5 py-1 text-[11px] font-semibold ${BADGE_STYLES[entity.badge]}`}>
                    {entity.badge}
                  </span>
                </div>
                <p className="mt-1.5 text-sm font-medium text-primary/80">{entity.category}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{entity.description}</p>
                <span className={`mt-4 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[entity.status]}`}>
                  {entity.status}
                </span>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3} y={30} className="sm:col-span-2 lg:col-span-2">
            <PlaceholderImage
              src="/images/about-zoiko-group/portfolio-map.png"
              alt="Colleagues reviewing a document together at a desk"
              label="Approved portfolio entities"
              fit="contain"
              className="h-full min-h-[180px] w-full rounded-2xl"
            />
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-6 rounded-xl border border-rose-400/30 bg-rose-400/5 px-5 py-3.5 text-sm text-rose-200">
            A relationship type does not imply bundled access, common
            billing, shared identity, or shared customer data. Entitlement
            depends on the specific product contract.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
