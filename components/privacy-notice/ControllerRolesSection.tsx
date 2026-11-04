import { Container, Reveal } from "@/components/ui";
import { ArrowLink } from "./shared";

export function ControllerRolesSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-12">
      <Container>
        <Reveal>
          <div className="max-w-[820px]">
            <h2 className="text-base font-semibold leading-6 text-ink">
              Different data, different roles.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Zoiko HR may act as an independent controller for its own
              websites, business relationships, account administration, and
              communications. When a customer uses Zoiko HR to process
              workforce information under a data processing agreement, Zoiko HR
              may act as a processor/service provider on the customer&apos;s
              instructions. The exact role depends on the processing activity,
              contract, and applicable law.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <ArrowLink href="/data-processing-addendum">Data Processing Addendum</ArrowLink>
              <ArrowLink href="/security-privacy">Security &amp; Privacy</ArrowLink>
              <ArrowLink href="/subprocessors">Subprocessors</ArrowLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
