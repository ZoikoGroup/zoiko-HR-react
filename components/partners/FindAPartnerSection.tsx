"use client";

import { useMemo, useState } from "react";
import { Container, Reveal } from "@/components/ui";

const TYPE_FILTERS = [
  "All",
  "Technology",
  "Services",
  "Advisory",
  "Channel",
  "Strategic",
];

const PARTNERS = [
  {
    code: "P1",
    relationship: "Technology & Integration",
    type: "Technology",
    capabilities: ["Identity", "Payroll"],
  },
  {
    code: "P2",
    relationship: "Implementation & Services",
    type: "Services",
    capabilities: ["Migration", "Configuration"],
  },
  {
    code: "P3",
    relationship: "Advisory & Consulting",
    type: "Advisory",
    capabilities: ["HR Strategy", "Org Design"],
  },
];

export function FindAPartnerSection() {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState("All");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    return PARTNERS.filter((partner) => {
      const matchesType =
        activeType === "All" || partner.type === activeType;
      const matchesQuery =
        term === "" ||
        partner.relationship.toLowerCase().includes(term) ||
        partner.capabilities.some((capability) =>
          capability.toLowerCase().includes(term),
        );
      return matchesType && matchesQuery;
    });
  }, [query, activeType]);

  return (
    <section id="find-a-partner" className="bg-[#0A1B2E] py-16 text-white sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Find a partner.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <label htmlFor="partner-search" className="sr-only">
            Search by capability or relationship type
          </label>
          <input
            id="partner-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by capability or relationship type…"
            className="mt-6 w-full rounded-xl border border-white/10 bg-[#082F49] px-5 py-4 text-base text-white outline-none transition-colors placeholder:text-white/50 focus:border-primary"
          />
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-sm text-white/50">Type:</span>
            {TYPE_FILTERS.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
                aria-pressed={activeType === type}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeType === type
                    ? "border-primary bg-primary text-white"
                    : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 text-xs text-white/40">
            [{results.length} partner record{results.length === 1 ? "" : "s"}{" "}
            available] — Illustrative; source-governed directory renders from
            approved public registry.
          </p>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((partner, i) => (
            <Reveal key={partner.code} delay={0.06 + i * 0.05}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#1E3450] p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-white/20 bg-[#082F49] text-base font-bold">
                    {partner.code}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs text-white/40">
                        [Partner organization name]
                      </p>
                      <span className="flex-none rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-500">
                        Illustrative
                      </span>
                    </div>
                    <p className="mt-2 inline-block rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-primary">
                      {partner.relationship}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {partner.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-white/40">
                      Territory: [From registry]
                    </p>
                    <p className="mt-2 text-xs font-semibold text-primary">
                      View partner →
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {results.length === 0 && (
          <p className="mt-4 rounded-2xl border border-white/10 bg-[#1E3450] p-6 text-sm text-white/60">
            No partner records match this search.
          </p>
        )}
      </Container>
    </section>
  );
}
