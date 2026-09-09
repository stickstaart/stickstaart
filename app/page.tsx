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
          <div className="flex items-center gap-3">
            {/* Stickstaart Logo Badge Placeholder */}
            <div className="flex items-center gap-3">
              <LogoIcon className="w-10 h-10" />
              <span className="font-bold text-xl tracking-tight text-white">StickStaart</span>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold hidden sm:inline-block ml-2">
              Front-End & Design
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors">
              <Code className="w-6 h-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors">
              <Code className="w-6 h-6" />
            </a>
            <a href="mailto:info@stickstaart.com" className="hover:text-[#F59E0B] transition-colors">
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
                Er wordt achter de schermen gebouwd aan het nieuwe portfolio van Stickstaart. Morgen gaat er een nieuw project live via dit domein!
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
                href="mailto:info@stickstaart.com"
                className="inline-flex items-center gap-2 bg-black text-white font-bold px-5 py-3 rounded hover:bg-neutral-800 transition-colors"
              >
                Stuur een bericht <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Grid (4 Kaarten) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">

          {/* Card 1 */}
          <div className="bg-[#0A0A0A] border border-neutral-800 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-700 transition-all group">
            <div>
              <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">Project Launch</span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-[#F59E0B] transition-colors">Nieuwste Project</h3>
              <p className="text-neutral-400 text-sm mt-2">Morgen live. Klik hieronder om de eerste release te bekijken.</p>
            </div>
            <button className="mt-6 w-full bg-[#F59E0B] text-black font-bold py-2 px-4 rounded hover:bg-[#d98806] transition-colors">
              Bekijk Status
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0A0A0A] border border-neutral-800 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-700 transition-all group">
            <div>
              <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">Expertise</span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-[#F59E0B] transition-colors">Front-End Dev</h3>
              <p className="text-neutral-400 text-sm mt-2">Next.js, React, TypeScript, Tailwind CSS & UI/UX Design.</p>
            </div>
            <button className="mt-6 w-full bg-[#F59E0B] text-black font-bold py-2 px-4 rounded hover:bg-[#d98806] transition-colors">
              Tech Stack
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0A0A0A] border border-neutral-800 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-700 transition-all group">
            <div>
              <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">Over Stickstaart</span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-[#F59E0B] transition-colors">Nieuwsgierig</h3>
              <p className="text-neutral-400 text-sm mt-2">Met een scherpe blik bouwen aan doordachte digitale ervaringen.</p>
            </div>
            <button className="mt-6 w-full bg-[#F59E0B] text-black font-bold py-2 px-4 rounded hover:bg-[#d98806] transition-colors">
              Lees Meer
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0A0A0A] border border-neutral-800 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-700 transition-all group">
            <div>
              <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">Samenwerken</span>
              <h3 className="text-xl font-bold mt-2 group-hover:text-[#F59E0B] transition-colors">Beschikbaarheid</h3>
              <p className="text-neutral-400 text-sm mt-2">Open voor freelance opdrachten en toffe samenwerkingen.</p>
            </div>
            <button className="mt-6 w-full bg-[#F59E0B] text-black font-bold py-2 px-4 rounded hover:bg-[#d98806] transition-colors">
              Neem Contact Op
            </button>
          </div>

        </div>

        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
          <div className="max-w-6xl mx-auto px-4">
            {/* Eventuele hero of introductie tekst */}
            <section className="mb-12 text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Mijn Portfolio
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Bekijk hieronder een selectie van live projecten die ik heb gebouwd.
              </p>
            </section>

            {/* De projecten grid */}
            <ProjectGrid />
          </div>
        </main>

      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full pt-12 pb-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Stickstaart. All rights reserved.
      </footer>
    </div>
  );
}
