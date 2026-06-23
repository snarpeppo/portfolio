import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gabriele Battistata - Portfolio",
    template: "%s | Fullstack Developer Portfolio",
  },
  description:
    "Fullstack developer from Turin with 5+ years of experience. I build modern web applications, share knowledge, and create 3D models.",
  keywords: [
    "fullstack developer",
    "Turin",
    "Italy",
    "web development",
    "React",
    "Next.js",
    "3D modeling",
    "portfolio",
    "3D printing",
  ],
  authors: [{ name: "Gabriele Battistata" }],
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-dvh flex flex-col bg-surface text-on-surface antialiased">
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
