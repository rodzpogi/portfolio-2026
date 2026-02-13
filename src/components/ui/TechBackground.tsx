"use client";
import React from "react";
import { motion } from "framer-motion";

const TechBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950 overflow-hidden">
      {/* 1. The Engineering Grid (blueprint style) */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e293b 1px, transparent 1px),
            linear-gradient(to bottom, #1e293b 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
        }}
      />

      {/* 2. Moving "Matrix" Scanning Line */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.3)]"
      />

      {/* 3. Ambient Tech Glows (Depth) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/5 rounded-full blur-[120px]" />

      {/* 4. Subtle Binary Stream (Side decor) */}
      <div className="absolute inset-y-0 left-4 w-4 hidden xl:flex flex-col text-[8px] text-blue-900/20 font-mono break-all leading-none select-none opacity-50">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="mb-2">10101101001010101101</span>
        ))}
      </div>
    </div>
  );
};

export default TechBackground;