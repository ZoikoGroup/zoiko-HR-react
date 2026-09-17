"use client";

import { useMemo, useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { NewsCard } from "./NewsCard";
import { NEWS, TOPICS } from "./newsData";
import type { NewsType } from "./newsData";

const TYPES: ("All" | NewsType)[] = ["All", "Announcement", "Press Release", "External Coverage"];
const PAGE_SIZE = 4;

export function LatestNewsSection() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"All" | NewsType>("All");
  const [topic, setTopic] = useState("All topics");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    return NEWS.filter((item) => {
      const matchesTerm =
        !term ||
        [item.title, item.summary, item.outlet ?? "", ...item.topics].join(" ").toLowerCase().includes(term);
      const matchesType = type === "All" || item.type === type;
      const matchesTopic = topic === "All topics" || item.topics.includes(topic);
      return matchesTerm && matchesType && matchesTopic;
    });
  }, [query, type, topic]);

  const shown = results.slice(0, visible);
  const remaining = results.length - shown.length;

  return (
    <section id="latest-news" className="scroll-mt-24 border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
            Latest news — chronological index.
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative w-full lg:max-w-96">
            <label htmlFor="news-search" className="sr-only">
              Search headlines, topics, outlets
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
              id="news-search"
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              placeholder="Search headlines, topics, outlets…"
              className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-ink outline-none placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary/30"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {TYPES.map((t) => {
              const active = t === type;
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setType(t);
                    setVisible(PAGE_SIZE);
                  }}
                  className={`min-h-11 rounded-full border px-3.5 text-xs font-semibold leading-5 transition-colors ${
                    active
                      ? "border-primary bg-primary text-white"
                      : "border-slate-200 bg-white text-slate-500 hover:border-primary hover:text-primary"
                  }`}
                >
                  {t}
                </button>
              );
            })}
            <label htmlFor="news-topic" className="sr-only">
              Filter by topic
            </label>
            <select
              id="news-topic"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              className="h-11 rounded-full border border-slate-200 bg-white px-4 text-xs text-slate-500 outline-none focus:border-primary"
            >
              <option>All topics</option>
              {TOPICS.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
          <p aria-live="polite" className="text-xs leading-5 text-slate-400">
            {results.length} {results.length === 1 ? "item" : "items"}
          </p>
          <p className="text-xs leading-4 text-slate-300">Newest first · Approved news items only</p>
        </div>

        {results.length === 0 ? (
          <p className="mt-6 text-sm text-slate-500">No news items match these filters.</p>
        ) : (
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {shown.map((item) => (
              <li key={item.title}>
                <NewsCard item={item} />
              </li>
            ))}
          </ul>
        )}

        {remaining > 0 && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="min-h-12 rounded-full border border-indigo-200 px-8 text-sm font-semibold text-primary transition-colors hover:bg-primary-light"
            >
              Load more ({remaining} remaining)
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
