import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";
import { FlowSteps } from "./FlowSteps";
import { ProhibitedIcon } from "./icons";

const FLOW = [
  "Prepare",
  "Detect / report",
  "Triage / classify",
  "Contain / mitigate",
  "Investigate",
  "Recover / validate",
  "Communicate",
  "Post-incident review",
];

const ROUTES = [
  {
    label: "Service Status →",
    description: "Public availability and current incidents.",
    href: "/service-status",
  },
  {
    label: "Contact Support →",
    description: "Customer-specific service issues.",
    href: "/contact-support",
  },
  {
    label: "Privacy / Legal →",
    description: "Data-protection and notification obligations.",
    href: "/trust-center",
  },
  {
    label: "Security Reporting →",
    description: "Vulnerability reports — always a distinct and separate route.",
    href: "/security-reporting",
    accent: true,
  },
];

const BOUNDARIES = [
  {
    title: "No notification timing",
    description:
      "Notification timing belongs to applicable law, DPA and contract — not this page.",
  },
  {
    title: "No severity classification",
    description:
      "Internal severity schema is restricted. Incident-specific facts are source and authorization controlled.",
  },
];

export function IncidentManagementSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 07"
          title="Incident management and customer communication."
        >
          Operating model and routes only. No notification hour/day promise,
          severity schema, MTTD/MTTR or &quot;zero incidents&quot; claim.
        </SectionHeading>

        <Reveal delay={0.1}>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-5 py-4">
            <FlowSteps steps={FLOW} />
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ROUTES.map((route, i) => (
            <Reveal key={route.label} delay={Math.min(i * 0.06, 0.3)}>
              <Link
                href={route.href}
                className={`flex h-full flex-col rounded-2xl border px-5 py-4 transition-colors ${
                  route.accent
                    ? "border-primary/30 bg-blue-50 hover:border-primary"
                    : "border-slate-200 bg-white hover:border-primary/40"
                }`}
              >
                <span
                  className={`text-sm font-semibold ${
                    route.accent ? "text-primary" : "text-ink"
                  }`}
                >
                  {route.label}
                </span>
                <span className="mt-1.5 text-xs leading-5 text-slate-500">
                  {route.description}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 space-y-3">
          {BOUNDARIES.map((boundary, i) => (
            <Reveal key={boundary.title} delay={Math.min(i * 0.08, 0.3)}>
              <div className="flex max-w-3xl items-start gap-2.5 rounded-xl border border-rose-400/20 bg-rose-400/5 px-4 py-3">
                <ProhibitedIcon className="mt-0.5 size-4 flex-none text-rose-400" />
                <p className="text-xs leading-5 text-rose-400">
                  <span className="font-semibold">{boundary.title}</span> —{" "}
                  {boundary.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
