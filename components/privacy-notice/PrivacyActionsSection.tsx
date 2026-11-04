import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ACTIONS = [
  { label: "Submit a privacy request", href: "/contact-zoiko-hr", variant: "primary" as const },
  { label: "Manage cookie preferences", href: "/cookie-notice", variant: "outline" as const },
  { label: "Manage marketing preferences", href: "/contact-zoiko-hr", variant: "outline" as const },
  { label: "Visit Trust Center", href: "/trust-center", variant: "muted" as const },
];

const STYLES = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  outline: "border border-primary text-primary hover:bg-primary-light",
  muted: "border border-slate-300 text-slate-500 hover:border-slate-400 hover:text-slate-600",
};

export function PrivacyActionsSection() {
  return (
    <section className="border-b border-indigo-200 bg-primary-light/60 py-10">
      <Container>
        <Reveal>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            {ACTIONS.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 text-center text-sm font-semibold transition-colors sm:justify-start ${STYLES[action.variant]}`}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 max-w-[700px] text-xs leading-5 text-slate-600">
            Use the dedicated routes above so your request reaches the correct
            owner. Do not include passwords, government identifiers, payroll
            files, health records, or unrelated employee data in a general
            message.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <PlaceholderImage
            src="/images/privacy-notice/privacy-requests.png"
            alt="A screen showing a phishing link warning over an email"
            label="Phishing link warning on screen"
            className="mt-8 aspect-[1140/330] w-full rounded-xl"
          />
        </Reveal>
      </Container>
    </section>
  );
}
