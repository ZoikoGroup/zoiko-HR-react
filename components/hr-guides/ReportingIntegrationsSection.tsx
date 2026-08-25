import { Container, Reveal } from "@/components/ui";

const CARDS = [
  {
    icon: "📊",
    title: "Reporting & Insights",
    border: "border-black/10",
    bullets: [
      "People ops dashboards",
      "Headcount and attrition views",
      "Review cycle reporting",
    ],
    dot: "text-primary",
  },
  {
    icon: "✅",
    title: "Data Quality",
    border: "border-emerald-400/40",
    bullets: [
      "Record completeness checks",
      "Effective-date audit",
      "Source ownership rules",
    ],
    dot: "text-emerald-500",
  },
  {
    icon: "🔌",
    title: "Integrations",
    border: "border-black/10",
    bullets: [
      "HRIS integration patterns",
      "SSO and provisioning",
      "API and webhook concepts",
    ],
    dot: "text-primary",
  },
  {
    icon: "🔗",
    title: "Connected HR-Time-Payroll",
    border: "border-amber-500/40",
    bullets: [
      "Time data sync concepts",
      "Payroll-relevant field mapping",
      "Cross-system effective dates",
    ],
    dot: "text-amber-500",
  },
];

export function ReportingIntegrationsSection() {
  return (
    <section className="bg-white py-18">
      <Container>
        <Reveal>
          <span className="font-heading text-xs font-bold uppercase tracking-wide text-primary">
            Reporting, Integrations &amp; Connected Operations
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold leading-10 text-slate-900">
            Data, insights, and connected systems
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.06 + i * 0.05} className="h-full">
              <div className={`h-full rounded-xl border bg-white p-5 ${card.border}`}>
                <span aria-hidden className="block text-lg leading-6">
                  {card.icon}
                </span>
                <p className="mt-3 font-heading font-bold text-slate-900">
                  {card.title}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span aria-hidden className={card.dot}>
                        ·
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.26}>
          <div className="mt-6 rounded-xl border border-black/10 bg-slate-50 px-5 py-4">
            <p className="text-sm leading-6 text-slate-500">
              Provider boundary: Integration guides describe Zoiko-side concepts
              only. Third-party provider documentation, credentials, and SLAs are
              managed by the respective provider.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
