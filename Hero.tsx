"use client";

import React from "react";
import { siteConfig } from "@/data/site-config";
import Hero3DCanvas from "./Hero3DCanvas";
import { ArrowRight, FileText, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 overflow-hidden bg-[#FAFAF8]"
      aria-label="Introduction and Overview"
    >
      {/* Background Subtle Warm Gradients */}
      <div className="absolute top-1/4 left-10 w-[420px] h-[420px] bg-[#FFE3CC]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Minimalist Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E9E7E2] text-xs font-mono tracking-wide text-[#737B87] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF7900]" />
              <span className="text-[#152238] font-medium">
                {siteConfig.role}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold tracking-tight text-[#152238] leading-[1.12] mb-6">
              {siteConfig.headline}{" "}
              <span className="text-[#FF7900] underline decoration-[#FFE3CC] decoration-wavy decoration-2 underline-offset-8">
                {siteConfig.headlineHighlight}
              </span>
            </h1>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg md:text-xl text-[#737B87] max-w-2xl leading-relaxed mb-8">
              {siteConfig.intro}
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#FF7900] hover:bg-[#E66D00] shadow-orange-button hover:shadow-orange-button-hover transition-all duration-200 active:scale-[0.98] group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#152238] bg-white hover:bg-[#F4F2EE] border border-[#E9E7E2] hover:border-[#FFD6B3] transition-all duration-200 shadow-xs active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-[#FF7900]" />
                <span>Get In Touch / CV</span>
              </button>
            </div>

            {/* Compact Statistics Grid */}
            <div className="w-full pt-8 border-t border-[#E9E7E2] grid grid-cols-2 sm:grid-cols-4 gap-6">
              {siteConfig.statistics.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#152238] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#FF7900] mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#737B87] mt-0.5">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Composition */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <Hero3DCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
