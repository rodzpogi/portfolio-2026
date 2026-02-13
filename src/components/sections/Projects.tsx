"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Construction } from "lucide-react";

const projects = [
  {
    title: "Laboratory Information Management System (LIMS)",
    status: "Production Ready",
    description: "A specialized digital platform developed for school laboratory operations. It automates sample tracking and result archival, successfully replacing outdated manual paper-based systems.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    impact: "Digitized 100% of lab records and improved data retrieval speed by 60%.",
    github: "https://github.com/rodzpogi",
    live: "#",
    isOngoing: false,
  },
  {
    title: "Retail POS & Inventory System",
    status: "Development Phase",
    description: "A high-performance point-of-sale system built with a Vanilla PHP backend and Tailwind CSS frontend. Features real-time inventory management and sales analytics for local businesses.",
    tech: ["Vanilla PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    impact: "Implementing custom database triggers for automated stock alerts and daily reporting.",
    github: "https://github.com/rodzpogi",
    live: "#",
    isOngoing: true,
  },
];

const Projects = () => {
  return (
    // Changed bg-slate-50 to bg-transparent
    <section id="projects" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Portfolio</h2>
          <h3 className="text-4xl font-extrabold text-white mb-6">Featured Projects</h3>
          <p className="text-slate-400 max-w-2xl text-lg">
            Engineering real-world solutions that bridge the gap between complex data and intuitive user interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              // GLASSMORPHISM CARD: Semi-transparent slate background with blur
              className="group bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all shadow-2xl relative flex flex-col"
            >
              <div className="flex items-center gap-2 mb-6">
                {project.isOngoing ? (
                  <span className="flex items-center gap-1.5 px-4 py-1.5 bg-amber-950/30 text-amber-400 text-xs font-bold rounded-full border border-amber-500/20 uppercase tracking-widest">
                    <Construction className="w-3 h-3" /> In Progress
                  </span>
                ) : (
                  <span className="px-4 py-1.5 bg-emerald-950/30 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20 uppercase tracking-widest">
                    Production Ready
                  </span>
                )}
              </div>

              <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h4>
              
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                {project.description}
              </p>

              {/* IMPACT BOX: High-tech alert style */}
              <div className="p-5 bg-blue-950/20 rounded-2xl mb-8 border border-blue-500/20">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Technical Impact</p>
                <p className="text-sm text-slate-300 font-medium italic">
                  "{project.impact}"
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-1.5 bg-slate-800/50 text-slate-300 border border-slate-700 rounded-xl text-xs font-bold">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-8 mt-auto pt-6 border-t border-slate-800">
                <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-400 transition-all">
                  <Github className="w-5 h-5" /> Source Code
                </a>
                {!project.isOngoing && (
                  <a href={project.live} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-400 transition-all">
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;