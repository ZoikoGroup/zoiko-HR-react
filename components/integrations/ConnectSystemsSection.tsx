import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const CHECKLIST = [
  { title: "Reliable context", description: "Preserve identifiers, source, effective dates, scope, and provenance." },
  { title: "Controlled change", description: "Separate inbound data, proposals, approvals, and authorized actions." },
  { title: "Operational visibility", description: "Show health, failures, affected processes, ownership, and recovery." },
  { title: "Safer access", description: "Least privilege, service identities, environment separation, rotation, revocation." },
  { title: "Implementation clarity", description: "Assess objects, mappings, volumes, security, testing, and acceptance." },
  { title: "Evidence", description: "Preserve configuration, sync/event/file, error, retry, and reconciliation history." },
];

function CheckIcon() {
  return (
    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-400/20 text-emerald-400">
      <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
        <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function ConnectSystemsSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Connect systems without losing ownership, context, or
              control.
            </h2>
            <p className="mt-4 text-white/60">
              Workforce information can span HR, identity, time, payroll,
              recruiting, benefits, learning, finance, documents, and
              analytics. Ungoverned handoffs create duplicates, stale
              values, and unclear responsibility.
            </p>
          </Reveal>

          <Reveal delay={0.14} y={30}>
            <PlaceholderImage
              src="/images/integrations/connect-systems.png"
              alt="Team planning workforce information flows at a whiteboard"
              label="Connected, without losing control"
              fit="contain"
              className="w-full rounded-2xl shadow-xl shadow-black/30"
            />
          </Reveal>
        </div>

        <div className="mt-10 grid gap-x-8 border-t border-white/10 sm:grid-cols-2">
          {CHECKLIST.map((item, i) => (
            <Reveal key={item.title} delay={0.06 + i * 0.05}>
              <div className="flex items-start gap-3 border-b border-white/10 py-4">
                <CheckIcon />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
