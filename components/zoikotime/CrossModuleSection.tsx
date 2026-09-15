import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const MODULES = [
  {
    glyph: "◷",
    accent: "text-primary",
    module: "Leave & Attendance",
    owns: "Leave policies, requests, balances, approvals and calendars within Zoiko HR.",
  },
  {
    glyph: "◈",
    accent: "text-violet-600",
    module: "Zoiko Payroll",
    status: "paused",
    owns: "Payroll calculation, payment, tax filing and payslip authority.",
  },
  {
    glyph: "⊞",
    accent: "text-amber-600",
    module: "Data Import & Export",
    owns: "One-time/batch preparation, validation, migration and export mechanics.",
  },
  {
    glyph: "◎",
    accent: "text-sky-700",
    module: "Integration Security",
    owns: "Authorization, minimization, service identities and auditability.",
  },
  {
    glyph: "⊙",
    accent: "text-green-700",
    module: "Identity & Single Sign-On",
    owns: "Identity providers, sign-in routing, access controls and account recovery.",
  },
  {
    glyph: "↔",
    accent: "text-slate-500",
    module: "Controlled Interoperability",
    status: "paused",
    owns: "Optionality and permission-controlled ecosystem flow policy.",
  },
];

export function CrossModuleSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Cross-module boundaries"
          title="Six authority handoffs — this page references but never duplicates owning authorities"
        >
          Each module owns its scope absolutely. ZoikoTime ecosystem page links
          to sibling authorities and explains the boundary — it does not recreate
          their logic.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,529px)]">
          <div className="flex flex-col">
            {MODULES.map((row, i) => (
              <Reveal key={row.module} delay={Math.min(0.06 + i * 0.05, 0.3)} className="flex-1">
                <div className="grid h-full gap-2 py-4 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)] sm:gap-0">
                  <div className="flex items-start gap-2 sm:pr-5">
                    <span aria-hidden className={`text-sm ${row.accent}`}>
                      {row.glyph}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        {row.module}
                      </p>
                      {row.status && (
                        <p className="text-[10px] text-slate-400">{row.status}</p>
                      )}
                    </div>
                  </div>
                  <div className="sm:border-l sm:border-slate-200 sm:pl-5">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">
                      This module owns
                    </p>
                    <p className="mt-1 text-sm leading-5 text-slate-600">
                      {row.owns}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Absolutely positioned so the photo's intrinsic height never drives
              the row — the module list sets the height. */}
          <div className="relative min-h-64 lg:min-h-0">
            <Reveal delay={0.16} className="absolute inset-0">
              <PlaceholderImage
                src="/images/zoikotime/cross-module.webp"
                alt="Colleagues reviewing reference material together"
                label="Authority handoffs"
                className="h-full w-full rounded-xl bg-slate-100"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
