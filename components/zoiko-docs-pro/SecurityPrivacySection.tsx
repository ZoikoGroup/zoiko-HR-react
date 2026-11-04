import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading } from "./shared";

const CONTROLS = [
  {
    title: "Preview / thumbnail",
    body: "Synthetic or redacted in public proof. Authenticated preview is permission/sensitivity filtered.",
  },
  {
    title: "Metadata minimization",
    body: "Titles, filenames, tags, owner, recipient, IDs and source paths treated as potentially sensitive.",
  },
  {
    title: "Search / facets / counts",
    body: "Permission-filtered before derivation. Restricted metadata never counted or exposed.",
  },
  {
    title: "URLs / signed links",
    body: "No access tokens, signed URLs, repository secrets or customer-specific paths in analytics or public examples.",
  },
  {
    title: "Session replay / DOM capture",
    body: "Prohibited by default on authenticated document/integration surfaces.",
  },
  {
    title: "Logs / support diagnostics",
    body: "Safe correlation/reference and coarse error categories. No document content or restricted metadata.",
  },
  {
    title: "Analytics",
    body: "No document titles, filenames, employee IDs, recipient lists, file content, restricted metadata or acknowledgment text.",
  },
];

export function SecurityPrivacySection() {
  return (
    <section className="bg-sky-950 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Security & privacy"
          title="Safe previews, metadata minimization, secure diagnostics — no malware/DLP/encryption claim without source"
          tone="dark"
        >
          Document titles, filenames, tags, owner, recipient IDs and source paths
          are treated as potentially sensitive. All controls apply to public
          product proof, authenticated surfaces, analytics and support
          diagnostics equally.
        </SectionHeading>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-indigo-400">
                Active controls
              </p>
              <div className="mt-4">
                {CONTROLS.map((control) => (
                  <div
                    key={control.title}
                    className="border-b border-white/5 py-3 last:border-b-0"
                  >
                    <p className="text-sm text-white">{control.title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/40">
                      {control.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="h-full">
            <PlaceholderImage
              src="/images/zoiko-docs-pro/security-privacy.webp"
              alt="Colleagues reviewing documents in an open-plan office"
              label="Security and privacy controls"
              className="aspect-video w-full rounded-xl bg-slate-900 lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
