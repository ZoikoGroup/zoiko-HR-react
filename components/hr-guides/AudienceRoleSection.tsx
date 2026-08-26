import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { GUIDES, GuideCard } from "./guides";

const ROLES = [
  "HR Leader",
  "HR Admin",
  "Manager",
  "IT / Integration",
  "Security / Privacy",
  "Finance / Payroll",
  "Implementation",
  "Evaluator",
];

export function AudienceRoleSection() {
  return (
    <section className="bg-slate-100 py-18">
      <Container>
        <Reveal>
          <span className="font-heading text-xs font-bold uppercase tracking-wide text-primary">
            Browse by Audience &amp; Role
          </span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold leading-10 text-slate-900">
            Guides filtered for your role
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {ROLES.map((role) => (
              <span
                key={role}
                className={`rounded-full px-5 py-2.5 text-sm font-medium ${
                  role === "HR Leader"
                    ? "bg-primary text-white"
                    : "border border-black/10 bg-white text-slate-700"
                }`}
              >
                {role}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.12} className="h-full">
            <PlaceholderImage
              src="/images/hr-guides/audience-role.png"
              alt="Two colleagues reviewing plans in an office"
              label="Guides for your role"
              className="h-full min-h-64 w-full rounded-xl bg-white"
            />
          </Reveal>

          <div>
            <Reveal delay={0.16}>
              <p className="font-heading font-bold text-slate-900">
                Current guides
              </p>
            </Reveal>
            <div className="mt-4 flex flex-col gap-6">
              {GUIDES.slice(0, 2).map((guide, i) => (
                <Reveal key={guide.title} delay={0.2 + i * 0.05}>
                  <GuideCard guide={guide} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
