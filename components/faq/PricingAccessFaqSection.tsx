import { Container, Reveal, Button, PlaceholderImage } from "@/components/ui";
import { FAQ_TOPICS } from "./faqData";

const topic = FAQ_TOPICS.find((t) => t.key === "pricing")!;

export function PricingAccessFaqSection() {
  return (
    <section id="pricing" className="bg-ink py-24 text-white">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pricing &amp; commercial access.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-2 text-white/60">{topic.description}</p>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            {topic.entries.map((entry, i) => (
              <Reveal key={entry.question} delay={0.06 + i * 0.06}>
                <div className="rounded-2xl bg-white/5 p-5 transition-all duration-300 hover:bg-white/[0.08]">
                  <p className="font-semibold">{entry.question}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {entry.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/faq/pricing.png"
              alt="Two colleagues shaking hands over a table"
              label="Pricing and commercial access"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-6 rounded-2xl bg-white/5 p-6">
            <p className="font-semibold">How do I get current pricing?</p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/60">
              Request current pricing through the sales team or book a
              demo to discuss your specific requirements and receive a
              tailored proposal.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/pricing">Request Pricing →</Button>
              <Button href="/book-a-demo" variant="outline" className="!border-white/30 !text-white hover:!border-primary hover:!text-primary">
                Book a Demo →
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.36}>
          <p className="mt-6 text-center text-xs text-white/40">
            Public FAQ explains pricing factors only. Current commercial
            truth belongs to Pricing authority.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
