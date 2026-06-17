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
    template: "%s | Portfolio Sviluppatore Fullstack",
  },
  description:
    "Sviluppatore fullstack da Torino con 5+ anni di esperienza. Sviluppo applicazioni web moderne, condivido conoscenze e creo modelli 3D.",
  keywords: [
    "sviluppatore fullstack",
    "Torino",
    "Italia",
    "sviluppo web",
    "React",
    "Next.js",
    "modellazione 3D",
    "portfolio",
    "stampa 3D",
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
      lang="it"
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
