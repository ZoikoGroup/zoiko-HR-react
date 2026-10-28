import type { Metadata } from "next";
import { SignInFlow, type SignInStep } from "@/components/sign-in";

export const metadata: Metadata = {
  title: "Sign in | Zoiko HR",
  description:
    "Sign in to Zoiko HR with your work email to continue to your organization's workspace.",
  alternates: { canonical: "https://zoikohr.com/sign-in" },
  robots: { index: false, follow: false },
};

const STEPS: SignInStep[] = [
  "email",
  "password",
  "sso",
  "verify",
  "workspace",
  "no-workspace",
  "session-ended",
  "reset",
];

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ step?: string }>;
}) {
  const { step } = await searchParams;
  const initialStep = STEPS.find((value) => value === step) ?? "email";

  return <SignInFlow initialStep={initialStep} />;
}
