import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function IntegrationsSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-ink/50">
              Section 14 — Integrations
            </span>
            <Reveal delay={0.04}>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Connect HR information and workflows to approved business
                systems.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-ink/60">
                Integration categories and connection patterns are approved
                for publication. Specific providers, scopes, data flows,
                regions, plans, and availability require verification and
                approval before publication.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50/60 p-5">
                <p className="text-sm font-semibold text-ink">
                  Authoritative-source rule
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  For each field or event, identify which system creates,
                  approves, owns, and updates the authoritative value. Zoiko
                  HR does not silently overwrite, duplicate, or discard
                  conflicting data.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-2">
                <Link
                  href="/integrations"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Explore Integrations
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href="/integrations"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  Connect HR, Time & Payroll
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.16} y={36}>
              <PlaceholderImage
                src="/images/global-hr/integrations.png"
                alt="Two colleagues discussing integration requirements"
                label="Approved business systems"
                fit="contain"
                className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
              />
            </Reveal>
            <p className="mt-3 text-xs text-ink/40">
              No provider logo or active integration appears without
              confirmed availability. Provider availability and integration
              scopes require verification.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
