"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TechBackground = () => {
  // --- HYDRATION FIX START ---
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-[#020617]" />;
  // --- HYDRATION FIX END ---

  return (
    <div className="fixed inset-0 -z-10 bg-[#020617] overflow-hidden pointer-events-none">
      
      {/* 1. Engineering Grid */}
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

      {/* 2. Scanning Line */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.2)]"
      />

      {/* 3. Ambient Tech Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]" />

      {/* 4. Binary Stream (Now safe from Hydration errors) */}
      <div className="absolute inset-y-0 left-4 w-4 hidden xl:flex flex-col text-[8px] text-blue-500/10 font-mono break-all leading-none select-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.span 
            key={i} 
            className="mb-2"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
          >
            {/* Randomizing here is now safe because 'mounted' is true */}
            {Math.random() > 0.5 ? "10101101001010101101" : "01011010110101010010"}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default TechBackground;