import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const RECORD_ITEMS = [
  "Approved time events",
  "Attendance states",
  "Configured breaks",
  "Project or task attribution",
  "Schedule context",
  "Comments, corrections and approvals",
  "Audit history",
];

const RIGHTS = [
  {
    title: "Workers can understand",
    description:
      "What was recorded, the current status, the policy applied, who can review, and what happens next.",
  },
  {
    title: "Workers can respond",
    description:
      "Add context, request correction, challenge an inaccurate record, or use configured escalation routes.",
  },
  {
    title: "Human authority",
    description:
      "The platform does not convert an anomaly flag into an accusation. Authorized people review the case.",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 flex-none text-emerald-600">
      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WorkerTrustSection() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Worker trust & review rights
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              A Record Workers Can Understand and Respond To.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              These restrictions apply under every tier and configuration
              and are linked to the Anti-Surveillance Principles page.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 grid items-center gap-4 lg:grid-cols-2">
          <Reveal delay={0.14}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-semibold text-ink">ZoikoTime records</p>
              <ul className="mt-3 space-y-2">
                {RECORD_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink/70">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/hr-teams/worker-trust.png"
              alt="Colleagues clapping and celebrating together"
              label="Trust, by design"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {RIGHTS.map((right, i) => (
            <Reveal key={right.title} delay={0.3 + i * 0.08}>
              <div className="border-t-2 border-emerald-500 pt-4">
                <p className="font-semibold text-ink">{right.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {right.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
