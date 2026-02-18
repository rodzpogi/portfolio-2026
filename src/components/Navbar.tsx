"use client";
import React, { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }, // Updated from mailto to anchor
  ];

  return (
    <nav className="fixed w-full z-[100] top-0 left-0 border-b border-white/5 bg-slate-950/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO with Tech Glow */}
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
              <Code2 className="w-6 h-6 text-blue-500" />
            </div>
            <span className="font-bold text-xl tracking-tighter text-white uppercase group-hover:text-blue-400 transition-colors">
              RODZ<span className="text-blue-500">.DEV</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-baseline space-x-8 font-mono text-xs tracking-widest uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-blue-400 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* RESUME BUTTON (Direct Link) */}
          <a 
  href="https://www.linkedin.com/in/rodnel-rianzares-9a60073b1/" 
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] active:scale-95 cursor-pointer"
>
  LinkedIn
</a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 border-b border-white/5 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-4 text-sm font-mono tracking-widest uppercase text-slate-400 hover:text-blue-400 hover:bg-blue-500/5 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a 
                  href="/resume.pdf"
                  className="block w-full text-center bg-blue-600 py-4 rounded-xl font-bold text-white shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;