import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../projects';

export default function ProjectGrid() {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Mijn Projecten
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.domain}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center text-xs font-mono text-gray-400">
              {project.domain}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
