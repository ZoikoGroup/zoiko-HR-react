"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { BF, PLANS, claimHref, salePrice, usd, type Plan } from "./data";

const TEAM_MIN = 1;
const TEAM_MAX = 500;
const TEAM_DEFAULT = 50;

const FOOTNOTES = [
  "Prices in USD",
  "Taxes shown at checkout",
  "New customers only",
  "Renews at list price",
  "Not combinable with other offers",
];

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-4 w-4 flex-none ${className}`} aria-hidden>
      <circle cx="10" cy="10" r="10" fill={BF.mint} />
      <path d="M6 10.2l2.6 2.6L14 7.4" fill="none" stroke={BF.mintInk} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlanCard({ plan, team }: { plan: Plan; team: number }) {
  const sale = salePrice(plan);
  const dark = !!plan.popular;
  const firstYear = sale * 12 * team;
  const saved = (plan.listPrice - sale) * 12 * team;
  const renews = plan.listPrice * 12 * team;

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl p-6 ${
        dark
          ? "text-white shadow-2xl shadow-slate-900/30 lg:-my-3"
          : "border border-slate-200 bg-white text-ink"
      }`}
      style={dark ? { backgroundColor: BF.navy } : undefined}
    >
      <span
        className="absolute right-5 top-5 grid h-14 w-14 place-items-center rounded-full text-center leading-none text-white"
        style={{ backgroundColor: BF.red }}
      >
        <span>
          <span className="block font-heading text-lg font-extrabold">25%</span>
          <span className="block text-[9px] font-bold uppercase">off</span>
        </span>
      </span>

      {dark && (
        <span
          className="mb-2 w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
          style={{ backgroundColor: BF.mint, color: BF.mintInk }}
        >
          Most popular
        </span>
      )}
      <p
        className={`text-[11px] font-bold uppercase tracking-[0.15em] ${dark ? "" : "text-ink/60"}`}
        style={dark ? { color: BF.mint } : undefined}
      >
        {plan.eyebrow}
      </p>
      <h3 className={`font-heading text-xl font-bold ${dark ? "mt-4" : "mt-1"}`}>{plan.name}</h3>

      <p className="mt-4 flex items-baseline gap-3">
        <s className={`text-lg font-semibold ${dark ? "text-white/50" : "text-slate-400"}`}>
          {usd(plan.listPrice)}
        </s>
        <span className="font-heading text-5xl font-extrabold tracking-tight">{usd(sale)}</span>
      </p>
      <p className={`mt-2 text-sm ${dark ? "text-white/70" : "text-ink/60"}`}>/ employee / month</p>
      <p className={`mt-1 text-xs ${dark ? "text-white/60" : "text-ink/50"}`}>
        Billed annually · first year · USD
      </p>

      <dl
        className={`mt-5 grid grid-cols-3 gap-2 rounded-xl px-3 py-4 ${dark ? "bg-white/10" : ""}`}
        style={dark ? undefined : { backgroundColor: BF.tint }}
      >
        {[
          ["Your first year", usd(firstYear), false],
          ["You save", usd(saved), true],
          ["Renews at", `${usd(renews)}/yr`, false],
        ].map(([label, value, accent]) => (
          <div key={label as string} className="min-w-0">
            <dt className={`text-[9px] font-semibold uppercase tracking-wider ${dark ? "text-white/60" : "text-ink/50"}`}>
              {label}
            </dt>
            <dd
              className="mt-1 break-words text-sm font-bold"
              style={accent ? { color: dark ? BF.mint : BF.green } : undefined}
            >
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <Link
        href={claimHref(plan.id)}
        className="mt-5 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
        style={dark ? { backgroundColor: BF.mint, color: BF.mintInk } : { backgroundColor: BF.blue, color: "#fff" }}
      >
        Claim 25% off {plan.short}
      </Link>

      <ul className="mt-5 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className={`flex items-center gap-2.5 text-sm ${dark ? "text-white/90" : "text-ink/80"}`}>
            <Check />
            {f}
          </li>
        ))}
      </ul>
      <p className={`mt-5 text-xs ${dark ? "text-white/60" : "text-ink/50"}`}>
        Minimum {plan.minimum} employees
      </p>
    </div>
  );
}

export function BlackFridayPlansSection() {
  const [team, setTeam] = useState(TEAM_DEFAULT);

  return (
    <section id="plans" className="relative z-10 -mt-36 scroll-mt-36 pb-16">
      <Container>
        <Reveal amount={0.05} className="rounded-3xl bg-white p-6 shadow-2xl shadow-slate-900/15 sm:p-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Black Friday plan prices, <span style={{ color: BF.blue }}>25% off</span>
              </h2>
              <p className="mt-2 text-sm text-ink/60 sm:text-base">
                All prices in USD per employee per month, billed annually. Discount applies to your first year.
              </p>
            </div>
            <Image
              src="/images/black-friday/save-badge-pricing.webp"
              alt="Black Friday offer: save 25%"
              width={150}
              height={150}
              className="hidden h-32 w-32 flex-none sm:block lg:h-36 lg:w-36"
            />
          </div>

          <div className="mt-6 max-w-xs rounded-xl p-4 sm:mt-0" style={{ backgroundColor: BF.tint }}>
            <label htmlFor="bf-team-size" className="flex items-center justify-between text-sm font-semibold text-ink">
              Team size
              <span className="font-heading text-lg font-bold" style={{ color: BF.blue }}>
                {team}
              </span>
            </label>
            <input
              id="bf-team-size"
              type="range"
              min={TEAM_MIN}
              max={TEAM_MAX}
              value={team}
              onChange={(e) => setTeam(Number(e.target.value))}
              className="mt-3 w-full cursor-pointer"
              style={{ accentColor: BF.blue }}
            />
            <p className="mt-2 text-xs text-ink/60">
              Move to see your first-year total for {team} employees
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-4">
            {PLANS.map((p) => (
              <PlanCard key={p.id} plan={p} team={team} />
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-ink/60 sm:text-sm">
            {FOOTNOTES.map((n) => (
              <li key={n} className="flex items-center gap-1.5">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
                  <path d="M3 8.5l3 3L13 4.5" fill="none" stroke={BF.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {n}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
