import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
};

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-sm shadow-primary/30 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40",
  outline:
    "border border-slate-300 text-ink hover:border-primary hover:text-primary hover:-translate-y-0.5",
  ghost: "text-ink hover:text-primary",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ease-out active:translate-y-0";

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
