import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

export function CareersCultureSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Careers &amp; leadership culture.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-5 leading-relaxed text-ink/60">
                Candidates can explore verified career opportunities, employer
                information, and the Zoiko HR hiring process through the Careers
                destination. Open roles, locations, benefits, and hiring terms
                are maintained there — not on this page.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-800">
                No open-role counts, salary information, hiring commitments, or
                remote-policy promises appear on this page.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-2xl bg-ink p-6 text-white">
              <p className="font-bold">Careers</p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Explore open roles and employer information across approved
                Zoiko Group entities.
              </p>
              <Link
                href="/company/careers"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold transition-colors duration-200 hover:border-primary hover:bg-primary"
              >
                Explore Careers →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
