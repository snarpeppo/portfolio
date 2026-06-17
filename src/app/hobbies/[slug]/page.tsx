import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hobbies } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return hobbies.map((hobby) => ({ slug: hobby.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hobby = hobbies.find((h) => h.slug === slug);
  if (!hobby) return {};
  return {
    title: hobby.title,
    description: hobby.description,
  };
}

export default async function HobbyPage({ params }: Props) {
  const { slug } = await params;
  const hobby = hobbies.find((h) => h.slug === slug);

  if (!hobby) {
    notFound();
  }

  return (
    <Container as="article" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/hobbies"
          className="neo-chip mb-8 inline-flex items-center gap-1 text-sm"
        >
          &larr; Tutti gli Hobby
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
            {hobby.title}
          </h1>
          <p className="mt-4 text-lg text-on-surface-variant">
            {hobby.description}
          </p>
        </header>

        {/* Dynamic content per hobby */}
        {hobby.slug === "3d-modeling" && (
          <div className="space-y-8">
            <div className="neo-card">
              <h2 className="mb-4 text-2xl font-semibold text-on-surface">
                My Setup
              </h2>
              <ul className="space-y-3 text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-on-surface">Printer:</strong>{" "}
                    Bambu Lab X1 Carbon with AMS
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-on-surface">Software:</strong>{" "}
                    Fusion 360 (functional), Blender (organic), PrusaSlicer +
                    Bambu Studio
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-on-surface">Materials:</strong>{" "}
                    PLA, PETG, TPU, ABS, and various specialty filaments
                  </span>
                </li>
              </ul>
            </div>

            <div className="neo-card">
              <h2 className="mb-4 text-2xl font-semibold text-on-surface">
                Design Philosophy
              </h2>
              <p className="text-on-surface-variant">
                I approach 3D design the same way I approach code: with a focus
                on parametric, reusable systems. My models are designed with
                tolerances that work across multiple printers and materials.
                Every STL I share includes a detailed print settings guide so
                anyone can replicate the results.
              </p>
              <p className="mt-3 text-on-surface-variant">
                I&apos;m a strong advocate for print-in-place mechanisms,
                snap-fit joints, and designs that don&apos;t require supports.
                The best design is one that just works — on the first print.
              </p>
            </div>

            <div className="neo-card">
              <h2 className="mb-4 text-2xl font-semibold text-on-surface">
                Featured Models
              </h2>
              <p className="text-on-surface-variant">
                Check out the{" "}
                <Link
                  href="/models"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  3D Models gallery
                </Link>{" "}
                for my complete portfolio of designs, including STL downloads
                and print guides.
              </p>
            </div>
          </div>
        )}

        {hobby.slug === "photography" && (
          <div className="space-y-8">
            <div className="neo-card">
              <h2 className="mb-4 text-2xl font-semibold text-on-surface">
                My Gear
              </h2>
              <ul className="space-y-3 text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-secondary" />
                  <span>
                    <strong className="text-on-surface">Camera:</strong> Mamiya
                    RB67 Pro-SD (medium format)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-secondary" />
                  <span>
                    <strong className="text-on-surface">Also:</strong> Leica M6
                    (35mm) for everyday carry
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-secondary" />
                  <span>
                    <strong className="text-on-surface">Process:</strong>{" "}
                    Self-develop at home (C-41 & B&W), scan with DSLR, edit in
                    Lightroom
                  </span>
                </li>
              </ul>
            </div>

            <div className="neo-card">
              <h2 className="mb-4 text-2xl font-semibold text-on-surface">
                Why Film?
              </h2>
              <p className="text-on-surface-variant">
                Film photography teaches patience and intentionality. Each frame
                costs money, so you learn to compose carefully, meter precisely,
                and wait for the right light. The delayed gratification of
                developing your own film is a perfect counterbalance to the
                instant feedback of software development.
              </p>
            </div>
          </div>
        )}

        <div className="neo-divider my-12" />

        <Button href="/hobbies">&larr; Back to Hobbies</Button>
      </div>
    </Container>
  );
}
