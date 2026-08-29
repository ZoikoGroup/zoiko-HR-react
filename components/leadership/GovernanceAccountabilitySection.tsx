import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const STEPS = [
  "Source Owner",
  "Source Validation",
  "Publish Approval",
  "Scheduled Review",
];

const NOTES = [
  {
    title: "Review cadence",
    description:
      "At minimum quarterly, plus event-driven review for role changes, departures, title updates, withdrawn consent, or material profile changes.",
  },
  {
    title: "Emergency unpublish",
    description:
      "An authorized Company or Legal owner can remove a profile or field immediately. Removal propagates to page, structured data, FAQ answers, and caches.",
  },
];

export function GovernanceAccountabilitySection() {
  return (
    <section className="bg-[#040D18] py-16 text-white sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Governance &amp; decision accountability.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 leading-relaxed text-white/60">
              Leadership information at Zoiko HR is maintained through a
              source-governed process. Material facts, titles, and biographies
              require a named source owner, review approval, and a scheduled
              review date before publication.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
            {STEPS.map((step, i) => (
              <div
                key={step}
                className="flex w-full flex-col items-center gap-2 sm:w-auto sm:flex-row"
              >
                <span className="w-full rounded-xl border border-white/10 bg-[#082F49] px-5 py-3 text-center text-sm font-bold text-white sm:w-auto">
                  {step}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    className="rotate-90 text-lg font-bold text-primary sm:rotate-0"
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {NOTES.map((note, i) => (
            <Reveal key={note.title} delay={0.24 + i * 0.06}>
              <div className="h-full rounded-xl bg-[#1E3450] p-5">
                <p className="font-heading text-sm font-bold text-[#818CF8]">
                  {note.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                  {note.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-10 text-center">
            <Link
              href="/company/about-zoiko-group"
              className="text-sm font-medium text-primary hover:text-white"
            >
              About Zoiko Group →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
