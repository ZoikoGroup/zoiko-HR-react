"use client";

import { useState } from "react";
import { Container, Reveal, PlaceholderImage } from "@/components/ui";

const TOPICS = [
  "Product & Platform",
  "Global & Multi-Entity",
  "Integrations",
  "Security & Privacy",
  "Implementation",
  "Pricing & Access",
  "Roles",
  "Support",
];

const SUPPORT_LINKS = [
  { label: "Help Center", href: "/help-center" },
  { label: "Documentation", href: "/resources/developer-documentation" },
  { label: "Service Status", href: "/service-status" },
  { label: "Contact Support", href: "/contact-us" },
];

export function FaqHeroSection() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-20 text-white sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(60%_50%_at_20%_0%,rgba(49,94,251,0.35),transparent)]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                Zoiko HR FAQ
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Get direct answers about Zoiko HR — and know where to
                verify the details.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-white/70">
                Every answer is source-governed and reviewed. Where
                availability varies by region, plan, or configuration,
                that is stated explicitly.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions..."
                className="mt-6 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors duration-150 focus:border-primary focus:ring-1 focus:ring-primary/40"
              />
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-4 flex flex-wrap gap-2">
                {TOPICS.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70 transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-white/10 pt-4 text-sm">
                <span className="text-white/50">Already using Zoiko HR?</span>
                {SUPPORT_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-semibold text-primary hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-3 text-xs text-white/40">
                Current answers are source-governed, reviewed, scoped, and
                qualified where availability varies.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={36}>
            <PlaceholderImage
              src="/images/faq/hero.png"
              alt="Colleagues high-fiving in an office"
              label="Direct, source-governed answers"
              fit="contain"
              className="w-full rounded-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
