import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // Adjusted to our folder structure
import TechBackground from "../components/ui/TechBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodz | Software Engineer",
  description: "Modern portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // "dark" ensures our colors stay deep and techy
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] selection:bg-blue-500/30 selection:text-blue-200`}
      >
        {/* Fixed background layer */}
        <TechBackground />
        
        {/* Navigation stays on top of the background */}
        <Navbar />
        
        {/* Main content wrapper */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}