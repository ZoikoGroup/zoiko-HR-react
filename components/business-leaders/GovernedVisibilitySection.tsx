import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const ROLES = [
  {
    icon: "◈",
    accent: "text-primary",
    tint: "bg-primary/5",
    role: "Business leaders",
    body: "Authorized organizational and workforce visibility aligned to role, scope and policy.",
  },
  {
    icon: "◎",
    accent: "text-sky-700",
    tint: "bg-sky-700/5",
    role: "HR teams",
    body: "Administrative ownership of records, workflows, policies, reporting and workforce processes.",
  },
  {
    icon: "◷",
    accent: "text-violet-600",
    tint: "bg-violet-600/5",
    role: "Managers",
    body: "Team-level responsibilities, actions, approvals and permitted employee information.",
  },
  {
    icon: "⊞",
    accent: "text-green-700",
    tint: "bg-green-700/5",
    role: "Employees",
    body: "Secure access to personal information, documents, requests and assigned actions.",
  },
  {
    icon: "⊙",
    accent: "text-gray-500",
    tint: "bg-gray-500/5",
    role: "System",
    body: "Permission checks, audit-relevant events and policy-based boundaries applied consistently.",
  },
];

export function GovernedVisibilitySection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-12">
          <div>
            <SectionHeading
              eyebrow="Governed visibility"
              title="Leaders see what they need, not everything."
            >
              Access to workforce information must be governed by role, business
              scope and configured policy.
            </SectionHeading>

            <Reveal delay={0.1}>
              <PlaceholderImage
                src="/images/business-leaders/governed-visibility.webp"
                alt="Colleagues talking across a table in a bright office"
                label="Governed visibility"
                className="mt-6 aspect-[380/153] w-full rounded-xl border border-primary/20 bg-primary/5"
              />
            </Reveal>
          </div>

          <Reveal delay={0.08} amount={0}>
            <div className="flex flex-col gap-3">
              {ROLES.map((role) => (
                <div
                  key={role.role}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white sm:grid sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)] sm:items-stretch"
                >
                  <div
                    className={`flex items-center gap-3 border-b border-slate-200 p-4 sm:border-b-0 sm:border-r ${role.tint}`}
                  >
                    <span aria-hidden className={`text-base leading-6 ${role.accent}`}>
                      {role.icon}
                    </span>
                    <p className="break-words text-xs font-semibold leading-5 text-slate-950">
                      {role.role}
                    </p>
                  </div>
                  <div className="flex items-center px-5 py-4">
                    <p className="break-words text-xs leading-5 text-slate-600">
                      {role.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
