import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TechBackground from "@/components/ui/TechBackground";

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
    // Added "dark" class here to ensure the tech theme works perfectly
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-500/30 selection:text-white`}
      >
        {/* The Background stays fixed behind everything */}
        <TechBackground />
        
        {/* The Navbar stays on top */}
        <Navbar />
        
        {/* The Main Content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}