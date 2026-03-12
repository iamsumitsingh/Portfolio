'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { playfair } from '@/app/fonts';

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-6 md:p-8"
    >
      {/* Fixed Name Top Left */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden sm:block">
        <a 
          href="#scrolly-top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`${playfair.className} text-xl md:text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-80 italic`}
        >
          Sumit Singh
        </a>
      </div>

      <div className="flex items-center gap-8 rounded-full border border-white/10 bg-[#121212]/50 px-8 py-3 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <a 
          href="#scrolly-top" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-sm font-semibold text-white tracking-widest uppercase transition-colors hover:text-zinc-300"
        >
          Home
        </a>
        
        <div className="h-4 w-[1px] bg-white/20"></div>

        <div className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a 
            href="#about" 
            onClick={(e) => handleScroll(e, 'about')}
            className="transition-colors hover:text-white"
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, 'projects')}
            className="transition-colors hover:text-white"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
            className="transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
