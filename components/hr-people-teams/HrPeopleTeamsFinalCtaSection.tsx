import { Container, Reveal, Button } from "@/components/ui";

const LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "Workers", href: "/solutions/hr-teams" },
  { label: "Anti-Surveillance Principles", href: "/ai-governance" },
  { label: "Security", href: "/security-privacy" },
  { label: "Help Center", href: "/help-center" },
];

export function HrPeopleTeamsFinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="h-72 w-[36rem] rounded-full bg-primary/20 blur-3xl" />
      </div>

      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            Build a workforce record HR can trust
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Make Time, Attendance, and Review Clearer for Everyone
            Involved.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            See how ZoikoTime can fit your workforce policies, review
            routes, payroll process, and employee-communication
            requirements.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book-a-demo">Request Enterprise Demo</Button>
            <Button
              href="/sign-in"
              variant="outline"
              className="!border-white/30 !text-white hover:!border-primary hover:!text-primary"
            >
              Start Free
            </Button>
          </div>
          <p className="mt-4 text-xs text-white/40">
            No screenshots. No keystroke capture. Human review remains in
            control.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-semibold text-primary hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
