import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

export function AeoAnswerSection() {
  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <SectionHeading eyebrow="02 / Direct Answer & Registry Currentness" />

        <Reveal delay={0.06}>
          <p className="mt-2.5 max-w-[1184px] text-base leading-8 text-slate-900 sm:text-lg">
            The Zoiko HR Subprocessors page is the public source for the current
            approved subprocessor registry and published change information.
            Each visible record identifies only source-approved facts: the legal
            entity, approved relationship classification, processing purpose and
            service scope, processing location where established, current state
            and review date. The Data Processing Addendum remains authoritative
            for contractual notice periods, objection rights and transfer
            mechanisms. If a provider fact or notice process is not established
            by the approved registry or DPA, this page does not infer it.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <PlaceholderImage
            src="/images/subprocessors/direct-answer.png"
            alt="An operator monitoring an automated production line dashboard"
            label="Monitoring an approved source"
            className="mt-10 aspect-[16/9] w-full rounded-xl border border-slate-200 bg-white sm:aspect-[21/9] lg:aspect-[1217/288]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
