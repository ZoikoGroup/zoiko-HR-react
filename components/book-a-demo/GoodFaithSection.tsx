import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const ASSURANCES = [
  {
    title: "No sales pressure",
    body: "The first call is discovery-focused — you decide if a follow-up makes sense.",
  },
  {
    title: "Security & privacy ready",
    body: "We can loop in documentation during scheduling — visit the Trust Center any time.",
  },
  {
    title: "Already a customer?",
    body: "Skip the queue — go straight to Help Center, Documentation or Contact Support.",
  },
  {
    title: "Flexible timing",
    body: "Sessions typically run 30–45 minutes and can include your wider team.",
  },
];

export function GoodFaithSection() {
  return (
    <section className="bg-sky-950 py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Evaluating in good faith, on your terms."
          tone="dark"
          className="max-w-[640px]"
        />

        <div className="mt-9 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ASSURANCES.map((assurance, i) => (
            <Reveal
              key={assurance.title}
              delay={0.06 + i * 0.05}
              className="h-full"
            >
              <div className="flex h-full flex-col gap-2 rounded-xl border border-blue-950 bg-slate-900 p-5">
                <p className="text-base font-bold text-white">
                  {assurance.title}
                </p>
                <p className="text-xs leading-5 text-slate-400">
                  {assurance.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
