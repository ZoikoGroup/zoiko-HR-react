import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const CARDS = [
  {
    title: "Identity & access",
    description:
      "Authentication, role/scope, object/action, purpose and delegation as applicable.",
  },
  {
    title: "Data & privacy",
    description:
      "Purpose limitation, minimization, sensitivity, retention and controlled exports.",
  },
  {
    title: "Audit & change",
    description:
      "Attributable actions, policy/configuration versions and approval evidence.",
  },
  {
    title: "Shared responsibility",
    description:
      "Customer configuration, access assignments and compliance obligations remain customer-owned.",
  },
];

const LINKS = [
  { label: "Trust Center", href: "/trust-center" },
  { label: "Security & Privacy", href: "/security-privacy" },
  { label: "AI Governance", href: "/ai-governance" },
  { label: "Accessibility", href: "/accessibility" },
];

export function MidMarketTrustSection() {
  return (
    <section className="bg-[#0C2036] py-20 text-white">
      <Container>
        <Reveal>
          <h2 className="max-w-[700px] font-heading text-3xl font-extrabold">
            Trust controls, without moving detailed evidence off its
            authoritative home.
          </h2>
          <p className="mt-5 max-w-[700px] leading-6 text-[#B9C6DC]">
            Customer configuration, access assignments, data quality and
            compliance obligations remain shared responsibilities.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-[#16385A] bg-[#102A43] p-5">
                <p className="font-bold text-white">{card.title}</p>
                <p className="mt-2 text-xs leading-5 text-[#8FA3C4]">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#7FA6FF] hover:text-white"
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
