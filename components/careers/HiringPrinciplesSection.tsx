import { Container, Reveal } from "@/components/ui";

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <path d="M6 3h9l3 3v15H6V3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 11h6M9 15h6M9 7h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <path d="M4 5h16v11H8l-4 4V5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

const PRINCIPLES = [
  {
    title: "Clear role information",
    Icon: DocIcon,
    description: "Every published role includes the information candidates need to decide whether to apply — sourced only from the approved Job Registry.",
  },
  {
    title: "Respectful candidate communication",
    Icon: ChatIcon,
    description: "Candidates receive timely, accurate updates at each stage, with communication governed by approved hiring process records.",
  },
  {
    title: "Accessible participation",
    Icon: ClockIcon,
    description: "An approved accommodations pathway ensures every candidate can participate fully in the hiring process.",
  },
  {
    title: "Privacy-aware recruiting",
    Icon: ShieldIcon,
    description: "Application data is handled through authorized recruiting systems with candidate privacy governed by the published privacy notice.",
  },
];

export function HiringPrinciplesSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              How We Approach Hiring
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-2 text-ink/60">
              Four principles that govern the candidate experience at
              Zoiko HR.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.title} delay={0.08 + i * 0.06}>
              <div className="h-full rounded-2xl border-l-4 border-primary bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <principle.Icon />
                <p className="mt-3 font-semibold text-ink">{principle.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
