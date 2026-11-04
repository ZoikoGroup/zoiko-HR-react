import { Container, Reveal } from "@/components/ui";

const PRINCIPLES = [
  {
    number: "01",
    title: "Role-based access",
    description:
      "Authorized access based on role and responsibility, not as an absolute data-security guarantee.",
  },
  {
    number: "02",
    title: "Scope",
    description:
      "Entity, location, team or functional scope demonstrated where the product supports these boundaries.",
  },
  {
    number: "03",
    title: "Least practical access",
    description:
      "Admin flows default toward the minimum scope needed for the job; elevated access is explicit and deliberate.",
  },
  {
    number: "04",
    title: "Sensitive data",
    description:
      "Progressive disclosure and permission checks prevent sensitive fields from appearing in summary cards, notifications or search snippets.",
  },
  {
    number: "05",
    title: "Auditability",
    description:
      "Where supported, who changed configuration or records and when. Not described as tamper-proof unless technically verified.",
  },
  {
    number: "06",
    title: "Cross-border data",
    description:
      "Specific data-residency or international transfer arrangements are not stated here. See Privacy and DPA materials for authoritative detail.",
  },
];

export function PermissionsGovernanceSection() {
  return (
    <section className="bg-[#0c2036] py-24">
      <Container>
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
            Permissions & Data Governance
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Give global teams visibility without making everything globally
            visible.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.number} delay={0.1 + i * 0.05}>
              <div className="flex h-full gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <span className="h-fit flex-none rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                  {principle.number}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {principle.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
