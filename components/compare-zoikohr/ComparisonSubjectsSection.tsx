"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

type Subject = {
  name: string;
  segment: string;
  badge: { label: string; icon?: string; className: string };
  reviewed: string;
  coverage: string;
  action: { label: string; className: string };
};

/** Illustrative placeholders from the design — no real vendor is named. */
const SUBJECTS: Subject[] = [
  {
    name: "Platform A · Large-suite HCM",
    segment: "Major HCM vendor",
    badge: { label: "Published", className: "border-green-300 bg-emerald-50 text-green-800" },
    reviewed: "Reviewed 12 Sep 2026",
    coverage: "38 of 55 criteria with qualifying evidence",
    action: { label: "Open comparison →", className: "bg-primary text-white" },
  },
  {
    name: "Platform B · Mid-market HRIS",
    segment: "Mid-market vendor",
    badge: { label: "Review due", icon: "⏱", className: "border-orange-300 bg-orange-50 text-yellow-800" },
    reviewed: "Reviewed 14 Mar 2026",
    coverage: "22 of 55 criteria with qualifying evidence",
    action: {
      label: "View — under freshness review",
      className: "border border-orange-300 bg-orange-50 text-yellow-800",
    },
  },
  {
    name: "Platform C · Specialist workflow",
    segment: "Workflow-specialist vendor",
    badge: { label: "Under review", icon: "↻", className: "border-orange-300 bg-orange-50 text-yellow-800" },
    reviewed: "Reviewed 01 Jun 2026",
    coverage: "Under review — source changes detected",
    action: {
      label: "View — source review in progress",
      className: "border border-slate-200 bg-slate-50 text-slate-500",
    },
  },
];

export function ComparisonSubjectsSection() {
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();
  const results = term
    ? SUBJECTS.filter((s) => `${s.name} ${s.segment}`.toLowerCase().includes(term))
    : SUBJECTS;

  return (
    <section id="comparison-subjects" className="scroll-mt-24 border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading title="Choose a comparison subject.">
          Comparison records are published only after evidence review, source
          sourcing, and methodology compliance.
        </SectionHeading>

        <Reveal delay={0.06}>
          <div className="relative mt-8 max-w-[480px]">
            <label htmlFor="subject-search" className="sr-only">
              Search comparison subjects
            </label>
            <svg
              aria-hidden
              viewBox="0 0 16 16"
              className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
              fill="none"
            >
              <circle cx="7.33" cy="7.33" r="5.33" stroke="currentColor" strokeWidth="1.33" />
              <path d="M11.33 11.33 14 14" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" />
            </svg>
            <input
              id="subject-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search comparison subjects…"
              className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-ink outline-none placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary/30"
            />
          </div>
        </Reveal>

        {term && results.length === 0 && (
          <p aria-live="polite" className="mt-6 text-sm text-slate-500">
            No comparison subjects match “{query.trim()}”.
          </p>
        )}

        <ul className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {results.map((subject, i) => (
            <li key={subject.name}>
              <Reveal delay={i * 0.06} className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-extrabold leading-5 text-ink">{subject.name}</h3>
                    <p className="mt-1 text-xs leading-4 text-slate-400">{subject.segment}</p>
                  </div>
                  <span
                    className={`inline-flex flex-none items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold leading-4 ${subject.badge.className}`}
                  >
                    {subject.badge.icon && <span aria-hidden>{subject.badge.icon}</span>}
                    {subject.badge.label}
                  </span>
                </div>
                <div className="flex flex-col gap-2 border-t border-slate-100 pt-3 text-xs leading-4">
                  <p className="text-slate-400">{subject.reviewed}</p>
                  <p className="text-slate-400">{subject.coverage}</p>
                  <p className="text-slate-300">Coverage is not a capability score</p>
                </div>
                {/* No published comparison pages exist yet, so these stay non-interactive. */}
                <span
                  className={`mt-auto self-start rounded-full px-5 py-2 text-xs font-semibold leading-5 ${subject.action.className}`}
                >
                  {subject.action.label}
                </span>
              </Reveal>
            </li>
          ))}

          <li>
            <Reveal
              delay={0.18}
              className="flex h-full flex-col gap-3 rounded-2xl border border-dashed border-slate-200 bg-white p-5"
            >
              <span aria-hidden className="text-2xl leading-8 text-slate-600">
                ＋
              </span>
              <div>
                <h3 className="text-base font-extrabold leading-6 text-slate-500">No published comparison yet?</h3>
                <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                  Suggest a comparison subject. Suggestions enter editorial review —
                  no implied capability assessment for the suggested subject.
                </p>
              </div>
              <span className="mt-auto text-xs font-semibold leading-5 text-primary">Suggest a comparison →</span>
            </Reveal>
          </li>
        </ul>
      </Container>
    </section>
  );
}
