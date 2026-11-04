"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { CategoryBadge, SourceToken } from "./shared";

type Technology = {
  name: string;
  /** Null where the vendor must come from the approved registry. */
  provider: string | null;
  type: string;
  category: string;
  /** Null where the duration must come from the approved registry. */
  duration: string | null;
  party: "First" | "Third";
};

const TECHNOLOGIES: Technology[] = [
  {
    name: "Session cookie",
    provider: "Zoiko HR",
    type: "HTTP cookie",
    category: "Strictly Necessary",
    duration: "Session",
    party: "First",
  },
  {
    name: "Consent record cookie",
    provider: "Zoiko HR",
    type: "HTTP cookie",
    category: "Strictly Necessary",
    duration: null,
    party: "First",
  },
  {
    name: "Load-balancer token",
    provider: "Zoiko HR",
    type: "HTTP cookie",
    category: "Strictly Necessary",
    duration: "Session",
    party: "First",
  },
  {
    name: "Preference cookie",
    provider: "Zoiko HR",
    type: "HTTP cookie",
    category: "Functional / Preferences",
    duration: null,
    party: "First",
  },
  {
    name: "Analytics platform",
    provider: null,
    type: "Pixel / tag",
    category: "Analytics / Measurement",
    duration: null,
    party: "Third",
  },
  {
    name: "Performance SDK",
    provider: null,
    type: "SDK / library",
    category: "Analytics / Measurement",
    duration: null,
    party: "Third",
  },
  {
    name: "Ad attribution tag",
    provider: null,
    type: "Pixel / tag",
    category: "Advertising / Targeting",
    duration: null,
    party: "Third",
  },
];

const CATEGORIES = [
  "All categories",
  "Strictly Necessary",
  "Functional / Preferences",
  "Analytics / Measurement",
  "Advertising / Targeting",
];

const PARTIES = ["All parties", "First", "Third"];

const CONTROL_CLASSES =
  "h-10 rounded-xl border border-slate-300 bg-white px-3 text-xs text-slate-600 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/30";

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={className} fill="none">
      <circle cx="7.33" cy="7.33" r="5.33" stroke="currentColor" strokeWidth="1.33" />
      <path
        d="M11.33 11.33 14 14"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
      />
    </svg>
  );
}

function providerCell(technology: Technology): ReactNode {
  return technology.provider ?? <SourceToken>VENDOR — REGISTRY</SourceToken>;
}

function durationCell(technology: Technology): ReactNode {
  return technology.duration ?? <SourceToken>APPROVED DURATION</SourceToken>;
}

export function TechnologyInventory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [party, setParty] = useState(PARTIES[0]);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    return TECHNOLOGIES.filter((technology) => {
      const matchesTerm =
        !term ||
        [technology.name, technology.provider ?? "", technology.type, technology.category]
          .join(" ")
          .toLowerCase()
          .includes(term);
      const matchesCategory =
        category === CATEGORIES[0] || technology.category === category;
      const matchesParty = party === PARTIES[0] || technology.party === party;
      return matchesTerm && matchesCategory && matchesParty;
    });
  }, [query, category, party]);

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1 sm:min-w-48">
          <label htmlFor="inventory-search" className="sr-only">
            Search technologies by name or purpose
          </label>
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <input
            id="inventory-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name or purpose"
            className={`${CONTROL_CLASSES} w-full pl-9 text-sm placeholder:text-slate-400`}
          />
        </div>

        <label htmlFor="inventory-category" className="sr-only">
          Filter by category
        </label>
        <select
          id="inventory-category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className={`${CONTROL_CLASSES} sm:w-48`}
        >
          {CATEGORIES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label htmlFor="inventory-party" className="sr-only">
          Filter by party
        </label>
        <select
          id="inventory-party"
          value={party}
          onChange={(event) => setParty(event.target.value)}
          className={`${CONTROL_CLASSES} sm:w-32`}
        >
          {PARTIES.map((option) => (
            <option key={option} value={option}>
              {option === "First" || option === "Third" ? `${option} party` : option}
            </option>
          ))}
        </select>
      </div>

      {results.length === 0 ? (
        <p aria-live="polite" className="mt-5 text-sm text-slate-500">
          No technologies match those filters.
        </p>
      ) : (
        <>
          {/* Stacked cards on phones — six columns cannot be read sideways. */}
          <ul className="mt-5 flex flex-col gap-3 md:hidden">
            {results.map((technology) => (
              <li
                key={technology.name}
                className="rounded-xl border border-slate-200 bg-white px-4 py-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-semibold leading-5 text-ink">
                    {technology.name}
                  </p>
                  <CategoryBadge category={technology.category} />
                </div>
                {/* One column on phones — the amber registry tokens need the
                    full width to stay readable. */}
                <dl className="mt-3 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
                  {[
                    { label: "Provider", value: providerCell(technology) },
                    { label: "Type", value: technology.type },
                    { label: "Duration", value: durationCell(technology) },
                    { label: "Party", value: technology.party },
                  ].map((field) => (
                    <div key={field.label}>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.06em] text-slate-400">
                        {field.label}
                      </dt>
                      <dd className="mt-1 text-xs leading-5 text-slate-500">
                        {field.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>

          <div className="mt-5 hidden overflow-x-auto rounded-xl border border-slate-200 md:block">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-100">
                  {["Technology", "Provider", "Type", "Category", "Duration", "Party"].map(
                    (heading) => (
                      <th
                        key={heading}
                        scope="col"
                        className="border-b border-slate-200 px-4 py-3 text-xs font-semibold leading-5 text-slate-700"
                      >
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {results.map((technology, i) => (
                  <tr
                    key={technology.name}
                    className={i % 2 === 1 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="border-b border-slate-200 px-4 py-3 align-top text-xs font-semibold leading-5 text-ink">
                      {technology.name}
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3 align-top text-xs leading-5 text-slate-500">
                      {providerCell(technology)}
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3 align-top text-xs leading-5 text-slate-500">
                      {technology.type}
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3 align-top">
                      <CategoryBadge category={technology.category} />
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3 align-top text-xs leading-5 text-slate-500">
                      {durationCell(technology)}
                    </td>
                    <td className="border-b border-slate-200 px-4 py-3 align-top text-xs leading-5 text-slate-500">
                      {technology.party}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      <p className="mt-3 flex flex-wrap items-center gap-2 text-xs leading-4 text-slate-400">
        Registry last verified:{" "}
        <SourceToken>REGISTRY DATE — CMS REQUIRED</SourceToken>
        <span>
          · Showing active technologies only. Vendor names, domains and durations
          are populated from the approved Cookie/Tracker Registry.
        </span>
      </p>
    </div>
  );
}
