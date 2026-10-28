import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { ControlItem } from "./shared";

const CONTROLS = [
  {
    title: "Permission-filter before counts/facets/exports",
    body: "Restricted populations cannot be inferred from public or manager-visible aggregates.",
  },
  {
    title: "Notification preview minimization",
    body: "Email/push/lock-screen content excludes sensitive employee or time detail by default.",
  },
  {
    title: "Session replay off by default",
    body: "No session replay or DOM capture on authenticated time or integration surfaces.",
  },
  {
    title: "Secure diagnostics boundary",
    body: "Support logs use safe references and status categories — no full time payloads or employee identifiers.",
  },
  {
    title: "Analytics minimization",
    body: "No employee/time values, connection IDs, raw errors or sensitive filters in marketing analytics.",
  },
  {
    title: "Delegated context visibility",
    body: "Acting/delegated context is visible, persists correctly and revalidates on revocation.",
  },
];

export function PrivacySection() {
  return (
    <section className="bg-slate-900 py-16 sm:py-20">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-indigo-400">
            Privacy &amp; anti-surveillance
          </p>
          <div className="mt-3 border-l-[3px] border-primary pl-6">
            <h2 className="text-2xl font-extrabold leading-9 text-white sm:text-3xl">
              Schedule, attendance and timesheet information is for approved
              operational purposes only — never for scoring, ranking or
              disciplinary inference.
            </h2>
            <p className="mt-3 max-w-[700px] leading-6 text-white/60">
              ZoikoTime context accessed through Zoiko HR does not and must not
              become a behavioral signal, productivity metric, reliability
              assessment or employment decision driver. Connection does not
              authorize surveillance.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal delay={0.1} className="h-full">
            <PlaceholderImage
              src="/images/zoikotime/privacy.webp"
              alt="Colleagues discussing operational context in a meeting room"
              label="Approved operational purposes"
              className="aspect-[630/381] w-full rounded-xl border border-red-600/30 bg-red-600/10 lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <Reveal delay={0.16} className="h-full">
            <div className="h-full rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-indigo-400">
                Technical / operational controls
              </p>
              <div className="pt-4">
                {CONTROLS.map((control) => (
                  <ControlItem key={control.title} {...control} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
