import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const STEPS = [
  {
    number: "01",
    title: "Tell us about your organization",
    body: "A short form — your role, org size and what you’re hoping to solve.",
  },
  {
    number: "02",
    title: "A tailored walkthrough",
    body: "A 30–45 minute session focused on the areas that matter to your team, with room for questions.",
  },
  {
    number: "03",
    title: "Your call, next steps",
    body: "Get a summary, pricing information if useful, and a decision timeline that works for you.",
  },
];

export function WhatToExpectSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What to expect"
          title="A short, focused process — not a sales gauntlet."
          className="max-w-[640px]"
        />

        <div className="mt-11 grid items-stretch gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={0.06 + i * 0.06} className="h-full">
              <div className="flex h-full flex-col gap-2.5 rounded-2xl bg-slate-100 p-6">
                <p className="text-sm font-extrabold text-primary">
                  {step.number}
                </p>
                <p className="pt-1 text-base font-bold text-sky-950">
                  {step.title}
                </p>
                <p className="text-sm leading-6 text-slate-500">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
