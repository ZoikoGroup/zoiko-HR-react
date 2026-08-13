import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const ITEMS = [
  { title: "Purpose & minimization", description: "Document why a connection exists and share only required data, actions, and events." },
  { title: "Access & service identities", description: "Least privilege, separation, environment scope, custody, review, expiry, rotation, and revoke." },
  { title: "Data protection", description: "Approved encryption, classification, masking, and secure logs — specifics require validation." },
  { title: "Residency & transfers", description: "Source/target location, remote access, transfer, third party, and retention/deletion review." },
  { title: "AI governance", description: "No AI inference or autonomous employment decisions implied. Any AI requires approved purpose, permission, and human review." },
];

export function IntegrationsTrustSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Security, privacy & trust
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Diligence pathways, without unverified certifications.
            </h2>
            <p className="mt-4 text-ink/60">
              Purpose, minimization, least privilege, and residency review
              govern every connection.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href="/trust-center"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Visit the Trust Center
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/ai-governance"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                View AI Governance
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>

          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={0.06 + i * 0.05}>
                <div className="grid gap-1 py-4 sm:grid-cols-[1fr_1.6fr] sm:items-baseline sm:gap-6">
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className="text-sm leading-relaxed text-ink/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
