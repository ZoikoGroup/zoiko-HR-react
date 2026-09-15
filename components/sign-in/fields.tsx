"use client";

import Link from "next/link";
import { useId, useState, type ReactNode } from "react";

export function Field({
  label,
  action,
  children,
}: {
  label: ReactNode;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between gap-3 pb-1.5">
        <span className="text-sm font-semibold leading-5 text-[#374151]">
          {label}
        </span>
        {action}
      </div>
      {children}
    </div>
  );
}

const INPUT_CLASS =
  "h-11 w-full rounded-lg bg-white px-3.5 text-sm text-[#1A2332] outline outline-1 -outline-offset-1 outline-[#D5DAE7] placeholder:text-[#9098A4] focus:outline-2 focus:-outline-offset-2 focus:outline-[#315EFB]";

export function TextInput({
  label,
  action,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  action?: ReactNode;
}) {
  const id = useId();
  return (
    <Field
      label={<label htmlFor={id}>{label}</label>}
      action={action}
    >
      <input id={id} className={`${INPUT_CLASS} ${className ?? ""}`} {...props} />
    </Field>
  );
}

export function PasswordInput({
  label = "Password",
  action,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  action?: ReactNode;
}) {
  const id = useId();
  const [visible, setVisible] = useState(false);

  return (
    <Field label={<label htmlFor={id}>{label}</label>} action={action}>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          className={`${INPUT_CLASS} pr-16`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-pressed={visible}
          className="absolute right-1.5 top-1.5 flex h-8 min-w-10 items-center justify-center rounded-sm px-1 text-xs font-semibold leading-4 text-[#5A6272] transition-colors hover:text-[#1A2332]"
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
    </Field>
  );
}

export function PrimaryButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`flex h-11 w-full items-center justify-center rounded-lg bg-[#315EFB] text-sm font-semibold leading-5 text-white transition-colors hover:bg-[#2547CE] disabled:cursor-not-allowed disabled:opacity-60 ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`flex h-11 w-full items-center justify-center rounded-lg text-sm leading-5 text-[#5A6272] transition-colors hover:text-[#1A2332] ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function OutlineButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`flex h-11 w-full items-center justify-center rounded-lg bg-white text-sm font-semibold leading-5 text-[#315EFB] outline outline-1 -outline-offset-1 outline-[#D5DAE7] transition-colors hover:bg-[#F6F8FA] ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function TextLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-sm text-xs leading-4 text-[#315EFB] hover:underline"
    >
      {children}
    </Link>
  );
}

export function AccountChip({
  email,
  onUseAnother,
}: {
  email: string;
  onUseAnother: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-[#F6F8FA] px-3.5 py-2.5 outline outline-1 -outline-offset-1 outline-[#E3E6EA]">
      <span className="min-w-0 truncate text-sm leading-5 text-[#374151]">
        {email}
      </span>
      <button
        type="button"
        onClick={onUseAnother}
        className="shrink-0 rounded-sm text-xs font-semibold leading-4 text-[#315EFB] hover:underline"
      >
        Use another account
      </button>
    </div>
  );
}

export function StatusIcon({
  tone,
  children,
}: {
  tone: "brand" | "neutral" | "warning";
  children: ReactNode;
}) {
  const tones = {
    brand: "bg-[#EAF0FF] text-[#315EFB]",
    neutral: "bg-[#F2F3F5] text-[#9098A4]",
    warning: "bg-[#FEF6E7] text-[#D9911F]",
  } as const;

  return (
    <span
      aria-hidden
      className={`flex size-10 items-center justify-center rounded-full ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
