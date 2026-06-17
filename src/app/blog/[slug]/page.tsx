import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Container as="article" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="neo-chip mb-8 inline-flex items-center gap-1 text-sm"
        >
          &larr; Back to Blog
        </Link>

        <header className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-on-surface-variant">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </header>

        {/* Blog content rendered as styled placeholder */}
        <div className="neo-code mb-8">
          <p className="mb-4 text-on-surface-variant">
            This is a sample blog post. In a production build, this content
            would be rendered from MDX. Below is a preview of the article
            structure.
          </p>
        </div>

        <div className="prose prose-neutral max-w-none space-y-6 text-on-surface-variant">
          <p>
            This is where the full blog post content would appear. The blog
            supports markdown/MDX content loaded at build time or from a CMS.
          </p>
          <h2 className="text-2xl font-semibold text-on-surface">
            Section Heading
          </h2>
          <p>
            Each blog post can contain rich content including code blocks,
            images, and embedded components. The MDX pipeline supports both
            static content at build time and dynamic content from a headless
            CMS.
          </p>
          <div className="neo-code">
            <pre className="text-sm">
              <code>{`// Example code block
function hello() {
  console.log("Hello, World!");
}`}</code>
            </pre>
          </div>
          <blockquote className="border-l-4 border-primary pl-6 italic">
            &ldquo;A well-placed quote can make an article memorable.&rdquo;
          </blockquote>
        </div>

        <div className="neo-divider my-12" />

        <div className="flex justify-between">
          <Button href="/blog">&larr; Back to Blog</Button>
        </div>
      </div>
    </Container>
  );
}
