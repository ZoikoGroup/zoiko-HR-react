import type { Metadata } from "next";
import {
  DemoHeroSection,
  WhatToExpectSection,
  WalkThroughSection,
  GoodFaithSection,
  DemoFaqSection,
  NotReadySection,
} from "@/components/book-a-demo";

export const metadata: Metadata = {
  title: "Book a Demo | Zoiko HR",
  description:
    "Tell us about your team and we'll tailor a 30–45 minute walkthrough to the records, workflows, access and reporting you care about most — no cost, contract or obligation.",
};

export default function BookADemoPage() {
  return (
    <div id="top">
      <DemoHeroSection />
      <WhatToExpectSection />
      <WalkThroughSection />
      <GoodFaithSection />
      <DemoFaqSection />
      <NotReadySection />
    </div>
  );
}
