import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  id?: string;
}

export function Container({
  children,
  className = "",
  as: Tag = "section",
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full max-w-[1200px] px-6 md:px-8 ${className}`}
    >
      {children}
    </Tag>
  );
}
