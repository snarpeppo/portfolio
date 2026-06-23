import { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { StlCardViewer } from "@/components/models/StlCardViewer";
import { models3d } from "@/lib/content";

export const metadata: Metadata = {
  title: "3D Models",
  description:
    "A gallery of 3D models I've designed — from functional prints to artistic pieces.",
};

export default function ModelsPage() {
  // Group models by category
  const categories = [...new Set(models3d.map((m) => m.category))];

  return (
    <Section
      title="3D Models"
      subtitle="Things I've designed and printed. Click a model for details."
    >
      {categories.map((category) => (
        <div key={category} className="mb-12 last:mb-0">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary">
            {category}
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {models3d
              .filter((m) => m.category === category)
              .map((model, i) => (
                <FadeIn key={model.id} delay={i * 80}>
                <Card hover className="flex h-full flex-col">
                  <StlCardViewer stlUrl={model.stlUrl} />

                  <h4 className="mb-1 text-lg font-semibold text-on-surface">
                    {model.title}
                  </h4>
                  <p className="mb-3 flex-1 text-sm leading-relaxed text-on-surface-variant line-clamp-2">
                    {model.description}
                  </p>

                  <div className="border-t border-outline-variant/30 pt-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-x-1.5 text-[11px] font-medium uppercase tracking-wider text-outline">
                        {model.tags.map((tag, tIdx) => (
                          <span key={tag}>
                            {tIdx > 0 && <span className="mx-0.5 text-outline-variant">&middot;</span>}
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                      {model.stlUrl && (
                        <a
                          href={model.stlUrl}
                          download
                          className="neo-button inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-[11px] font-medium"
                          aria-label={`Download STL file for ${model.title}`}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          STL
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
                </FadeIn>
              ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
