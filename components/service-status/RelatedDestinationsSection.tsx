import Link from "next/link";
import { Container, Reveal } from "@/components/ui";

const DESTINATIONS = [
  { label: "Documentation", href: "/documentation" },
  { label: "Developer Documentation", href: "/developer-documentation" },
  { label: "Product Updates", href: "/product-updates" },
  { label: "Help Center", href: "/help-center" },
  // Contact Support is not yet an approved public route — the hero says to
  // start at the Help Center, so this routes there rather than to a dead end.
  { label: "Contact Support", href: "/help-center" },
];

export function RelatedDestinationsSection() {
  return (
    <section className="bg-[#102A43] py-16 text-white">
      <Container>
        <Reveal>
          <h2 className="text-center text-xl font-extrabold tracking-tight sm:text-2xl">
            Related destinations
          </h2>
          <p className="mt-2.5 text-center text-sm text-slate-300">
            Operational state stays here. Product changes, guidance, and support
            live at their own authority.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
            {DESTINATIONS.map((destination) => (
              <Link
                key={destination.label}
                href={destination.href}
                className="rounded-[10px] border border-cyan-900 bg-[#0A1B2E] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-primary hover:text-primary"
              >
                {destination.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
