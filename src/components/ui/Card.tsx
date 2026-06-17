import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  as?: "div" | "article" | "button";
}

export function Card({
  children,
  className = "",
  hover = false,
  onClick,
  as: Tag = "div",
}: CardProps) {
  const isInteractive = hover || !!onClick;
  const baseStyles =
    "rounded-2xl bg-surface p-6 shadow-elevated card-hover-anim";

  const hoverStyles = `${isInteractive ? " cursor-pointer" : ""}`;

  const Component = Tag;
  return (
    <Component
      onClick={onClick}
      className={`${baseStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </Component>
  );
}
