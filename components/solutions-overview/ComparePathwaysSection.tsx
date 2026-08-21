import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const COLUMNS = [
  "Pathway",
  "Starts From",
  "Purpose",
  "Key Questions",
  "Boundary",
  "Route",
];

const ROWS = [
  {
    pathway: "Growing Businesses",
    startsFrom: "Scaling foundations",
    purpose: "Structured HR foundations for scaling organizations.",
    question: "How do we establish consistent records, roles, and processes?",
    boundary: "No employee-count thresholds.",
    href: "/solutions/growing-businesses",
  },
  {
    pathway: "Mid-Market Organizations",
    startsFrom: "Operational complexity",
    purpose: "Standardized HR operations for increased complexity.",
    question: "How do we standardize workflows and reporting across teams?",
    boundary: "No revenue thresholds.",
    href: "/solutions/mid-market",
  },
  {
    pathway: "Global Organizations",
    startsFrom: "Multi-location operations",
    purpose: "Consistent global structures with local configuration.",
    question: "How do we coordinate global baselines with local overlays?",
    boundary: "Availability varies by jurisdiction.",
    href: "/solutions/global-organizations",
  },
  {
    pathway: "Multi-Entity Enterprises",
    startsFrom: "Distinct entity governance",
    purpose: "Governed administration across distinct entities and units.",
    question: "How do we preserve entity boundaries while enabling reporting?",
    boundary: "Not a legal/tax grouping tool.",
    href: "/solutions/multi-entity-enterprises",
  },
  {
    pathway: "HR Teams",
    startsFrom: "HR responsibility",
    purpose: "Records, workflows, reporting, policy and employee services.",
    question: "What governed HR administration can our team perform?",
    boundary: "Approvals and privacy controls apply.",
    href: "/solutions/hr-teams",
  },
  {
    pathway: "Managers",
    startsFrom: "Manager responsibility",
    purpose: "Approvals, team actions and authorized administration.",
    question: "What can managers do within their authorized scope?",
    boundary: "Access is permission and context-dependent.",
    href: "/solutions/managers",
  },
  {
    pathway: "Connect HR, Time & Payroll",
    startsFrom: "Cross-system coordination",
    purpose: "Authorized coordination across Zoiko HR, ZoikoTime and Zoiko Payroll.",
    question: "How does approved HR context flow to time and payroll?",
    boundary: "Zoiko HR does not calculate payroll.",
    href: "/solutions/connected-hr-time-payroll",
  },
];

export function ComparePathwaysSection() {
  return (
    <section className="border-t border-white/10 bg-[#0A1B2E] py-16 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            Compare Pathways
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Understand Overlap
          </h2>
          <p className="mt-2 max-w-2xl text-white/50">
            A visitor may choose more than one pathway. This comparison is
            guidance, not an eligibility matrix.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-9">
            <p className="text-xs font-semibold text-white/40">
              Seven evaluation pathways into one Zoiko HR platform
            </p>

            {/* Small screens: each pathway becomes a stacked card. */}
            <div className="mt-3 flex flex-col gap-3 lg:hidden">
              {ROWS.map((row) => (
                <div
                  key={row.href}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {row.pathway}
                  </p>
                  <dl className="mt-3 grid grid-cols-[7.5rem_1fr] gap-x-3 gap-y-2 text-xs leading-5">
                    <dt className="text-white/40">Starts from</dt>
                    <dd className="text-white/70">{row.startsFrom}</dd>
                    <dt className="text-white/40">Purpose</dt>
                    <dd className="text-white/50">{row.purpose}</dd>
                    <dt className="text-white/40">Key question</dt>
                    <dd className="text-white/50">{row.question}</dd>
                    <dt className="text-white/40">Boundary</dt>
                    <dd className="italic text-white/35">{row.boundary}</dd>
                  </dl>
                  <Link
                    href={row.href}
                    className="group mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-white"
                  >
                    Explore
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-3 hidden lg:block">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Comparison of the seven Zoiko HR solution pathways
                </caption>
                <thead>
                  <tr>
                    {COLUMNS.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="border-b border-white/10 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white/40"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, i) => (
                    <tr
                      key={row.href}
                      className={i % 2 === 1 ? "bg-white/5" : undefined}
                    >
                      <th
                        scope="row"
                        className="w-48 border-b border-white/10 px-3.5 py-4 text-xs font-semibold text-white"
                      >
                        {row.pathway}
                      </th>
                      <td className="w-44 border-b border-white/10 px-3.5 py-4 text-xs text-white/70">
                        {row.startsFrom}
                      </td>
                      <td className="w-72 border-b border-white/10 px-3.5 py-4 text-xs leading-5 text-white/50">
                        {row.purpose}
                      </td>
                      <td className="w-72 border-b border-white/10 px-3.5 py-4 text-xs leading-5 text-white/50">
                        {row.question}
                      </td>
                      <td className="w-56 border-b border-white/10 px-3.5 py-4 text-xs italic leading-5 text-white/35">
                        {row.boundary}
                      </td>
                      <td className="border-b border-white/10 px-3.5 py-4">
                        <Link
                          href={row.href}
                          className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-white"
                        >
                          Explore
                          <span className="transition-transform duration-200 group-hover:translate-x-1">
                            →
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
