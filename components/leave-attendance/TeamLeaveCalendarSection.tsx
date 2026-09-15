"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const EVENT_STYLES: Record<string, string> = {
  "Approved absence": "bg-emerald-100 text-emerald-700",
  "Pending request": "bg-amber-100 text-amber-700",
  "Coverage concern": "bg-violet-100 text-violet-700",
};

const WEEKS: (null | { day: number; event?: string })[][] = [
  [null, null, { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 }],
  [{ day: 6 }, { day: 7 }, { day: 8, event: "Approved absence" }, { day: 9, event: "Approved absence" }, { day: 10, event: "Approved absence" }, { day: 11 }, { day: 12 }],
  [{ day: 13 }, { day: 14, event: "Approved absence" }, { day: 15, event: "Approved absence" }, { day: 16, event: "Approved absence" }, { day: 17, event: "Approved absence" }, { day: 18, event: "Approved absence" }, { day: 19 }],
  [{ day: 20 }, { day: 21, event: "Pending request" }, { day: 22, event: "Coverage concern" }, { day: 23 }, { day: 24 }, { day: 25 }, { day: 26 }],
  [{ day: 27 }, { day: 28 }, { day: 29 }, { day: 30 }, { day: 31 }, null, null],
];

const AGENDA = WEEKS.flat().filter((d): d is { day: number; event?: string } => !!d?.event);

export function TeamLeaveCalendarSection() {
  const [view, setView] = useState<"Month" | "Agenda">("Month");

  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Team leave calendar
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Privacy-safe calendar — approved absence labels, not
              sensitive leave reasons
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Sensitive leave type or reason is not visible on the
              calendar by default. Facet counts and overlapping blocks
              cannot reveal restricted absence categories or individual
              details. Agenda is always available as a first-class
              accessible alternative.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[2.5fr_1fr] lg:items-stretch">
          <Reveal delay={0.14} className="flex">
            <div className="flex w-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-semibold text-ink">October 2025 — Synthetic example</p>
                <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
                  {(["Month", "Agenda"] as const).map((label) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => setView(label)}
                      className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
                        view === label ? "bg-white text-ink shadow-sm" : "text-ink/50 hover:text-ink"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {view === "Month" ? (
                <div className="mt-4">
                  <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-ink/40">
                    {DAYS.map((day) => (
                      <span key={day} className="py-1">{day}</span>
                    ))}
                  </div>
                  <div className="mt-1 grid grid-cols-7 gap-1">
                    {WEEKS.flat().map((cell, i) => (
                      <div key={i} className="min-h-[54px] rounded-md border border-slate-100 p-1 text-xs">
                        {cell && (
                          <>
                            <span className="text-ink/50">{cell.day}</span>
                            {cell.event && (
                              <span className={`mt-1 block truncate rounded px-1 py-0.5 text-[10px] font-semibold ${EVENT_STYLES[cell.event]}`}>
                                {cell.event}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-4 flex-1 space-y-2">
                  {AGENDA.map((entry) => (
                    <div key={entry.day} className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2 text-sm">
                      <span className="text-ink/60">Oct {entry.day}</span>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${EVENT_STYLES[entry.event!]}`}>
                        {entry.event}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <p className="mt-4 border-t border-slate-100 pt-4 text-xs text-ink/40">
                All names, leave types and reasons are synthetic.
                Calendar labels follow the Privacy Class Registry —
                sensitive reasons remain restricted.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} y={30} className="flex">
            <PlaceholderImage
              src="/images/leave-attendance/team-leave-calendar.png"
              alt="Presenter speaking to a seated audience"
              label="Privacy-safe calendar"
              className="h-full min-h-[280px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
