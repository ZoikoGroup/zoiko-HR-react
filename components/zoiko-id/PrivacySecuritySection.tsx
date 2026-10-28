import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import { SectionHeading, RefTable } from "./shared";

const LEFT = [
  {
    icon: "🔑",
    title: "Tokens / assertions in public UI or logs",
    body: "No passwords, auth tokens, assertions, key material or recovery codes in public mockups, browser console, analytics or generic support diagnostics.",
  },
  {
    icon: "🔔",
    title: "Sensitive state in notifications",
    body: "Security alerts and notifications do not reveal account, admin or recovery detail in push previews, email subject lines or notification payloads.",
  },
];

const RIGHT = [
  {
    // U+FE0F forces emoji presentation — the bare ⚠ falls back to a thin,
    // near-invisible text glyph on Windows, so the icon read as missing.
    icon: "⚠️",
    title: "Account enumeration in sign-in errors",
    body: "Sign-in failures return safe category only. Never reveal whether account/tenant exists.",
  },
  {
    icon: "🎬",
    title: "Session replay on auth/admin surfaces",
    body: "Session replay and DOM capture are prohibited by default on authenticated identity, configuration and administration surfaces.",
  },
];

const CONTROLS = [
  [
    "Public mockups",
    "Synthetic identities, domains, roles and IDs",
    "No real identity data in any public proof.",
  ],
  [
    "Search / counts / facets",
    "Permission-filtered before derivation",
    "Restricted identity metadata never counted or exposed.",
  ],
  [
    "Error messages",
    "Safe category only; no account enumeration",
    "No raw claim, account existence or tenant detail.",
  ],
  [
    "Support diagnostics",
    "Safe correlation reference + coarse error category",
    "No assertion, session ID or account detail.",
  ],
  [
    "Analytics",
    "Coarse component/state IDs; separate purpose",
    "No PII, claims, session or security-event payload.",
  ],
];

function ProhibitedCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div className="h-full rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-2">
        <span aria-hidden className="text-base leading-none">
          {icon}
        </span>
        <span className="rounded-sm bg-red-500/10 px-2 py-0.5 text-[11px] font-medium leading-4 text-red-400">
          Prohibited
        </span>
      </div>
      <p className="mt-3.5 text-sm font-semibold leading-5 text-white">{title}</p>
      <p className="mt-2 text-xs leading-5 text-white/50">{body}</p>
    </div>
  );
}

export function PrivacySecuritySection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Privacy & Security"
          title="Six prohibited behaviors — tokens, claims, enumeration, state leakage, credential URLs and replay"
          tone="dark"
        >
          Secure diagnostics use safe correlation/reference and coarse error
          categories. Marketing analytics and operational identity logs remain
          separate purposes and separate data classes.
        </SectionHeading>

        {/*
          Three columns at lg: two stacked cards, the photo, two stacked cards.
          Below lg the photo drops to the end so the cards read in order.
        */}
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-5">
            {LEFT.map((card, i) => (
              <Reveal key={card.title} delay={0.06 + i * 0.05}>
                <ProhibitedCard {...card} />
              </Reveal>
            ))}
          </div>

          <div className="order-last md:col-span-2 lg:order-none lg:col-span-1">
            <Reveal delay={0.12} className="h-full">
              <PlaceholderImage
                src="/images/zoiko-id/privacy-security.webp"
                alt="Colleagues laughing together while reviewing a document"
                label="Privacy and security"
                className="aspect-video w-full rounded-xl bg-white/5 lg:aspect-auto lg:h-full"
              />
            </Reveal>
          </div>

          <div className="flex flex-col gap-5">
            {RIGHT.map((card, i) => (
              <Reveal key={card.title} delay={0.06 + i * 0.05}>
                <ProhibitedCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} amount={0}>
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <p className="border-b border-white/10 bg-white/5 px-4 py-3 text-xs font-medium leading-4 text-primary">
              Active controls — applied to all surfaces
            </p>
            <RefTable
              tone="dark"
              columns={["Surface", "Control", "Notes"]}
              gridClass="lg:grid-cols-[minmax(0,240px)_minmax(0,1fr)_minmax(0,1fr)]"
              rows={CONTROLS}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
