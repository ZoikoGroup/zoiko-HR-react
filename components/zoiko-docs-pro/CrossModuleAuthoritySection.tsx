import { Container, Reveal } from "@/components/ui";
import { SectionHeading } from "./shared";

const AUTHORITIES = [
  {
    glyph: "◈",
    accent: "text-primary",
    module: "Documents & Policies",
    owns: "HR document/template lifecycle, version authority, distribution assignment, acknowledgment semantics, retention/hold and accessibility gate.",
    behavior:
      "Route acknowledgment, distribution, legal meaning and retained-version questions here. Never duplicate HR document lifecycle authority.",
  },
  {
    glyph: "⊞",
    accent: "text-sky-700",
    module: "Data Import & Export",
    owns: "Bulk document/file migration, validation, execution and export artifact mechanics.",
    behavior:
      "If moving bulk documents requires migration, route to Data Import & Export. Do not describe migration as ongoing sync.",
  },
  {
    glyph: "◎",
    accent: "text-violet-600",
    module: "Integration Security",
    owns: "Authorization, minimization, service identity, secure diagnostics and evidence for integration connections.",
    behavior:
      "Consume security posture summary. Route detailed authorization/minimization/audit controls here.",
  },
  {
    glyph: "◷",
    accent: "text-amber-600",
    module: "Zoiko Comply",
    status: "paused",
    owns: "Policy/control/evidence compliance workflows.",
    behavior:
      "Route compliance evidence and control relationship questions after Zoiko Comply approval. No compliance conclusion claimed here.",
  },
  {
    glyph: "⊙",
    accent: "text-green-700",
    module: "ZoikoID",
    status: "paused",
    owns: "Identity providers, authentication and access-control setup.",
    behavior:
      "Route identity/SSO/access-control setup here after ZoikoID approval. Do not duplicate sign-in configuration.",
  },
  {
    glyph: "↔",
    accent: "text-slate-500",
    module: "Controlled Interoperability",
    owns: "Optional ecosystem and coexistence principle.",
    behavior:
      "Reinforce Zoiko Docs Pro is not mandatory. External document systems may coexist where supported.",
  },
];

export function CrossModuleAuthoritySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Cross-module authority map"
          title="Six authorities — Docs Pro references each one but never duplicates their scope"
        >
          Each module owns its domain absolutely. This page is a governed content
          interoperability surface — not a document lifecycle engine, compliance
          authority or identity provider.
        </SectionHeading>

        <div className="mt-10 flex flex-col gap-4">
          {AUTHORITIES.map((row, i) => (
            <Reveal key={row.module} delay={Math.min(0.06 + i * 0.05, 0.3)}>
              <div className="grid gap-4 rounded-xl border border-slate-200 p-5 lg:grid-cols-[minmax(0,200px)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-0 lg:p-0">
                <div className="flex items-start gap-2 lg:px-5 lg:py-5">
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

                <div className="lg:border-l lg:border-slate-100 lg:px-5 lg:py-5">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                    This module owns
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-700">
                    {row.owns}
                  </p>
                </div>

                <div className="lg:border-l lg:border-slate-100 lg:px-5 lg:py-5">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                    Zoiko Docs Pro page behavior
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-700">
                    {row.behavior}
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
