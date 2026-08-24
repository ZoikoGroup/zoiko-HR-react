import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROLE_LINES = [
  "Entity Admin",
  "Scope: Acme DE GmbH only",
  "Granted: View/edit records, approve leave",
  "Prohibited: Cross-entity export, delegation grants",
];

const RACI_LINES = [
  "Structure & configuration: Portfolio Owner",
  "Access & security: Security Admin",
  "Integrations: Integration Admin",
  "Reporting & export: Reporting/Auditor",
];

export function SeparationOfDutiesSection() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <Reveal className="max-w-[700px]">
          <h2 className="font-heading text-3xl font-extrabold text-sky-950">
            Corporate title never grants Zoiko HR permissions on its own.
          </h2>
          <p className="mt-4 leading-6 text-slate-600">
            Separation of duties keeps structure, access, integrations,
            reporting and professional decisions from collapsing into one
            default admin role.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Reveal delay={0.08}>
            <DutyCard label="Role" lines={ROLE_LINES} />
          </Reveal>
          <Reveal delay={0.14}>
            <DutyCard label="Responsibility (RACI)" lines={RACI_LINES} />
          </Reveal>
          <Reveal delay={0.2} y={30}>
            <PlaceholderImage
              src="/images/multi-entity-enterprises/separation-of-duties.png"
              alt="A colleague assisting another at a computer workstation"
              label="Separation of duties"
              className="h-40 w-full rounded-xl border border-primary bg-white lg:h-full"
            />
          </Reveal>
        </div>

        <Reveal delay={0.26}>
          <p className="mt-8 text-xs leading-5 text-slate-500">
            Expired or revoked delegation is denied by current authorization,
            even if a browser session remains active.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function DutyCard({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div className="h-full rounded-xl border border-slate-200 bg-white p-6">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <ul className="mt-2.5 space-y-1 text-sm leading-6 text-slate-600">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
