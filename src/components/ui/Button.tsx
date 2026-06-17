import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "default";
  href?: string;
}

export function Button({
  children,
  variant = "default",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const base =
    variant === "primary"
      ? "neo-button-primary inline-flex items-center justify-center gap-2"
      : "neo-button inline-flex items-center justify-center gap-2";

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${className}`}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
