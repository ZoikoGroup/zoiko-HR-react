import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STEPS = [
  {
    number: "01",
    title: "Confirm organization identity",
    description:
      "Review the approved organization/profile fields before making changes; unestablished fields (domains, legal entity, branding) are not shown.",
  },
  {
    number: "02",
    title: "Review defaults",
    description:
      "Default values and inheritance are shown only where the configuration source approves them.",
  },
  {
    number: "03",
    title: "Apply foundational configuration",
    description:
      "Make the setup change within your role scope; plan/region gates are stated only when source-approved.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      'Confirm the observable result from the product itself, not marketing "success" text.',
  },
  {
    number: "05",
    title: "Record ownership",
    description:
      "Organization/account ownership concepts are shown only when the source approves a transfer or ownership model.",
  },
];

export function OrganizationSetupSection() {
  return (
    <section id="organization-setup" className="py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Organization setup &amp; foundational configuration.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Every setup guide follows the same contract: purpose, who can
            perform it, prerequisites, scope, steps, expected result,
            validation, impact, and recovery.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[1fr_320px]">
          <div className="space-y-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={Math.min(i * 0.05, 0.3)}>
                <div className="flex gap-4 rounded-[10px] border border-slate-200 px-5 py-5 sm:px-6">
                  <span className="text-lg font-extrabold text-teal-600">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/administrator-guide/organization-setup.png"
              alt="Employees working at desks in an open-plan office"
              label="Organization setup"
              className="aspect-[16/10] w-full rounded-xl border border-slate-200 bg-slate-100 sm:aspect-[21/9] lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
