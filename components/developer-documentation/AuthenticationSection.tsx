import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    title: "Check prerequisites",
    description:
      "Confirm account role, plan eligibility, environment, and configuration prerequisites only as established by the approved Authentication Registry. Not inferred from platform conventions.",
  },
  {
    title: "Credential / mechanism",
    description:
      "The approved mechanism type, token format, acquisition flow, scope model, and environment context are defined by the Authentication Mechanism Registry. This page does not publish unapproved mechanism details.",
  },
  {
    title: "Scopes and permissions",
    description:
      "Permission scope labels, meanings, and required access are sourced from the approved Scope/Permission Registry. Scope does not imply access beyond the published operation-level contract.",
  },
  {
    title: "Credential lifecycle",
    description:
      "Expiry, rotation, revocation, test/production separation, and renewal behavior are shown only where implemented and approved by the technical source. Not assumed from common practices.",
  },
  {
    title: "Secret handling rule",
    description:
      "Credentials must never appear in URL query strings, code examples, screenshots, analytics events, support forms, or copied diagnostic context. Use named placeholder variables in all examples.",
  },
];

export function AuthenticationSection() {
  return (
    <section
      id="authentication"
      className="border-b border-white/5 bg-[#0A1B2E] py-16 text-white sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Section 05"
          title="Authentication, authorization and prerequisites."
          tone="dark"
        >
          Approved mechanism, access acquisition, scopes, and secret handling
          only. Not inferred from ecosystem conventions.
        </SectionHeading>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={Math.min(i * 0.05, 0.3)}>
                <div className="flex items-start gap-5 border-b border-white/5 py-5 last:border-b-0">
                  <span
                    aria-hidden
                    className="flex size-9 flex-none items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-xs text-indigo-400"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="text-base font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-5 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <PlaceholderImage
              src="/images/developer-documentation/authentication.png"
              alt="A team working together in an open office"
              label="Team working in an open office"
              className="w-full bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
