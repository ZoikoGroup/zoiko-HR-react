"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CHECKS = ["No unreachable steps", "Fallback defined", "Approver assigned"];

const STEPS = ["Trigger", "Condition", "Routing", "Approval", "Action", "Evidence"];

export function ProductProofSection() {
  const [active, setActive] = useState(3);

  return (
    <section id="product-proof" className="bg-ink py-24 text-white">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Product proof
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              One structure, edited as a canvas or a keyboard-operable
              list.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-white/60">
              Trigger, Condition, Routing, Approval, Action and Evidence
              steps share one underlying definition — validated before
              it can publish.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16} y={30}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0e1730]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4">
              <p className="text-sm">
                <span className="font-semibold">Leave Request Approval</span>
                <span className="text-white/40"> · v4 · Draft · unsaved changes</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {CHECKS.map((check) => (
                  <span key={check} className="inline-flex items-center gap-1 rounded-full bg-emerald-400/20 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                    ✓ {check}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-none flex-col gap-1 p-4 lg:w-56">
                {STEPS.map((label, i) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors duration-200 ${
                      active === i ? "bg-primary/20 text-white" : "text-white/50 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 flex-none rounded-full ${active === i ? "bg-emerald-400" : "bg-white/20"}`} />
                    {i + 1} {label}
                  </button>
                ))}
              </div>

              <div className="flex-1 p-4">
                <PlaceholderImage
                  src="/images/workflows-approvals/product-proof.webp"
                  alt="Person presenting a diagram on a whiteboard to colleagues"
                  label="Canvas or keyboard-operable list"
                  className="h-full min-h-[260px] w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
