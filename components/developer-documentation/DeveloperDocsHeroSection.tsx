"use client";

import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function DeveloperDocsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] py-16 text-white sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-indigo-400">
                Developer Documentation
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Build against Zoiko HR with documentation that states exactly
                what is supported.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-lg leading-7 text-slate-400">
                Source-governed technical guidance for approved integration
                surfaces. Authentication, operations, schemas, events, examples,
                errors, and versioning — published only when current sources
                establish them.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <form
                // No approved developer search endpoint exists yet, so the
                // query is not submitted anywhere.
                onSubmit={(event) => event.preventDefault()}
                className="mt-7 max-w-xl"
              >
                <label htmlFor="developer-search" className="sr-only">
                  Search developer documentation
                </label>
                <div className="relative">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-lg text-slate-500"
                  >
                    ⌕
                  </span>
                  <input
                    id="developer-search"
                    type="search"
                    placeholder="Search tasks, concepts, operations, errors…"
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-primary"
                  />
                </div>
                <p className="mt-2 text-xs leading-4 text-slate-500">
                  Search does not log raw query text when it may contain
                  identifiers or tokens.
                </p>
              </form>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#reference-explorer"
                  className="rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Browse reference catalog ↓
                </Link>
                <Link
                  href="#authentication"
                  className="rounded-xl border border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:border-primary hover:text-primary"
                >
                  Authentication →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <p className="mt-8 max-w-xl text-xs leading-4 text-slate-500">
                Technical facts are version-scoped and source-controlled.
                Examples are synthetic and carry explicit state labels.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/developer-documentation/hero.png"
              alt="Two developers reviewing integration notes together"
              label="Developers reviewing integration notes"
              className="w-full rounded-[20px] border border-white/10 bg-slate-900"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
