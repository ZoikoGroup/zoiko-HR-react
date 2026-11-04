import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const REQUIREMENTS = [
  {
    title: "Active identity",
    description: "Verified account in the current session.",
  },
  {
    title: "Role / grant / delegation",
    description:
      "Explicit grant only — not inferred from job title. Delegated/time-bound must be explicitly granted.",
  },
  {
    title: "Organization / entity scope",
    description:
      "Bounded to the organization or entity the identity belongs to.",
  },
  {
    title: "Object + action",
    description:
      "Specific resource and operation: read, write, export, delete, configure.",
  },
  {
    title: "Field / data sensitivity",
    description:
      "Sensitive-field-level controls where applicable. Not all fields are equally accessible.",
  },
  {
    title: "Workflow state / purpose",
    description:
      "Stage-of-approval, purpose, or operational state may gate access.",
  },
];

const RESULT = {
  title: "Policy / deny condition",
  description: "Explicit policy or deny overrides permissive role scope.",
};

export function AccessGovernanceSection() {
  return (
    <section
      id="access-governance"
      className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20"
    >
      <Container>
        {/* Figma bottom-aligns the image with the end of the step list, so it
            sits well below the heading rather than centred against it. */}
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <SectionHeading
              eyebrow="Section 02"
              title="Identity, authentication and access governance."
            >
              Effective access requires all of the following — not role label
              alone. No MFA, SSO, SCIM or privileged-access claim without
              current approved product evidence.
            </SectionHeading>

            <div className="mt-6">
              {REQUIREMENTS.map((requirement, i) => (
                <Reveal key={requirement.title} delay={Math.min(i * 0.05, 0.3)}>
                  <div className="flex items-stretch gap-3 pb-1">
                    <div className="flex flex-none flex-col items-center">
                      <span className="flex size-7 flex-none items-center justify-center rounded-lg border border-slate-200 bg-white font-mono text-[10px] text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span aria-hidden className="w-0.5 flex-1 bg-slate-200" />
                    </div>
                    <div className="flex-1 rounded-[10px] border border-slate-200 bg-white px-3.5 py-2.5">
                      <h3 className="text-xs font-semibold text-ink">
                        {requirement.title}
                      </h3>
                      <p className="mt-0.5 text-xs leading-4 text-slate-500">
                        {requirement.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={0.3}>
                <div className="flex items-stretch gap-3 pt-1">
                  <span
                    aria-hidden
                    className="flex size-7 flex-none items-center justify-center rounded-lg bg-primary font-mono text-[10px] text-white"
                  >
                    =
                  </span>
                  <div className="flex-1 rounded-[10px] bg-primary px-3.5 py-2.5">
                    <h3 className="text-xs font-semibold text-white">
                      {RESULT.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-4 text-white/70">
                      {RESULT.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/security-privacy/access-governance.png"
              alt="A trainer leading an access governance session at a whiteboard"
              label="Access governance session"
              className="w-full rounded-2xl border border-slate-200 bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
