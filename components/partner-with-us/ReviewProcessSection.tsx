import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const STEPS = [
  {
    number: "1",
    title: "Send an inquiry",
    body: "Minimum organization, contact, and relationship context. No attachments required at this stage.",
  },
  {
    number: "2",
    title: "Routing and fit review",
    body: "Zoiko HR routes the inquiry according to current partnership area, geography, and ownership rules. Hidden scoring is not published.",
  },
  {
    number: "3",
    title: "Follow-up when appropriate",
    body: "Authorized teams may request additional information through an approved channel. No guaranteed response unless an approved policy exists.",
  },
  {
    number: "4",
    title: "Separate due diligence",
    body: "If a potential relationship progresses, technical, legal, privacy, brand, or commercial review occurs through approved channels — not this form.",
  },
];

export function ReviewProcessSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="Review process · E4.8"
          title="How review works"
          className="max-w-[760px]"
        >
          Submission is a receipt — not acceptance, onboarding, certification,
          listing approval, or a contract.
        </SectionHeading>

        {/* The rule threading the four markers is decorative and only shows
            once the steps sit on a single row. */}
        <div className="relative mt-12">
          <span
            aria-hidden
            className="absolute left-6 right-6 top-[22px] hidden h-0.5 bg-slate-200 lg:block"
          />
          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={0.06 + i * 0.07}>
                <div>
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary text-base font-extrabold leading-6 text-white">
                    {step.number}
                  </span>
                  <h3 className="pt-5 text-base font-semibold leading-6 text-slate-900">
                    {step.title}
                  </h3>
                  <p className="pt-1.5 text-xs leading-5 text-slate-500">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.34}>
          <div className="mt-10 rounded-lg border border-indigo-200 bg-blue-50 px-5 py-4">
            <p className="text-xs leading-5 text-slate-600">
              <span className="font-semibold text-slate-800">
                Partnership activation requires separate steps.
              </span>{" "}
              A public partnership, listing, badge, certification, referral or
              reseller right exists only after applicable agreements, approvals,
              registries, and publication gates are complete — not after this
              form.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
