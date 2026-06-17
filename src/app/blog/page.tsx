import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { FadeIn } from "@/components/ui/FadeIn";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Riflessioni su sviluppo web, design e stampa 3D.",
};

export default function BlogPage() {
  return (
    <Section
      title="Blog"
      subtitle="Scrivo di codice, design e creazione."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 80}>
          <Link href={`/blog/${post.slug}`}>
            <Card hover>
              <div className="mb-3 flex items-center gap-3 text-sm text-on-surface-variant">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("it-IT", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span>&middot;</span>
                <span>{post.readingTime}</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-on-surface">
                {post.title}
              </h3>
              <p className="mb-4 text-on-surface-variant">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </Card>
          </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
