import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { ArrowLink, SourceToken } from "./shared";

const STAMPS = [
  { label: "Effective date:", token: "LEGAL-APPROVED DATE" },
  { label: "Last updated:", token: "LEGAL-APPROVED DATE" },
  { label: "Version:", token: "VERSION ID" },
];

export function PrivacyHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#0A1B2E] bg-[radial-gradient(120%_100%_at_50%_0%,#22406B_0%,#102A43_55%,#0F172A_100%)] py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,490px)]">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase leading-4 tracking-[0.1em] text-primary">
                Legal &amp; Privacy
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Privacy Notice
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[720px] text-base leading-7 text-white/90">
                This notice explains how Zoiko HR handles personal information
                when you visit our websites, communicate with us, evaluate or
                use our services, or otherwise interact with Zoiko HR in
                contexts where we determine how that information is used.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <dl className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                {STAMPS.map((stamp) => (
                  <div key={stamp.label} className="flex items-center gap-2">
                    <dt className="text-xs leading-5 text-white/80">
                      {stamp.label}
                    </dt>
                    <dd>
                      <SourceToken>{stamp.token}</SourceToken>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-4">
                <ArrowLink href="#changes">View change history</ArrowLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/privacy-notice/hero.png"
              alt="A printed privacy policy on a notepad with a pen resting on it"
              label="Privacy policy document"
              className="aspect-[490/391] w-full rounded-2xl bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
