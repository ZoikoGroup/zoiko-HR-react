import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const CARDS = [
  {
    title: "Onboarding tasks",
    body: "New-hire setup, document requests and acknowledgments.",
  },
  {
    title: "Change tasks",
    body: "Actions tied to an effective-dated role or entity change.",
  },
  {
    title: "Return-to-work tasks",
    body: "Steps following an approved leave of absence.",
  },
  {
    title: "Separation tasks",
    body: "Approved offboarding steps and final acknowledgments.",
  },
];

export function LifecycleTasksSection() {
  return (
    <section className="bg-sky-950 py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Onboarding, change and transition tasks, source-governed."
          tone="dark"
          className="max-w-[680px]"
        >
          Lifecycle tasks assigned to you appear here; Onboarding &amp; Lifecycle
          remains the owner of the event plan and orchestration.
        </SectionHeading>

        {/* Two card columns with the image spanning both rows beside them. */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.06 + i * 0.05}>
              <div className="h-full rounded-xl border border-cyan-900 bg-blue-950 p-5">
                <p className="text-sm font-semibold text-white">{card.title}</p>
                <p className="mt-1.5 text-xs leading-5 text-slate-400">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={0.26}
            className="order-last sm:col-span-2 lg:order-none lg:col-span-1 lg:row-span-2 lg:row-start-1 lg:col-start-3"
          >
            <PlaceholderImage
              src="/images/self-service/lifecycle-tasks.webp"
              alt="A team standing in discussion in an office"
              label="Lifecycle tasks"
              className="aspect-[16/9] w-full rounded-xl border border-cyan-900 bg-blue-950 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <Link
            href="/onboarding-lifecycle"
            className="mt-6 inline-block text-base font-semibold text-indigo-400 transition-colors hover:text-white"
          >
            Explore Onboarding &amp; Lifecycle →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
