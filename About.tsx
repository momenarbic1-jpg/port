"use client";

import React from "react";
import { siteConfig } from "@/data/site-config";
import { Target, Zap, Lightbulb, Sparkles } from "lucide-react";

export default function About() {
  const featureIcons = [
    <Target key="target" className="w-5 h-5 text-[#FF7900]" />,
    <Zap key="zap" className="w-5 h-5 text-[#FF7900]" />,
    <Lightbulb key="bulb" className="w-5 h-5 text-[#FF7900]" />,
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-32 relative bg-[#F4F2EE] border-y border-[#E9E7E2]"
      aria-label="About Momen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Number & Accent Line */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-sm font-bold text-[#FF7900] tracking-wider">
            {siteConfig.about.sectionNumber}
          </span>
          <div className="w-12 h-[2px] bg-[#FF7900]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#737B87]">
            Editorial Perspective
          </span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152238] tracking-tight leading-[1.18]">
              {siteConfig.about.heading}
            </h2>
          </div>

          {/* Right Column: Bio Paragraphs & 3 Compact Feature Items */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-[#737B87] leading-relaxed">
              {siteConfig.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Three Compact Feature Items */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {siteConfig.about.features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-5 rounded-2xl bg-white border border-[#E9E7E2] hover:border-[#FFD6B3] transition-all duration-200 shadow-xs hover:shadow-warm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] border border-[#FFD6B3] flex items-center justify-center mb-3">
                    {featureIcons[index] || (
                      <Sparkles className="w-5 h-5 text-[#FF7900]" />
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-[#152238] mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#737B87] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
