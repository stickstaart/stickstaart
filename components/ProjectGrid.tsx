import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { projects } from '../projects';

export default function ProjectGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.domain}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block p-6 h-64 bg-gray-900 rounded-xl border border-gray-800 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 flex flex-col justify-between"
          >
            {/* Achtergrond Screenshot met Opacity & Hover Zoom */}
            <div className="absolute inset-0 z-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500 ease-out grayscale group-hover:grayscale-0"
              />
              {/* Donker verloop voor beter contrast van de tekst */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/40" />
            </div>

            {/* Content (Boven de achtergrond via z-10) */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
              </div>

              <p className="text-gray-300 text-sm line-clamp-2">
                {project.description}
              </p>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs font-medium bg-white/10 backdrop-blur-md text-gray-200 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-xs font-mono text-gray-400 pt-2 border-t border-white/10">
                {project.domain}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
