import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
}

export function Section({
  children,
  className = "",
  id,
  title,
  subtitle,
}: SectionProps) {
  return (
    <Container id={id} as="section" className={`py-16 md:py-24 ${className}`}>
      {title && (
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-lg text-on-surface-variant">
              {subtitle}
            </p>
          )}
          <div className="neo-divider mt-6 w-24" />
        </div>
      )}
      {children}
    </Container>
  );
}
