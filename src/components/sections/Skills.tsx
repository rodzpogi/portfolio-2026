"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Vanilla PHP", "MySQL", "Next.js", "React", 
  "TypeScript", "Tailwind CSS", "Node.js", "Git", "Framer Motion"
];

const Skills = () => {
  return (
    // Changed bg-white to bg-transparent
    <section id="skills" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-blue-500 font-bold mb-4 uppercase tracking-widest text-sm">
            Technical Expertise
          </h2>
          <h3 className="text-4xl font-extrabold mb-12 text-white">
            My Tech Stack
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // TECH CHIP: Dark glassy background with blue hover glow
                className="px-8 py-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl font-bold text-slate-300 shadow-sm hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;