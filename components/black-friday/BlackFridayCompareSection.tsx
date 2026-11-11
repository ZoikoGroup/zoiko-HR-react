import Image from "next/image";
import { Container, Reveal } from "@/components/ui";
import { BF, PLANS, salePrice, usd } from "./data";

const TICKER = [
  "Your first year",
  "All Zoiko HR plans",
  "Prices in USD",
  "Nov 27 - Nov 30, 2026",
  "New customers · Annual plans",
  "Cyber Monday",
];

function TickerRun() {
  return (
    <div className="flex flex-none items-center gap-8.1 pr-8">
      <span className="flex items-center gap-2">
        Black Friday ·
        <span className="rounded px-1.5 py-0.5 text-white" style={{ backgroundColor: BF.navyDeep }}>
          25% OFF
        </span>
      </span>
      {TICKER.map((t, i) => (
        <span key={t} className="flex items-center gap-8">
          {i > 0 && <span aria-hidden>•</span>}
          {t}
        </span>
      ))}
      <span aria-hidden>•</span>
    </div>
  );
}

export function BlackFridayTicker() {
  return (
    <div
      className="relative z-10 overflow-hidden py-2.5 text-xs font-bold uppercase tracking-[0.15em] sm:text-sm"
      style={{ backgroundColor: BF.mint, color: BF.navyDeep }}
    >
      <div className="flex w-max animate-[bf-marquee_40s_linear_infinite] motion-reduce:animate-none">
        <TickerRun />
        <div aria-hidden className="flex">
          <TickerRun />
        </div>
      </div>
    </div>
  );
}

/** Two hanging mint bookmark ribbons, used as decoration on section corners. */
export function Ribbons({ className = "" }: { className?: string }) {
  const notch = "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)";
  return (
    <div aria-hidden className={`pointer-events-none absolute flex gap-3 ${className}`}>
      <span className="block h-28 w-7" style={{ backgroundColor: BF.mint, clipPath: notch }} />
      <span className="block h-40 w-7" style={{ backgroundColor: BF.mint, clipPath: notch }} />
    </div>
  );
}

type Cell = string | boolean;
type Row = { label: string; cells: [Cell, Cell, Cell]; kind?: "list" | "sale" | "saving" };

const [core, advanced, enterprise] = PLANS;
const priceRows: Row[] = [
  { label: "List price / employee / month", kind: "list", cells: [usd(core.listPrice), usd(advanced.listPrice), usd(enterprise.listPrice)] },
  { label: "Black Friday price, first year", kind: "sale", cells: [usd(salePrice(core)), usd(salePrice(advanced)), usd(salePrice(enterprise))] },
  {
    label: "Saving / employee / year",
    kind: "saving",
    cells: PLANS.map((p) => usd((p.listPrice - salePrice(p)) * 12)) as [string, string, string],
  },
];

const detailRows: Row[] = [
  { label: "Billing", cells: ["Annual, prepaid", "Annual, prepaid", "Annual, prepaid"] },
  { label: "Minimum employees", cells: [String(core.minimum), String(advanced.minimum), String(enterprise.minimum)] },
  { label: "Employee records & organisation", cells: [true, true, true] },
  { label: "Documents & HR requests", cells: [true, true, true] },
  { label: "Leave & absence", cells: [true, true, true] },
  { label: "Role-based access", cells: [true, true, true] },
  { label: "Configurable change workflows", cells: [false, true, true] },
  { label: "Performance & reviews", cells: [false, true, true] },
  { label: "Reporting", cells: [false, true, true] },
  { label: "Multi-entity & regional setup", cells: [false, false, true] },
  { label: "Advanced permissions", cells: [false, false, true] },
  { label: "Implementation support", cells: ["Self-guided", "Self-guided", true] },
  { label: "Support", cells: ["Email", "Priority", "Named manager"] },
];

function CellValue({ value, kind }: { value: Cell; kind?: Row["kind"] }) {
  if (value === true) return <span aria-label="Included">✓</span>;
  if (value === false) return <span aria-label="Not included" className="text-ink/40">—</span>;
  if (kind === "list") return <s className="font-semibold text-slate-400">{value}</s>;
  if (kind === "sale") return <span className="font-bold" style={{ color: BF.green }}>{value}</span>;
  if (kind === "saving") return <span className="font-bold">{value}</span>;
  return <>{value}</>;
}

export function BlackFridayCompareSection() {
  const rows = [...priceRows, ...detailRows];
  return (
    <section id="compare" className="relative scroll-mt-36 overflow-hidden py-20 sm:py-24">
      <Ribbons className="-top-0 right-4 hidden md:flex lg:right-8" />
      <Image
        src="/images/black-friday/save-badge-compare.webp"
        alt=""
        width={150}
        height={150}
        className="absolute left-6 top-10 hidden h-36 w-36 lg:block xl:left-12"
      />
      <Container>
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: BF.blue }}>
            Compare plans
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Every plan detail and price, side by side
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-ink/60 sm:text-base">
            List price, Black Friday price and saving per employee, plus what each plan includes.
          </p>
        </Reveal>

        <Reveal amount={0.05} className="mx-auto mt-12 max-w-5xl overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="text-white">
                <th scope="col" className="px-4 py-4 text-left font-semibold" style={{ backgroundColor: BF.navy }}>
                  Plan details
                </th>
                {PLANS.map((p) => (
                  <th
                    key={p.id}
                    scope="col"
                    className="w-[18%] px-4 py-4 text-center font-semibold"
                    style={{ backgroundColor: p.popular ? BF.blue : BF.navy }}
                  >
                    {p.short}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.label}
                  className="border-t border-slate-200"
                  style={r.kind ? { backgroundColor: BF.rowTint } : undefined}
                >
                  <th scope="row" className={`px-4 py-4 text-left text-ink ${r.kind ? "font-semibold" : "font-normal"}`}>
                    {r.label}
                  </th>
                  {r.cells.map((c, i) => (
                    <td
                      key={i}
                      className={`px-4 py-4 text-center text-ink ${!r.kind && PLANS[i].popular ? "bg-[#f6f7fb]" : ""}`}
                    >
                      <CellValue value={c} kind={r.kind} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  );
}
