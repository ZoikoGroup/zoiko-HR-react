import { Container, Reveal, PlaceholderImage } from "@/components/ui";

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary">
      <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10V7a4 4 0 118 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function AccessibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary">
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 9h14M12 9v5m0 0l-3 6m3-6l3 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary">
      <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const DOMAINS = [
  {
    title: "Security",
    Icon: LockIcon,
    description:
      "Security-by-design is an approved accountability area. The owning leadership role and specific security standards are documented through the Trust & Security destination.",
  },
  {
    title: "Privacy & Data Governance",
    Icon: ShieldIcon,
    description:
      "Privacy boundary responsibilities are defined per product and documented in the owning privacy documentation. No cross-product data sharing is implied.",
  },
  {
    title: "Accessibility",
    Icon: AccessibilityIcon,
    description:
      "Accessibility accountability covers Zoiko HR products and public communications. WCAG 2.2 AA is the documented standard.",
  },
  {
    title: "Responsible AI & Technology",
    Icon: ChipIcon,
    description:
      "AI capabilities are scoped, disclosed, and governed per product. Accountability for responsible AI is mapped to an approved leadership role.",
  },
];

export function TrustResponsibleTechSection() {
  return (
    <section className="bg-[#F5F7FA] py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Trust &amp; responsible technology accountability.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {DOMAINS.map((domain, i) => (
              <Reveal key={domain.title} delay={0.08 + i * 0.06}>
                <div className="h-full rounded-xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <domain.Icon />
                  <p className="mt-3 text-sm font-bold text-ink">
                    {domain.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">
                    {domain.description}
                  </p>
                  <p className="mt-3 text-xs text-ink/40">
                    → Trust &amp; Security (route pending activation)
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <PlaceholderImage
              src="/images/leadership/trust-responsible-technology.png"
              alt="Someone reviewing a product dashboard at a home desk"
              label="Trust and responsible technology"
              className="h-full min-h-64 w-full rounded-xl border border-black/10"
            />
          </Reveal>
        </div>

        <Reveal delay={0.34}>
          <p className="mt-6 text-center text-xs text-ink/40">
            Domain cards render only where an approved Accountability Mapping
            record and current leadership role mapping exist.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
