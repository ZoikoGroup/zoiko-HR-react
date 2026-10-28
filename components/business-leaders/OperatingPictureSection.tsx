import { Container, Reveal } from "@/components/ui";

const CARDS = [
  {
    icon: "◎",
    title: "Clearer workforce visibility",
    body: "Understand workforce structure, employee status and the HR information you are authorized to see.",
  },
  {
    icon: "◷",
    title: "Less administrative friction",
    body: "Standardize repeatable HR workflows instead of relying on disconnected inboxes, files and manual follow-up.",
  },
  {
    icon: "◈",
    title: "Stronger operating control",
    body: "Use defined roles, permissions, records and approval paths to keep HR administration accountable.",
  },
  {
    icon: "⊞",
    title: "Ready for growth",
    body: "Add people, teams, business units and operating complexity without rebuilding the HR foundation every time.",
  },
];

export function OperatingPictureSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-14">
      <Container>
        <Reveal>
          <p className="text-center text-sm font-medium leading-5 text-gray-400">
            A clearer workforce operating picture.
          </p>
        </Reveal>

        <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={0.06 + i * 0.05} className="h-full">
              <div className="h-full rounded-xl border border-slate-200 p-5">
                <p aria-hidden className="text-xl leading-8 text-primary">
                  {card.icon}
                </p>
                <p className="pt-3 break-words text-base font-extrabold leading-5 text-slate-950">
                  {card.title}
                </p>
                <p className="pt-2 break-words text-xs leading-5 text-slate-600">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
