import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const AUDIENCES = [
  { icon: "🏢", title: "HR Leaders", body: "Understand governance model…" },
  { icon: "👥", title: "HR / People Ops", body: "Manage employee records…" },
  { icon: "📊", title: "Finance / Payroll", body: "Connected HR-time-payroll flows…" },
  { icon: "⚖️", title: "Procurement / Legal", body: "Privacy and data processing…" },
];

export function AudienceRoleSection() {
  return (
    <section className="bg-[#14304d] py-20 text-white">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
            Browse by Audience &amp; Role
          </span>
          <h2 className="mt-3 max-w-[560px] font-heading text-3xl font-bold leading-10">
            Start with what matters to your role — not the full catalog.
          </h2>
          <p className="mt-4 max-w-[600px] leading-6 text-slate-300">
            Select an audience to see common tasks and curated resources. Your
            choice is explicit — nothing is inferred from your account or
            browsing.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[repeat(2,minmax(0,1fr))_minmax(0,1.5fr)]">
          {AUDIENCES.map((audience, i) => (
            <Reveal key={audience.title} delay={0.06 + i * 0.05} className="h-full">
              <div className="h-full rounded-xl bg-white p-5">
                <span aria-hidden className="block text-xl leading-8">
                  {audience.icon}
                </span>
                <p className="mt-3 font-heading font-bold text-slate-900">
                  {audience.title}
                </p>
                <p className="mt-1.5 text-xs leading-5 text-slate-500">
                  {audience.body}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal
            delay={0.2}
            className="h-full lg:col-start-3 lg:row-start-1 lg:row-span-2"
          >
            <PlaceholderImage
              src="/images/resource-center/audience-and-role.png"
              alt="Colleagues looking at a phone together in an office kitchen"
              label="Browse by audience"
              className="h-full min-h-64 w-full rounded-xl bg-white"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
