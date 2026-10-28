import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const GUIDANCE = [
  {
    number: "01",
    title: "What you do",
    body: "Describe the product, service, advisory, channel, or ecosystem capability your organization offers.",
  },
  {
    number: "02",
    title: "Who or what it helps",
    body: "Describe the HR or workforce use case your capability could address — at a non-confidential level.",
  },
  {
    number: "03",
    title: "Where you operate",
    body: "State your organization's location and intended operating regions. This is for routing — it does not grant territory rights.",
  },
];

export function RoutingGuidanceSection() {
  return (
    <section className="bg-slate-950 py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-16">
          <SectionHeading
            eyebrow="Routing guidance · E4.4"
            title="What helps us route your inquiry"
            tone="dark"
          >
            This is not a hidden eligibility checklist. It is guidance on what
            context makes it possible to route your inquiry to the appropriate
            team.
          </SectionHeading>

          <div className="grid gap-5 sm:grid-cols-2">
            {GUIDANCE.map((item, i) => (
              <Reveal key={item.number} delay={0.06 + i * 0.06}>
                <div className="h-full rounded-xl border border-blue-950 bg-slate-900 px-6 py-5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs leading-4 text-primary">
                      {item.number}
                    </span>
                    <span aria-hidden className="h-px flex-1 bg-blue-950" />
                  </div>
                  <h3 className="pt-3 text-sm font-semibold leading-5 text-white">
                    {item.title}
                  </h3>
                  <p className="pt-2 text-xs leading-5 text-slate-400">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <PlaceholderImage
                src="/images/partner-with-us/routing-guidance.png"
                alt="A group of colleagues standing together in an office"
                label="Routing your inquiry"
                className="h-full min-h-40 w-full rounded-xl border border-blue-950 bg-slate-900"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
