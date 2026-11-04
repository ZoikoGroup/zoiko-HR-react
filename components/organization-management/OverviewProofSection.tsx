"use client";

import { useMemo, useState } from "react";
import { Container, Reveal } from "@/components/ui";

const STATS = [
  { value: "84", label: "Active units" },
  { value: "3", label: "Scheduled changes" },
  { value: "2", label: "Validation issues" },
  { value: "1", label: "Sync issues" },
];

const TYPE_STYLES: Record<string, string> = {
  Entity: "bg-rose-400/20 text-rose-300",
  "Business Unit": "bg-violet-400/20 text-violet-300",
  Department: "bg-white/10 text-white/60",
  Team: "bg-emerald-400/20 text-emerald-300",
};

const STATE_STYLES: Record<string, string> = {
  Active: "text-emerald-400",
  Scheduled: "text-amber-400",
};

const UNITS = [
  { name: "Zoiko Technologies — synthetic", type: "Entity", code: "ENT-001", parent: "/", location: "—", state: "Active", source: "Local", updated: "2025-08-01" },
  { name: "Product Division", type: "Business Unit", code: "BU-100", parent: "/ENT-001", location: "HQ", state: "Active", source: "Local", updated: "2025-07-15" },
  { name: "Engineering", type: "Department", code: "DEPT-210", parent: "/ENT-001/BU-100", location: "HQ", state: "Active", source: "Local", updated: "2025-09-01" },
  { name: "Product Management", type: "Department", code: "DEPT-220", parent: "/ENT-001/BU-100", location: "HQ", state: "Scheduled", source: "Local", updated: "2025-08-28" },
  { name: "Front-End Platform", type: "Team", code: "TEAM-210A", parent: "/ENT-001/BU-100/DEPT-2…", location: "Remote", state: "Active", source: "Local", updated: "2025-06-10" },
  { name: "API & Services", type: "Team", code: "TEAM-210B", parent: "/ENT-001/BU-100/DEPT-2…", location: "Remote", state: "Active", source: "Synced", updated: "2025-09-01" },
];

const TYPES = ["All", ...Array.from(new Set(UNITS.map((u) => u.type)))];
const STATES = ["All", ...Array.from(new Set(UNITS.map((u) => u.state)))];
const LOCATIONS = ["All", ...Array.from(new Set(UNITS.map((u) => u.location)))];
const SOURCES = ["All", ...Array.from(new Set(UNITS.map((u) => u.source)))];

export function OverviewProofSection() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [state, setState] = useState("All");
  const [location, setLocation] = useState("All");
  const [source, setSource] = useState("All");

  const rows = useMemo(() => {
    return UNITS.filter((u) => {
      return (
        u.name.toLowerCase().includes(query.trim().toLowerCase()) &&
        (type === "All" || u.type === type) &&
        (state === "All" || u.state === state) &&
        (location === "All" || u.location === location) &&
        (source === "All" || u.source === source)
      );
    });
  }, [query, type, state, location, source]);

  return (
    <section id="overview-proof" className="bg-ink py-24 text-white">
      <Container>
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Overview proof
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Organization Overview: search, filter, tree, table, and
            detail
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-2 text-sm italic text-white/40">
            Synthetic data — not a live customer environment
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="mt-0.5 text-xs text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-6 grid gap-3 sm:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, code, or path..."
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/40"
            />
            {[
              { label: "Type", value: type, setValue: setType, options: TYPES },
              { label: "State", value: state, setValue: setState, options: STATES },
              { label: "Location", value: location, setValue: setLocation, options: LOCATIONS },
              { label: "Source", value: source, setValue: setSource, options: SOURCES },
            ].map((filter) => (
              <select
                key={filter.label}
                value={filter.value}
                onChange={(e) => filter.setValue(e.target.value)}
                className="rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/40"
              >
                {filter.options.map((opt) => (
                  <option key={opt} value={opt} className="text-ink">
                    {filter.label}: {opt}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} y={30}>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[860px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/40">
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Code</th>
                  <th className="px-4 py-3 font-medium">Parent / Path</th>
                  <th className="px-4 py-3 font-medium">Location</th>
                  <th className="px-4 py-3 font-medium">State</th>
                  <th className="px-4 py-3 font-medium">Source</th>
                  <th className="px-4 py-3 font-medium">Updated</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {rows.map((unit) => (
                  <tr key={unit.code} className="transition-colors duration-150 hover:bg-white/[0.04]">
                    <td className="px-4 py-3.5 font-semibold">{unit.name}</td>
                    <td className="px-4 py-3.5">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${TYPE_STYLES[unit.type]}`}>
                        {unit.type}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-white/60">{unit.code}</td>
                    <td className="px-4 py-3.5 text-white/40">{unit.parent}</td>
                    <td className="px-4 py-3.5 text-white/60">{unit.location}</td>
                    <td className={`px-4 py-3.5 font-semibold ${STATE_STYLES[unit.state]}`}>
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
                      {unit.state}
                    </td>
                    <td className="px-4 py-3.5 text-white/60">{unit.source}</td>
                    <td className="px-4 py-3.5 text-white/40">{unit.updated}</td>
                    <td className="px-4 py-3.5">
                      <button type="button" className="text-sm font-semibold text-primary hover:text-white">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-4 text-xs text-white/40">
            All names, codes, and identifiers are synthetic.
            Permission-scoped aggregates — counts reflect only
            authorized data.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
