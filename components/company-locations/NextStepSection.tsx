import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const ROUTES = [
  {
    icon: "🛟",
    title: "Existing customer",
    body: "Product or account help. Support does not route through offices.",
    cta: "Support Center",
    href: "/help-center",
  },
  {
    icon: "💬",
    title: "General company question",
    body: "General inquiry selector and contact routing.",
    cta: "Contact Zoiko HR",
    href: "/contact-zoiko-hr",
  },
  {
    icon: "🧑‍💼",
    title: "Career or role question",
    body: "Open roles, hiring information, and location terms.",
    cta: "Careers",
    href: "/careers",
  },
  {
    icon: "🤝",
    title: "Partner or integration",
    body: "Business, technology, services, and channel partnerships.",
    cta: "Partner With Us",
    href: "/partner-with-us",
  },
  {
    icon: "🔏",
    title: "Privacy request",
    body: "Rights requests use the governed digital route. Do not mail sensitive identity evidence to an office.",
    cta: "Privacy route",
    href: "/privacy-notice",
  },
  {
    icon: "🔐",
    title: "Security issue",
    body: "Security findings never route to a physical office. Use the approved Security Reporting route.",
    cta: "Security Reporting",
    href: "/security-reporting",
  },
];

export function NextStepSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
            Plan your next step.
          </h2>
          <p className="mt-3 text-base leading-6 text-slate-500">
            Use the right route for your intent. Not every question routes to a
            corporate office.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-[288px_minmax(0,1fr)]">
          <Reveal className="lg:h-full">
            <PlaceholderImage
              src="/images/company-locations/next-step.png"
              alt="Colleagues talking together in a bright office"
              label="Colleagues in conversation"
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-slate-200 lg:aspect-auto lg:h-full"
            />
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {ROUTES.map((route, i) => (
              <li key={route.title}>
                <Reveal
                  delay={Math.min(i * 0.05, 0.25)}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <span aria-hidden className="text-xl leading-7">
                    {route.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-extrabold leading-5 text-ink">{route.title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-slate-400 sm:text-sm">{route.body}</p>
                  </div>
                  <Link
                    href={route.href}
                    className="mt-auto text-xs font-semibold leading-5 text-primary transition-colors hover:text-primary-dark sm:text-sm"
                  >
                    {route.cta} →
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
