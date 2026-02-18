import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects"; 
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    /**
     * bg-transparent: Allows the TechBackground in layout.tsx to show through.
     * relative z-10: Ensures content stays above the background layers.
     */
    <main className="bg-transparent relative z-10">
      
      {/* 01. Landing Section */}
      <Hero />
      
      {/* 02. Expertise Section */}
      <Skills />
      
      {/* 03. Portfolio Section */}
      <Projects />

      {/* 04. Connection Section (The Final Node) */}
      <Contact />
      
      {/* --- PROFESSIONAL CYBER FOOTER --- */}
      <footer className="py-16 text-center border-t border-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Senior Pro-Tip: A "Return to Top" anchor helps UX on long pages */}
          <a 
            href="#" 
            className="text-blue-500 hover:text-blue-400 text-xs font-mono mb-6 inline-block tracking-[0.3em] transition-all hover:tracking-[0.5em]"
          >
            [ Back To Profile  ]
          </a>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">
              Built with Next.js 15 // Tailwind CSS v4 // Framer Motion
            </p>
            <p className="text-slate-600 text-[10px] font-mono opacity-50">
              © {new Date().getFullYear()} RODZ.DEV • ALL_SYSTEMS_OPERATIONAL
            </p>
          </div>
          
        </div>
      </footer>
    </main>
  );
}