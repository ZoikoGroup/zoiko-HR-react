"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { FAQ_TOPICS } from "./faqData";

export function FindAnAnswerSection() {
  const [activeTopic, setActiveTopic] = useState("product");
  const [query, setQuery] = useState("");

  const topic = FAQ_TOPICS.find((t) => t.key === activeTopic) ?? FAQ_TOPICS[0];

  const results = useMemo(() => {
    const pool = activeTopic === "all" ? FAQ_TOPICS.flatMap((t) => t.entries.map((e) => ({ ...e, topic: t.shortLabel }))) : topic.entries.map((e) => ({ ...e, topic: topic.shortLabel }));
    const filtered = query.trim()
      ? pool.filter((e) => e.question.toLowerCase().includes(query.trim().toLowerCase()))
      : pool;
    return filtered.slice(0, 4);
  }, [activeTopic, query, topic]);

  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Find an answer.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="mt-6 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/30"
          />
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTopic("all")}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                activeTopic === "all"
                  ? "bg-primary text-white shadow-md shadow-primary/30"
                  : "border border-slate-200 bg-white text-ink/60 hover:border-primary/40 hover:text-primary"
              }`}
            >
              All
            </button>
            {FAQ_TOPICS.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveTopic(t.key)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeTopic === t.key
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "border border-slate-200 bg-white text-ink/60 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {t.shortLabel}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 space-y-3">
          {results.map((entry, i) => (
            <Reveal key={entry.question} delay={0.06 + i * 0.05}>
              <div className="flex items-start justify-between gap-6 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div>
                  <p className="font-semibold text-ink">{entry.question}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">
                    {entry.answer}
                  </p>
                </div>
                <div className="flex-none text-right">
                  <span className="inline-flex items-center rounded-full bg-primary-light px-2.5 py-1 text-xs font-semibold text-primary">
                    {entry.topic}
                  </span>
                  <p className="mt-1.5 text-xs text-ink/40">Reviewed {entry.reviewed}</p>
                  <Link
                    href={`#${activeTopic === "all" ? "browse-by-topic" : topic.key}`}
                    className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark"
                  >
                    View answer →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-ink/60">
            Can&apos;t find it? Browse
            <Link href="/resources/developer-documentation" className="font-semibold text-primary hover:text-primary-dark">
              Documentation
            </Link>
            <span aria-hidden>·</span>
            <Link href="/help-center" className="font-semibold text-primary hover:text-primary-dark">
              Help Center
            </Link>
            <span aria-hidden>·</span>
            <Link href="/contact-us" className="font-semibold text-primary hover:text-primary-dark">
              Contact Support
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
