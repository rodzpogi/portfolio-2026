"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lock, Construction, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Laboratory Information Management System (LIMS)",
    status: "Production Ready",
    description: "A specialized digital platform developed for school laboratory operations. It automates sample tracking and result archival, successfully replacing outdated manual paper-based systems.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    impact: "Digitized 100% of lab records and improved data retrieval speed by 60%.",
    isOngoing: false,
  },
  {
    title: "Retail POS & Inventory System",
    status: "Development Phase",
    description: "A high-performance point-of-sale system built with a Vanilla PHP backend and Tailwind CSS frontend. Features real-time inventory management and sales analytics for local businesses.",
    tech: ["Vanilla PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    impact: "Implementing custom database triggers for automated stock alerts and daily reporting.",
    isOngoing: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">02. Selected_Artifacts</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Featured Projects</h3>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Architecting robust systems that prioritize data integrity and user-centric design. 
            Detailed documentation and source code are available upon request for authorized inquiries.
          </p>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-slate-900/40 backdrop-blur-sm rounded-[2rem] p-8 border border-slate-800 hover:border-blue-500/30 transition-all shadow-xl flex flex-col min-h-[400px]"
            >
              {/* STATUS BADGE */}
              <div className="flex items-center gap-2 mb-6">
                {project.isOngoing ? (
                  <span className="flex items-center gap-2 px-4 py-1.5 bg-amber-950/30 text-amber-500 text-[10px] font-bold rounded-full border border-amber-500/20 uppercase tracking-widest">
                    <Construction className="w-3 h-3" /> In Progress
                  </span>
                ) : (
                  <span className="flex items-center gap-2 px-4 py-1.5 bg-blue-950/30 text-blue-400 text-[10px] font-bold rounded-full border border-blue-500/20 uppercase tracking-widest">
                    <Sparkles className="w-3 h-3" /> Production Ready
                  </span>
                )}
              </div>

              <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h4>
              
              <p className="text-slate-400 mb-8 leading-relaxed font-medium">
                {project.description}
              </p>

              {/* TECHNICAL IMPACT BOX */}
              <div className="p-6 bg-[#020617]/50 rounded-2xl mb-8 border-l-2 border-blue-500/50">
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-2 font-mono">Core System Impact</p>
                <p className="text-sm text-slate-300 font-medium italic leading-relaxed">
                  "{project.impact}"
                </p>
              </div>

              {/* TECH STACK STICKERS */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-slate-800/50 text-slate-300 border border-slate-700/50 rounded-lg text-[10px] font-mono uppercase tracking-wider shadow-sm">
                    {t}
                  </span>
                ))}
              </div>

              {/* "PRIVATE" INDICATOR */}
              <div className="mt-auto pt-6 border-t border-slate-800/50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px] tracking-widest">
                  <Lock className="w-3 h-3" /> ACCESS_RESTRICTED
                </div>
                <div className="text-[10px] text-slate-600 font-mono">
                  REF_ID: 00{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;