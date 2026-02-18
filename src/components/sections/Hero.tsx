"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Facebook, Linkedin, Mail, Github } from "lucide-react";
import Image from "next/image";

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
                alt="Rodnel Rianzares"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* STATUS BADGE */}
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

            {/* --- ACTION AREA --- */}
            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-8"
            >
              {/* SYSTEM STATUS SIGN (Non-Clickable) */}
              <div className="relative group cursor-default">
                <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>
                <div className="relative px-8 py-3 bg-slate-950 border border-blue-500/50 rounded-full flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  <span className="text-blue-400 font-mono text-sm font-bold tracking-widest uppercase">
                    System Status: Open for Hire
                  </span>
                </div>
              </div>
              
              {/* CLICKABLE SOCIALS */}
              <div className="flex items-center gap-6">
                <a 
                  href="https://www.linkedin.com/in/rodnel-rianzares-9a60073b1/" 
                  target="_blank" 
                  className="p-3 rounded-full border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all backdrop-blur-md hover:-translate-y-1"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61585451699860" 
                  target="_blank" 
                  className="p-3 rounded-full border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all backdrop-blur-md hover:-translate-y-1"
                >
                  <Facebook size={22} />
                </a>
                <a 
                  href="mailto:rodzrianzares0@gmail.com" 
                  className="p-3 rounded-full border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all backdrop-blur-md hover:-translate-y-1"
                >
                  <Mail size={22} />
                </a>
                <a 
                  href="https://github.com/rodzpogi" 
                  target="_blank" 
                  className="p-3 rounded-full border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all backdrop-blur-md hover:-translate-y-1"
                >
                  <Github size={22} />
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