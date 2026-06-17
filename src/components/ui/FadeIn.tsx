"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  variant?: "fade-in-up" | "fade-in" | "scale-in";
  as?: "div" | "section" | "article";
  delay?: number;
}

export function FadeIn({
  children,
  className = "",
  variant = "fade-in-up",
  as: Tag = "div",
  delay = 0,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay if specified
          if (delay > 0) {
            setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={`animate-${variant} ${visible ? "animate-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
