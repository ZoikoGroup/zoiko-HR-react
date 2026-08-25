import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const WORKSPACES = [
  {
    title: "Employee Workspace",
    subtitle: "Authorized experience — illustrative",
    accent: "text-violet-600",
    items: [
      "View appropriate profile and documents",
      "Submit approved update requests",
      "Track request status",
      "Access help and privacy routes",
    ],
    restriction:
      "Compensation details — requires HR-configured access",
    href: "/employees",
    linkLabel: "Explore Employee route",
    chip: "border-violet-600/20 bg-violet-600/5 text-violet-600 hover:bg-violet-600/10",
  },
  {
    title: "Manager Workspace",
    subtitle: "Authorized experience — illustrative",
    accent: "text-primary",
    items: [
      "Review team tasks and approvals",
      "Submit permitted team change requests",
      "View team context within authorized scope",
      "Track and escalate deadlines",
    ],
    restriction: "Payroll detail — outside configured manager scope",
    href: "/managers",
    linkLabel: "Explore Manager route",
    chip: "border-primary/20 bg-primary/5 text-primary hover:bg-primary/10",
  },
];

export function AccessFoundationSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Foundation 5 — Access
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink">
            Employee and manager service.
          </h2>
          <p className="mt-3 max-w-[640px] text-ink/50">
            Consistent service bounded by role, purpose and review. Manager
            access depends on configured authorization — not corporate
            hierarchy alone.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {WORKSPACES.map((workspace, i) => (
            <Reveal key={workspace.title} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-900/[0.06]">
                <h3 className="text-xl font-bold text-ink">
                  {workspace.title}
                </h3>
                <p className={`mt-2 text-sm ${workspace.accent}`}>
                  {workspace.subtitle}
                </p>

                <ul className="mt-5">
                  {workspace.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 border-b border-slate-200 py-2.5"
                    >
                      <span
                        aria-hidden
                        className={`text-xs ${workspace.accent}`}
                      >
                        ✓
                      </span>
                      <span className="text-sm text-ink/70">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-5 text-ink/50">
                  <span className="font-semibold text-ink/70">
                    Not accessible:
                  </span>{" "}
                  {workspace.restriction}
                </p>

                <Link
                  href={workspace.href}
                  className={`group mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border px-5 py-2.5 text-xs font-semibold transition-colors duration-150 ${workspace.chip}`}
                >
                  {workspace.linkLabel}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 rounded-xl border border-primary/15 bg-primary-light/60 px-5 py-4 text-xs leading-5 text-ink/60">
            <span className="font-semibold text-ink">Access rule:</span>{" "}
            Permissions evaluate role, relationship, scope, purpose, object
            state, effective dates and configured policy —
            &quot;manager&quot; is not a blanket data-access grant.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
