import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function SecurityReportingHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0A1B2E_100%)] py-16 text-white sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex rounded-full border border-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-indigo-400">
                Security Reporting
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Report a potential Zoiko HR security vulnerability through the
                responsible security route.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-lg text-lg leading-7 text-slate-400">
                Use the approved security channel for potential vulnerabilities.
                Review current scope and testing rules before taking action.
                This is not a product support, privacy, or service-status
                route.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="#report-intake"
                  className="rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Report a Potential Vulnerability
                </Link>
                <Link
                  href="#scope-registry"
                  className="rounded-xl border border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:border-primary hover:text-primary"
                >
                  Review Scope and Rules →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs">
                <span className="flex items-center gap-2 text-slate-400">
                  Intake status:
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                    Operational
                  </span>
                </span>
                <span className="flex items-center gap-2 text-slate-400">
                  Policy:
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                    Current
                  </span>
                </span>
                <Link
                  href="/trust-center"
                  className="font-semibold text-slate-400 hover:text-white"
                >
                  Security &amp; Privacy →
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/security-reporting/hero.png"
              alt="A security team reviewing threat monitoring dashboards"
              label="Security team reviewing dashboards"
              className="w-full rounded-3xl bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
