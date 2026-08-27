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

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary">
      <rect x="5" y="5" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 5a1 1 0 011-1h4a1 1 0 011 1v2H9V5zM9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary">
      <circle cx="8" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 12h8M17 12v3M20 12v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const EXPECTATIONS = [
  {
    title: "Data Boundaries",
    Icon: LockIcon,
    description:
      "Zoiko HR and each partner are responsible for their own data handling. No cross-organization data sharing is assumed. Integration data flows are governed by the applicable product documentation and agreements.",
  },
  {
    title: "Security Responsibility",
    Icon: ShieldIcon,
    description:
      "Third-party partner security practices, certifications, and service controls are the partner's own commitment. Zoiko HR trust information applies within its stated product and service scope.",
  },
  {
    title: "Privacy & Legal Terms",
    Icon: ClipboardIcon,
    description:
      "Partner services are subject to the partner's own privacy policy and terms of service unless an approved agreement explicitly states otherwise. Zoiko HR does not extend its DPA or terms to third-party services.",
  },
  {
    title: "Integration Permissions",
    Icon: KeyIcon,
    description:
      "Where an integration exchanges data between Zoiko HR and a partner system, permissions, data types, and scope are defined in the applicable integration and product documentation.",
  },
];

export function SecurityComplianceSection() {
  return (
    <section className="bg-[#0A1B2E] py-16 text-white sm:py-24">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Security, privacy &amp; compliance expectations.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {EXPECTATIONS.map((item, i) => (
              <Reveal key={item.title} delay={0.08 + i * 0.06}>
                <div className="h-full rounded-2xl border border-white/10 bg-[#1E3450] p-6">
                  <item.Icon />
                  <p className="mt-3 font-heading text-base font-bold">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.14}>
            <PlaceholderImage
              src="/images/partners/security-compliance.png"
              alt="Two colleagues shaking hands in a meeting room"
              label="Security, privacy and compliance"
              className="h-full min-h-64 w-full rounded-2xl border border-white/10"
            />
          </Reveal>
        </div>

        <Reveal delay={0.36}>
          <p className="mx-auto mt-6 max-w-3xl rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-center text-sm leading-relaxed text-amber-500">
            Zoiko HR does not guarantee that any partner meets a specific
            security certification or compliance standard. Review owning trust
            and security documentation for Zoiko HR platform controls.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
