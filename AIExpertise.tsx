"use client";

import React, { useState } from "react";
import { aiExpertiseData, AIToolCategory } from "@/data/ai-expertise";
import Mini3DOrb from "./Mini3DOrb";
import {
  Bot,
  Code2,
  Workflow,
  Image,
  Video,
  Mic,
  Cpu,
  ChevronDown,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function AIExpertise() {
  const [expandedId, setExpandedId] = useState<string | null>("llm-assistants");

  const iconMap: Record<string, React.ReactNode> = {
    Bot: <Bot className="w-5 h-5 text-[#FF7900]" />,
    Code2: <Code2 className="w-5 h-5 text-[#FF7900]" />,
    Workflow: <Workflow className="w-5 h-5 text-[#FF7900]" />,
    Image: <Image className="w-5 h-5 text-[#FF7900]" />,
    Video: <Video className="w-5 h-5 text-[#FF7900]" />,
    Mic: <Mic className="w-5 h-5 text-[#FF7900]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#FF7900]" />,
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="ai-expertise"
      className="py-24 sm:py-32 relative bg-[#F4F2EE] border-b border-[#E9E7E2]"
      aria-label="AI Expertise and Tooling"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with 3D Object */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-sm font-bold text-[#FF7900]">
                03
              </span>
              <div className="w-12 h-[2px] bg-[#FF7900]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#737B87]">
                Intelligent Stacks
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152238] tracking-tight">
              AI Expertise &amp; Tool Ecosystem
            </h2>
            <p className="text-base text-[#737B87] mt-3 leading-relaxed">
              Everyday mastery of frontier reasoning models, AI coding extensions, generative media engines, and autonomous workflow pipelines.
            </p>
          </div>

          {/* Subtle 3D Element near AI Expertise (Requirement 9) */}
          <div className="hidden lg:flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#E9E7E2] shadow-xs">
            <Mini3DOrb />
            <div className="pr-4">
              <div className="text-xs font-mono font-bold text-[#152238]">
                AI Synergy Core
              </div>
              <div className="text-[11px] text-[#737B87]">
                Continuous Model Benchmarking
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {aiExpertiseData.map((category) => {
            const isExpanded = expandedId === category.id;

            return (
              <div
                key={category.id}
                onClick={() => toggleExpand(category.id)}
                className={`p-6 rounded-2xl bg-white border transition-all duration-300 cursor-pointer shadow-xs hover:shadow-warm ${
                  isExpanded
                    ? "border-[#FF7900] ring-1 ring-[#FF7900]/20"
                    : "border-[#E9E7E2] hover:border-[#FFD6B3]"
                }`}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] border border-[#FFD6B3] flex items-center justify-center shrink-0 mt-0.5">
                      {iconMap[category.icon] || (
                        <Sparkles className="w-5 h-5 text-[#FF7900]" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#152238] tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs font-mono text-[#FF7900] mt-0.5">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`p-1.5 rounded-lg text-[#737B87] hover:text-[#152238] transition-transform ${
                      isExpanded ? "rotate-180 text-[#FF7900]" : ""
                    }`}
                    aria-label={isExpanded ? "Collapse" : "Expand"}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {/* Tool Pills */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg bg-[#F4F2EE] border border-[#E9E7E2] text-xs font-mono text-[#152238]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Expandable Details */}
                {isExpanded && (
                  <div className="mt-5 pt-4 border-t border-[#F0EFEB] space-y-3 animate-in fade-in duration-200">
                    <p className="text-xs text-[#737B87] leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {category.capabilities.map((cap, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs text-[#152238]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7900] shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
