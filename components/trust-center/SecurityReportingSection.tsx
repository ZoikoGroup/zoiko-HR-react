import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function SecurityReportingSection() {
  return (
    <section
      id="security-reporting"
      className="bg-[#102A43] py-16 text-white sm:py-20"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                Security reporting.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-4 leading-relaxed text-slate-300">
                Report a vulnerability responsibly through the correct channel —
                not through general sales or support forms.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <Link
                href="#procurement-request"
                className="mt-6 block w-full rounded-lg bg-red-400 px-6 py-3.5 text-center font-bold text-white transition-colors hover:bg-red-500 sm:inline-block sm:w-auto"
              >
                Report a Security Issue →
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <PlaceholderImage
              src="/images/trust-center/security-reporting.png"
              alt="A team reviewing hiring plans together in a meeting room"
              label="Security reporting"
              className="aspect-[9/4] w-full rounded-xl border border-cyan-900 bg-blue-950"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
