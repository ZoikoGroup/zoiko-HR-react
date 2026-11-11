"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BF, SALE_START } from "./data";

const STORAGE_KEY = "zoiko-bf-popup-dismissed";
const SHOW_DELAY_MS = 1200;

const START = new Date(SALE_START).getTime();
const LABELS = ["Days", "Hrs", "Min", "Sec"];

/** Time left until the sale starts; zeros once it has started. */
function getCountdown(now: number): string[] {
  const s = Math.floor(Math.max(0, START - now) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return [
    pad(Math.floor(s / 86400)),
    pad(Math.floor((s % 86400) / 3600)),
    pad(Math.floor((s % 3600) / 60)),
    pad(s % 60),
  ];
}

export function BlackFridayPopup() {
  const [open, setOpen] = useState(false);
  // null until mounted so server and client markup match.
  const [cd, setCd] = useState<string[] | null>(null);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // sessionStorage unavailable (private mode, etc.) — show the popup anyway.
    }
    if (dismissed) return;

    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const tick = () => setCd(getCountdown(Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }

  const parts = LABELS.map((label, i) => [cd ? cd[i] : "00", label] as const);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            aria-hidden
            onClick={close}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="bf-popup-heading"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl text-white shadow-2xl shadow-black/50"
            style={{ backgroundColor: BF.navyDeep }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(115deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 26px)",
              }}
            />

            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg text-white/70 transition-colors hover:bg-white/20 hover:text-white"
            >
              ×
            </button>

            <div className="relative px-7 pb-8 pt-9 text-center sm:px-9">
              <span
                className="inline-flex -rotate-3 items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ backgroundColor: BF.yellow, color: BF.navy }}
              >
                Black Friday 2026
              </span>

              <h2
                id="bf-popup-heading"
                className="mt-5 font-heading text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl"
              >
                25% off Zoiko HR
                <br />
                <span style={{ color: BF.mint }}>is almost here.</span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                25% off the first year of eligible annual Zoiko HR plans for
                new customers — from $4.50 per employee / month. Nov 27–30,
                2026 only.
              </p>

              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50">
                Sale starts in
              </p>
              <div className="mt-3 flex justify-center gap-2.5" role="timer" aria-live="off">
                {parts.map(([value, label]) => (
                  <div key={label} className="w-16 rounded-xl border border-white/15 bg-white/5 py-2.5">
                    <p className="font-heading text-lg font-bold tabular-nums">{value}</p>
                    <p className="mt-0.5 text-[9px] uppercase tracking-[0.15em] text-white/55">{label}</p>
                  </div>
                ))}
              </div>

              <a
                href="/black-friday"
                onClick={close}
                className="mt-7 inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: BF.mint, color: BF.mintInk }}
              >
                See Black Friday deals
              </a>
              <button
                type="button"
                onClick={close}
                className="mt-4 text-xs font-semibold text-white/40 transition-colors hover:text-white/70"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
