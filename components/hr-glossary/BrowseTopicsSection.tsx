import { Container, Reveal } from "@/components/ui";
import { SectionTitle } from "./shared";

const TOPICS = [
  { icon: "🗂️", title: "Core HR & Workforce Records", count: 20 },
  { icon: "🚀", title: "Hiring & Onboarding", count: 9 },
  { icon: "📅", title: "Time, Leave & Attendance", count: 8 },
  { icon: "🎯", title: "Performance & Development", count: 11 },
  { icon: "💰", title: "Compensation & Benefits Context", count: 7 },
  { icon: "🧾", title: "Payroll & Finance Context", count: 6 },
  { icon: "📊", title: "People Analytics & Reporting", count: 9 },
  { icon: "⚙️", title: "HR Technology & Data", count: 11 },
  { icon: "🔒", title: "Policies, Compliance & Governance", count: 8 },
  { icon: "👥", title: "Employee & Manager Experience", count: 10 },
];

export function BrowseTopicsSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionTitle>Browse by HR topic</SectionTitle>
        </Reveal>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {TOPICS.map((topic, i) => (
            <li key={topic.title}>
              <Reveal
                delay={Math.min(i * 0.04, 0.24)}
                className="flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <span aria-hidden className="text-xl leading-7">
                  {topic.icon}
                </span>
                <h3 className="text-xs font-semibold leading-5 text-ink sm:text-sm">{topic.title}</h3>
                <p className="text-xs leading-4 text-slate-400">{topic.count} terms</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
