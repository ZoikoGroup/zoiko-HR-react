import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const CARDS = [
  {
    title: "Identity & access",
    body: "Authentication, role/entity scope, object/action and delegation as applicable.",
  },
  {
    title: "Data & privacy",
    body: "Purpose limitation, entity scope, sensitivity, retention and controlled exports.",
  },
  {
    title: "Audit & change",
    body: "Attributable actions, structural/configuration versions and approval evidence.",
  },
  {
    title: "Shared responsibility",
    body: "Customer configuration, entity relationships and compliance obligations remain customer-owned.",
  },
];

const LINKS = [
  { label: "Trust Center", href: "/trust-center" },
  { label: "Security & Privacy", href: "/security-privacy" },
  { label: "AI Governance", href: "/ai-governance" },
  { label: "Accessibility", href: "/accessibility" },
];

export function StructuralClaimsSection() {
  return (
    <section className="bg-sky-950 py-20 text-white">
      <Container>
        <Reveal className="max-w-[760px]">
          <h2 className="font-heading text-3xl font-extrabold">
            Structural claims stay qualified, evidence stays reviewable.
          </h2>
          <p className="mt-3.5 leading-6 text-slate-300">
            Zoiko HR provides software for workforce administration. It does not
            provide legal, tax, payroll, employment, immigration or compliance
            advice and does not guarantee compliance.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.08 + i * 0.06}>
              <div className="h-full rounded-xl border border-blue-950 bg-slate-900 p-5">
                <p className="text-sm font-bold">{card.title}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-6 flex flex-wrap gap-6">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-white"
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
