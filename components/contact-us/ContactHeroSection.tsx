import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function ContactHeroSection() {
  return (
    <section className="bg-slate-900 bg-[radial-gradient(110%_90%_at_50%_0%,#164e63_0%,#082f49_55%,#0f172a_100%)] py-16 text-white sm:py-20">
      <Container>
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
            Connect 01 of 07
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[67.2px]">
            Contact Us
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-[560px] text-lg leading-7 text-slate-500">
            Choose the right path. Each route reaches the team best placed to
            help.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <PlaceholderImage
            src="/images/contact-us/hero.png"
            alt="Two colleagues smiling during a conversation"
            label="Contact Zoiko HR"
            className="mt-12 aspect-[16/9] w-full rounded-2xl bg-white sm:aspect-[21/9] lg:aspect-[1152/384]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
