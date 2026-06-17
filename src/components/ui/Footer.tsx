import Link from "next/link";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/snarpeppo" },
  { label: "LinkedIn", href: "https://linkedin.com/in/gabriele-battistata" },
];

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/30">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between md:px-8">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Portfolio<span className="text-primary">.</span>
          </Link>
          <p className="text-sm text-on-surface-variant">
            Built with Next.js & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-chip text-xs uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-on-surface-variant">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
