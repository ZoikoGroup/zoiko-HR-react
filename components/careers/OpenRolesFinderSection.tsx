"use client";

import { useMemo, useState } from "react";
import { Container, Reveal, Button } from "@/components/ui";

const WORK_MODE_STYLES: Record<string, string> = {
  Remote: "bg-primary-light text-primary",
  Hybrid: "bg-amber-100 text-amber-700",
  Onsite: "bg-sky-100 text-sky-700",
};

const ROLES = [
  {
    title: "Senior Product Manager — Platform",
    workMode: "Remote",
    team: "Product & Design",
    location: "Region A",
    description: "Drive platform strategy and roadmap coordination across engineering and design stakeholders. Illustrative role — details sourced from Job Registry.",
  },
  {
    title: "Solutions Engineer — Enterprise",
    workMode: "Hybrid",
    team: "Sales & Revenue",
    location: "Region B",
    description: "Partner with sales to deliver technical evaluations for enterprise accounts. Illustrative role — details sourced from Job Registry.",
  },
  {
    title: "People Operations Analyst",
    workMode: "Onsite",
    team: "People & Talent",
    location: "Region C",
    description: "Support people operations workflows, data integrity, and process documentation. Illustrative role — details sourced from Job Registry.",
  },
  {
    title: "Product Design Lead",
    workMode: "Hybrid",
    team: "Product & Design",
    location: "Region A",
    description: "Lead design systems and interaction quality across product surfaces. Illustrative role — details sourced from Job Registry.",
  },
];

const TEAMS = ["All Teams", ...Array.from(new Set(ROLES.map((r) => r.team)))];
const LOCATIONS = ["All Locations", ...Array.from(new Set(ROLES.map((r) => r.location)))];
const WORK_MODES = ["All Work Modes", ...Array.from(new Set(ROLES.map((r) => r.workMode)))];

export function OpenRolesFinderSection() {
  const [query, setQuery] = useState("");
  const [team, setTeam] = useState("All Teams");
  const [location, setLocation] = useState("All Locations");
  const [workMode, setWorkMode] = useState("All Work Modes");

  const results = useMemo(() => {
    return ROLES.filter((role) => {
      const matchesQuery = role.title.toLowerCase().includes(query.trim().toLowerCase());
      const matchesTeam = team === "All Teams" || role.team === team;
      const matchesLocation = location === "All Locations" || role.location === location;
      const matchesWorkMode = workMode === "All Work Modes" || role.workMode === workMode;
      return matchesQuery && matchesTeam && matchesLocation && matchesWorkMode;
    });
  }, [query, team, location, workMode]);

  return (
    <section id="open-roles" className="bg-slate-50/60 py-24">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Open Roles Finder
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-2 text-ink/60">
                Filter illustrative roles — actual open roles are
                published from the Job Registry.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-700">
              Illustrative — source-governed
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-6 grid gap-3 sm:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title..."
              className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/30"
            />
            <select
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/30"
            >
              {TEAMS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/30"
            >
              {LOCATIONS.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <select
              value={workMode}
              onChange={(e) => setWorkMode(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/30"
            >
              {WORK_MODES.map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-4 text-xs font-medium text-primary">
            {results.length} illustrative role{results.length === 1 ? "" : "s"} shown — source-governed
          </p>
        </Reveal>

        <div className="mt-4 space-y-3">
          {results.map((role, i) => (
            <Reveal key={role.title} delay={0.06 + i * 0.05}>
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-ink">{role.title}</p>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${WORK_MODE_STYLES[role.workMode]}`}>
                      {role.workMode}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-ink/60">
                      Full-time
                    </span>
                    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                      Illustrative — source-governed
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-primary/80">
                    {role.team} · {role.location}
                  </p>
                  <p className="mt-1.5 max-w-2xl text-sm text-ink/60">{role.description}</p>
                </div>
                <Button className="flex-none">View role</Button>
              </div>
            </Reveal>
          ))}
          {results.length === 0 && (
            <p className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center text-sm text-ink/50">
              No illustrative roles match these filters.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
