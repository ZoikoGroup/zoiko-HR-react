import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const ROWS = [
  {
    asset: "Zoiko-controlled product/service",
    assetLink: true,
    authorization: "Covered by approved scope record (if established)",
    action: "Report through this page",
    actionLink: true,
  },
  {
    asset: "Shared integration boundary",
    authorization:
      "Report issue in Zoiko-controlled layer only; do not probe external service beyond approved scope",
    action: "Report what affects Zoiko's layer; stop at the boundary",
  },
  {
    asset: "Third-party provider / vendor",
    authorization:
      "Not authorized under Zoiko policy. Being a Zoiko subprocessor does not make provider assets testable.",
    action: "Stop testing. Report suspected issue with minimal evidence if appropriate.",
  },
  {
    asset: "Customer-managed infrastructure",
    authorization: "Customer configuration/infrastructure is not automatically in scope.",
    action: "Route to customer's own security process.",
  },
  {
    asset: "Partner / integration asset",
    authorization: "Integration availability does not make external system testable under Zoiko policy.",
    action: "Stop. Identify asset owner and use their reporting route.",
  },
  {
    asset: "Unknown owner / unclear boundary",
    authorization: "Not established",
    action:
      "Stop testing. Use Zoiko Security Reporting with minimal evidence if Zoiko's services are affected.",
  },
];

export function ThirdPartyBoundariesSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 12"
          title="Third-party, integration and asset-ownership boundaries."
        >
          Integration or subprocessor relationships do not authorize testing
          third-party assets. Asset ownership determines the correct reporting
          route.
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-200 border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100">
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400"
                    >
                      Asset / ownership type
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400"
                    >
                      Testing authorization
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row, i) => (
                    <tr
                      key={row.asset}
                      className={`border-b border-slate-100 last:border-b-0 ${
                        i === 0 ? "bg-blue-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50"
                      }`}
                    >
                      <td className="px-5 py-4 align-top text-sm font-semibold">
                        {row.assetLink ? (
                          <Link
                            href="#scope-registry"
                            className="text-primary hover:text-primary-dark"
                          >
                            {row.asset}
                          </Link>
                        ) : (
                          <span className="text-ink">{row.asset}</span>
                        )}
                      </td>
                      <td className="px-5 py-4 align-top text-xs leading-5 text-slate-500">
                        {row.authorization}
                      </td>
                      <td className="px-5 py-4 align-top text-xs font-semibold leading-5">
                        {row.actionLink ? (
                          <Link
                            href="#report-intake"
                            className="text-primary hover:text-primary-dark"
                          >
                            {row.action}
                          </Link>
                        ) : (
                          <span className="text-ink">{row.action}</span>
                        )}
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
