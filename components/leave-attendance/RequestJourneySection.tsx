"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const LAYERS = [
  { group: "Creation", states: [{ label: "Draft", dot: "bg-slate-400" }, { label: "Received", dot: "bg-primary" }] },
  { group: "Routing", states: [{ label: "Routing pending", dot: "bg-amber-500" }, { label: "Routed", dot: "bg-primary" }] },
  { group: "Decision", states: [{ label: "Information requested", dot: "bg-violet-500" }, { label: "Pending decision", dot: "bg-amber-500" }] },
  { group: "Effect", states: [{ label: "Approved", dot: "bg-emerald-500" }, { label: "Declined", dot: "bg-rose-500" }] },
  { group: "Change / Cancel", states: [{ label: "Canceled", dot: "bg-slate-400" }] },
  { group: "Handoff", states: [{ label: "Handoff queued", dot: "bg-primary" }] },
];

export function RequestJourneySection() {
  const [active, setActive] = useState("Draft");

  return (
    <section id="request-journey" className="py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.3fr_1fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Request journey
              </span>
              <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
                Six state layers — receipt, routing, decision, effect,
                change, and handoff
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Submitted, received, routed, approved, effective and
                downstream processed are distinct states. Select a state
                to see its behavior contract.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.14} y={20}>
            <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white p-2">
              {LAYERS.map((layer) => (
                <div key={layer.group} className="grid grid-cols-[auto_1fr] items-center gap-4 px-3 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{layer.group}</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.states.map((state) => (
                      <button
                        key={state.label}
                        type="button"
                        onClick={() => setActive(state.label)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                          active === state.label
                            ? "border-primary bg-primary-light text-primary"
                            : "border-slate-200 bg-white text-ink/60 hover:border-primary/40 hover:text-primary"
                        }`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${state.dot}`} />
                        {state.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} y={30} className="flex">
            <PlaceholderImage
              src="/images/leave-attendance/request-journey.png"
              alt="Person smiling while working on a laptop"
              label="Six distinct state layers"
              className="h-full min-h-[280px] w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
