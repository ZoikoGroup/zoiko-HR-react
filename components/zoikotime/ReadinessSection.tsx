import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const ITEMS = [
  {
    title: "Active ZoikoTime subscription or approved trial access",
    body: "Availability is configuration, market and plan dependent.",
    tag: "Prerequisite",
  },
  {
    title: "Zoiko HR production or approved environment access",
    body: "Test environments do not imply production authorization.",
    tag: "Prerequisite",
  },
  {
    title: "Integration Security authorization record current",
    body: "Connection cannot be active without current authorization.",
    tag: "Prerequisite",
  },
  {
    title: "Information Boundary Registry entries for intended classes",
    body: "Only registry-backed classes may be configured.",
    tag: "Prerequisite",
  },
  {
    title: "Source Authority Registry entries confirmed",
    body: "Property-level authority must be explicit before exchange.",
    tag: "Confirm with implementation team",
  },
  {
    title: "Effective Time Context Snapshot model aligned",
    body: "Period, timezone, version and purpose bindings confirmed.",
    tag: "Confirm with implementation team",
  },
  {
    title: "Conflict Resolution Registry rules agreed",
    body: "No last-write-wins assumed. Authority rules explicit.",
    tag: "Confirm with implementation team",
  },
  {
    title: "Privacy and anti-surveillance review complete",
    body: "No scoring or surveillance use of time data.",
    tag: "Required before production",
  },
];

const TAG_STYLES: Record<string, { dot: string; chip: string }> = {
  Prerequisite: { dot: "bg-orange-400", chip: "bg-orange-400/10 text-orange-300" },
  "Confirm with implementation team": {
    dot: "bg-sky-400",
    chip: "bg-sky-400/10 text-sky-300",
  },
  "Required before production": {
    dot: "bg-violet-400",
    chip: "bg-violet-400/10 text-violet-300",
  },
};

// Exact colours from the design: #315EFB, #0369A1, #7C3AED.
const LINKS = [
  {
    label: "Contact implementation team",
    href: "/contact-sales",
    color: "text-primary",
  },
  {
    label: "Review Integration Security",
    href: "/integration-security",
    color: "text-sky-700",
  },
  {
    label: "Review Data Import & Export for migration",
    href: "/data-import-and-export",
    color: "text-violet-600",
  },
];

export function ReadinessSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-12">
          <div>
            <SectionHeading
              eyebrow="Implementation / readiness"
              title="Readiness prerequisites before activating the ZoikoTime connection"
              tone="dark"
            >
              No exact technical steps are invented here. Implementation details,
              source registry values and support paths come from the Zoiko HR
              implementation team and current approved documentation.
            </SectionHeading>

            <Reveal delay={0.12}>
              <ul className="mt-6 space-y-3">
                {LINKS.map((link) => (
                  <li key={link.label} className="flex gap-2">
                    <span aria-hidden className={`text-xs ${link.color}`}>
                      →
                    </span>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors hover:text-white ${link.color}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="flex flex-col gap-3">
            {ITEMS.map((item, i) => {
              const style = TAG_STYLES[item.tag];
              return (
                <Reveal key={item.title} delay={Math.min(0.06 + i * 0.04, 0.3)}>
                  <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="flex min-w-0 gap-3">
                      <span
                        aria-hidden
                        className={`mt-1.5 size-1.5 flex-none rounded-full ${style.dot}`}
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-xs leading-5 text-white/40">
                          {item.body}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 self-start whitespace-nowrap rounded px-2 py-1 text-[10px] font-medium ${style.chip}`}
                    >
                      {item.tag}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
