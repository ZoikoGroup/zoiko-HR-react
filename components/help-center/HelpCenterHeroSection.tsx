"use client";

import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const TOPIC_PILLS = [
  "Employee records",
  "Onboarding",
  "Leave requests",
  "Approvals",
  "Documents & policies",
  "Reports",
];

export function HelpCenterHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] pb-16 pt-16 text-white sm:pb-20 sm:pt-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-400">
              Help Center
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Find the right Zoiko HR help, faster.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300">
              Search approved help content or browse by task and audience. When
              the answer belongs in Documentation, the Administrator Guide,
              Developer Documentation, Product Updates, Service Status, or
              Contact Support, the Help Center routes you there without
              duplicating volatile detail.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="w-full">
            <form
              // No help search endpoint is wired up yet — submission is
              // intentionally inert until an approved search route is provided.
              onSubmit={(event) => event.preventDefault()}
              className="mt-8 flex w-full flex-col gap-2 rounded-2xl bg-white p-2 shadow-[0_20px_48px_rgba(0,0,0,0.28)] sm:flex-row sm:items-center"
            >
              <label htmlFor="help-search" className="sr-only">
                Search the Help Center
              </label>
              <input
                id="help-search"
                name="help-search"
                type="search"
                placeholder="Describe what you are trying to do or what went wrong"
                className="min-w-0 flex-1 rounded-lg px-4 py-3.5 text-ink outline-none placeholder:text-neutral-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Search
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-sm">
              <Link href="#support-categories" className="font-semibold text-white hover:text-primary">
                Browse support topics →
              </Link>
              <Link href="#service-status" className="font-medium text-slate-300 hover:text-white">
                Service Status
              </Link>
              <Link href="#contact-support" className="font-medium text-slate-300 hover:text-white">
                Contact Support
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.36}>
            <p className="mx-auto mt-5 max-w-xl text-xs leading-relaxed text-slate-400">
              Do not enter passwords, authentication codes, bank or card
              information, government IDs, medical information, or other
              sensitive personal data.
            </p>
          </Reveal>

          <Reveal delay={0.42}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
