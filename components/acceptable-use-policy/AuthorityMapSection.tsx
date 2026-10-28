import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { PolicyTable } from "./shared";

const AUTHORITIES: { authority: string; owns: string }[] = [
  {
    authority: "Terms of Service",
    owns: "Binding contractual terms, remedies, suspension/termination mechanics, disclaimers, liability, governing law where applicable.",
  },
  {
    authority: "Acceptable Use Policy",
    owns: "Public acceptable/prohibited-use standards and abuse-prevention expectations.",
  },
  {
    authority: "AI Governance",
    owns: "Detailed AI permissions, transparency, human review, logging, model/use-case controls, prohibited AI uses.",
  },
  {
    authority: "Security Reporting",
    owns: "Responsible vulnerability-reporting route and approved testing rules.",
  },
  {
    authority: "Security & Privacy",
    owns: "Evidence-led security/privacy posture and control boundaries.",
  },
  {
    authority: "Privacy Notice / DPA",
    owns: "Public controller-side privacy information and customer processing terms.",
  },
  {
    authority: "Customer policy / admin configuration",
    owns: "Customer-specific workforce policies and configured controls.",
  },
  {
    authority: "Support / account route",
    owns: "Account-specific operational questions.",
  },
];

export function AuthorityMapSection() {
  return (
    <section id="applicability" className="scroll-mt-24 bg-white py-14 sm:py-16">
      <Container>
        <Reveal>
          <div className="rounded-xl bg-indigo-50 px-7 py-6">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
              Authority notice
            </p>
            <p className="mt-2 text-base leading-6 text-ink-2">
              Contractual consequences and account-specific rights are governed
              by the applicable Terms of Service, order form, or customer
              agreement. Detailed AI, privacy, and security rules remain with
              their specialist authorities below.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,446px)]">
          <Reveal>
            <PolicyTable
              columns={["Authority", "Owns"]}
              rows={AUTHORITIES.map((row) => [row.authority, row.owns])}
              minWidth="min-w-[520px]"
            />
          </Reveal>

          <Reveal delay={0.12} className="lg:h-full">
            <PlaceholderImage
              src="/images/acceptable-use-policy/authority-map.png"
              alt="An adviser walking a colleague through a document on a tablet"
              label="Walking through a policy document"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl sm:aspect-[16/9] lg:aspect-auto lg:h-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
