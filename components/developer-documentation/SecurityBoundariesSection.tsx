import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const BOUNDARIES = [
  {
    icon: "🔒",
    title: "Secrets — never publish",
    description:
      "API keys, tokens, signing secrets, passwords, private keys, and session identifiers must not appear in documentation, examples, screenshots, URLs, analytics, or support diagnostics.",
  },
  {
    icon: "🛰",
    title: "Logging and observability",
    description:
      "Diagnostic guidance instructs developers to redact sensitive fields before logging. Do not instruct developers to log full request/response bodies containing personal or credential data.",
  },
  {
    icon: "🛡️",
    title: "Security claims — Trust Center",
    description:
      "Security controls, certifications, pen-test results, and compliance evidence route to the approved Security & Privacy / Trust Center. Developer Documentation summarizes the boundary only.",
  },
  {
    icon: "🚩",
    title: "Vulnerability reporting",
    description:
      "Confirmed or suspected security vulnerabilities route through the approved Security Reporting / Responsible Disclosure destination — not Contact Support or Developer Documentation issue trackers.",
  },
];

export function SecurityBoundariesSection() {
  return (
    <section className="border-b border-white/5 bg-[#0A1B2E] py-16 text-white sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Section 12"
          title="Security, privacy and sensitive-data boundaries."
          tone="dark"
        >
          Public technical safety rules for developers. Specialist evidence,
          certifications, and legal authority route to approved Trust Center and
          Legal &amp; Trust destinations.
        </SectionHeading>

        <div className="mt-9 grid items-start gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            {BOUNDARIES.map((boundary, i) => (
              <Reveal key={boundary.title} delay={Math.min(i * 0.06, 0.3)}>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                  <span aria-hidden className="flex-none text-base leading-6">
                    {boundary.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {boundary.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {boundary.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/developer-documentation/security.png"
              alt="A team reviewing technical plans together"
              label="Team reviewing technical plans"
              className="w-full rounded-xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
