import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function DataMappingAuthoritySection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Data mapping & authority
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Every field has a source, a direction, and an owner.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                No sensitive value is silently overwritten by a &quot;last
                write wins&quot; rule.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <Link
                href="/developer-documentation"
                className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Review the authority model
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/integrations/data-mapping-authority.png"
              alt="Hand pointing at analytics charts on a monitor"
              label="A source, a direction, an owner"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-slate-900/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
