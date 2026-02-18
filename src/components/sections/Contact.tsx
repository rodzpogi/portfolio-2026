"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Facebook, Copy, Check } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "rodzrianzares0@gmail.com"; // Your email

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">
            System_Output // Connection
          </h2>
          <h3 className="text-5xl font-extrabold text-white mb-8">
            Let's Build Together
          </h3>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently open for new opportunities and collaborations. 
            Whether you have a question about my LIMS or POS projects, or just want to say hi, my inbox is always open.
          </p>

          {/* THE CYBER EMAIL BOX */}
          <div className="inline-flex flex-col md:flex-row items-center gap-4 p-2 bg-slate-900/30 border border-blue-500/20 rounded-2xl backdrop-blur-md mb-16 shadow-[0_0_30px_rgba(37,99,235,0.1)]">
            <div className="px-6 py-2 text-blue-300 font-mono flex items-center gap-2">
              <Mail className="w-4 h-4" />
              {email}
            </div>
            <button 
              onClick={copyEmail}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all w-full md:w-auto justify-center cursor-pointer active:scale-95"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "COPIED!" : "COPY EMAIL"}
            </button>
          </div>

          {/* FOOTER SOCIALS */}
          <div className="flex justify-center gap-8 border-t border-slate-900 pt-16">
            <a 
              href="https://github.com/rodzpogi" 
              target="_blank" 
              className="text-slate-500 hover:text-blue-500 transition-all transform hover:-translate-y-1"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rodnel-rianzares-9a60073b1/" 
              target="_blank" 
              className="text-slate-500 hover:text-blue-500 transition-all transform hover:-translate-y-1"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61585451699860" 
              target="_blank" 
              className="text-slate-500 hover:text-blue-500 transition-all transform hover:-translate-y-1"
            >
              <Facebook size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;