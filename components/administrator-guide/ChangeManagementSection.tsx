import { Container, Reveal } from "@/components/ui";

const STAGES = [
  {
    label: "Prepare",
    description:
      "Confirm affected scope, dependencies and privacy impact where source-established.",
  },
  {
    label: "Preview / validate",
    description: "Only rendered if the product supports a preview step.",
  },
  {
    label: "Approve",
    description:
      "No invented approval gate — only source-established approvals apply.",
  },
  {
    label: "Apply",
    description: "Immediate or scheduled behavior only as source-approved.",
  },
  {
    label: "Verify & record",
    description: "Confirm observable result; history only where approved.",
  },
];

export function ChangeManagementSection() {
  return (
    <section className="bg-[#102A43] py-16 text-white sm:py-24">
      <Container>
        <Reveal className="max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Change management, rollout &amp; recovery.
          </h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            Rollback is never promised — only source-approved correction,
            reversal, or supersession behavior is stated.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {STAGES.map((stage, i) => (
            <Reveal key={stage.label} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-white/10 bg-[#1E3450] p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-indigo-300">
                  {stage.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {stage.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
