import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects"; // Ensure your file is named Projects.tsx
import Skills from "../components/sections/Skills";

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <Hero />
      <Skills />
      <Projects />
      
      {/* Professional Footer */}
      <footer className="py-12 text-center border-t border-slate-100 dark:border-slate-900">
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} RODZ.DEV • Built with Next.js
        </p>
      </footer>
    </main>
  );
}