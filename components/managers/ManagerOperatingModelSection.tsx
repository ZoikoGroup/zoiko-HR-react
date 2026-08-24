import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const STAGES = [
  { number: "01", label: "Receive assignment" },
  { number: "02", label: "Review context" },
  { number: "03", label: "Verify authority" },
  { number: "04", label: "Act / decide / request" },
  { number: "05", label: "Delegate / reassign / escalate" },
  { number: "06", label: "Confirm evidence" },
  { number: "07", label: "Close and review" },
];

export function ManagerOperatingModelSection() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Manager Operating Model
          </span>
          <h2 className="mt-3.5 font-heading text-3xl font-bold text-slate-900">
            Receive → Context → Authority → Act → Evidence → Close.
          </h2>
          <p className="mt-2 max-w-[620px] leading-6 text-slate-500">
            No stage silently skips restrictions or missing context. Every
            action is authority-verified and evidence-persisted.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-wrap gap-1">
            {STAGES.map((stage, i) => {
              const active = i === 0;
              return (
                <span
                  key={stage.number}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 ${
                    active
                      ? "border-primary bg-primary"
                      : "border-black/5 bg-transparent"
                  }`}
                >
                  <span
                    className={`text-[10px] font-semibold ${
                      active ? "text-white/70" : "text-slate-400"
                    }`}
                  >
                    {stage.number}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      active ? "text-white" : "text-slate-500"
                    }`}
                  >
                    {stage.label}
                  </span>
                </span>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.18} y={30}>
          <PlaceholderImage
            src="/images/managers/operating-model.png"
            alt="Three colleagues working through a review at a table"
            label="Manager operating model"
            className="mt-8 h-72 w-full rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)]"
          />
        </Reveal>
      </Container>
    </section>
  );
}
