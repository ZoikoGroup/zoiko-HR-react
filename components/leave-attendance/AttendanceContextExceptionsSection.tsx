import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function AttendanceContextExceptionsSection() {
  return (
    <section className="bg-[#0a0f1e] py-24 text-white">
      <Container>
        <Reveal>
          <div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/10 p-5">
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary/20 text-primary" aria-hidden>
              ⊘
            </span>
            <div>
              <p className="font-semibold">
                Anti-surveillance boundary — this is not a time-clock or
                monitoring dashboard
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                Leave &amp; Attendance may display configured attendance
                and absence context only from approved sources and
                purposes. It must not infer productivity, misconduct,
                engagement, health, location, or intent from presence,
                badge, calendar, Wi-Fi, GPS or time data. Time capture
                and classification remain with the approved time system.
                Attendance exception does not automatically equal policy
                violation or disciplinary outcome.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Reveal delay={0.06}>
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                Attendance context &amp; exceptions
              </span>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Sourced attendance exceptions — purpose and source
                explicit
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-white/60">
                Every exception shows its category, source, freshness
                and required review action. Workers can see their own
                relevant record and a correction or support path where
                the product supports it.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={30}>
            <PlaceholderImage
              src="/images/leave-attendance/attendance-context.webp"
              alt="Colleagues chatting near an ID badge in an office"
              label="Purpose and source explicit"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
