"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", 
  "Node.js", "PostgreSQL", "Git", "Framer Motion"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div 
              key={skill}
              className="px-6 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-medium shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;