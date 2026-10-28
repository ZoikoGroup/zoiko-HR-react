import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { CtaButtons } from "./shared";

const EXPLORE_LINKS = [
  { label: "Trust Center", href: "/trust-center" },
  { label: "Security & Privacy", href: "/security-privacy" },
  { label: "AI Governance", href: "/ai-governance" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Documentation", href: "/documentation" },
  { label: "Core HR", href: "/core-hr" },
];

export function InsightsFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(49,94,251,0.18)_0%,transparent_100%)] py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Workforce insight you can explain, defend and trust.
            </h2>
            <p className="mx-auto mt-6 max-w-[540px] text-base leading-7 text-slate-400">
              Defined metrics, visible sources, permission-safe access and honest
              data quality — the reporting model your teams can rely on.
            </p>
            <CtaButtons variant="dark-solid" className="mt-8 sm:justify-center" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mx-auto mt-12 flex max-w-[860px] flex-wrap justify-center gap-x-6 gap-y-3">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs font-medium text-indigo-400/80 transition-colors hover:text-white"
                >
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
