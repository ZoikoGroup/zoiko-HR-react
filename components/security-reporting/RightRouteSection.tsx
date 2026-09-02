import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";
import { WarningIcon } from "./icons";

const ROWS = [
  {
    label: "Potential security vulnerability",
    tag: null,
    description: "Weakness in a Zoiko-controlled product, service, or asset.",
    route: "Security Reporting",
    action: { label: "Report here →", href: "#report-intake", primary: true },
  },
  {
    label: "Suspected account compromise",
    tag: "Restricted",
    description:
      "Unauthorized access to your own account — get immediate help without reproducing an exploit.",
    route: "Contact Support",
    action: { label: "Go to route →", href: "/contact-support", primary: false },
  },
  {
    label: "Product / functional bug",
    tag: null,
    description:
      "Functional defect without security impact — no vulnerability evidence required.",
    route: "Support / Documentation",
    action: { label: "Go to route →", href: "/documentation", primary: false },
  },
  {
    label: "Service outage / availability",
    tag: null,
    description: "Performance or availability incident — not a vulnerability report.",
    route: "Service Status / Support",
    action: { label: "Go to route →", href: "/service-status", primary: false },
  },
];

export function RightRouteSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Section 03" title="Is this the right route?">
          Identify your issue category before providing details. Do not submit
          vulnerability evidence through the wrong channel.
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-175 border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100">
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400"
                    >
                      Issue type
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400"
                    >
                      Route
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
                      key={row.label}
                      className={`border-b border-slate-100 last:border-b-0 ${
                        i === 0
                          ? "bg-blue-50"
                          : i % 2 === 0
                            ? "bg-white"
                            : "bg-slate-50"
                      }`}
                    >
                      <td className="px-5 py-4 align-top">
                        <span className="flex items-start gap-2">
                          {i === 0 && (
                            <span
                              aria-hidden
                              className="mt-1.5 size-1.5 flex-none rounded-full bg-primary"
                            />
                          )}
                          <span>
                            <span className="flex flex-wrap items-center gap-2">
                              <span
                                className={`text-sm font-semibold ${
                                  i === 0 ? "text-primary" : "text-ink"
                                }`}
                              >
                                {row.label}
                              </span>
                              {row.tag && (
                                <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold text-amber-500">
                                  {row.tag}
                                </span>
                              )}
                            </span>
                            <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                              {row.description}
                            </span>
                          </span>
                        </span>
                      </td>
                      <td className="px-5 py-4 align-top text-xs font-semibold text-slate-700">
                        {row.route}
                      </td>
                      <td className="px-5 py-4 align-top">
                        {row.action.primary ? (
                          <Link
                            href={row.action.href}
                            className="inline-flex rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-dark"
                          >
                            {row.action.label}
                          </Link>
                        ) : (
                          <Link
                            href={row.action.href}
                            className="text-xs font-semibold text-slate-500 hover:text-primary"
                          >
                            {row.action.label}
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <PlaceholderImage
              src="/images/security-reporting/is-this-the-right-route.png"
              alt="A security lead briefing the team on a detected threat"
              label="Briefing the team on a detected threat"
              className="aspect-video w-full sm:aspect-[1216/266]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-6 flex max-w-2xl items-start gap-2.5 rounded-xl border border-rose-400/20 bg-rose-400/5 px-4 py-3">
            <WarningIcon className="mt-0.5 size-4 flex-none text-rose-400" />
            <p className="text-xs leading-5 text-rose-400">
              Do not submit vulnerability details, credentials, secrets, or
              exploit evidence through sales channels, general contact forms,
              or standard support tickets.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
