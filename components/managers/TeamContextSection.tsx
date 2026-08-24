import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ASSIGNMENT_BASIS = [
  ["Visible display name", "A. Mwangi — EMEA Operations GmbH"],
  ["Role/relationship", "Direct report — effective 01 Jan 2025"],
  ["Entity/location", "EMEA Operations GmbH — Berlin"],
  ["Action/request", "Band 5 → Band 6 — position change"],
  ["Effective date", "01 Sep 2026"],
  ["Current stage", "Pending manager approval — Stage 2 of 3"],
];

const TEAM_SCOPE = [
  ["Team/org unit", "EMEA Engineering — Berlin hub"],
  ["Manager relationship", "Effective 01 Jan 2025 — active"],
  ["Assignment status", "In scope — 14 direct/indirect"],
  ["Delegated scope", "M. Adeyemi — LATAM travel (09–23 Aug 2026)"],
  ["Scope source", "HR system — authoritative"],
  ["Reporting line note", "Context only — not itself an authorization grant"],
];

export function TeamContextSection() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Authorized Team Context
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900">
            Minimum necessary — with a visible reason for every visible field.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-500">
            Team context is filtered by current permission, action purpose and
            sensitivity. Restricted fields are excluded from delivery — not
            hidden in the browser.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <Reveal delay={0.08} className="h-full">
            <ContextCard
              badge="Assignment basis"
              badgeClass="bg-primary shadow-[0_4px_12px_rgba(49,94,251,0.25)]"
              rows={ASSIGNMENT_BASIS}
              why="Visible for this action because: Manager/Approver grant + EMEA team scope + position change approval purpose."
            />
          </Reveal>

          <Reveal delay={0.14} y={30} className="h-full">
            <div className="relative h-full pt-5">
              <span className="absolute left-5 top-0 z-10 rounded-full bg-indigo-500 px-3.5 py-1 text-[10px] font-semibold text-white shadow-[0_4px_12px_rgba(99,102,241,0.25)]">
                Conditional visibility
              </span>
              <PlaceholderImage
                src="/images/managers/team-context.png"
                alt="Two colleagues working at adjacent computers"
                label="Conditional visibility"
                className="h-full min-h-72 w-full rounded-xl border border-black/5 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.09)]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.2} className="h-full">
            <ContextCard
              badge="Team scope summary"
              badgeClass="bg-sky-500 shadow-[0_4px_12px_rgba(14,165,233,0.25)]"
              rows={TEAM_SCOPE}
              why="Delegated scope remains within original grant. Reporting line does not expand access beyond configured authorization."
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContextCard({
  badge,
  badgeClass,
  rows,
  why,
}: {
  badge: string;
  badgeClass: string;
  rows: string[][];
  why: string;
}) {
  return (
    <div className="relative h-full pt-5">
      <span
        className={`absolute left-5 top-0 z-10 rounded-full px-3.5 py-1 text-[10px] font-semibold text-white ${badgeClass}`}
      >
        {badge}
      </span>
      <div className="h-full rounded-xl border border-black/5 bg-white px-6 pb-5 pt-7 shadow-[0_4px_16px_rgba(0,0,0,0.09)]">
        <dl>
          {rows.map(([term, value]) => (
            <div
              key={term}
              className="flex items-baseline justify-between gap-2 border-b border-black/5 py-1.5"
            >
              <dt className="shrink-0 text-[11px] font-semibold text-slate-400">
                {term}
              </dt>
              <dd className="min-w-0 text-right text-[11px] leading-4 text-slate-700">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-3 rounded-lg border border-primary/10 bg-primary/5 px-3 py-2.5">
          <p className="text-[10px] font-semibold text-primary">Why visible?</p>
          <p className="mt-0.5 text-xs leading-4 text-slate-500">{why}</p>
        </div>
      </div>
    </div>
  );
}
