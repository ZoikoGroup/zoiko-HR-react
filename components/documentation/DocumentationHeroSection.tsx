"use client";

import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const TOPIC_PILLS = [
  "Employee Records",
  "Onboarding & Lifecycle",
  "Leave & Attendance",
  "Configuration",
  "Permissions",
  "Troubleshooting",
];

export function DocumentationHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] pb-16 pt-16 text-white sm:pb-20 sm:pt-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-400">
              Documentation
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Find the product guidance you need, with the context to use it
              correctly.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300">
              Search and browse source-controlled Zoiko HR documentation by
              product area, task, role, and topic. Published guides show the
              scope, prerequisites, currentness, permissions, expected outcome,
              and related support route needed to complete work confidently.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="w-full">
            <form
              // No documentation search endpoint is wired up yet — submission is
              // intentionally inert until an approved search route is provided.
              onSubmit={(event) => event.preventDefault()}
              className="mt-8 flex w-full flex-col gap-2 rounded-2xl bg-white p-2 shadow-[0_20px_48px_rgba(0,0,0,0.28)] sm:flex-row sm:items-center"
            >
              <label htmlFor="documentation-search" className="sr-only">
                Search documentation
              </label>
              <input
                id="documentation-search"
                name="documentation-search"
                type="search"
                placeholder="Search by task, feature, setting, or question"
                className="min-w-0 flex-1 rounded-lg px-4 py-3.5 text-ink outline-none placeholder:text-neutral-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Search documentation
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-sm">
              <Link href="#product-areas" className="font-semibold text-white hover:text-primary">
                Browse by product area →
              </Link>
              <Link href="/help-center" className="font-medium text-slate-300 hover:text-white">
                Go to Help Center
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.36}>
            <p className="mx-auto mt-5 max-w-xl text-xs leading-relaxed text-slate-400">
              Published guidance is versioned and source-controlled. If a
              product fact is not established by an approved source, the
              documentation does not infer it.
            </p>
          </Reveal>

          <Reveal delay={0.42}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {TOPIC_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-medium text-slate-200"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
