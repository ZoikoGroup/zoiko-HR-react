import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ASSURANCE = [
  {
    icon: "🤖",
    link: "AI Governance page →",
    href: "/ai-governance",
    title: "AI Governance",
    body: "No autonomous employment decisions. Human-accountable where applied.",
  },
  {
    icon: "♿",
    link: "Accessibility statement →",
    href: "/accessibility",
    title: "Accessibility",
    body: "WCAG 2.2 AA target — keyboard, screen reader, zoom/reflow guidance.",
  },
  {
    icon: "📄",
    link: "DPA / Subprocessors →",
    href: "/security-privacy",
    title: "Data Processing",
    body: "DPA, subprocessors and relevant data-flow resources.",
  },
  {
    icon: "📡",
    link: "Status page / Product Updates →",
    href: "/service-status",
    title: "Service Reliability",
    body: "Service Status and Product Updates remain authoritative for live truth.",
  },
];

export function TrustSecurityGovernanceSection() {
  return (
    <section className="bg-[#0a1220] py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Trust, Security &amp; Governance
          </span>
          <h2 className="mt-3 max-w-[520px] font-heading text-3xl font-bold leading-10">
            Reach authoritative assurance routes — not summaries masquerading as
            evidence.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 px-5 py-4">
            <p className="text-xs font-semibold text-red-400">
              Professional boundary
            </p>
            <p className="mt-1.5 text-xs leading-5 text-slate-400">
              Zoiko HR software does not provide legal, tax, payroll, employment
              or compliance advice and does not guarantee compliance. No
              certification/compliance badges appear without approved evidence.
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_repeat(2,minmax(0,1fr))]">
          <Reveal delay={0.12} className="h-full lg:row-span-2">
            <PlaceholderImage
              src="/images/resource-center/trust-security-governance.png"
              alt="Four colleagues talking around a laptop"
              label="Trust and governance"
              className="h-full min-h-64 w-full rounded-xl bg-white"
            />
          </Reveal>

          {ASSURANCE.map((card, i) => (
            <Reveal key={card.title} delay={0.16 + i * 0.05} className="h-full">
              <Link
                href={card.href}
                className="block h-full rounded-xl border border-white/10 bg-[#0e1b2e] p-5 transition-colors hover:border-white/25"
              >
                <div className="flex items-start justify-between gap-3">
                  <span aria-hidden className="text-lg leading-6">
                    {card.icon}
                  </span>
                  <span className="text-right text-[10px] font-semibold leading-4 text-indigo-400">
                    {card.link}
                  </span>
                </div>
                <p className="mt-3 font-heading font-bold text-white">
                  {card.title}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-slate-400">
                  {card.body}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
