import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects"; 
import Skills from "../components/sections/Skills";

export default function Home() {
  return (
    // CHANGE: Changed bg-white to bg-transparent
    <main className="bg-transparent">
      <Hero />
      <Skills />
      <Projects />
      
      {/* Professional Footer - Updated for Dark Theme */}
      <footer className="py-12 text-center border-t border-slate-800/50">
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} RODZ.DEV • Built with Next.js
        </p>
      </footer>
    </main>
  );
}