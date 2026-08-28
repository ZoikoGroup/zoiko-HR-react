"use client";

import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function AdminGuideHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] pb-16 pt-16 text-white sm:pb-24 sm:pt-24">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-indigo-400">
              Administrator Guide
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Administer Zoiko HR with clear responsibilities and controlled
              change.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-300">
              Find source-approved administration guidance for setup, access,
              policy, data operations, integrations, governance,
              troubleshooting, and escalation. Each guide states role,
              prerequisites, scope, impact, currentness, verification, and
              recovery.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="w-full">
            <form
              // No admin guide search endpoint is wired up yet — submission is
              // intentionally inert until an approved search route is provided.
              onSubmit={(event) => event.preventDefault()}
              className="mt-8 flex w-full flex-col gap-2 rounded-2xl bg-white p-2 shadow-[0_20px_48px_rgba(0,0,0,0.28)] sm:flex-row sm:items-center"
            >
              <label htmlFor="admin-search" className="sr-only">
                Search the Administrator Guide
              </label>
              <input
                id="admin-search"
                name="admin-search"
                type="search"
                placeholder="Search by task, object, setting, or role"
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
              <Link href="#task-map" className="font-semibold text-white hover:text-primary">
                Browse administrator tasks →
              </Link>
              <Link href="#responsibilities" className="font-medium text-slate-300 hover:text-white">
                Admin responsibilities
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.36}>
            <p className="mx-auto mt-5 max-w-xl text-xs leading-relaxed text-slate-400">
              Administrative instructions are role-, scope-, and version-aware.
              Unknown product behavior is never converted into an instruction.
              Need general guidance?{" "}
              <Link href="/resources" className="text-slate-300 hover:text-white">
                Documentation →
              </Link>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
