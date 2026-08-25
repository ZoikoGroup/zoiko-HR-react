import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const PATHS = [
  {
    icon: "◎",
    title: "Browse All",
    body: "Default order through all 10 chapters in canonical sequence.",
    active: true,
  },
  {
    icon: "👥",
    title: "HR Team",
    body: "Focused on records, lifecycle, workflows, reporting and operations.",
    active: false,
  },
  {
    icon: "📋",
    title: "Manager",
    body: "Focused on assigned tasks, approvals, team context and escalation.",
    active: false,
  },
  {
    icon: "📊",
    title: "Executive / HR Leader",
    body: "Organization readiness, operational reporting, exceptions and trust.",
    active: false,
  },
];

const CHAPTER_ORDER = [
  "Command Center",
  "Core HR",
  "Global HR",
  "Lifecycle",
  "Workflows",
  "Role Experiences",
  "Reporting",
  "Integrations",
  "Trust",
  "Implementation",
];

export function ChooseYourPathSection() {
  return (
    <section
      id="tour-paths"
      className="border-t border-black/5 bg-slate-100 py-20"
    >
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Choose Your Tour Path
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900">
            Start where it matters most to you.
          </h2>
          <p className="mt-4 max-w-[576px] leading-6 text-slate-500">
            Select a path to see a suggested chapter order. Content never changes
            — only the recommended sequence.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PATHS.map((path, i) => (
            <Reveal key={path.title} delay={0.06 + i * 0.05} className="h-full">
              <div
                className={`flex h-full min-h-44 flex-col justify-center rounded-xl border p-5 ${
                  path.active
                    ? "border-primary bg-primary shadow-[0_4px_20px_rgba(49,94,251,0.30)]"
                    : "border-slate-200 bg-white"
                }`}
              >
                <span
                  aria-hidden
                  className={`text-2xl leading-8 ${
                    path.active ? "text-white" : "text-slate-900"
                  }`}
                >
                  {path.icon}
                </span>
                <p
                  className={`mt-3 font-heading font-bold ${
                    path.active ? "text-white" : "text-slate-900"
                  }`}
                >
                  {path.title}
                </p>
                <p
                  className={`mt-1.5 text-xs leading-5 ${
                    path.active ? "text-white/80" : "text-slate-500"
                  }`}
                >
                  {path.body}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.28} className="h-full">
            <PlaceholderImage
              src="/images/product-tour/tour-path.png"
              alt="Two colleagues reviewing a laptop screen together"
              label="Tour path"
              className="h-full min-h-44 w-full rounded-xl border border-slate-200 bg-white"
            />
          </Reveal>
        </div>

        <Reveal delay={0.32}>
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-tight text-slate-500">
              Suggested chapter order for:{" "}
              <span className="text-primary">Browse All</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {CHAPTER_ORDER.map((chapter, i) => (
                <span
                  key={chapter}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5"
                >
                  <span className="text-[10px] font-bold leading-4 text-primary">
                    {i + 1}
                  </span>
                  <span className="text-xs font-medium leading-4 text-slate-900">
                    {chapter}
                  </span>
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs leading-4 text-slate-400">
              Path selection changes suggested order only. It does not change
              content, access or product availability claims.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
