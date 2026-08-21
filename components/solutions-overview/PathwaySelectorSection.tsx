"use client";

import { useState } from "react";
import { Container, Reveal } from "@/components/ui";

type Step = {
  step: string;
  question: string;
  options: string[];
};

const STEPS: Step[] = [
  {
    step: "Step 1",
    question: "What is your organization context?",
    options: [
      "Scaling foundations",
      "Increasing operational complexity",
      "Global operations",
      "Multiple distinct entities/units",
      "Not sure",
    ],
  },
  {
    step: "Step 2",
    question: "What is your primary responsibility?",
    options: [
      "HR / People Operations",
      "Manager / Team leadership",
      "IT / Security / Integrations",
      "Finance / Payroll coordination",
      "Executive / Procurement",
      "Not sure",
    ],
  },
  {
    step: "Step 3",
    question: "What is your priority?",
    options: [
      "Structure records & processes",
      "Standardize operations",
      "Coordinate global / local config",
      "Preserve entity boundaries",
      "Improve authorized manager actions",
      "Connect HR / Time / Payroll",
      "Explore broadly",
    ],
  },
];

export function PathwaySelectorSection() {
  const [answers, setAnswers] = useState<(string | null)[]>([null, null, null]);

  const select = (stepIndex: number, option: string) =>
    setAnswers((prev) =>
      prev.map((answer, i) =>
        i === stepIndex ? (answer === option ? null : option) : answer,
      ),
    );

  return (
    <section className="border-t border-slate-200 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Find Your Path
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Transparent Selector
          </h2>
          <p className="mt-3 max-w-3xl text-ink/60">
            Select options across any steps. All seven pathways remain
            directly browsable below — this is optional navigation guidance
            only.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {STEPS.map((step, stepIndex) => (
            <Reveal key={step.step} delay={stepIndex * 0.08}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/[0.06]">
                <p className="text-xs font-semibold text-primary">
                  {step.step}
                </p>
                <p className="mt-1 text-sm font-semibold text-ink">
                  {step.question}
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {step.options.map((option) => {
                    const selected = answers[stepIndex] === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => select(stepIndex, option)}
                        className={`rounded-md border px-3.5 py-2 text-left text-xs font-medium transition-colors duration-150 ${
                          selected
                            ? "border-primary bg-primary-light text-primary"
                            : "border-slate-200 text-ink/50 hover:border-primary/40 hover:text-primary"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
