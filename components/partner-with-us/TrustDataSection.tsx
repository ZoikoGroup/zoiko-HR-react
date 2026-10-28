import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export function TrustDataSection() {
  return (
    <section className="bg-[#0b1b2d] py-16">
      <Container>
        <SectionHeading
          eyebrow="Trust & data · E4.9"
          title="Trust, data and business boundaries"
          tone="dark"
        />

        <Reveal delay={0.08}>
          <div className="mt-8 flex items-start gap-4 rounded-xl border border-amber-500/40 bg-[#3a2a05] px-6 py-5">
            <span aria-hidden className="mt-0.5 flex-none text-amber-400">
              ◆
            </span>
            <div>
              <p className="text-sm font-semibold text-amber-400">
                Contract boundary
              </p>
              <p className="mt-1.5 text-sm leading-6 text-amber-200/90">
                Submitting a partner inquiry does not create a partnership,
                agency relationship, reseller arrangement, referral right,
                exclusivity, territory authorization, endorsement,
                certification, or any other contractual right. Those outcomes
                require separate authoritative workflows and agreements.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <PlaceholderImage
            src="/images/partner-with-us/trust-data.png"
            alt="Colleagues talking and laughing together at a work event"
            label="Trust and business boundaries"
            className="mt-8 aspect-[16/9] w-full rounded-xl bg-slate-900 sm:aspect-[21/9] lg:aspect-[1216/261]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
