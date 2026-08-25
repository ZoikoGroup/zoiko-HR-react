import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROUTES = [
  {
    title: "Mid-Market Organizations",
    summary: "Standardized HR operations for increased complexity.",
    considerWhen:
      "The core question is operational standardization across more teams and workflows.",
    href: "/mid-market",
    linkLabel: "Explore Mid-Market Organizations",
  },
  {
    title: "Global Organizations",
    summary: "Consistent global structures with local configuration.",
    considerWhen:
      "The core question is coordinating global structures with local overlays.",
    href: "/global-organizations",
    linkLabel: "Explore Global Organizations",
  },
  {
    title: "Connect HR, Time & Payroll",
    summary:
      "Authorized coordination across Zoiko HR, ZoikoTime and Zoiko Payroll.",
    considerWhen:
      "The main question is governed cross-system HR/time/payroll coordination.",
    href: "/connected-hr-time-payroll",
    linkLabel: "Explore Connect HR, Time & Payroll",
  },
  {
    title: "Multi-Entity Enterprises",
    summary: "Governed administration across distinct entities and units.",
    considerWhen:
      "Distinct entities need separate administration and governed boundaries.",
    href: "/multi-entity-enterprises",
    linkLabel: "Explore Multi-Entity Enterprises",
  },
];

export function AdjacentSolutionsSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            When to Explore an Adjacent Solution
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink">
            More than one pathway may fit.
          </h2>
          <p className="mt-3 text-ink/50">
            Explore another route when it better describes your primary
            need.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {ROUTES.map((route, i) => (
              <Reveal key={route.href} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-ink">{route.title}</p>
                  <p className="mt-2 text-sm leading-6 text-primary">
                    {route.summary}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-ink/50">
                    <span className="font-semibold text-ink">
                      Consider when:
                    </span>{" "}
                    {route.considerWhen}
                  </p>
                  <Link
                    href={route.href}
                    className="group mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-primary hover:text-primary-dark"
                  >
                    {route.linkLabel}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/growing-businesses/adjacent-solutions.png"
              alt="A person explaining options during a meeting"
              label="More than one pathway may fit"
              className="h-full w-full rounded-lg"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
