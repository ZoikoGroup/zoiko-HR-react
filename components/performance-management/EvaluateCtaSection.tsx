import { Container, Reveal } from "@/components/ui";
import { CtaButtons, Eyebrow } from "./shared";

export function EvaluateCtaSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-[860px] rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm sm:px-16 sm:py-16">
            <Eyebrow>Evaluate Performance Management</Eyebrow>
            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Evaluate Performance Management for your organization.
            </h2>
            <p className="mx-auto mt-5 max-w-[540px] text-base leading-7 text-slate-600">
              See how Zoiko HR can structure goals, review cycles, manager
              actions and development workflows around your roles, policies and
              operating model.
            </p>
            <CtaButtons variant="light" className="mt-8 sm:justify-center" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
