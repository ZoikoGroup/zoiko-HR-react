import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function IntegrationsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                Integrations &amp; connected workflows.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 leading-relaxed text-slate-600">
                This destination explains approved business purpose, setup
                boundary, prerequisites, connection state, permissions, and
                user-visible outcomes for connected products.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                We never show real API keys, tokens, client secrets,
                credentials, tenant IDs, or webhook secrets here.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wide text-teal-600">
                Developer Documentation owns
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                API endpoints, authentication, tokens, scopes, SDKs,
                webhooks/events, payloads, rate limits, errors, and code
                examples.
              </p>
              <Link
                href="/integrations"
                className="mt-4 inline-block font-semibold text-primary hover:text-primary-dark"
              >
                Open Developer Documentation →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
