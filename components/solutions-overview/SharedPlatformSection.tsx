import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const PLATFORM_LINKS = [
  { label: "Platform Overview", href: "/platform" },
  { label: "Core HR", href: "/core-hr" },
  { label: "Global HR Management", href: "/global-hr-management" },
  { label: "Employee Records", href: "/employee-records" },
  { label: "Onboarding & Lifecycle", href: "/onboarding-lifecycle" },
  { label: "Workflows & Approvals", href: "/workflows-approvals" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
];

export function SharedPlatformSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Shared Platform Foundation
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink">
                One platform, seven evaluation pathways.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 leading-relaxed text-ink/70">
                Zoiko HR is a global HR management platform for structured,
                secure, and accountable people operations. Solution routes
                organize evaluation; product routes define the detailed
                platform area.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-6 border-l border-slate-200 pl-3 text-xs leading-5 text-ink/40">
                Shared controls: structured data · effective dates ·
                roles/permissions · approvals · audit/evidence ·
                integrations · exceptions · privacy/security
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <Link
                href="/platform"
                className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore the Zoiko HR Platform
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {PLATFORM_LINKS.map((link, i) => (
              <Reveal key={link.href} delay={Math.min(i * 0.05, 0.3)}>
                <Link
                  href={link.href}
                  className="block rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-xs font-medium text-ink/70 shadow-sm shadow-slate-900/[0.04] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-md hover:shadow-primary/10"
                >
                  {link.label}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
