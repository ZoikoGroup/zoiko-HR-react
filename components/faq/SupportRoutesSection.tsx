import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

function LifeRingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.5 5.5l3.7 3.7M18.5 5.5l-3.7 3.7M5.5 18.5l3.7-3.7M18.5 18.5l-3.7-3.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function StatusDotIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-emerald-400">
      <circle cx="12" cy="12" r="6" fill="currentColor" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <path d="M3 8l9-5 9 5-9 5-9-5zM3 8v8l9 5 9-5V8M12 13v8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary">
      <circle cx="8" cy="15" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 12.5L19 4M16 6l2 2M13 9l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ROUTES = [
  { title: "Help Center", Icon: LifeRingIcon, description: "Step-by-step troubleshooting and how-to guides.", linkLabel: "Go to Help Center", href: "/help-center" },
  { title: "Service Status", Icon: StatusDotIcon, description: "Live and historical service health information.", linkLabel: "Check Status", href: "/service-status" },
  { title: "Product Updates", Icon: BoxIcon, description: "Shipped changes, release notes, and what is new.", linkLabel: "View Updates", href: "/resources/product-updates" },
  { title: "Sign In", Icon: KeyIcon, description: "Access your authenticated Zoiko HR workspace.", linkLabel: "Sign In", href: "/sign-in" },
];

export function SupportRoutesSection() {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Already using Zoiko HR? Get direct help.
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-2 text-white/60">
            Support routes are always accessible and never hidden by
            sales UI.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3 lg:items-center">
          <div className="flex flex-col gap-4">
            {ROUTES.slice(0, 2).map((route, i) => (
              <Reveal key={route.title} delay={0.08 + i * 0.06}>
                <div className="rounded-2xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <route.Icon />
                  </span>
                  <p className="mt-3 font-semibold">{route.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{route.description}</p>
                  <Link href={route.href} className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white">
                    {route.linkLabel}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} y={30}>
            <PlaceholderImage
              src="/images/faq/support-routes.png"
              alt="Person smiling and shaking hands"
              label="Direct help"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            {ROUTES.slice(2, 4).map((route, i) => (
              <Reveal key={route.title} delay={0.12 + i * 0.06}>
                <div className="rounded-2xl bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <route.Icon />
                  </span>
                  <p className="mt-3 font-semibold">{route.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{route.description}</p>
                  <Link href={route.href} className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white">
                    {route.linkLabel}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.36}>
          <p className="mt-8 text-center text-xs text-white/40">
            Support routes appear before conversion and are never hidden
            by sales UI.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
