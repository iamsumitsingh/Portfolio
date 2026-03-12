'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SocialSidebar() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-0 left-6 mb-8 md:mb-12 md:left-10 z-50 hidden sm:flex flex-col items-center gap-6"
    >
      <a
        href="https://www.github.com/iamsumitsingh"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 transition-colors hover:-translate-y-1 hover:text-white"
        title="GitHub"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.1a5.25 5.25 0 0 0-1.5-3.8 4.9 4.9 0 0 0-.15-3.8s-1.14-.36-3.8 1.45a13.3 13.3 0 0 0-7 0C7.14 1.35 6 1.71 6 1.71a4.9 4.9 0 0 0-.15 3.8A5.25 5.25 0 0 0 4.3 9.3c0 5.66 3.34 6.7 6.47 7.07a4.6 4.6 0 0 0-1.19 2.92V22"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/sumit71020"
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 transition-colors hover:-translate-y-1 hover:text-white"
        title="LinkedIn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>

      <a
        href="mailto:sumit71020@gmail.com"
        className="text-zinc-400 transition-colors hover:-translate-y-1 hover:text-white"
        title="Email"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      </a>

    </motion.div>
  );
}
