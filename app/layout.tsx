import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Leanotion - Productivity Templates & Tools",
  description:
    "Optimized productivity templates for finance management and life organization. Minimalist design, maximum efficiency.",
  keywords: [
    "Leanotion",
    "productivity templates",
    "productivity",
    "task management",
    "finance tracker",
    "second brain",
  ],
  authors: [{ name: "Leanotion" }],
  openGraph: {
    type: "website",
    url: "https://leantechco.com/",
    title: "Leanotion - Productivity Templates & Tools",
    description:
      "Level up your productivity with our collection of minimalist and effective Leanotion templates.",
    images: [
      {
        url: "https://image.qwenlm.ai/public_source/3f2012d7-94b2-4d84-a13d-7f2ec5e17675/17c517c3b-ec0d-4193-8892-d933b615415e.png",
        width: 1200,
        height: 630,
        alt: "Leanotion",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)] transition-colors-theme font-sans" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
