import { Container, Reveal } from "@/components/ui";
import { Ribbons } from "./BlackFridayCompareSection";
import { BF } from "./data";

const DAYS = [
  { date: "Fri · Nov 27", title: "Black Friday", body: "Sale goes live on every annual plan.", variant: "start" },
  { date: "Sat · Nov 28", title: "Weekend", body: "Same 25% off pricing.", variant: "mid" },
  { date: "Sun · Nov 29", title: "Weekend", body: "Same 25% off pricing.", variant: "mid" },
  { date: "Mon · Nov 30", title: "Cyber Monday", body: "Last day. Ends 11:59 PM [time zone].", variant: "end" },
] as const;

export function BlackFridaySaleDatesSection() {
  return (
    <section id="sale-dates" className="relative scroll-mt-36 overflow-hidden py-20 sm:py-24" style={{ backgroundColor: BF.navy }}>
      {/* SALE corner sash */}
      <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-44 w-44 overflow-hidden">
        <span
          className="absolute -left-14 top-12 block w-64 -rotate-45 py-2 text-center font-serif text-2xl font-bold tracking-wider"
          style={{ backgroundColor: BF.mint, color: BF.navyDeep }}
        >
          SALE
        </span>
      </div>
      <Ribbons className="right-14 top-0 hidden md:flex" />

      <Container>
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: BF.mint }}>
            Sale dates
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Four days of Black Friday pricing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
            The same 25% first-year discount runs from Black Friday to Cyber Monday.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DAYS.map((d, i) => (
            <Reveal key={d.date} delay={i * 0.08}>
              <div
                className={`h-full rounded-2xl border p-5 ${
                  d.variant === "end" ? "border-2" : "border-white/10"
                }`}
                style={{
                  background:
                    d.variant === "start" ? `linear-gradient(135deg, ${BF.blue}, #2344c0)` : BF.navyCard,
                  borderColor: d.variant === "end" ? BF.mint : d.variant === "start" ? "#4e77f7" : undefined,
                }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: BF.mint }}>
                  {d.date}
                </p>
                <h3 className="mt-3 font-heading text-xl font-bold text-white">{d.title}</h3>
                <p className="mt-1.5 text-sm text-white/75">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
