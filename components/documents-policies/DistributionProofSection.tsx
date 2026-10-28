import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const STEPS = [
  "Select version",
  "Define audience",
  "Channel",
  "Acknowledgment requirement",
  "Due & reminders",
  "Privacy & access",
  "Impact preview",
  "Confirm",
];

const CHECKS = ["Version eligible", "Audience resolved", "Acknowledgment defined"];

const ACTIVE = 3;

export function DistributionProofSection() {
  return (
    <section id="product-proof" className="scroll-mt-24 bg-sky-950 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Product proof"
          title="Distribution freezes an exact version to a defined audience."
          tone="dark"
          className="max-w-[680px]"
        >
          Version, audience, channel, acknowledgment requirement and due date are
          set explicitly — nothing is assumed at commit.
        </SectionHeading>

        <Reveal delay={0.12}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-blue-950 bg-slate-900">
            <div className="flex flex-col gap-3 border-b border-blue-950 px-5 pb-5 pt-4 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-xs font-semibold text-white">
                Employee Handbook · v6 · Distribution draft{" "}
                <span className="font-bold text-slate-400">
                  · unsaved changes
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {CHECKS.map((check) => (
                  <span
                    key={check}
                    className="rounded-md bg-teal-400/10 px-2.5 pb-[5px] pt-1.5 text-xs font-semibold text-teal-400"
                  >
                    ✓ {check}
                  </span>
                ))}
              </div>
            </div>

            <div className="gap-px bg-blue-950 lg:flex">
              <div className="flex flex-col gap-1.5 bg-slate-900 p-4 lg:w-64 lg:flex-none">
                {STEPS.map((step, i) => {
                  const active = i === ACTIVE;
                  return (
                    <div
                      key={step}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2.5 ${
                        active ? "bg-blue-950" : ""
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`size-1.5 flex-none rounded-[3px] ${
                          active ? "bg-teal-400" : "bg-slate-600"
                        }`}
                      />
                      <span
                        className={`text-sm font-semibold ${
                          active ? "text-white" : "text-slate-400"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          active ? "text-white" : "text-slate-400"
                        }`}
                      >
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>

              <PlaceholderImage
                src="/images/documents-policies/distribution.webp"
                alt="Two colleagues reviewing a distribution on a laptop"
                label="Distribution draft"
                className="aspect-video w-full bg-slate-900 lg:aspect-auto lg:min-w-0 lg:flex-1"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
