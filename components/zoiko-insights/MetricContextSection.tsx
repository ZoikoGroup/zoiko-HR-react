import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const CONTEXT = [
  { icon: "📖", title: "Definition", body: "Business meaning, calculation rule, unit and grain." },
  { icon: "🗂️", title: "Scope", body: "Which entities, teams, locations or populations are included." },
  { icon: "📅", title: "Period", body: "As-of date, reporting period and effective-date semantics." },
  { icon: "🔗", title: "Source & Freshness", body: "Authoritative data object, last update and quality state." },
  { icon: "🔒", title: "Permission", body: "What you are authorized to see and at what level of detail." },
];

export function MetricContextSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-14">
      <Container>
        <SectionHeading title="Every number needs context." className="max-w-[640px]">
          A workforce metric is only useful when you can see what it means, who
          or what it covers, which period it uses, where it came from and whether
          you are authorized to see the underlying detail.
        </SectionHeading>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CONTEXT.map((item, i) => (
            <li key={item.title}>
              <Reveal
                delay={i * 0.06}
                className="flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <span aria-hidden className="text-2xl leading-8">
                  {item.icon}
                </span>
                <h3 className="text-sm font-semibold leading-5 text-ink">{item.title}</h3>
                <p className="text-xs leading-5 text-slate-500">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
