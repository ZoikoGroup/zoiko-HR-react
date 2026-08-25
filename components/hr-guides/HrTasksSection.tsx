import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TASKS = [
  [
    "01",
    "Organize workforce information",
    "Structure, maintain, and audit employee records.",
  ],
  [
    "02",
    "Plan onboarding and workforce changes",
    "Design and execute hire-to-active workflows.",
  ],
  [
    "03",
    "Route requests and approvals",
    "Configure and track approval chains across org units.",
  ],
  [
    "04",
    "Manage organization and local context",
    "Handle multi-entity, global, and local HR rules.",
  ],
  [
    "05",
    "Support managers and employees",
    "Enable self-service and manager tools.",
  ],
  [
    "06",
    "Review people operations",
    "Run reporting cycles, audits, and ops reviews.",
  ],
  [
    "07",
    "Connect HR to other systems",
    "Wire integrations, data syncs, and connected ops.",
  ],
  [
    "08",
    "Prepare implementation and adoption",
    "Plan, configure, and drive platform adoption.",
  ],
];

export function HrTasksSection() {
  return (
    <section className="bg-slate-900 py-18 text-white">
      <Container>
        <Reveal>
          <span className="font-heading text-xs font-bold uppercase tracking-wide text-indigo-400">
            Browse by HR Task
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold leading-10">
            8 core HR operating tasks
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TASKS.map(([number, title, body], i) => (
            <Reveal key={number} delay={0.05 + i * 0.04} className="h-full">
              <div className="h-full rounded-[20px] border border-white/10 bg-[#0b2a44] px-5 py-6">
                <p className="font-heading text-4xl font-extrabold leading-9 text-primary/20">
                  {number}
                </p>
                <p className="mt-3 font-heading font-bold leading-6 text-slate-200">
                  {title}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <PlaceholderImage
            src="/images/hr-guides/hr-tasks.png"
            alt="Two colleagues laughing together in an office"
            label="HR operating tasks"
            className="mt-10 aspect-[1232/390] w-full rounded-3xl bg-white"
          />
        </Reveal>
      </Container>
    </section>
  );
}
