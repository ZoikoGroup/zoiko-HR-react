import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const ROWS = [
  {
    topic: "Purpose / minimization",
    notes:
      "Data use tied to authorized purpose; minimal collection by default where applicable.",
    authority: "Privacy",
    route: "Privacy Notice →",
    href: "/trust-center",
  },
  {
    topic: "Data / sensitivity-aware access",
    notes: "Field and object-level sensitivity controls where supported.",
    authority: "Privacy / Security",
    route: "DPA →",
    href: "/data-processing-addendum",
  },
  {
    topic: "Configurable records",
    notes:
      "Customer-configurable data and privacy settings — detail in product documentation.",
    authority: "Product",
    route: "Documentation →",
    href: "/documentation",
  },
  {
    topic: "Correction / audit",
    notes: "Correction and audit capability where supported and approved.",
    authority: "Privacy / Product",
    route: "Privacy Notice →",
    href: "/trust-center",
  },
  {
    topic: "Lifecycle / deletion",
    notes: "Tied to Privacy Notice, DPA and contract. Not established by this page alone.",
    authority: "Privacy / Legal",
    route: "DPA →",
    href: "/data-processing-addendum",
  },
  {
    topic: "Admin / support access",
    notes: "Scoped, authorized, logged and evidence-backed. No blanket access implied.",
    authority: "Security / Privacy",
    route: "Evidence directory →",
    href: "#security-review",
  },
  {
    topic: "Integration handoffs",
    notes:
      "Privacy considerations for integration boundaries where applicable and supported.",
    authority: "Privacy / Product",
    route: "Documentation →",
    href: "/documentation",
  },
];

export function PrivacyEngineeringSection() {
  return (
    <section className="border-b border-white/5 bg-[#0A1B2E] py-16 text-white sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 09"
          title="Privacy engineering and support access."
          tone="dark"
        >
          Privacy-aware design within legal-source boundaries. AI-specific data
          use belongs to AI Governance. Zoiko HR does not provide legal, tax or
          compliance advice.
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="mt-9 overflow-hidden rounded-xl border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full min-w-225 border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th
                      scope="col"
                      className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-slate-500"
                    >
                      Topic
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-slate-500"
                    >
                      Scope / notes
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-slate-500"
                    >
                      Authority
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-slate-500"
                    >
                      Route
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, i) => (
                    <tr
                      key={row.topic}
                      className={`border-b border-white/5 last:border-b-0 ${
                        i % 2 === 1 ? "bg-white/[0.02]" : ""
                      }`}
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left text-sm font-semibold text-white"
                      >
                        {row.topic}
                      </th>
                      <td className="px-5 py-4 text-xs leading-5 text-slate-400">
                        {row.notes}
                      </td>
                      <td className="px-5 py-4 font-mono text-xs text-slate-500">
                        {row.authority}
                      </td>
                      <td className="px-5 py-4">
                        <Link
                          href={row.href}
                          className="text-xs font-semibold text-primary hover:text-white"
                        >
                          {row.route}
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
