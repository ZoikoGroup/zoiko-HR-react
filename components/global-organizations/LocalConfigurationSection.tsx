import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function LocalConfigurationSection() {
  return (
    <section className="border-t border-white/10 bg-slate-950 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Local Configuration, Variants and Exceptions
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold">
            Governed local variation — owned, versioned, reviewable.
          </h2>
          <p className="mt-4 max-w-[660px] leading-6 text-slate-400">
            Local configuration is a governed product concept. Professional
            determinations remain qualified and external where required.
          </p>
        </Reveal>

        <Reveal delay={0.12} y={36}>
          <PlaceholderImage
            src="/images/global-organizations/local-configuration.png"
            alt="A team reviewing configuration dashboards on a large screen"
            label="Governed local variation"
            className="mt-6 h-72 w-full rounded-xl border border-white/10 bg-sky-950"
          />
        </Reveal>
      </Container>
    </section>
  );
}
