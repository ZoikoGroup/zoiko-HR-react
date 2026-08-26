import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const SCOPES = [
  {
    label: "Global — all configured orgs",
    status: "Active",
    statusClass: "bg-sky-500/15 text-sky-400",
  },
  {
    label: "EMEA / United Kingdom",
    status: "Configured",
    statusClass: "bg-emerald-400/15 text-emerald-400",
  },
  {
    label: "NORAM / United States",
    status: "Configured",
    statusClass: "bg-emerald-400/15 text-emerald-400",
  },
  {
    label: "APAC / Japan",
    status: "Scope restricted",
    statusClass: "bg-amber-400/15 text-amber-400",
  },
  {
    label: "LATAM / Brazil",
    status: "Review required",
    statusClass: "bg-amber-400/15 text-amber-400",
  },
];

export function GlobalContextSection() {
  return (
    <section className="bg-sky-950 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
            Global and Multi-Entity Context
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold">
            HR work scoped across organizations and entities — not inferred from
            name or domain.
          </h2>
          <p className="mt-2 max-w-[620px] leading-6 text-slate-400">
            No cross-entity visibility or bulk action solely because a user
            belongs to central HR. Scope change refreshes permissions
            server-side.
          </p>
        </Reveal>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
          <Reveal delay={0.1} y={30}>
            <div className="h-full rounded-xl border-l-[3px] border-sky-500 bg-slate-900/70 p-5">
              <p className="text-sm font-semibold text-sky-400">
                Organization scope selector
              </p>
              <ul className="mt-3">
                {SCOPES.map((scope) => (
                  <li
                    key={scope.label}
                    className="flex items-center justify-between gap-4 border-b border-white/10 py-3 last:border-b-0"
                  >
                    <span className="text-sm text-slate-200">
                      {scope.label}
                    </span>
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-semibold ${scope.statusClass}`}
                    >
                      {scope.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16} y={30} className="h-full">
            <PlaceholderImage
              src="/images/hr-teams/global-context.png"
              alt="Colleagues working across laptops in a meeting room"
              label="Global and multi-entity scope"
              className="h-full min-h-64 w-full rounded-xl border border-white/10 bg-slate-900"
            />
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <div className="mt-6 max-w-[700px] rounded-lg border border-white/10 bg-white/5 px-5 py-3.5">
            <p className="text-xs leading-5 text-slate-400">
              Product hierarchies do not prove legal ownership, tax grouping,
              employer status, payroll relationship, financial consolidation or
              regulatory relationship.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <Link
            href="/global-hr-management"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-500 hover:text-white"
          >
            Explore Global HR
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
