"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const OPTIONS = ["In place", "Needs review", "Not sure"];

const QUESTIONS = [
  {
    id: "Q1",
    text: "Are workforce records structured with clear owners, sources and effective-date rules?",
  },
  {
    id: "Q2",
    text: "Are organization, role and manager relationships defined consistently enough for current operations?",
  },
  {
    id: "Q3",
    text: "Are recurring employee lifecycle changes handled through repeatable steps, approvals and exception paths?",
  },
];

export function ReadinessCheckSection() {
  const [answers, setAnswers] = useState<Record<string, string | null>>({});

  const select = (questionId: string, option: string) =>
    setAnswers((prev) => ({
      ...prev,
      [questionId]: prev[questionId] === option ? null : option,
    }));

  return (
    <section className="border-t border-white/10 bg-slate-900 py-16 text-white">
      <Container>
        <div className="mx-auto max-w-[860px]">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
              Foundation Readiness Check
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-10 tracking-tight">
              Identify topics to investigate — no hidden score.
            </h2>
            <p className="mt-3 text-white/50">
              Explicit self-selection only. No employee data required.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-2">
            {QUESTIONS.map((question, i) => (
              <Reveal key={question.id} delay={i * 0.06}>
                <div
                  role="group"
                  aria-labelledby={`readiness-${question.id}`}
                  className="rounded-xl border border-white/10 bg-sky-950 px-6 py-5"
                >
                  <p
                    id={`readiness-${question.id}`}
                    className="text-sm font-semibold leading-5"
                  >
                    <span className="text-primary">{question.id}</span>
                    <span> — {question.text}</span>
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {OPTIONS.map((option) => {
                      const selected = answers[question.id] === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          aria-pressed={selected}
                          className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors duration-150 ${
                            selected
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-white/10 text-white/50 hover:border-primary/40 hover:text-white"
                          }`}
                          onClick={() => select(question.id, option)}
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

          <Reveal delay={0.24} y={36}>
            <PlaceholderImage
              src="/images/growing-businesses/readiness-check.png"
              alt="Four colleagues greeting each other outside an office building"
              label="Foundation readiness check"
              fit="contain"
              className="mt-2 w-full rounded-xl border border-white/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
