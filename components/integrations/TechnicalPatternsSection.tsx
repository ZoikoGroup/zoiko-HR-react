import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const PATTERNS = [
  { title: "API request/response", description: "Approved authenticated operations, schema, validation, and versioning.", color: "border-primary" },
  { title: "Events/webhooks", description: "Approved catalogue, subscriptions, ordering, retries, and replay.", color: "border-emerald-400" },
  { title: "File/batch", description: "Approved secure transfer, manifest, checksums, and reconciliation.", color: "border-amber-400" },
  { title: "Managed connector", description: "Provider-specific configuration, mapping, and monitoring after verification.", color: "border-violet-400" },
];

export function TechnicalPatternsSection() {
  return (
    <section className="bg-slate-50/60 py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Technical patterns
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              APIs, events, webhooks, and file connections.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              Select a pattern by criticality, latency, volume, sensitivity,
              and recovery — not simplistic preference. Specifics require
              validated documentation.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PATTERNS.map((pattern, i) => (
            <Reveal key={pattern.title} delay={0.1 + i * 0.06}>
              <div className={`border-t-2 ${pattern.color} pt-4`}>
                <p className="font-semibold text-ink">{pattern.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {pattern.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <Link
            href="/resources/developer-documentation"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            View Developer Documentation
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
