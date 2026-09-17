import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { CtaButtons } from "./shared";

const EXPLORE_LINKS = [
  { label: "Explore manager workflows", href: "/managers" },
  { label: "Explore HR administration", href: "/hr-teams" },
  { label: "See the workforce data foundation", href: "/employee-records" },
  { label: "See AI governance", href: "/ai-governance" },
  { label: "Review trust and security", href: "/security-privacy" },
  { label: "Request pricing", href: "/pricing" },
];

export function PerformanceFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(49,94,251,0.18)_0%,transparent_100%)] py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Build a performance process people can understand — and your
              organization can govern.
            </h2>
            <p className="mx-auto mt-6 max-w-[520px] text-base leading-7 text-slate-400">
              See how Zoiko HR can bring goals, check-ins, reviews, feedback and
              development actions into one accountable workflow while keeping
              permissions, evidence and human judgment visible.
            </p>
            <CtaButtons variant="dark-solid" className="mt-8 sm:justify-center" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mx-auto mt-12 flex max-w-[1060px] flex-wrap justify-center gap-x-6 gap-y-3">
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
