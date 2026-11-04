import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const PRACTICES = [
  {
    title: "Shared agenda",
    body: "Same goals, dates and agreed actions visible to permitted participants.",
  },
  {
    title: "Action tracking",
    body: "Action items assigned to named owners with target dates and follow-up.",
  },
  {
    title: "Visibility clarity",
    body: "Private notes clearly separated from shared review evidence.",
  },
  {
    title: "Source governance",
    body: "Feedback type, contributor and timing explicitly configured and auditable.",
  },
];

export function CheckInsSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-last lg:order-none">
            <PlaceholderImage
              src="/images/performance-management/check-ins.png"
              alt="A team talking through work together at their monitors"
              label="Team check-in at their desks"
              loading="lazy"
              className="aspect-[568/506] w-full rounded-2xl border border-slate-200 shadow-lg shadow-black/5"
            />
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Check-ins & continuous feedback"
              title="Keep performance conversations continuous without turning work into surveillance."
            >
              Check-ins create recurring, structured conversations with a shared
              agenda, relevant goals and prior agreed actions — within
              configured visibility rules. Feedback types, contributor identity
              and delivery timing are explicit before submission.
            </SectionHeading>

            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {PRACTICES.map((practice, i) => (
                <li key={practice.title}>
                  <Reveal
                    delay={i * 0.06}
                    className="flex h-full items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <span className="mt-0.5 flex size-6 flex-none items-center justify-center rounded-full bg-indigo-50 text-xs font-bold leading-4 text-primary">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-xs font-semibold leading-5 text-ink">
                        {practice.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-5 text-slate-500">
                        {practice.body}
                      </span>
                    </span>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
