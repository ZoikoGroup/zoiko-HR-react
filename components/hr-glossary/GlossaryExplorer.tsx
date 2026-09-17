"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { ALPHABET, TERMS, groupByLetter } from "./glossaryData";
import { SearchIcon, SectionTitle } from "./shared";

/**
 * Owns the hero search so it can filter the A–Z bar and term list further
 * down. The sections in between are passed in as server-rendered children.
 */
export function GlossaryExplorer({ between }: { between: ReactNode }) {
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      term
        ? TERMS.filter((t) =>
            [t.name, t.expansion ?? "", t.category].join(" ").toLowerCase().includes(term)
          )
        : TERMS,
    [term]
  );
  const groups = useMemo(() => groupByLetter(filtered), [filtered]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0F172A_100%)] pb-16 pt-16 text-white sm:pt-24">
        <Container>
          <div className="mx-auto max-w-[720px] text-center">
            <Reveal>
              <h1 className="text-5xl font-extrabold leading-none tracking-tight sm:text-7xl">HR Glossary</h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mx-auto mt-5 max-w-[620px] text-base leading-7 text-slate-400">
                Clear definitions for HR, people operations, workforce data, and the
                concepts behind modern HR systems.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="relative mt-8">
                <label htmlFor="glossary-search" className="sr-only">
                  Search HR terms, acronyms, or questions
                </label>
                <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="glossary-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search HR terms, acronyms, or questions…"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-base text-ink shadow-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-primary"
                />
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                Try: FTE, onboarding, effective date, headcount, HRIS. Do not enter
                employee records, credentials or payroll data.
              </p>

              {term ? (
                <p aria-live="polite" className="mt-6 text-sm text-slate-300">
                  {filtered.length === 0 ? (
                    <>No terms match “{query.trim()}”.</>
                  ) : (
                    <>
                      {filtered.length} {filtered.length === 1 ? "term matches" : "terms match"} —{" "}
                      <a href="#all-terms" className="font-semibold text-indigo-400 hover:text-white">
                        view results
                      </a>
                    </>
                  )}
                </p>
              ) : (
                <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs leading-5 text-slate-500">
                  <span>{TERMS.length} terms published</span>
                  <span aria-hidden className="text-white/20">·</span>
                  <span>10 topic categories</span>
                  <span aria-hidden className="text-white/20">·</span>
                  <span>Reviewed Sep 2026</span>
                </p>
              )}
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/hr-glossary/hero.png"
              alt="A smiling colleague talking with two people across a desk"
              label="Colleagues in conversation"
              className="mx-auto mt-8 aspect-video max-w-[1166px] rounded-xl bg-white sm:aspect-[1166/421]"
            />
          </Reveal>
        </Container>
      </section>

      {between}

      {/* A–Z jump bar — sticks just below the site's sticky navbar. */}
      <nav
        aria-label="Glossary letters"
        className="sticky top-[72px] z-30 border-b border-slate-200 bg-white shadow-sm"
      >
        <Container>
          <ul className="-mx-2 flex overflow-x-auto py-2 lg:justify-between">
            {ALPHABET.map((letter) => {
              const has = groups.has(letter);
              return (
                <li key={letter} className="flex-none">
                  {has ? (
                    <a
                      href={`#letter-${letter}`}
                      className="flex size-9 items-center justify-center rounded-lg text-sm font-bold xl:size-10 leading-5 text-primary transition-colors hover:bg-primary-light"
                    >
                      {letter}
                    </a>
                  ) : (
                    <span
                      aria-disabled
                      className="flex size-9 items-center justify-center text-sm font-bold leading-5 text-slate-300 xl:size-10"
                    >
                      {letter}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </nav>

      {/* All terms */}
      <section id="all-terms" className="scroll-mt-36 bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <SectionTitle>All HR terms</SectionTitle>
            <p className="text-xs leading-5 text-slate-400">
              {term ? `${filtered.length} of ${TERMS.length} terms` : `${TERMS.length} published terms`}
            </p>
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-sm text-slate-500">No terms match “{query.trim()}”.</p>
          )}

          <div className="mt-10 flex flex-col gap-10">
            {ALPHABET.filter((letter) => groups.has(letter)).map((letter) => {
              const letterTerms = groups.get(letter)!;
              return (
                <div key={letter} id={`letter-${letter}`} className="scroll-mt-36">
                  <div className="flex items-baseline gap-2 border-b border-slate-200 pb-2">
                    <h3 className="font-heading text-3xl font-extrabold leading-[48px] text-primary">{letter}</h3>
                    <span className="text-sm font-medium leading-5 text-slate-300">
                      {letterTerms.length} {letterTerms.length === 1 ? "term" : "terms"}
                    </span>
                  </div>
                  <ul className="mt-4 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
                    {letterTerms.map((t) => (
                      <li key={t.name} className="flex items-start justify-between gap-3 rounded-xl px-4 py-3.5">
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold leading-5 text-ink">
                            {t.name}
                            {t.expansion && (
                              <span className="ml-1.5 text-xs font-semibold text-slate-400">({t.expansion})</span>
                            )}
                          </span>
                          <span className="mt-0.5 block text-xs leading-4 text-slate-400">{t.category}</span>
                        </span>
                        <span aria-hidden className="mt-0.5 flex-none text-sm text-slate-300">
                          →
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
