import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const CARDS = [
  {
    badge: "Trust Centre",
    title: "Security overview",
    body: "Architecture, controls and access model — current approved scope",
    href: "/trust-center",
  },
  {
    badge: "Trust Centre",
    title: "Compliance documentation",
    body: "Validated certifications — scope confirmed before rendering",
    href: "/trust-center",
  },
  {
    badge: "Legal / Privacy",
    title: "Privacy and DPA",
    body: "Data processing addendum, jurisdiction coverage, retention",
    href: "/dpa",
  },
  {
    badge: "Product — Auditor role",
    title: "Audit log access",
    body: "Access and change log export for authorized auditors",
    href: "/security-privacy",
  },
  {
    badge: "Trust Centre / AI Governance",
    title: "AI Governance",
    body: "No hidden AI employment decisions. Future assistance requires permissions, transparency, human review and logging.",
    href: "/ai-governance",
  },
  {
    badge: "Accessibility",
    title: "Accessibility statement",
    body: "WCAG 2.2 AA target; current conformance/limitations; feedback route",
    href: "/accessibility",
  },
];

export function TrustGovernanceSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Trust, Security and AI Governance
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900">
            Evidence-first. Human authority explicit. No unverified
            certification badges.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-500">
            Only current approved evidence renders. No AI model should
            auto-approve or auto-reject employment actions based on this
            specification.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.06 + i * 0.05} className="h-full">
              <div className="relative h-full pt-5">
                <span className="absolute left-5 top-0 z-10 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold text-white">
                  {card.badge}
                </span>
                <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white px-5 pb-5 pt-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                  <p className="font-semibold text-slate-900">{card.title}</p>
                  <p className="mt-2 flex-1 text-xs leading-5 text-slate-500">
                    {card.body}
                  </p>
                  <Link
                    href={card.href}
                    className="group mt-3 inline-flex items-center gap-1.5 self-start text-xs font-semibold text-primary hover:text-primary-dark"
                  >
                    View
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
