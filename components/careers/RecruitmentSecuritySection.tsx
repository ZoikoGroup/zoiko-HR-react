import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function RecruitmentSecuritySection() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-600">
                Recruitment Security
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
                Verify Before You Apply
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-ink/60">
                Recruitment fraud is a risk for job seekers. Use only
                official Zoiko HR channels when applying for roles or
                responding to outreach. If something seems unusual,
                verify through the official contact route before
                proceeding.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-5 rounded-xl border-l-4 border-amber-400 bg-amber-50 px-5 py-3.5 text-sm text-amber-900">
                Specific security guidance derives from the Recruitment
                Security Policy record.
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <a
                href="/contact-us"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-rose-600/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-700 hover:shadow-lg hover:shadow-rose-600/40"
              >
                Report a concern
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/careers/recruitment-security.png"
              alt="Colleagues discussing at a table"
              label="Verify before you apply"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
