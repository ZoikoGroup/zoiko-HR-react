import { Container, Reveal } from "@/components/ui";

const CARDS = [
  {
    title: "Find what matters",
    body: "See relevant HR information, documents, policies and assigned actions in one clear experience.",
  },
  {
    title: "Manage personal details",
    body: "Review and request permitted updates to personal information through controlled workflows.",
  },
  {
    title: "Make requests with visibility",
    body: "Submit configured HR requests and understand status, ownership and next steps.",
  },
  {
    title: "Complete work-life actions",
    body: "Move through onboarding, changes and offboarding tasks with clear responsibilities and due states.",
  },
];

export function SimplerExperienceSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-14">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-medium leading-5 tracking-tight text-gray-400">
            A simpler employee experience for everyday HR.
          </p>
        </Reveal>

        {/*
          One framed strip whose hairlines are the slate-200 backdrop showing
          through the gap between white cells — so the dividers land correctly
          at 4, 2 and 1 columns without per-index borders.
        */}
        <Reveal delay={0.08} amount={0}>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {CARDS.map((card) => (
              <div key={card.title} className="bg-white p-6">
                <span
                  aria-hidden
                  className="block size-1.5 rounded-full bg-primary"
                />
                <p className="pt-4 break-words text-base font-extrabold leading-5 text-slate-950">
                  {card.title}
                </p>
                <p className="pt-2 break-words text-xs leading-5 text-gray-500">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
