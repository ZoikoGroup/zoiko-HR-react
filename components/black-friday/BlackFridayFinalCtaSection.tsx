"use client";

import { useEffect, useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { BF, PLANS, SALE_START, SALE_END, salePrice, usd } from "./data";

const fromPrice = Math.min(...PLANS.map(salePrice));
const START = new Date(SALE_START).getTime();
const END = new Date(SALE_END).getTime();

const LABELS = ["Days", "Hrs", "Min", "Sec"];

type Phase = "before" | "live" | "ended";

function getPhase(now: number): Phase {
  if (now < START) return "before";
  if (now < END) return "live";
  return "ended";
}

/** Time left until `target`; zeros once it has passed. */
function getCountdown(now: number, target: number): string[] {
  const s = Math.floor(Math.max(0, target - now) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return [pad(Math.floor(s / 86400)), pad(Math.floor((s % 86400) / 3600)), pad(Math.floor((s % 3600) / 60)), pad(s % 60)];
}

const COUNTDOWN_LABEL: Record<Phase, string> = {
  before: "Sale starts in",
  live: "Sale ends in",
  ended: "Sale has ended",
};

export function BlackFridayFinalCtaSection() {
  // Defaults to "live" (true for the whole Nov 20 - Nov 30 window) so
  // server and first client render match; the effect below corrects it
  // for anyone loading the page before or after that window.
  const [state, setState] = useState<{ phase: Phase; cd: string[] } | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const phase = getPhase(now);
      setState({ phase, cd: getCountdown(now, phase === "before" ? START : END) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const phase = state?.phase ?? "live";
  const cd = state?.cd ?? ["00", "00", "00", "00"];
  const parts = LABELS.map((label, i) => [cd[i], label] as const);

  return (
    <section className="relative overflow-hidden pb-24 pt-20 text-white sm:pt-24" style={{ backgroundColor: BF.navyDeep }}>
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 select-none font-heading text-[180px] font-extrabold leading-none text-white/[0.04] sm:text-[320px]"
      >
        25%
      </span>
      <Container className="relative text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-5xl">
            Black Friday: <span style={{ color: BF.mint }}>25% off</span> Zoiko HR
          </h2>
          <p className="mt-3 text-white/75">
            From {usd(fromPrice)} per employee / month for your first year.
          </p>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            {COUNTDOWN_LABEL[phase]}
          </p>
          {phase !== "ended" && (
            <div className="mt-5 flex justify-center gap-3 sm:gap-7" role="timer" aria-live="off">
              {parts.map(([value, label]) => (
                <div
                  key={label}
                  className="w-[72px] rounded-xl border border-white/15 bg-white/5 py-4 backdrop-blur-sm sm:w-[120px] sm:py-6"
                >
                  <p className="font-heading text-2xl font-bold tabular-nums sm:text-3xl">{value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          )}
          <a
            href="#plans"
            className="mt-9 inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: BF.mint, color: BF.mintInk }}
          >
            Claim 25% off
          </a>
        </Reveal>

        <p className="mt-20 flex flex-col gap-2 text-left text-xs text-white/55 sm:text-sm lg:flex-row lg:gap-6">
          <span className="flex-none">© 2026 [Legal entity name] · Zoiko HR</span>
          <span>
            Offer: 25% off the first year of eligible annual Zoiko HR plans for new customers, Nov 20 – Nov 30, 2026.
            Prices in USD, excl. taxes. Renews at list price.
          </span>
        </p>
      </Container>
    </section>
  );
}

export function BlackFridayStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 px-4 py-2.5"
      style={{ backgroundColor: BF.navy, borderColor: BF.mint }}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 pr-16 text-xs font-semibold text-white sm:gap-4 sm:pr-0 sm:text-sm">
        <p className="min-w-0">
          BLACK FRIDAY · <span style={{ color: BF.mint }}>25% OFF</span> your first year of Zoiko HR
        </p>
        <a
          href="#plans"
          className="flex-none rounded-full px-4 py-2 text-xs font-semibold sm:text-sm"
          style={{ backgroundColor: BF.mint, color: BF.mintInk }}
        >
          See prices
        </a>
      </div>
    </div>
  );
}
