"use client";

import React, { useState } from "react";
import { skillTabs, skillsList, SkillTab } from "@/data/skills";
import { Sparkles, CheckCircle2, Layers } from "lucide-react";

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState<SkillTab["id"]>("all");

  const filteredSkills =
    selectedTab === "all"
      ? skillsList
      : skillsList.filter((skill) => skill.category === selectedTab);

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative bg-[#FAFAF8]"
      aria-label="Technologies and Skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-sm font-bold text-[#FF7900]">
                02
              </span>
              <div className="w-12 h-[2px] bg-[#FF7900]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#737B87]">
                Core Competencies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152238] tracking-tight">
              Technologies &amp; Skills
            </h2>
            <p className="text-base text-[#737B87] mt-3 leading-relaxed">
              Modern frontend engineering, scalable application architecture, and AI-powered workflow automations.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {skillTabs.map((tab) => {
              const isActive = selectedTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#FF7900] text-white shadow-orange-button"
                      : "bg-white text-[#737B87] hover:text-[#152238] border border-[#E9E7E2]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-white border border-[#E9E7E2] hover:border-[#FFD6B3] transition-all duration-200 shadow-xs hover:shadow-warm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-mono text-sm font-bold text-[#152238]">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FFF4EB] text-[#FF7900] border border-[#FFD6B3] font-semibold">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-[#737B87] leading-relaxed">
                  {skill.focus}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F0EFEB] flex items-center justify-between text-[11px] font-mono text-[#9CA3AF]">
                <span className="capitalize">{skill.category}</span>
                <span className="text-[#FF7900] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Ready
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
