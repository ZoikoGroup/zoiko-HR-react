import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function LeadershipNoticeSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Accountable leadership, published separately.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-4 text-white/60">
                Leadership accountability for Zoiko Group and its portfolio
                entities is documented in the Leadership section of
                Company. Executive biographies, organizational
                accountability, and governance context are maintained
                there, not on this page.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-xs italic text-white/40">
                No executive names appear on this page unless sourced from
                the Leadership registry and required for group context.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/about-zoiko-group/leadership-notice.png"
              alt="Colleagues discussing notes in a meeting"
              label="Leadership, published separately"
              fit="contain"
              className="w-full rounded-2xl border border-white/10"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
