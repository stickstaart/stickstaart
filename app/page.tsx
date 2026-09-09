import React from 'react';
import { Mail, ArrowUpRight, Code } from 'lucide-react';
import LogoIcon from '@/components/LogoIcon';
import ProjectGrid from '@/components/ProjectGrid'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col justify-between p-4 md:p-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto w-full space-y-6">

        {/* Header */}
        <header className="flex justify-between items-center bg-black py-4 border-b border-neutral-800">
          <div className="flex items-end gap-3">
            {/* Logo Icoon */}
            <div className="shrink-0">
              <LogoIcon className="w-8 h-8 block" />
            </div>

            {/* Titel */}
            <span className="text-xl font-bold text-white leading-none">
    StickStaart
  </span>

            {/* Subtitel */}
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider leading-none">
    FRONT-END & DESIGN
  </span>
          </div>

          <div className="flex items-center gap-4">
            {/*<a href="https://www.linkedin.com/in/josvandijk79/" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors">*/}
            {/*  <LinkedinIcon className="w-6 h-6" />*/}
            {/*</a>*/}
            {/*<a href="https://github.com/stickstaart" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors">*/}
            {/*  <GithubIcon className="w-6 h-6" />*/}
            {/*</a>*/}
            <a href="mailto:stickstaart@gmail.com" className="hover:text-[#F59E0B] transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </header>

        {/* Top Section Grid (Asymmetrisch) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Linker Blok: Lichtgrijs */}
          <div className="md:col-span-7 bg-[#E5E5E5] text-black p-8 rounded-lg flex flex-col justify-between min-h-[280px]">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight mb-4">Under construction.</h1>
              <p className="text-neutral-700 font-medium leading-relaxed max-w-lg">
                Er wordt achter de schermen gebouwd aan het nieuwe portfolio van Stickstaart.
              </p>
            </div>
            <div className="pt-6">
              <span className="inline-block bg-black text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                Status: Lancering Nabij
              </span>
            </div>
          </div>

          {/* Rechter Blok: Oranje */}
          <div className="md:col-span-5 bg-[#F59E0B] text-black p-8 rounded-lg flex flex-col justify-between min-h-[280px]">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight mb-2">Contact.</h2>
              <p className="text-black/80 font-medium">
                Plannen voor een nieuw digitaal project, website of webapp?
              </p>
            </div>
            <div>
              <a
                href="mailto:stickstaart@gmail.com"
                className="inline-flex items-center gap-2 bg-black text-white font-bold px-5 py-3 rounded hover:bg-neutral-800 transition-colors"
              >
                Stuur een bericht <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

         {/*Bottom Grid (4 Kaarten) */}
        {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">*/}

        {/*   /!*Card 1 *!/*/}
        {/*  <div className="bg-[#0A0A0A] border border-neutral-800 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-700 transition-all group">*/}
        {/*    <div>*/}
        {/*      <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">Project Launch</span>*/}
        {/*      <h3 className="text-xl font-bold mt-2 group-hover:text-[#F59E0B] transition-colors">Nieuwste Project</h3>*/}
        {/*      <p className="text-neutral-400 text-sm mt-2">Morgen live. Klik hieronder om de eerste release te bekijken.</p>*/}
        {/*    </div>*/}
        {/*    <button className="mt-6 w-full bg-[#F59E0B] text-black font-bold py-2 px-4 rounded hover:bg-[#d98806] transition-colors">*/}
        {/*      Bekijk Status*/}
        {/*    </button>*/}
        {/*  </div>*/}

        {/*   /!*Card 2 *!/*/}
        {/*  <div className="bg-[#0A0A0A] border border-neutral-800 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-700 transition-all group">*/}
        {/*    <div>*/}
        {/*      <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">Expertise</span>*/}
        {/*      <h3 className="text-xl font-bold mt-2 group-hover:text-[#F59E0B] transition-colors">Front-End Dev</h3>*/}
        {/*      <p className="text-neutral-400 text-sm mt-2">Next.js, React, TypeScript, Tailwind CSS & UI/UX Design.</p>*/}
        {/*    </div>*/}
        {/*    <button className="mt-6 w-full bg-[#F59E0B] text-black font-bold py-2 px-4 rounded hover:bg-[#d98806] transition-colors">*/}
        {/*      Tech Stack*/}
        {/*    </button>*/}
        {/*  </div>*/}

        {/*   /!*Card 3 *!/*/}
        {/*  <div className="bg-[#0A0A0A] border border-neutral-800 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-700 transition-all group">*/}
        {/*    <div>*/}
        {/*      <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">Over Stickstaart</span>*/}
        {/*      <h3 className="text-xl font-bold mt-2 group-hover:text-[#F59E0B] transition-colors">Nieuwsgierig</h3>*/}
        {/*      <p className="text-neutral-400 text-sm mt-2">Met een scherpe blik bouwen aan doordachte digitale ervaringen.</p>*/}
        {/*    </div>*/}
        {/*    <button className="mt-6 w-full bg-[#F59E0B] text-black font-bold py-2 px-4 rounded hover:bg-[#d98806] transition-colors">*/}
        {/*      Lees Meer*/}
        {/*    </button>*/}
        {/*  </div>*/}

        {/*   /!*Card 4 *!/*/}
        {/*  <div className="bg-[#0A0A0A] border border-neutral-800 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-700 transition-all group">*/}
        {/*    <div>*/}
        {/*      <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">Samenwerken</span>*/}
        {/*      <h3 className="text-xl font-bold mt-2 group-hover:text-[#F59E0B] transition-colors">Beschikbaarheid</h3>*/}
        {/*      <p className="text-neutral-400 text-sm mt-2">Open voor freelance opdrachten en toffe samenwerkingen.</p>*/}
        {/*    </div>*/}
        {/*    <button className="mt-6 w-full bg-[#F59E0B] text-black font-bold py-2 px-4 rounded hover:bg-[#d98806] transition-colors">*/}
        {/*      Neem Contact Op*/}
        {/*    </button>*/}
        {/*  </div>*/}

        {/*</div>*/}

        {/* Blauwe Projecten Sectie */}
        <div className="max-w-7xl mx-auto bg-[#0b1329] rounded-2xl p-6 md:p-8 border border-white/5 h-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Mijn Projecten
            </h2>
          </div>

          <ProjectGrid />
        </div>

      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full pt-12 pb-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Stickstaart. All rights reserved.
      </footer>
    </div>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.3.7-2.1 1.8-2.1 1.05 0 1.6.76 1.6 2.1v4.93h2.84M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
