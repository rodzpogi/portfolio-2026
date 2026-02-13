"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

// 1. Moving the animation definition OUTSIDE the component 
// This makes it "static" so TypeScript sees it clearly.
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent px-4">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto pt-24 pb-12">
        <div className="text-center flex flex-col items-center">
          
          {/* FLOATING PROFILE PICTURE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0], 
            }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative mb-10"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border-2 border-blue-500/30 overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)]">
              <Image 
                src="/profile1.jpg" 
                alt="Rodz Professional Portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* STAGGERED TEXT BOX */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-mono tracking-widest text-blue-400 uppercase bg-blue-950/40 border border-blue-500/20 rounded-full backdrop-blur-md"
            >
               <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
               Full-Stack Developer // Systems
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-extrabold text-white mb-6 tracking-tight"
            >
              Building the future of <br />
              <span className="text-blue-500 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                digital experiences.
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-medium"
            >
              Hi, I{"'"}m <span className="text-white font-bold">Rodz</span>. 
              I specialize in architecting high-performance web applications that 
              combine clean code with exceptional user experience.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
              <a 
                href="#projects"
                className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95"
              >
                View My Work 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/rodzpogi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all backdrop-blur-md hover:-translate-y-1"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all backdrop-blur-md hover:-translate-y-1"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:yourname@email.com" 
                  className="p-3 rounded-full border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all backdrop-blur-md hover:-translate-y-1"
                >
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;