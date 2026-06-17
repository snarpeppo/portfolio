import { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
}

export function Chip({ children, className = "", active }: ChipProps) {
  return (
    <span
      className={`neo-chip inline-block text-xs uppercase tracking-wider transition-shadow duration-300 ${
        active ? "text-primary shadow-pressed-sm" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}
