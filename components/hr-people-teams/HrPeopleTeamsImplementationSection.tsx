import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const STEPS = [
  { number: "01", title: "Discover", description: "Confirm workforce groups, policies, jurisdictions, roles, systems, employee-relations requirements and success measures." },
  { number: "02", title: "Configure", description: "Set policy profiles, classifications, schedules, review routes, permissions and evidence requirements." },
  { number: "03", title: "Integrate", description: "Connect approved HR, payroll, identity, calendar and communication systems; validate data ownership and failure handling." },
  { number: "04", title: "Pilot and Communicate", description: "Run a representative pilot, train managers and reviewers, provide worker-facing explanations and complete consultation where required." },
  { number: "05", title: "Roll Out and Improve", description: "Release by agreed cohorts, monitor adoption and exception patterns, review success metrics and manage controlled policy changes." },
];

const LINKS = [
  { label: "Getting Started", href: "/resources/product-tour" },
  { label: "Help Center", href: "/help-center" },
  { label: "Product Documentation", href: "/resources/developer-documentation" },
];

export function HrPeopleTeamsImplementationSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Implementation & adoption
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Deployment Includes People, Not Just Software.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Policy design, data integration, employee communication,
              pilot validation, and ongoing success.
            </p>
          </Reveal>
        </div>

        <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={0.08 + i * 0.05}>
              <div className="flex items-start gap-4 py-4">
                <span className="font-serif text-lg italic text-emerald-500/60">
                  {step.number}
                </span>
                <div>
                  <p className="font-semibold text-ink">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700"
              >
                {link.label}
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
