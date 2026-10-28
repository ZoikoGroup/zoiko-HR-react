"use client";

import { useEffect, useState } from "react";
import {
  AuthCard,
  AuthShell,
  AuthSubtitle,
  AuthTitle,
  HelpNote,
  ProtectedNote,
} from "./AuthChrome";
import {
  AccountChip,
  OutlineButton,
  PasswordInput,
  PrimaryButton,
  SecondaryButton,
  StatusIcon,
  TextInput,
} from "./fields";

export type SignInStep =
  | "email"
  | "password"
  | "sso"
  | "verify"
  | "workspace"
  | "no-workspace"
  | "session-ended"
  | "reset";

type Workspace = { id: string; name: string; role: string };

/** Demo directory until the identity service is wired up. */
const SSO_DOMAIN = "meridian-group.com";
const WORKSPACES: Workspace[] = [
  { id: "meridian-group", name: "Meridian Group", role: "HR team · EMEA" },
  { id: "meridian-de", name: "Meridian DE GmbH", role: "HR administrator" },
];

export function SignInFlow({
  initialStep = "email",
}: {
  initialStep?: SignInStep;
}) {
  const [step, setStep] = useState<SignInStep>(initialStep);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [pendingWorkspace, setPendingWorkspace] = useState<string | null>(null);

  const usesSso = email.trim().toLowerCase().endsWith(`@${SSO_DOMAIN}`);

  useEffect(() => {
    if (step !== "sso") return;
    const timer = setTimeout(() => setStep("verify"), 2200);
    return () => clearTimeout(timer);
  }, [step]);

  const resetToEmail = () => {
    setStep("email");
    setPassword("");
    setCode("");
    setPendingWorkspace(null);
  };

  const goto = (next: SignInStep) => () => setStep(next);

  const forgotPassword = (
    <button
      type="button"
      onClick={goto("reset")}
      className="rounded-sm text-xs leading-4 text-[#315EFB] hover:underline"
    >
      Forgot password?
    </button>
  );

  return (
    <AuthShell glow={step === "email"}>
      {step === "email" ? (
        <AuthCard>
          <AuthTitle>Sign in to Zoiko HR</AuthTitle>
          <AuthSubtitle>
            Use your work email to continue to your organization&apos;s workspace.
          </AuthSubtitle>

          <form
            className="flex flex-col gap-5 pt-6"
            onSubmit={(event) => {
              event.preventDefault();
              if (usesSso) {
                setStep("sso");
                return;
              }
              setStep(password ? "verify" : "password");
            }}
          >
            <TextInput
              label="Work email"
              type="email"
              name="email"
              autoComplete="username"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <PasswordInput
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              action={forgotPassword}
            />
            <PrimaryButton type="submit" className="mt-1">
              Continue
            </PrimaryButton>
          </form>

          <HelpNote />
          <ProtectedNote />
        </AuthCard>
      ) : null}

      {step === "password" ? (
        <AuthCard>
          <AuthTitle>Enter your password</AuthTitle>
          <div className="pt-4">
            <AccountChip email={email} onUseAnother={resetToEmail} />
          </div>

          <form
            className="flex flex-col gap-5 pt-6"
            onSubmit={(event) => {
              event.preventDefault();
              setStep("verify");
            }}
          >
            <PasswordInput
              name="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              action={forgotPassword}
            />
            <PrimaryButton type="submit" className="mt-1">
              Sign in
            </PrimaryButton>
            <SecondaryButton type="button" onClick={goto("sso")}>
              Use another sign-in method
            </SecondaryButton>
          </form>

          <HelpNote />
        </AuthCard>
      ) : null}

      {step === "sso" ? (
        <AuthCard>
          <div className="flex flex-col items-center text-center">
            <StatusIcon tone="brand">
              <svg
                viewBox="0 0 20 20"
                className="size-5 fill-none stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="10" cy="10" r="7.25" />
                <path d="m6.75 10.25 2.1 2.1 4.4-4.4" />
              </svg>
            </StatusIcon>
            <div className="pt-4">
              <AuthTitle>
                Redirecting to your organization&apos;s sign-in
              </AuthTitle>
            </div>
            <p className="pt-2 text-sm leading-6 text-[#374151]">{email}</p>
            <p className="text-sm leading-6 text-[#5A6272]">
              You&apos;ll be directed to your organization&apos;s identity
              provider to complete sign-in.
            </p>
            <p
              role="status"
              className="flex items-center justify-center gap-2 pt-5 text-sm leading-5 text-[#9098A4]"
            >
              <span
                aria-hidden
                className="size-3 animate-spin rounded-full border border-[#D5DAE7] border-t-[#5A6272]"
              />
              Connecting securely...
            </p>
            <hr className="mt-6 w-full border-[#E3E6EA]" />
          </div>
          <HelpNote />
        </AuthCard>
      ) : null}

      {step === "verify" ? (
        <AuthCard>
          <AuthTitle>Verify it&apos;s you</AuthTitle>
          <AuthSubtitle>
            Complete the verification method required for your account.
          </AuthSubtitle>

          <div className="pt-4">
            <AccountChip email={email} onUseAnother={resetToEmail} />
          </div>

          <form
            className="flex flex-col gap-5 pt-6"
            onSubmit={(event) => {
              event.preventDefault();
              setStep(usesSso ? "workspace" : "no-workspace");
            }}
          >
            <TextInput
              label="Verification code"
              name="one-time-code"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              required
              placeholder="Enter 6-digit code"
              className="tracking-[0.18em]"
              value={code}
              onChange={(event) =>
                setCode(event.target.value.replace(/\D/g, "").slice(0, 6))
              }
            />
            <PrimaryButton type="submit" className="mt-1">
              Verify
            </PrimaryButton>
            <SecondaryButton type="button" onClick={goto("password")}>
              Try another method
            </SecondaryButton>
          </form>

          <HelpNote />
        </AuthCard>
      ) : null}

      {step === "workspace" ? (
        <AuthCard>
          <AuthTitle>Choose a workspace</AuthTitle>
          <AuthSubtitle>
            Select the Zoiko HR workspace you want to open.
          </AuthSubtitle>

          <ul className="flex flex-col gap-3 pt-6">
            {WORKSPACES.map((workspace) => (
              <li key={workspace.id}>
                <button
                  type="button"
                  disabled={pendingWorkspace !== null}
                  onClick={() => setPendingWorkspace(workspace.id)}
                  className="flex w-full items-center justify-between gap-4 rounded-lg bg-white px-4 py-3 text-left outline outline-1 -outline-offset-1 outline-[#D5DAE7] transition-colors hover:bg-[#F6F8FA] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold leading-5 text-[#1A2332]">
                      {workspace.name}
                    </span>
                    <span className="block truncate text-xs leading-4 text-[#9098A4]">
                      {workspace.role}
                    </span>
                  </span>
                  {pendingWorkspace === workspace.id ? (
                    <span
                      aria-hidden
                      className="size-3.5 shrink-0 animate-spin rounded-full border border-[#D5DAE7] border-t-[#5A6272]"
                    />
                  ) : (
                    <svg
                      aria-hidden
                      viewBox="0 0 16 16"
                      className="size-4 shrink-0 fill-none stroke-[#9098A4]"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 3.5 4.5 4.5L6 12.5" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>

          <HelpNote />
        </AuthCard>
      ) : null}

      {step === "no-workspace" ? (
        <AuthCard>
          <StatusIcon tone="neutral">
            <svg
              viewBox="0 0 20 20"
              className="size-5 fill-none stroke-current"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <circle cx="10" cy="10" r="7.25" />
              <path d="M10 7v6M7 10h6" />
            </svg>
          </StatusIcon>
          <div className="pt-4">
            <AuthTitle>No workspace available</AuthTitle>
          </div>
          <AuthSubtitle>
            You&apos;re signed in, but no Zoiko HR workspace is currently
            available to this account. Contact your organization administrator
            for access.
          </AuthSubtitle>
          <div className="pt-6">
            <OutlineButton type="button" onClick={goto("session-ended")}>
              Contact support
            </OutlineButton>
          </div>
          <HelpNote />
        </AuthCard>
      ) : null}

      {step === "session-ended" ? (
        <AuthCard>
          <StatusIcon tone="warning">
            <svg
              viewBox="0 0 20 20"
              className="size-5 fill-none stroke-current"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <circle cx="10" cy="10" r="7.25" />
              <path d="M10 6.5v4.25M10 13.4h.01" />
            </svg>
          </StatusIcon>
          <div className="pt-4">
            <AuthTitle>Your session has ended</AuthTitle>
          </div>
          <AuthSubtitle>Sign in again to continue securely.</AuthSubtitle>
          <div className="pt-6">
            <PrimaryButton type="button" onClick={resetToEmail}>
              Sign in again
            </PrimaryButton>
          </div>
          <HelpNote />
        </AuthCard>
      ) : null}

      {step === "reset" ? (
        <AuthCard>
          <AuthTitle>Reset your password</AuthTitle>
          <AuthSubtitle>
            Enter your work email and we&apos;ll send recovery instructions if
            available for your account.
          </AuthSubtitle>

          <form
            className="flex flex-col gap-5 pt-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <TextInput
              label="Work email"
              type="email"
              name="email"
              autoComplete="username"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <PrimaryButton type="submit" className="mt-1">
              Send recovery email
            </PrimaryButton>
            <SecondaryButton type="button" onClick={resetToEmail}>
              Back to sign in
            </SecondaryButton>
          </form>
        </AuthCard>
      ) : null}
    </AuthShell>
  );
}
