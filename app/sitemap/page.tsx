import type { Metadata } from "next";
import { SitemapExplorer } from "@/components/sitemap";

export const metadata: Metadata = {
  title: "Sitemap | Zoiko HR",
  description:
    "Find product, solution, resource, company, support, privacy, and legal pages across Zoiko HR from one searchable directory.",
};

export default function SitemapPage() {
  return <SitemapExplorer />;
}
