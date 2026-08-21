import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROUTES = [
  {
    title: "Growing Businesses",
    considerWhen:
      "the priority is establishing structured HR foundations as operations grow.",
    doesNotMean: "a specific employee-count band.",
    href: "/solutions/growing-businesses",
  },
  {
    title: "Global Organizations",
    considerWhen:
      "consistent global structures with local configuration are central.",
    doesNotMean: "this page defines jurisdictional/legal requirements.",
    href: "/solutions/global-organizations",
  },
  {
    title: "HR Teams",
    considerWhen:
      "the primary question is HR-team workflows, records, reporting, policy and employee services.",
    doesNotMean: "a size or maturity requirement.",
    href: "/solutions/hr-teams",
  },
  {
    title: "Managers",
    considerWhen:
      "the primary question is manager approvals, team actions and authorized administration.",
    doesNotMean: "expanded access from hierarchy alone.",
    href: "/solutions/managers",
  },
];

export function AdjacentSolutionsSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-sky-950">
            When to explore an adjacent solution.
          </h2>
          <p className="mt-3.5 leading-6 text-slate-600">
            Choose the route that matches your primary problem.
          </p>
        </Reveal>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2 xl:grid-cols-[1fr_400px]">
          <div className="grid gap-6 sm:grid-cols-2">
            {ROUTES.map((route, i) => (
              <Reveal key={route.href} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6">
                  <p className="font-bold text-sky-950">{route.title}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-sky-950">
                    Consider this when: {route.considerWhen}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    This does not mean: {route.doesNotMean}
                  </p>
                  <Link
                    href={route.href}
                    className="group mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-primary hover:text-primary-dark"
                  >
                    {route.title}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} y={36} className="h-full">
            <PlaceholderImage
              src="/images/mid-market-organizations/adjacent-solutions.png"
              alt="A team celebrating together around a meeting table"
              label="Adjacent solution routes"
              className="h-full min-h-96 w-full rounded-xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
