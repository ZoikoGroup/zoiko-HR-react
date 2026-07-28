"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const CARDS = [
  {
    title: "One dependable workforce record",
    description:
      "A single, structured source for employee and organizational information.",
  },
  {
    title: "Consistent HR processes",
    description:
      "Governed workflows replace ad-hoc email approvals and local files.",
  },
  {
    title: "Better employee & manager access",
    description: "Focused self-service views for the people who need them.",
  },
  {
    title: "Permission-sensitive visibility",
    description:
      "Workforce reporting scoped to what each role is authorized to see.",
  },
];

const SEGMENTS = [
  "Growing businesses",
  "Global organizations",
  "Multi-entity groups",
  "HR transformation teams",
];

const TRANSFORM_STATE = {
  before: [
    "Spreadsheet employee list",
    "Email approval chain",
    "Manual workforce report",
  ],
  after: [
    "Structured employee profile",
    "Governed approval workflow",
    "Auditable workforce report",
  ],
};

export function TransformSection() {
  const [view, setView] = useState<"before" | "after">("after");

  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Replace fragmented HR administration with one governed
              workforce system.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Move employee information, approvals, documents and workforce
              processes out of disconnected spreadsheets, folders and
              inboxes.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/10">
                <p className="font-semibold text-ink">{card.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} y={36}>
          <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.03] sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-semibold text-ink">See the transformation</p>
              <div className="inline-flex rounded-full border border-slate-200 bg-slate-100 p-1">
                {(["before", "after"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setView(option)}
                    className={`rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition-all duration-200 ${
                      view === option
                        ? "bg-ink text-white shadow"
                        : "text-ink/60 hover:text-ink"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {TRANSFORM_STATE[view].map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                    view === "after"
                      ? "bg-primary-light text-primary"
                      : "bg-slate-100 text-ink/50"
                  }`}
                >
                  <span aria-hidden>{view === "after" ? "✓" : "•"}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-8 flex flex-wrap gap-3">
            {SEGMENTS.map((segment) => (
              <span
                key={segment}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink/70 transition-colors duration-200 hover:border-primary/40 hover:text-primary"
              >
                {segment}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Explore solutions
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/platform"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              See how the platform works
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
