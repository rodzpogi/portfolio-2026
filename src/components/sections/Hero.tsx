"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image"; // Add this import

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 px-4">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto pt-24 pb-12">
        <div className="text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* --- PROFILE PICTURE START --- */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-slate-800 overflow-hidden shadow-2xl">
                <Image 
                  src="/profile1.jpg" // This looks in your public folder
                  alt="Rodz Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* --- PROFILE PICTURE END --- */}

            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
              Full-Stack Developer
            </span>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
              Building the future of <br />
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Hi, I'm <span className="text-slate-900 dark:text-white font-semibold">Rodz</span>. 
              I specialize in architecting high-performance web applications that 
              combine clean code with exceptional user experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-500/25">
                View My Work 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-5">
                <a href="#" className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 transition-all">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;