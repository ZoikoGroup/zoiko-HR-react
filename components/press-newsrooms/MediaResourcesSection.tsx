"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { InfoNote, SectionHeading } from "./shared";

const BOILERPLATE =
  "Zoiko HR is a governed HR platform designed for organizations that require structured workforce records, lifecycle workflows, permission-aware reporting, and integrated AI assistance under human authority. The platform is built to make HR data and processes legible, auditable, and correctable across complex organizational structures. For current product behavior and capability boundaries, see the Zoiko HR product documentation. Professional HR, legal, compliance, and payroll advice is not provided through the platform or its publications.";

const RESOURCES = [
  {
    kind: "Logo",
    title: "Zoiko HR primary logo",
    formats: "SVG, PNG",
    dimensions: "1200 × 400 px (SVG scalable)",
    size: "SVG 24 KB · PNG 2× 380 KB",
    note: "Approved for editorial and press use only. Clear space and color-use rules documented.",
    action: "Download SVG",
    actionSize: "SVG 24 KB",
  },
  {
    kind: "Logo",
    title: "Zoiko HR wordmark mark only",
    formats: "SVG, PNG",
    dimensions: "400 × 400 px",
    size: "SVG 12 KB · PNG 2× 140 KB",
    note: "Mark-only variant for constrained placements. Same editorial restrictions as primary logo.",
    action: "Download SVG",
    actionSize: "SVG 12 KB",
  },
  {
    kind: "Product image",
    title: "Platform Overview — approved illustration",
    formats: "PNG, WebP",
    dimensions: "2400 × 1600 px",
    size: "PNG 1.2 MB · WebP 480 KB",
    note: "Approved for external editorial use with full caption and credit. Version: PO-2026-09.",
    action: "Download PNG",
    actionSize: "PNG 1.2 MB",
  },
  {
    kind: "Media kit",
    title: "Zoiko HR media kit package",
    formats: "ZIP",
    dimensions: "—",
    size: "~8.4 MB",
    note: "Contains current logos, boilerplate, imagery, and usage guidance. Verify accuracy with media team if deadline-critical.",
    action: "Download ZIP",
    actionSize: "~8.4 MB",
  },
];

function Badge({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-bold uppercase leading-4 tracking-wide text-slate-500">
      {children}
    </span>
  );
}

function Available() {
  return (
    <span className="rounded-full border border-green-300 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold leading-4 text-green-800">
      Available
    </span>
  );
}

export function MediaResourcesSection() {
  const [copied, setCopied] = useState(false);

  async function copyBoilerplate() {
    try {
      await navigator.clipboard.writeText(BOILERPLATE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable — fail quietly.
    }
  }

  return (
    <section id="media-resources" className="scroll-mt-24 border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading title="Media resources — approved press materials.">
          Public downloads are available only while rights status and metadata are
          current. Rights information is shown before any download action.
        </SectionHeading>

        <Reveal>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>Boilerplate</Badge>
                  <span className="text-xs leading-4 text-slate-400">Version ID: BP-2026-09 · Reviewed Sep 2026</span>
                </div>
                <h3 className="mt-2 text-base font-extrabold leading-6 text-ink">Approved company boilerplate</h3>
              </div>
              <div className="flex items-center gap-2">
                <Available />
                <button
                  type="button"
                  onClick={copyBoilerplate}
                  className="rounded-full border border-indigo-200 px-3.5 py-1.5 text-xs font-semibold leading-5 text-primary transition-colors hover:bg-primary-light"
                >
                  <span aria-live="polite">{copied ? "Copied ✓" : "Copy text"}</span>
                </button>
              </div>
            </div>
            <p className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              {BOILERPLATE}
            </p>
            <p className="mt-3 text-xs leading-4 text-slate-300">
              Approved for press-release and external editorial use. Do not alter without editorial approval.
            </p>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {RESOURCES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-3">
                  <Badge>{r.kind}</Badge>
                  <Available />
                </div>
                <h3 className="mt-3 text-base font-extrabold leading-6 text-ink">{r.title}</h3>
                <dl className="mt-3 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
                  {[
                    ["Formats", r.formats],
                    ["Dimensions", r.dimensions],
                    ["File size", r.size],
                    ["Rights reviewed", "Sep 2026"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs uppercase leading-4 tracking-wide text-slate-300">{label}</dt>
                      <dd className="mt-0.5 text-sm leading-5 text-slate-600">{value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs leading-5 text-slate-400 sm:text-sm">
                  {r.note}
                </p>
                {/* The asset files don't exist in the repo yet, so this stays non-interactive. */}
                <span className="mt-4 self-start rounded-full border border-indigo-200 px-4 py-2 text-sm font-semibold text-primary">
                  {r.action} <span className="font-normal text-slate-300">· {r.actionSize}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <InfoNote className="mt-4">
            If an essential resource cannot be served, contact{" "}
            <Link href="/media-inquiries" className="underline">
              Media Inquiries
            </Link>{" "}
            and a rights-current version will be routed to you where available.
          </InfoNote>
        </Reveal>
      </Container>
    </section>
  );
}
