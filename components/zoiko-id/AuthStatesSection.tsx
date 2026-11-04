"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, Dot } from "./shared";

/**
 * The design publishes the description for "Active / enforced" only. The other
 * nine restate distinctions this page already draws — configured ≠ activated ≠
 * enforced, currentness review, and the lifecycle table's rule that a revocation
 * does not cascade — and claim no new capability.
 */
const STATES = [
  {
    name: "Unavailable / not approved",
    dot: "bg-red-600",
    accent: "red",
    body: "No approved method exists for this scope. Nothing may be configured or claimed.",
  },
  {
    name: "Not configured",
    dot: "bg-gray-500",
    accent: "gray",
    body: "Approved but not yet set up. No sign-in behavior is established.",
  },
  {
    name: "Configured",
    dot: "bg-sky-700",
    accent: "sky",
    body: "Configuration exists for the stated scope and version. Not tested, activated or enforced.",
  },
  {
    name: "Test pending",
    dot: "bg-amber-700",
    accent: "amber",
    body: "Verification requested; no result yet. The configuration is not proved.",
  },
  {
    name: "Test passed",
    dot: "bg-sky-700",
    accent: "sky",
    body: "Verification succeeded for the tested scope and version. Production activation is a separate step.",
  },
  {
    name: "Activation pending",
    dot: "bg-amber-700",
    accent: "amber",
    body: "Approved for activation but not yet effective at runtime. Enforcement has not begun.",
  },
  {
    name: "Active / enforced",
    dot: "bg-green-700",
    accent: "green",
    body: "Current configuration effective for the stated scope and environment.",
  },
  {
    name: "Degraded",
    dot: "bg-red-600",
    accent: "red",
    body: "Effective but operating below the stated configuration. Behavior may differ from the approved method.",
  },
  {
    name: "Review due / stale",
    dot: "bg-amber-700",
    accent: "amber",
    body: "The currentness window is no longer satisfied. Configuration requires re-review before continued reliance.",
  },
  {
    name: "Revoked / disabled",
    dot: "bg-red-600",
    accent: "red",
    body: "No longer effective. Sessions and access grants require separate revocation.",
  },
];

/** Panel chrome per accent — written out so Tailwind keeps every class. */
const ACCENTS: Record<string, { border: string; header: string; rule: string }> = {
  green: {
    border: "border-green-700/25",
    header: "bg-green-700/5",
    rule: "border-green-700/20",
  },
  sky: {
    border: "border-sky-700/25",
    header: "bg-sky-700/5",
    rule: "border-sky-700/20",
  },
  amber: {
    border: "border-amber-700/25",
    header: "bg-amber-700/5",
    rule: "border-amber-700/20",
  },
  red: {
    border: "border-red-600/25",
    header: "bg-red-600/5",
    rule: "border-red-600/20",
  },
  gray: {
    border: "border-slate-300",
    header: "bg-slate-100",
    rule: "border-slate-200",
  },
};

export function AuthStatesSection() {
  const [active, setActive] = useState(6);
  const state = STATES[active];
  const accent = ACCENTS[state.accent];

  return (
    <section id="authentication-states" className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Authentication / Sign-In States"
          title="Ten authentication states — configured, tested, activated and enforced are never collapsed"
        >
          Exact provider, protocol, MFA and provisioning methods remain
          source-controlled. These states apply regardless of which approved
          method is configured. Select each to see required behavior.
        </SectionHeading>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)]">
          <Reveal>
            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label="Authentication states"
              className="flex flex-col gap-1"
            >
              {STATES.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  id={`auth-tab-${i}`}
                  aria-selected={i === active}
                  aria-controls="auth-state-panel"
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors ${
                    i === active
                      ? "border-green-700 bg-green-700/5"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <Dot className={item.dot} />
                  <span
                    className={`text-xs font-medium leading-4 ${
                      i === active ? "text-slate-950" : "text-slate-600"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <div
              role="tabpanel"
              id="auth-state-panel"
              aria-labelledby={`auth-tab-${active}`}
              className={`flex h-full flex-col overflow-hidden rounded-xl border ${accent.border}`}
            >
              <div className={`border-b px-6 pb-4 pt-5 ${accent.header} ${accent.rule}`}>
                <div className="flex items-center gap-2">
                  <Dot className={`size-3 ${state.dot}`} />
                  <h3 className="text-xl font-extrabold leading-8 text-slate-950">
                    {state.name}
                  </h3>
                </div>
                <p className="pt-1 text-sm leading-5 text-slate-600">
                  {state.body}
                </p>
              </div>

              <PlaceholderImage
                src="/images/zoiko-id/authentication-states.webp"
                alt="Colleagues meeting around a table in a glass-walled room"
                label={state.name}
                className="aspect-video w-full flex-1 bg-slate-100 lg:aspect-auto"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
