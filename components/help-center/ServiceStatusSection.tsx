import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function ServiceStatusSection() {
  return (
    <section id="service-status" className="bg-[#102A43] py-16 text-white sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Service status &amp; known issues.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 leading-relaxed text-white/60">
                Service Status is the single authoritative source for live
                availability and incidents. The Help Center does not cache or
                restate a status here.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <Link
                href="/resources"
                className="mt-5 inline-block text-sm font-semibold text-primary hover:text-white"
              >
                View Service Status →
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="rounded-xl border border-white/10 bg-[#1E3450] p-6">
              <p className="text-sm text-white/50">
                Status information is unavailable here by design.
              </p>
              <p className="mt-2 text-sm font-semibold leading-relaxed">
                Check the authoritative Service Status page for current
                availability and incident history.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
