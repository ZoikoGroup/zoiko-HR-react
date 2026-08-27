import { Container, Reveal, Button } from "@/components/ui";

function ScaleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white/70">
      <path d="M12 3v18M7 7l-4 8a4 4 0 008 0l-4-8zM17 7l-4 8a4 4 0 008 0l-4-8zM5 7h14M9 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white/70">
      <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 10V7a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const ITEMS = [
  {
    title: "Fair Hiring",
    Icon: ScaleIcon,
    description: "Zoiko HR is committed to equal-opportunity hiring. Hiring decisions are made on the basis of role-relevant qualifications and approved criteria. The authoritative equal-opportunity and anti-discrimination policy is linked below.",
    linkLabel: "View fair hiring policy",
    href: "/legal-notices",
  },
  {
    title: "Candidate Privacy",
    Icon: LockIcon,
    description: "Application data is handled through authorized recruiting systems. Candidate information is collected, stored, and used according to the published candidate privacy notice. No additional collection occurs on this page.",
    linkLabel: "View candidate privacy notice",
    href: "/privacy-notice",
  },
];

export function FairHiringPrivacySection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Fair Hiring &amp; Candidate Privacy
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-2 text-white/60">
              Authoritative policies govern both areas. Summaries only —
              link to the documents below.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-6 max-w-3xl rounded-xl border-l-4 border-rose-400 bg-rose-400/10 px-5 py-3.5 text-center text-sm text-rose-200">
            Policy summaries only — authoritative legal language in the
            linked documents.
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={0.1 + i * 0.08}>
              <div className="h-full rounded-2xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                <item.Icon />
                <p className="mt-3 font-semibold">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
                <Button href={item.href} variant="outline" className="mt-4 !border-white/20 !text-white hover:!border-primary hover:!text-primary">
                  {item.linkLabel} →
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
