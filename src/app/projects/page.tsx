import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Progetti",
    description: "Una vetrina dei miei progetti di sviluppo web.",
};

export default function ProjectsPage() {
  return (
    <Section
      title="Progetti"
      subtitle="Una selezione curata di ciò che ho costruito."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 80}>
          <Card hover className="flex h-full flex-col">
            {project.image && (
              <div className="mb-4 overflow-hidden rounded-xl bg-surface-container-low shadow-pressed-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video w-full object-cover"
                />
              </div>
            )}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-on-surface">
                {project.title}
              </h3>
              <Chip>{project.year}</Chip>
            </div>
            <p className="mb-4 flex-1 text-on-surface-variant">
              {project.longDescription}
            </p>
            <div className="mb-6 border-t border-outline-variant/30 pt-3">
              <div className="flex flex-wrap items-center gap-x-1.5 text-[11px] font-medium uppercase tracking-wider text-outline">
                {project.tags.map((tag, tIdx) => (
                  <span key={tag}>
                    {tIdx > 0 && <span className="mx-0.5 text-outline-variant">&middot;</span>}
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto flex flex-wrap gap-3">
              {project.links.live && (
                <Button variant="primary" href={project.links.live}>
                  Sito Live &nearr;
                </Button>
              )}
              {project.links.github && (
                <Button href={project.links.github}>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                </Button>
              )}
            </div>
          </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
