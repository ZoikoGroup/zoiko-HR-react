import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const ROWS = [
  {
    property: "Availability",
    test: "[From Environment Registry]",
    production: "[From Environment Registry]",
  },
  {
    property: "Base / reference",
    test: "[Approved reference context]",
    production: "[Approved reference context]",
  },
  {
    property: "Credentials",
    test: "Separate test credentials — see Auth",
    production: "Production credentials — never shared",
  },
  {
    property: "Data rules",
    test: "Synthetic data only. No real employee or customer data.",
    production: "Real data — personal-data handling per approved policy.",
  },
  {
    property: "Parity / limits",
    test: "[Known differences from approved source]",
    production: "Authoritative production contract.",
  },
  {
    property: "Promotion",
    test: "Complete approved readiness steps first.",
    production: "Use after approved readiness review.",
  },
  {
    property: "Cleanup",
    test: "Remove test records / webhook subs if supported.",
    production: "Governed by approved retention policy.",
  },
];

export function EnvironmentsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 11"
          title="Environments, testing and implementation safety."
        >
          Approved environments only. Sandbox, staging, and test environments
          are not assumed — they appear only when the Environment Registry
          establishes them.
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="mt-9 overflow-hidden rounded-xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-200 border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th
                      scope="col"
                      className="w-1/3 px-5 py-3.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400"
                    >
                      Property
                    </th>
                    <th scope="col" className="px-5 py-3.5">
                      <span className="flex items-center gap-2 text-sm font-bold text-ink">
                        <span
                          aria-hidden
                          className="size-2 rounded-full bg-amber-400"
                        />
                        Test environment
                      </span>
                    </th>
                    <th scope="col" className="px-5 py-3.5">
                      <span className="flex items-center gap-2 text-sm font-bold text-ink">
                        <span
                          aria-hidden
                          className="size-2 rounded-full bg-emerald-400"
                        />
                        Production
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr
                      key={row.property}
                      className="border-b border-slate-100 last:border-b-0 odd:bg-white even:bg-slate-50/60"
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-left text-sm font-semibold text-ink"
                      >
                        {row.property}
                      </th>
                      <td className="px-5 py-4 text-sm text-slate-600">
                        {row.test}
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-600">
                        {row.production}
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
