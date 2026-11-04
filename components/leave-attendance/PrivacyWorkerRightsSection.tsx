import { Container, Reveal } from "@/components/ui";

const CLASSES = [
  {
    code: "P0",
    badge: "bg-emerald-100 text-emerald-700",
    name: "Public / Operational",
    examples: ["Generic policy label", "Request state (approved/pending)", "Privacy-safe calendar label"],
    rule: "Visible according to role and organizational scope.",
  },
  {
    code: "P1",
    badge: "bg-primary-light text-primary",
    name: "Personal routine",
    examples: ["Own request dates and units", "Own balance components", "Own calendar events in detail"],
    rule: "Employee (own data) + authorized operational roles with scope.",
  },
  {
    code: "P2",
    badge: "bg-amber-100 text-amber-700",
    name: "Restricted HR",
    examples: ["Reason category", "Detailed correction reason", "Certain attendance exception detail"],
    rule: "HR and approved roles only. Manager receives minimum necessary — not full P2 detail.",
  },
  {
    code: "P3",
    badge: "bg-rose-100 text-rose-700",
    name: "Sensitive evidence",
    examples: ["Medical / supporting documents", "Health or accommodation detail", "Highly sensitive absence reason"],
    rule: "Restricted purpose-specific roles only. Not in calendar, analytics or ordinary manager view. Manager approval does not grant P3 access.",
  },
  {
    code: "P4",
    badge: "bg-slate-200 text-slate-600",
    name: "Security / Integration",
    examples: ["Tokens and credentials", "Internal system identifiers", "Raw provider payloads"],
    rule: "Never public. Tightly restricted admin and support roles only.",
  },
];

const NOTES = [
  {
    title: "Worker own-record rights",
    description: "Workers can see their own request status, balance context, calendar event, attendance exception category and correction or support path where the product supports it. Own data is not gated behind a sales or support flow.",
  },
  {
    title: "Analytics & session replay restriction",
    description: "Analytics contains no employee IDs, leave types when sensitive, dates, balance values, reasons, messages, attachments, health data or exact attendance records. Session replay and DOM capture are prohibited by default on authenticated leave and attendance regions.",
  },
];

export function PrivacyWorkerRightsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Privacy &amp; worker rights
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Privacy class registry — five classes govern what each
              role can see
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Calendar labels, facet counts, exports and analytics
              inherit the most restrictive applicable privacy class.
              Session replay and DOM capture are prohibited by default
              on sensitive leave and attendance regions.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 space-y-3">
          {CLASSES.map((cls, i) => (
            <Reveal key={cls.code} delay={0.05 + i * 0.05}>
              <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:grid-cols-[1fr_1.4fr_1.4fr]">
                <div className="flex items-start gap-2">
                  <span className={`rounded-md px-2 py-1 text-[11px] font-semibold ${cls.badge}`}>{cls.code}</span>
                  <p className="font-semibold text-ink">{cls.name}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">Examples</p>
                  <ul className="mt-1.5 space-y-1">
                    {cls.examples.map((example) => (
                      <li key={example} className="text-sm text-ink/60">· {example}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">Default visibility rule</p>
                  <p className="mt-1.5 text-sm text-ink/60">{cls.rule}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {NOTES.map((note, i) => (
            <Reveal key={note.title} delay={0.1 + i * 0.06}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-semibold text-ink">{note.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{note.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
