import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const EVENTS = [
  {
    title: "New Starter / Onboarding",
    status: "In progress",
    owner: "Owner: HR Admin",
    dot: "bg-emerald-400",
    badge: "bg-emerald-400/10 text-emerald-500",
  },
  {
    title: "Role / Team Change",
    status: "Approval pending",
    owner: "Owner: Manager",
    dot: "bg-amber-400",
    badge: "bg-amber-400/10 text-amber-500",
  },
  {
    title: "Leave / Absence",
    status: "Scheduled",
    owner: "Owner: HR Admin",
    dot: "bg-primary",
    badge: "bg-primary/10 text-primary",
  },
  {
    title: "Offboarding",
    status: "Draft",
    owner: "Owner: HR Admin",
    dot: "bg-slate-400",
    badge: "bg-slate-400/10 text-slate-500",
  },
];

export function LifecycleFoundationSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Foundation 3 — Lifecycle
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink">
            Repeatable employee lifecycle operations.
          </h2>
          <p className="mt-3 max-w-[640px] text-ink/50">
            Recurring join/change/leave events with owners, dependencies,
            effective dates and exception handling.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,1.9fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-2.5">
            {EVENTS.map((event, i) => (
              <Reveal key={event.title} delay={i * 0.06}>
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden
                      className={`h-2 w-2 flex-none rounded-sm ${event.dot}`}
                    />
                    <span className="text-sm font-medium text-ink">
                      {event.title}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${event.badge}`}
                    >
                      {event.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-ink/40">{event.owner}</span>
                    <span aria-hidden className="text-sm text-ink/40">
                      ▼
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <Link
                href="/onboarding-lifecycle"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore Onboarding &amp; Lifecycle
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={36}>
            <PlaceholderImage
              src="/images/growing-businesses/lifecycle.png"
              alt="An HR lead in conversation with two employees"
              label="Repeatable lifecycle operations"
              fit="contain"
              className="w-full rounded-lg"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
