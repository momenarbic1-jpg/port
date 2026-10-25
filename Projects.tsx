"use client";

import React, { useState } from "react";
import { projectsList, ProjectItem } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Sparkles } from "lucide-react";

export default function Projects() {
  const [activeModalProject, setActiveModalProject] =
    useState<ProjectItem | null>(null);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative bg-[#FAFAF8]"
      aria-label="Featured Projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-sm font-bold text-[#FF7900]">
              04
            </span>
            <div className="w-12 h-[2px] bg-[#FF7900]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#737B87]">
              Portfolio Showcase
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152238] tracking-tight">
            Featured Projects &amp; Systems
          </h2>
          <p className="text-base text-[#737B87] mt-3 leading-relaxed">
            Real software architectures, point-of-sale management terminals, automated distribution platforms, and AI tool suites.
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
