import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const QUEUE = [
  {
    title: "Role change — [Person A]",
    meta: "Manager review · Due Today",
    status: "pending",
    badge: "bg-amber-400/10 text-amber-400",
  },
  {
    title: "New starter tasks — [Person B]",
    meta: "HR completion · Due Tomorrow",
    status: "in progress",
    badge: "bg-primary/10 text-primary",
  },
  {
    title: "Leave request — [Person C]",
    meta: "Approval required · Due This week",
    status: "blocked",
    badge: "bg-red-400/10 text-red-400",
  },
  {
    title: "Offboarding — [Person D]",
    meta: "IT access review · Due Next week",
    status: "scheduled",
    badge: "bg-emerald-400/10 text-emerald-400",
  },
];

export function WorkflowsFoundationSection() {
  return (
    <section className="border-t border-white/10 bg-slate-900 py-16 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            Foundation 4 — Workflows
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            Workflows, approvals and evidence.
          </h2>
          <p className="mt-3 text-white/50">
            Visible responsibility, review and evidence — not hidden
            automation.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-sky-950 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                Approval Queue — Illustrative
              </p>
              <ul className="mt-4">
                {QUEUE.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-center justify-between gap-4 border-b border-white/10 py-2.5"
                  >
                    <div>
                      <p className="text-xs font-medium leading-5 text-white">
                        {item.title}
                      </p>
                      <p className="text-xs leading-4 text-white/40">
                        {item.meta}
                      </p>
                    </div>
                    <span
                      className={`flex-none rounded-full px-2 py-0.5 text-xs font-semibold ${item.badge}`}
                    >
                      {item.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} y={36} className="h-full">
            <PlaceholderImage
              src="/images/growing-businesses/workflows.png"
              alt="An employee and a reviewer discussing an approval"
              label="Workflows, approvals and evidence"
              className="h-full min-h-80 w-full rounded-lg"
            />
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <Link
            href="/workflows-approvals"
            className="group mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white"
          >
            Explore Workflows &amp; Approvals
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
