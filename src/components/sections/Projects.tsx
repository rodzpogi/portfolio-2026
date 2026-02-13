"use client";
import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack online store with real-time inventory and Stripe payments.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Dashboard",
    description: "An interface for interacting with LLMs, featuring markdown support and chat history.",
    tech: ["React", "OpenAI API", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-md text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="flex items-center gap-2 text-sm font-semibold hover:text-blue-500 transition-colors">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href={project.live} className="flex items-center gap-2 text-sm font-semibold hover:text-blue-500 transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;