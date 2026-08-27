"use client";

import { useMemo, useState } from "react";
import { Container, Reveal } from "@/components/ui";

const FILTERS = ["All", "Announcements", "Press Releases", "External Coverage"];

const TYPE_STYLES: Record<string, string> = {
  Announcement:
    "border-emerald-400/20 bg-emerald-400/10 text-emerald-600",
  "Press Release": "border-primary/20 bg-primary/10 text-primary",
  "External Coverage": "border-violet-400/20 bg-violet-400/10 text-violet-500",
};

const NEWS_ITEMS = [
  { type: "Announcement", filter: "Announcements", tags: ["Company", "Governance"] },
  { type: "Press Release", filter: "Press Releases", tags: ["Press"] },
  { type: "Announcement", filter: "Announcements", tags: ["Leadership", "Culture"] },
  { type: "External Coverage", filter: "External Coverage", tags: ["Media"] },
];

export function LatestNewsSection() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    return NEWS_ITEMS.filter((item) => {
      const matchesFilter =
        activeFilter === "All" || item.filter === activeFilter;
      const matchesQuery =
        term === "" ||
        item.type.toLowerCase().includes(term) ||
        item.tags.some((tag) => tag.toLowerCase().includes(term));
      return matchesFilter && matchesQuery;
    });
  }, [query, activeFilter]);

  return (
    <section id="latest-news" className="bg-[#F5F7FA] py-16 sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Latest news — chronological index.
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-1.5 text-ink/50">
            Approved published news items. All types labeled. Dates
            machine-readable.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <label htmlFor="news-search" className="sr-only">
              Search news
            </label>
            <input
              id="news-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search news…"
              className="h-11 w-full min-w-56 rounded-xl border border-black/10 bg-white px-5 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-primary sm:w-60"
            />

            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  activeFilter === filter
                    ? "border-primary bg-primary text-white"
                    : "border-black/10 bg-white text-ink/70 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-4 text-xs text-ink/40">
            {results.length} item{results.length === 1 ? "" : "s"} —
            Illustrative index. Actual index renders from approved News Item
            Registry.
          </p>
        </Reveal>

        <div className="mt-5 space-y-3">
          {results.map((item, i) => (
            <Reveal key={`${item.type}-${i}`} delay={0.06 + i * 0.05}>
              <article className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white px-6 py-5 sm:flex-row sm:gap-5">
                <div className="sm:w-32 sm:flex-none">
                  <span
                    className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold ${TYPE_STYLES[item.type]}`}
                  >
                    {item.type}
                  </span>
                  <p className="mt-1.5 font-mono text-xs text-ink/40">[Date]</p>
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-bold text-ink">
                    [Headline from News Item Registry]
                  </h3>
                  <p className="mt-1 text-sm text-ink/50">
                    [Approved summary from dek field]
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-ink/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
                  <span className="text-xs font-semibold text-primary">
                    Read →
                  </span>
                  <span className="rounded-md border border-amber-500/25 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-amber-500">
                    Illustrative
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {results.length === 0 && (
          <p className="mt-4 rounded-2xl border border-black/10 bg-white px-6 py-5 text-sm text-ink/60">
            No news items match this search.
          </p>
        )}

        {results.length > 0 && (
          <Reveal delay={0.3}>
            <p className="mt-6 text-center text-sm font-semibold text-primary">
              Load more →
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
