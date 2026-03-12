import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 border-t border-white/10 bg-[#121212] px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's Connect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            I'm currently open for new opportunities. Whether you have a question or just want to chat about data engineering, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Email */}
          <a
            href="mailto:sumit71020@gmail.com"
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-white">Email</h3>
            <span className="text-sm text-zinc-400">sumit71020@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+918263871161"
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-white">Phone</h3>
            <span className="text-sm text-zinc-400">+91 82638 71161</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sumit71020"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-white">LinkedIn</h3>
            <span className="text-sm text-zinc-400">sumit71020</span>
          </a>

          {/* GitHub */}
          <a
            href="https://www.github.com/iamsumitsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.1a5.25 5.25 0 0 0-1.5-3.8 4.9 4.9 0 0 0-.15-3.8s-1.14-.36-3.8 1.45a13.3 13.3 0 0 0-7 0C7.14 1.35 6 1.71 6 1.71a4.9 4.9 0 0 0-.15 3.8A5.25 5.25 0 0 0 4.3 9.3c0 5.66 3.34 6.7 6.47 7.07a4.6 4.6 0 0 0-1.19 2.92V22"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-white">GitHub</h3>
            <span className="text-sm text-zinc-400">iamsumitsingh</span>
          </a>
        </div>
      </div>
    </section>
  );
}
