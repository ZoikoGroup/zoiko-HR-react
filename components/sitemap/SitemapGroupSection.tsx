import Link from "next/link";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";
import type { SitemapGroup, SitemapLink } from "./sitemapData";

function SitemapCard({ link, tone }: { link: SitemapLink; tone: SitemapGroup["tone"] }) {
  return (
    <Link
      href={link.href}
      className={`flex h-full flex-col gap-1.5 rounded-xl border px-5 py-4 transition-colors ${
        tone === "dark"
          ? "border-white/15 bg-[#0A1B2E] hover:border-primary"
          : "border-slate-200 bg-white hover:border-primary hover:bg-slate-50"
      }`}
    >
      <span
        className={`text-sm font-semibold leading-5 ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {link.label}
      </span>
      <span
        className={`text-xs leading-5 ${
          tone === "dark" ? "text-white/70" : "text-slate-400"
        }`}
      >
        {link.description}
      </span>
    </Link>
  );
}

export function SitemapGroupSection({
  group,
  links,
}: {
  group: SitemapGroup;
  /** Filtered subset of `group.links` — the section is hidden when empty. */
  links: SitemapLink[];
}) {
  if (links.length === 0) return null;

  const isDark = group.tone === "dark";

  return (
    <section
      id={group.id}
      className={`scroll-mt-24 py-10 sm:py-14 ${isDark ? "bg-[#102A43]" : "bg-white"}`}
    >
      <Container>
        <Reveal>
          <h2
            className={`text-xl font-extrabold leading-7 tracking-tight ${
              isDark ? "text-white" : "text-ink"
            }`}
          >
            {group.title}
          </h2>
          <p
            className={`mt-1.5 max-w-[480px] text-sm leading-5 ${
              isDark ? "text-slate-300" : "text-slate-500"
            }`}
          >
            {group.description}
          </p>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_392px]">
          <div className="grid gap-4 sm:grid-cols-2">
            {links.map((link, i) => (
              <Reveal key={link.href + link.label} delay={Math.min(i * 0.04, 0.24)}>
                <SitemapCard link={link} tone={group.tone} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} className="lg:h-full">
            <PlaceholderImage
              src={group.image.src}
              alt={group.image.alt}
              label={group.image.label}
              loading="lazy"
              className={`aspect-[4/3] w-full rounded-xl sm:aspect-[16/9] lg:aspect-auto lg:h-full ${
                isDark ? "border border-white/15" : "border border-slate-200"
              }`}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
