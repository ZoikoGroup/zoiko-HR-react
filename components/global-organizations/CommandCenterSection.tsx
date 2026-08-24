import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const REVIEW_ITEMS = [
  {
    label: "EMEA — add data-privacy step",
    status: "Approved",
    statusClass: "bg-emerald-400/10 text-emerald-400",
  },
  {
    label: "APAC — additional manager approval",
    status: "Prof. review req.",
    statusClass: "bg-violet-400/10 text-violet-400",
  },
  {
    label: "LATAM — local contract addendum",
    status: "Scheduled",
    statusClass: "bg-indigo-400/10 text-indigo-400",
  },
];

export function CommandCenterSection() {
  return (
    <section className="border-t border-white/10 bg-slate-900 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Product Proof — Global Organization Command Center
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold">
            One operational home for global, regional, and local
            administrators.
          </h2>
          <p className="mt-2 max-w-[660px] leading-6 text-slate-400">
            Illustrative product-pattern proof. Synthetic data only. No real
            customer, employee, or market data.
          </p>
        </Reveal>

        <Reveal delay={0.12} y={30}>
          <div className="mt-8 rounded-2xl border border-white/10 bg-sky-950 p-6">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Configuration Review Panel
            </span>
            <ul className="mt-4">
              {REVIEW_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-4 border-b border-white/10 py-3"
                >
                  <span className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-medium leading-5">
                      {item.label}
                    </span>
                    <span
                      className={`rounded-full px-2 py-px text-[10px] font-semibold leading-4 ${item.statusClass}`}
                    >
                      {item.status}
                    </span>
                  </span>
                  <span aria-hidden className="text-xs text-slate-500">
                    ▼
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/global-organizations/command-center-a.png"
              alt="Colleagues reviewing reports around a meeting table"
              label="Global administration"
              className="h-72 w-full rounded-2xl border border-white/10 bg-sky-950"
            />
          </Reveal>
          <Reveal delay={0.22} y={30}>
            <PlaceholderImage
              src="/images/global-organizations/command-center-b.png"
              alt="A presenter showing a governance dashboard to a seated team"
              label="Regional and local administration"
              className="h-72 w-full rounded-2xl border border-white/10 bg-sky-950"
            />
          </Reveal>
        </div>

        <Reveal delay={0.26}>
          <p className="mt-3.5 text-xs leading-4 text-slate-500">
            Illustrative only. No real metrics, counts, or outcomes are
            expressed.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
