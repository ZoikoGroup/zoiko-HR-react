import { Container, Reveal, PlaceholderImage } from "@/components/ui";

export function PrivacySensitiveSection() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Privacy and Sensitive Information
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold">
            Privacy is built into the manager experience — not relegated to
            footer language.
          </h2>
          <p className="mt-4 max-w-[620px] leading-6 text-slate-400">
            This page does not define legal access rights or retention duties.
            Use approved privacy policies, DPA and customer configuration.
            Restricted data is not merely visually hidden.
          </p>
        </Reveal>

        <Reveal delay={0.14} y={30}>
          <PlaceholderImage
            src="/images/managers/privacy.png"
            alt="A manager taking notes beside a laptop and filed records"
            label="Privacy and sensitive information"
            className="mt-8 h-[360px] w-full rounded-xl bg-slate-950"
          />
        </Reveal>
      </Container>
    </section>
  );
}
