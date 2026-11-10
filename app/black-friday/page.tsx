import type { Metadata } from "next";
import {
  BlackFridaySubnav,
  BlackFridayHeroSection,
  BlackFridayPlansSection,
  BlackFridayTicker,
  BlackFridayCompareSection,
  BlackFridaySaleDatesSection,
  BlackFridayStepsSection,
  BlackFridayTermsSection,
  BlackFridayFaqSection,
  BlackFridayFinalCtaSection,
  BlackFridayStickyBar,
} from "@/components/black-friday";

export const metadata: Metadata = {
  title: "Black Friday 2026: 25% off | Zoiko HR",
  description:
    "25% off the first year of eligible annual Zoiko HR plans for new customers, Nov 27 – Nov 30, 2026. Core, Advanced and Enterprise from $4.50 per employee / month.",
};

export default function BlackFridayPage() {
  return (
    <>
      <BlackFridaySubnav />
      <BlackFridayHeroSection />
      <BlackFridayPlansSection />
      <BlackFridayTicker />
      <BlackFridayCompareSection />
      <BlackFridaySaleDatesSection />
      <BlackFridayStepsSection />
      <BlackFridayTermsSection />
      <BlackFridayFaqSection />
      <BlackFridayFinalCtaSection />
      {/* Keeps the fixed promo bar from covering the site footer. */}
      <div aria-hidden className="h-14" />
      <BlackFridayStickyBar />
    </>
  );
}
