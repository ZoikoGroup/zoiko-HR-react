import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const ROUTES = [
  { dot: "bg-green-500", label: "Customer help", href: "/contact-support" },
  { dot: "bg-slate-500", label: "General company inquiry", href: "/contact-us" },
  { dot: "bg-primary", label: "Partnership inquiry", href: "/partner-with-us" },
  { dot: "bg-yellow-500", label: "Media inquiry", href: "/media-inquiries" },
  { dot: "bg-orange-400", label: "Careers", href: "/careers" },
  { dot: "bg-cyan-500", label: "Privacy or data request", href: "/security-privacy" },
  { dot: "bg-red-400", label: "Report a security issue", href: "/security-reporting" },
];

export function NotCommercialSection() {
  return (
    <section className="border-b border-slate-100 bg-white py-10">
      <Container>
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
            Not a commercial inquiry?
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-3.5 flex flex-wrap gap-2.5">
            {ROUTES.map((route) => (
              <Link
                key={route.label}
                href={route.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-2 transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                <span
                  aria-hidden
                  className={`size-1.5 flex-none rounded-full ${route.dot}`}
                />
                <span className="text-xs leading-5 text-gray-700">
                  {route.label}
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
