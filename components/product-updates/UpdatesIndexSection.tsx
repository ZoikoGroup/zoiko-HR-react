"use client";

import { useMemo, useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TYPE_STYLES: Record<string, { dot: string; chip: string }> = {
  "New Capability": {
    dot: "bg-emerald-400",
    chip: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
  },
  Improvement: {
    dot: "bg-blue-400",
    chip: "border-blue-400/20 bg-blue-400/10 text-blue-400",
  },
  Fix: {
    dot: "bg-primary",
    chip: "border-primary/20 bg-primary/10 text-primary",
  },
  "Admin Change": {
    dot: "bg-amber-400",
    chip: "border-amber-400/20 bg-amber-400/10 text-amber-400",
  },
  "Developer Change": {
    dot: "bg-violet-400",
    chip: "border-violet-400/20 bg-violet-400/10 text-violet-400",
  },
  Deprecation: {
    dot: "bg-rose-400",
    chip: "border-rose-400/20 bg-rose-400/10 text-rose-400",
  },
  "Security / Compliance": {
    dot: "bg-amber-500",
    chip: "border-amber-500/20 bg-amber-500/10 text-amber-500",
  },
};

const TYPE_FILTERS = [
  "All",
  "New Capability",
  "Improvement",
  "Fix",
  "Admin Change",
  "Developer Change",
  "Deprecation",
  "Security / Compliance",
];

const ACTION_FILTERS = ["Any action", "Action: Required", "Action: Recommended"];

const ACTION_STYLES: Record<string, string> = {
  "Action: Required": "bg-rose-400/10 text-rose-400",
  "Action: Recommended": "bg-amber-400/10 text-amber-400",
};

const UPDATES = [
  {
    type: "New Capability",
    title: "Document Management — Bulk Upload and Folder Organization",
    description:
      "Administrators can now upload multiple employee documents in a single operation and organize them into custom folder hierarchies within the Document Management module.",
    action: "Action: Recommended",
    tags: ["Document Management", "Admin"],
    adminImpact: true,
  },
  {
    type: "Improvement",
    title: "Payroll Run — Parallel Processing for Large Organizations",
    description:
      "Payroll run execution time is materially reduced for organizations with large employee populations. Scope and magnitude are defined in the approved update record.",
    action: null,
    tags: ["Payroll", "Performance"],
    adminImpact: false,
  },
  {
    type: "Admin Change",
    title:
      "Role-Based Access Control — New Permission Granularity for Leave Policies",
    description:
      "Leave policy configuration now requires explicit permission assignment. Existing administrator roles must be reviewed and updated before the effective date.",
    action: "Action: Required",
    tags: ["Access Control", "Leave", "Permissions"],
    adminImpact: true,
  },
];

function chipClasses(active: boolean) {
  return active
    ? "border-primary bg-primary text-white"
    : "border-black/10 bg-white text-slate-700 hover:border-primary hover:text-primary";
}

export function UpdatesIndexSection() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [action, setAction] = useState("Any action");

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return UPDATES.filter((update) => {
      const matchesQuery =
        needle === "" ||
        update.title.toLowerCase().includes(needle) ||
        update.description.toLowerCase().includes(needle);
      const matchesType = type === "All" || update.type === type;
      const matchesAction = action === "Any action" || update.action === action;
      return matchesQuery && matchesType && matchesAction;
    });
  }, [query, type, action]);

  return (
    <section id="updates-index" className="bg-slate-100 py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Product updates — chronological index.
          </h2>
          <p className="mt-2 text-slate-500">
            Approved published update records. All types labeled. Date semantics
            explicit.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8">
            <label htmlFor="updates-search" className="sr-only">
              Search updates
            </label>
            <input
              id="updates-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search updates…"
              className="w-full max-w-xs rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/30"
            />

            <div className="mt-5 flex flex-wrap gap-2">
              {TYPE_FILTERS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setType(option)}
                  aria-pressed={type === option}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${chipClasses(
                    type === option,
                  )}`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-2 lg:justify-end">
              {ACTION_FILTERS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setAction(option)}
                  aria-pressed={action === option}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${chipClasses(
                    action === option,
                  )}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 text-xs text-slate-400">
            {results.length} record{results.length === 1 ? "" : "s"} —
            Illustrative index. Actual index renders from approved Product
            Update Registry.
          </p>
        </Reveal>

        <div className="mt-4 space-y-4">
          {results.map((update, i) => {
            const typeStyle = TYPE_STYLES[update.type];
            return (
              <Reveal key={update.title} delay={Math.min(i * 0.06, 0.3)}>
                <article className="flex flex-col gap-5 rounded-2xl border border-black/10 bg-white px-6 py-5 transition-shadow duration-200 hover:shadow-md lg:flex-row lg:items-start">
                  <div className="lg:w-36 lg:flex-none">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-xs font-semibold ${typeStyle.chip}`}
                    >
                      <span
                        aria-hidden
                        className={`size-1.5 rounded-full ${typeStyle.dot}`}
                      />
                      {update.type}
                    </span>
                    <p className="mt-1.5 font-mono text-xs leading-4 text-slate-400">
                      Published: [Date from registry]
                    </p>
                    <p className="mt-0.5 font-mono text-xs leading-4 text-slate-400">
                      Effective: [Date from registry]
                    </p>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-bold text-ink">
                      {update.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {update.description}
                    </p>
                    <div className="mt-2.5 flex flex-wrap items-center gap-2">
                      {update.action && (
                        <span
                          className={`rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wide ${
                            ACTION_STYLES[update.action]
                          }`}
                        >
                          {update.action}
                        </span>
                      )}
                      {update.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                      {update.adminImpact && (
                        <span className="rounded-md border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-amber-400">
                          Admin impact
                        </span>
                      )}
                      <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-emerald-400">
                        Published / Current
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 lg:flex-none lg:flex-col lg:items-end lg:gap-2">
                    <span className="text-xs font-semibold text-primary">
                      Read →
                    </span>
                    <span className="rounded-md border border-amber-500/25 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-amber-500">
                      Illustrative
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}

          {results.length === 0 && (
            <p className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center text-sm text-slate-500">
              No illustrative update records match these filters.
            </p>
          )}
        </div>

        <Reveal delay={0.1}>
          <PlaceholderImage
            src="/images/product-updates/updates-index.png"
            alt="A team applauding together after reviewing a release"
            label="Team reviewing a release together"
            className="mt-8 w-full rounded-2xl border border-black/10 bg-white"
          />
        </Reveal>
      </Container>
    </section>
  );
}
