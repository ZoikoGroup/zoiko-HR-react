import type { Metadata } from "next";
import {
  OneHeroSection,
  WhatItIsSection,
  AuthorityContractSection,
  HandoffBoardSection,
  DependenciesSection,
  MixedStackSection,
  ProductHealthSection,
  AddRemoveSection,
  AntiSurveillanceSection,
  OneFaqSection,
  OneCtaSection,
} from "@/components/zoiko-one";

export const metadata: Metadata = {
  title: "Zoiko One | Zoiko HR",
  description:
    "Bring approved Zoiko HR relationships into a wider Zoiko suite context while preserving product-specific source authority, permissions, lifecycle, optionality and mixed-stack coexistence.",
};

export default function ZoikoOnePage() {
  return (
    <>
      <OneHeroSection />
      <WhatItIsSection />
      <AuthorityContractSection />
      <HandoffBoardSection />
      <DependenciesSection />
      <MixedStackSection />
      <ProductHealthSection />
      <AddRemoveSection />
      <AntiSurveillanceSection />
      <OneFaqSection />
      <OneCtaSection />
    </>
  );
}
