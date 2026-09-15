import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROUTES = [
  {
    eyebrow: "What is Zoiko HR and what is its scope?",
    title: "About Zoiko HR",
    description: "Read the mission, scope, and standalone commercial model.",
    linkLabel: "About Zoiko HR",
    href: "/about",
    highlighted: false,
  },
  {
    eyebrow: "Who is the parent group?",
    title: "About Zoiko Group",
    description: "Understand the parent group and product portfolio.",
    linkLabel: "About Zoiko Group",
    href: "/company/about-zoiko-group",
    highlighted: false,
  },
  {
    eyebrow: "Who leads the company?",
    title: "Leadership",
    description: "Review approved executive and governance leadership.",
    linkLabel: "Leadership",
    href: "/leadership",
    highlighted: false,
  },
  {
    eyebrow: "Can Zoiko HR fit our organization?",
    title: "Talk to Sales",
    description: "Discuss product fit, commercial requirements, and the right evaluation path.",
    linkLabel: "Talk to Sales",
    href: "/contact-sales",
    highlighted: true,
  },
];

export function EvaluationRoutesSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Evaluation
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              How to evaluate Zoiko HR.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-ink/60">
              The right evaluation starts with the right question. Each
              route below is designed to answer a specific question about
              the company, platform, or next step.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {ROUTES.map((route, i) => (
            <Reveal key={route.title} delay={0.06 + i * 0.06}>
              <a
                href={route.href}
                className={`block h-full rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  route.highlighted
                    ? "border-primary/40 bg-primary-light"
                    : "border-slate-200 bg-white"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                  {route.eyebrow}
                </p>
                <p className="mt-2 font-semibold text-ink">{route.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{route.description}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {route.linkLabel} →
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} y={30}>
          <PlaceholderImage
            src="/images/company-overview/evaluation-routes.webp"
            alt="A presenter reviewing a system integration chart with a team in a meeting room"
            label="Start the right evaluation"
            fit="contain"
            className="mt-8 w-full rounded-2xl"
          />
        </Reveal>
      </Container>
    </section>
  );
}
