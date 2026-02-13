"use client";
import React from "react";
import { ExternalLink, Github, Code, Construction } from "lucide-react";

const projects = [
  {
    title: "Laboratory Information Management System (LIMS)",
    status: "Completed / Production",
    description: "A comprehensive digital solution for school laboratory operations. Features automated sample tracking, result reporting, and secure data archival to replace manual ledger systems.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    impact: "Digitized 100% of lab records and reduced result turnaround time by 40%.",
    github: "#", // Replace with your repo link
    live: "#",   // Replace with your school link if public
  },
  {
    title: "Cloud-Based POS & Inventory System",
    status: "Development (Phase 2)",
    description: "An ongoing development of a point-of-sale system focusing on real-time inventory synchronization and sales analytics. Architecting a scalable solution for local retail businesses.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"], 
    impact: "Currently implementing offline-first support and automated stock alerts.",
    github: "#",
    live: "#",
    isOngoing: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Work</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            A selection of my professional projects, ranging from academic laboratory systems to modern retail solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all shadow-sm hover:shadow-xl relative overflow-hidden">
              
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-6">
                {project.isOngoing ? (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider">
                    <Construction className="w-3 h-3" /> In Progress
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full uppercase tracking-wider">
                    Production Ready
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Impact</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 italic">"{project.impact}"</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-semibold">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 mt-auto">
                <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                  <Github className="w-4 h-4" /> Source
                </a>
                {!project.isOngoing && (
                  <a href={project.live} className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;