"use client";

import React, { useEffect } from "react";
import { ProjectItem } from "@/data/projects";
import { X, CheckCircle2, Sparkles, ExternalLink, Code2 } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#152238]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-[#E9E7E2] shadow-2xl overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F4F2EE] border-b border-[#E9E7E2]">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-[#FF7900]">
              {project.number}
            </span>
            <span className="text-xs font-mono text-[#737B87]">
              {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#737B87] hover:text-[#152238] hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900]"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          <div>
            <h2
              id="modal-project-title"
              className="text-2xl font-extrabold text-[#152238] tracking-tight mb-1"
            >
              {project.name}
            </h2>
            <p className="text-xs font-mono text-[#FF7900]">
              {project.tagline}
            </p>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#737B87]">
              Project Overview &amp; Architecture
            </h3>
            <p className="text-sm text-[#737B87] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#737B87]">
              Key Functional Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-2 p-3 rounded-xl bg-[#FAFAF8] border border-[#E9E7E2] text-xs text-[#152238]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7900] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#737B87]">
              Technologies &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[#F4F2EE] border border-[#E9E7E2] text-xs font-mono text-[#152238]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F4F2EE] border-t border-[#E9E7E2] flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#737B87]">
            Built with modern web standards &amp; clean code
          </span>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#FF7900] hover:bg-[#E66D00] shadow-orange-button transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
