"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Construction } from "lucide-react";

const projects = [
  {
    title: "Laboratory Information Management System (LIMS)",
    status: "Production Ready",
    description: "A specialized digital platform developed for school laboratory operations. It automates sample tracking and result archival, successfully replacing outdated manual paper-based systems.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    impact: "Digitized 100% of lab records and improved data retrieval speed by 60%.",
    github: "https://github.com/rodzpogi", // Replace with actual link
    live: "#",
    isOngoing: false,
  },
  {
    title: "Retail POS & Inventory System",
    status: "Development Phase",
    description: "A high-performance point-of-sale system built with a Vanilla PHP backend and Tailwind CSS frontend. Features real-time inventory management and sales analytics for local businesses.",
    tech: ["Vanilla PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    impact: "Implementing custom database triggers for automated stock alerts and daily reporting.",
    github: "https://github.com/rodzpogi", // Replace with actual link
    live: "#",
    isOngoing: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Portfolio</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Featured Projects</h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
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
              className="group bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all shadow-sm hover:shadow-2xl relative flex flex-col"
            >
              <div className="flex items-center gap-2 mb-6">
                {project.isOngoing ? (
                  <span className="flex items-center gap-1.5 px-4 py-1.5 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full uppercase tracking-widest">
                    <Construction className="w-3 h-3" /> In Progress
                  </span>
                ) : (
                  <span className="px-4 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full uppercase tracking-widest">
                    Production Ready
                  </span>
                )}
              </div>

              <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                {project.title}
              </h4>
              
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl mb-8 border-l-4 border-blue-500">
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">Technical Impact</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium italic">
                  "{project.impact}"
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-1.5 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-xl text-xs font-bold shadow-sm">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-8 mt-auto pt-6 border-t border-slate-100 dark:border-slate-700">
                <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-all">
                  <Github className="w-5 h-5" /> Source Code
                </a>
                {!project.isOngoing && (
                  <a href={project.live} className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-all">
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