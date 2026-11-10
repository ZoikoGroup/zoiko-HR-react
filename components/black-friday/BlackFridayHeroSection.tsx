import Image from "next/image";
import { Container, Reveal } from "@/components/ui";
import { BF, PLANS, PROMO_CODE, salePrice, usd } from "./data";

const advanced = PLANS.find((p) => p.id === "advanced")!;
const advancedYearlySaving = (advanced.listPrice - salePrice(advanced)) * 12;

function Coupon() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] -rotate-[10deg] lg:mx-0">
      {/* Save badge */}
      <div
        className="absolute -right-3 -top-14 z-10 grid h-28 w-28 place-items-center rounded-full text-center shadow-lg ring-8 ring-[#3de0b0]/40 sm:-right-6 sm:h-32 sm:w-32"
        style={{ backgroundColor: BF.yellow, color: BF.navy }}
      >
        <div className="rotate-[10deg] leading-none">
          <p className="text-xs font-bold tracking-wide">SAVE</p>
          <p className="mt-1 text-2xl font-extrabold">${advancedYearlySaving.toFixed(0)}</p>
          <p className="mt-1 text-[11px] font-bold tracking-wide">/EMP/YR</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/40">
        {/* Blue stub */}
        <div
          className="relative px-7 pb-6 pt-6 text-white"
          style={{ background: `linear-gradient(135deg, ${BF.blue}, #2344c0)` }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90">
            Zoiko HR · Black Friday coupon
          </p>
          <div className="mt-1 flex items-start gap-3">
            <span className="font-heading text-[88px] font-extrabold leading-none tracking-tight">
              25<sup className="align-top text-4xl">%</sup>
            </span>
            <span className="mt-8 font-heading text-3xl font-bold">OFF</span>
          </div>
          <p className="mt-1 text-base font-medium">First year of any annual plan</p>
        </div>

        {/* Perforation */}
        <div className="relative h-0">
          <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-[#0f1f41]/85" />
          <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-[#0f1f41]/85" />
          <span className="absolute inset-x-6 top-0 border-t-2 border-dashed border-white/80" />
        </div>

        {/* Plan rows */}
        <div className="px-7 pb-6 pt-4">
          <ul className="divide-y divide-slate-200">
            {PLANS.map((p) => (
              <li key={p.id} className="flex items-baseline justify-between py-2.5">
                <span className="text-sm text-ink">{p.short}</span>
                <span className="flex items-baseline gap-2">
                  <s className="text-sm text-slate-400">{usd(p.listPrice)}</s>
                  <span className="font-heading text-lg font-bold text-ink">{usd(salePrice(p))}</span>
                </span>
              </li>
            ))}
          </ul>
          <div
            className="mt-2 flex items-center justify-between gap-3 rounded-xl px-4 py-2.5"
            style={{ backgroundColor: BF.tint }}
          >
            <span className="text-xs text-ink/80">Per employee / month · billed annually</span>
            <span
              className="rounded-md border-2 border-dashed px-2 py-0.5 text-xs font-bold tracking-wider"
              style={{ borderColor: BF.blue, color: BF.blue }}
            >
              {PROMO_CODE}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlackFridayHeroSection() {
  return (
    <section className="relative overflow-hidden pb-44 pt-16 sm:pt-20 lg:pb-52" style={{ backgroundColor: BF.navyDeep }}>
      <Image
        src="/images/black-friday/hero-shopper.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] opacity-60 lg:object-right lg:opacity-100"
      />
      {/* Diagonal pinstripes + left fade for legibility */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 26px), linear-gradient(90deg, rgba(10,26,44,0.85) 0%, rgba(24,45,103,0.45) 45%, transparent 70%)",
        }}
      />

      <Container className="relative grid items-center gap-20 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <Reveal>
          <p
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] sm:text-sm"
            style={{ color: BF.yellow }}
          >
            Black Friday 2026
            <span className="h-0.5 w-16 rounded" style={{ backgroundColor: BF.yellow }} />
          </p>
          <h1 className="mt-5 font-heading text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[84px]">
            Give people operations{" "}
            <span style={{ color: BF.mint }}>room to grow.</span>
          </h1>
          <p className="mt-6 flex flex-wrap items-center gap-3 text-lg font-semibold text-white sm:text-2xl">
            <span
              className="rounded-md px-2.5 py-1 font-extrabold"
              style={{ backgroundColor: BF.yellow, color: BF.navy }}
            >
              25% OFF
            </span>
            eligible first-year annual Zoiko HR software
          </p>
          <p className="mt-5 text-base text-white/75 sm:text-lg">
            A Black Friday offer for smarter HR workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#plans"
              className="inline-flex min-w-[200px] items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: BF.yellow, color: BF.navy }}
            >
              See sale prices
            </a>
            <a
              href="#compare"
              className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Compare plans
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="px-4 sm:px-8 lg:px-0">
          <Coupon />
        </Reveal>
      </Container>
    </section>
  );
}
