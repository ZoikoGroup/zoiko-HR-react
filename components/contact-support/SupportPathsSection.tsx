import { Container, Reveal } from "@/components/ui";

const SUPPORT_PATHS = [
  {
    icon: "📖",
    title: "Product help",
    description: "I need help using Zoiko HR.",
    tag: "Self-service first",
    tagClass: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
  },
  {
    icon: "⚙️",
    title: "Administrator / configuration",
    description: "I manage Zoiko HR and need setup or policy help.",
    tag: "Admin Guide first",
    tagClass: "border-amber-400/20 bg-amber-400/10 text-amber-400",
  },
  {
    icon: "🔧",
    title: "Developer / integration",
    description:
      "I am troubleshooting an API, webhook, integration, or developer issue.",
    tag: "Developer Docs first",
    tagClass: "border-violet-400/20 bg-violet-400/10 text-violet-400",
  },
  {
    icon: "🔑",
    title: "Account / access",
    description:
      "I cannot sign in, verify access, or manage account ownership.",
    tag: "No secrets collected",
    tagClass: "border-blue-400/20 bg-blue-400/10 text-blue-400",
  },
  {
    icon: "🔴",
    title: "Service issue",
    description: "Zoiko HR seems unavailable or degraded.",
    tag: "Service Status first",
    tagClass: "border-rose-400/20 bg-rose-400/10 text-rose-400",
  },
  {
    icon: "🛡️",
    title: "Security / privacy / legal",
    description:
      "I need to report a security issue or make a privacy or legal request.",
    tag: "Specialist route",
    tagClass: "border-amber-500/20 bg-amber-500/10 text-amber-500",
  },
  {
    icon: "❓",
    title: "Not sure",
    description: "I am not sure where this belongs.",
    tag: "Guided routing",
    tagClass: "border-slate-500/20 bg-slate-500/10 text-slate-400",
  },
];

export function SupportPathsSection() {
  return (
    <section id="support-paths" className="bg-slate-100 py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Choose your support path.
          </h2>
          <p className="mt-1.5 max-w-2xl leading-relaxed text-slate-500">
            Select the type of help you need. Your choice determines what
            guidance, fields, warnings, and specialist authorities apply. Route
            selection comes before the form.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SUPPORT_PATHS.map((path, i) => (
            <Reveal key={path.title} delay={Math.min(i * 0.05, 0.3)}>
              <div className="flex h-full flex-col gap-2.5 rounded-2xl border border-black/10 bg-white p-5 transition-shadow duration-200 hover:shadow-md">
                <span aria-hidden className="text-3xl leading-none">
                  {path.icon}
                </span>
                <div>
                  <h3 className="font-heading text-sm font-bold text-ink">
                    {path.title}
                  </h3>
                  <p className="mt-1 text-xs leading-4 text-slate-500">
                    {path.description}
                  </p>
                </div>
                <span
                  className={`mt-auto inline-flex self-start rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-wide ${path.tagClass}`}
                >
                  {path.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
