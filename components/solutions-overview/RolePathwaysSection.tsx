import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const ROLES = [
  {
    title: "HR Teams",
    summary: "Records, workflows, reporting, policy and employee services.",
    accent: "text-violet-600",
    chip: "border-violet-600/20 bg-violet-600/5 text-violet-600 hover:bg-violet-600/10",
    points: [
      "Governed record administration",
      "Lifecycle and workflow handling",
      "Policy and document operations",
      "Employee service and support",
      "Exceptions and audit trails",
    ],
    href: "/hr-teams",
    linkLabel: "Explore HR Teams",
  },
  {
    title: "Managers",
    summary: "Approvals, team actions and authorized administration.",
    accent: "text-primary",
    chip: "border-primary/20 bg-primary/5 text-primary hover:bg-primary/10",
    points: [
      "Assigned approvals and deadlines",
      "Team context and permitted updates",
      "Escalation and delegation",
      "Evidence and audit visibility",
      "Permitted requests and actions",
    ],
    href: "/managers",
    linkLabel: "Explore Managers",
  },
];

export function RolePathwaysSection() {
  return (
    <section className="border-t border-slate-200 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">
            Role Pathways
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            HR Teams and Managers
          </h2>
          <p className="mt-3 max-w-2xl text-ink/60">
            Two role-oriented pathways with explicit authorization
            boundaries.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {ROLES.map((role, i) => (
            <Reveal key={role.href} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-900/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/[0.08]">
                <h3 className="text-xl font-bold text-ink">{role.title}</h3>
                <p className={`mt-2 text-sm font-medium ${role.accent}`}>
                  {role.summary}
                </p>
                <ul className="mt-5 mb-6 flex flex-col gap-1.5">
                  {role.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className={`text-xs leading-5 ${role.accent}`}>
                        ·
                      </span>
                      <span className="text-xs leading-5 text-ink/70">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={role.href}
                  className={`group mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border px-5 py-2.5 text-xs font-semibold transition-colors duration-150 ${role.chip}`}
                >
                  {role.linkLabel}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
              Authorization Boundary
            </p>
            <p className="mt-2 text-xs leading-5 text-ink/60">
              Access depends on role, organization scope, object state,
              policy, effective date, delegation, and other current
              authorization inputs. Corporate hierarchy alone is not
              permission inheritance.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
