"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STEPS = [
  {
    number: "01",
    label: "Capture",
    description:
      "Receive authorized information from user entry, workflow, import, or approved integration with declared source and scope.",
  },
  {
    number: "02",
    label: "Validate",
    description:
      "Check required fields, format, reference data, duplicates, and effective-date conflicts before anything is stored.",
  },
  {
    number: "03",
    label: "Review",
    description:
      "Present current and proposed values side-by-side for permitted reviewers to compare before a decision is made.",
  },
  {
    number: "04",
    label: "Approve",
    description:
      "Route to permitted reviewer when policy or configuration requires sign-off, with delegation and escalation support.",
  },
  {
    number: "05",
    label: "Effect",
    description:
      "Apply the approved value on the correct effective date, preserving the prior state rather than overwriting it.",
  },
  {
    number: "06",
    label: "Use",
    description:
      "Expose the approved value to authorized employee, manager, HR, reporting, and integration experiences.",
  },
  {
    number: "07",
    label: "Evidence",
    description:
      "Record actor identity, role, source, before/after values, timestamp, and reason for every change made.",
  },
];

export function OperatingModelSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Operating model
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Every change is captured, validated, approved, effected, and
              evidenced.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Select a step to trace an example manager-change through the
              full lifecycle.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-stretch">
          <div className="flex flex-col gap-3 lg:flex-1">
            {STEPS.map((step, i) => {
              const isActive = active === i;
              return (
                <button
                  key={step.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className="rounded-2xl px-5 py-4 text-left transition-all duration-200"
                  style={
                    isActive
                      ? {
                          backgroundColor: "#0A1926",
                          border: "0.8px solid rgba(49,94,251,0.4)",
                          boxShadow: "0 4px 24px rgba(49,94,251,0.12)",
                        }
                      : {
                          backgroundColor: "#FFFFFF",
                          border: "0.8px solid #E2E8F2",
                          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                        }
                  }
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 flex-none items-center justify-center rounded-full text-xs font-semibold ${
                        isActive
                          ? "bg-primary/20 text-primary"
                          : "bg-primary-light text-primary"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`font-semibold ${isActive ? "text-white" : "text-ink"}`}
                    >
                      {step.label}
                    </span>
                  </div>
                  <p
                    className={`mt-1.5 pl-9 text-sm leading-relaxed ${
                      isActive
                        ? "text-white/60"
                        : "truncate text-ink/40"
                    }`}
                  >
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>

          <Reveal delay={0.2} y={30} className="flex lg:flex-1">
            <PlaceholderImage
              src="/images/core-hr/operating-model.png"
              alt="Team celebrating with a trophy at the office"
              label="Every change, evidenced"
              className="h-full min-h-[280px] w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
