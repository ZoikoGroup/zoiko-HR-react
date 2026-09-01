import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const TASKS = [
  {
    icon: "🗺",
    title: "Discover surfaces",
    description:
      "Understand approved integration categories and prerequisites before starting.",
  },
  {
    icon: "🔑",
    title: "Authenticate",
    description:
      "Follow the approved credential acquisition route from the Authentication Registry.",
  },
  {
    icon: "📋",
    title: "Read the reference",
    description:
      "Browse operations, resources, and events with version and state context on every item.",
  },
  {
    icon: "🧩",
    title: "Understand schemas",
    description:
      "Review approved field semantics, identifiers, and synthetic examples scoped to the stated version.",
  },
  {
    icon: "⚡",
    title: "Receive events",
    description:
      "Where event delivery is approved, understand subscription, payload, and verification.",
  },
  {
    icon: "📦",
    title: "Use examples",
    description:
      "Access verified code samples with explicit verification state, version, and auth assumptions.",
  },
  {
    icon: "🚨",
    title: "Handle failures",
    description:
      "Diagnose errors with approved codes and escalate safely when self-service is insufficient.",
  },
];

export function DeveloperTaskMapSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Quick start · Section 03" title="Developer task map.">
          Choose your starting point. Each task links to source-governed
          documentation that does not invent behavior beyond the approved
          technical registry.
        </SectionHeading>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_420px]">
          <div>
            {TASKS.map((task, i) => (
              <Reveal key={task.title} delay={Math.min(i * 0.05, 0.3)}>
                <div className="flex items-center gap-4 border-b border-slate-100 py-5 last:border-b-0 sm:gap-6">
                  <span className="w-7 flex-none font-mono text-xs leading-5 text-slate-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className="flex size-11 flex-none items-center justify-center rounded-xl bg-blue-50 text-xl"
                  >
                    {task.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-ink">
                      {task.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-5 text-slate-500">
                      {task.description}
                    </p>
                  </div>
                  <span aria-hidden className="flex-none text-lg text-slate-300">
                    →
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/developer-documentation/task-map.png"
              alt="A team planning an integration around a laptop"
              label="Team planning an integration"
              className="w-full rounded-3xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
