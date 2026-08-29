import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function VersionCompatibilitySection() {
  return (
    <section className="bg-[#102A43] py-16 text-white sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                Version &amp; release compatibility.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 leading-relaxed text-white/70">
                If a release changes a procedure, the article is updated with
                compatibility context — the old procedure becomes deprecated or
                superseded. Release chronology and announcements belong to
                Product Updates.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <Link
                href="/resources"
                className="mt-5 inline-block text-sm font-semibold text-primary hover:text-white"
              >
                View Product Updates →
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="rounded-xl border border-white/10 bg-[#1E3450] p-6">
              <p className="text-sm text-white/50">
                Future or unreleased behavior is never documented as current.
              </p>
              <p className="mt-2 text-sm font-semibold leading-relaxed">
                Current canonical guidance always outranks replaced or
                superseded content.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
