import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    title: "Short summary / title",
    description:
      "Provide a brief, clear description of the potential issue. Do not include credentials, secrets, or unnecessary personal/customer data in the title.",
  },
  {
    title: "Affected asset",
    description:
      "Identify the Zoiko-controlled asset as specifically as possible using approved public identifiers. Do not probe external, provider, or customer-managed assets.",
  },
  {
    title: "Observed behavior",
    description:
      "Describe what you observed. Contrast expected behavior with actual behavior. Be factual and specific.",
  },
  {
    title: "Steps to reproduce",
    description:
      "Provide minimal, clear reproduction steps. Stop at the point of demonstration — do not maximize access, exfiltrate data, or continue beyond what confirms the issue.",
  },
  {
    title: "Impact hypothesis",
    description:
      "Describe the potential security impact in plain terms. Do not include live customer records, production data samples, or unredacted evidence.",
  },
  {
    title: "Safe evidence references",
    description:
      "Attach screenshots, logs, or excerpts with personal/customer/secret data redacted before upload. Prefer minimal excerpts over full captures.",
  },
];

export function PrepareReportSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Section 07" title="Prepare a high-quality report.">
          Provide reproducible, minimally necessary evidence. Do not increase
          the harm to reproduce the issue.
        </SectionHeading>

        <div className="mt-9 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={Math.min(i * 0.06, 0.3)}>
                <div className="flex items-start gap-5 border-b border-slate-200 py-5 last:border-b-0">
                  <span
                    aria-hidden
                    className="flex size-8 flex-none items-center justify-center rounded-full border border-slate-200 bg-white font-mono text-xs text-primary"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/security-reporting/prepare-report.png"
              alt="A team preparing a detailed report together"
              label="Preparing a detailed report"
              className="aspect-[368/627] w-full rounded-2xl lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
