import { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { FadeIn } from "@/components/ui/FadeIn";
import { hobbies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hobby",
  description: "Cose che amo fare al di fuori del codice.",
};

const iconMap: Record<string, ReactNode> = {
  Cube: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Camera: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
};

export default function HobbiesPage() {
  return (
    <Section
      title="Hobby"
      subtitle="Fuori dal codice, ecco cosa mi appassiona."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {hobbies.map((hobby, i) => (
          <FadeIn key={hobby.slug} delay={i * 120}>
          <Link href={`/hobbies/${hobby.slug}`}>
            <Card hover className="h-full">
              <div className={`mb-4 text-${hobby.color}`}>
                {iconMap[hobby.icon] || null}
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-on-surface">
                {hobby.title}
              </h3>
              <p className="text-on-surface-variant">{hobby.description}</p>
              <div className="mt-4">
                <Chip>Scopri di più &rarr;</Chip>
              </div>
            </Card>
          </Link>
          </FadeIn>
        ))}
      </div>

      {/* Placeholder for future hobbies */}
      <div className="neo-divider my-16" />
      <FadeIn variant="fade-in">
        <div className="text-center">
          <Card className="inline-block border-2 border-dashed border-outline-variant/50 bg-transparent shadow-none">
            <p className="text-on-surface-variant">
              Altri hobby in arrivo...
            </p>
            <p className="mt-2 text-sm text-outline-variant">
              Fotografia, falegnameria e altro sono in arrivo.
            </p>
        </Card>
      </div>
      </FadeIn>
    </Section>
  );
}
