"use client";

import React from "react";
import { ProjectItem } from "@/data/projects";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  Smartphone,
  Eye,
  Sliders,
  CheckCircle,
  Package,
} from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

export default function ProjectCard({
  project,
  onOpenDetails,
}: ProjectCardProps) {
  // Render bespoke CSS UI Mockup for each project
  const renderVisualMockup = () => {
    switch (project.visualType) {
      case "perfume":
        return (
          <div className="w-full h-44 bg-[#F7F6F2] rounded-xl p-3.5 border border-[#E9E7E2] flex flex-col justify-between font-mono text-[10px] select-none">
            <div className="flex items-center justify-between pb-2 border-b border-[#E9E7E2]">
              <div className="flex items-center gap-1.5 font-bold text-[#152238] font-sans">
                <span className="w-2 h-2 rounded-full bg-[#FF7900]" />
                <span>Al-Quds Fragrance Terminal</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#FFF4EB] text-[#FF7900] border border-[#FFD6B3] text-[9px] font-bold">
                BARCODE SYNC
              </span>
            </div>

            <div className="space-y-1.5 my-1 font-sans">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E9E7E2]">
                <div>
                  <div className="text-xs font-semibold text-[#152238]">
                    Royal Oud Imperial (100ml)
                  </div>
                  <div className="text-[9px] text-[#737B87] font-mono">
                    SKU-7720 • Batch #A4
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#FF7900]">$95.00</div>
                  <div className="text-[8px] text-emerald-600 font-bold">In Stock</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E9E7E2]">
                <div>
                  <div className="text-xs font-semibold text-[#152238]">
                    Amber &amp; Vanilla Oil Decant
                  </div>
                  <div className="text-[9px] text-[#737B87] font-mono">
                    SKU-4109 • 12ml Roll-on
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#152238]">$28.00</div>
                  <div className="text-[8px] text-[#FF7900] font-bold">Low Stock (3 left)</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-[#E9E7E2] text-[9px] text-[#737B87]">
              <span>Cart Subtotal: $123.00</span>
              <span className="font-bold text-[#FF7900]">Quick Register Ready</span>
            </div>
          </div>
        );

      case "content":
        return (
          <div className="w-full h-44 bg-[#F7F6F2] rounded-xl p-3.5 border border-[#E9E7E2] flex flex-col justify-between font-mono text-[10px] select-none">
            <div className="flex items-center justify-between pb-2 border-b border-[#E9E7E2]">
              <span className="font-sans font-bold text-xs text-[#152238]">
                Story Hub Dispatcher
              </span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px]">
                Webhooks Active
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-white border border-[#E9E7E2] space-y-1.5 font-sans">
              <div className="text-xs font-bold text-[#152238] line-clamp-1">
                The Future of Agentic Tool Calling in 2026
              </div>
              <div className="w-full bg-[#F4F2EE] h-1.5 rounded-full overflow-hidden">
                <div className="w-3/4 bg-[#FF7900] h-full rounded-full" />
              </div>
              <div className="flex items-center justify-between text-[9px] text-[#737B87]">
                <span>Syndication: Telegram, RSS, Email</span>
                <span className="text-[#FF7900] font-bold">Scheduled</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-[#E9E7E2] text-[9px] text-[#737B87]">
              <span>Dynamic OG Card Generated</span>
              <span className="text-[#152238] font-bold">0.4s Perceived Load</span>
            </div>
          </div>
        );

      case "realestate":
        return (
          <div className="w-full h-44 bg-[#F7F6F2] rounded-xl p-3.5 border border-[#E9E7E2] flex flex-col justify-between text-[10px] select-none">
            <div className="flex items-center justify-between pb-2 border-b border-[#E9E7E2] font-mono">
              <span className="font-sans font-bold text-xs text-[#152238]">
                Semsar Property Finder
              </span>
              <span className="text-[#FF7900] font-bold">Cairo &amp; Giza</span>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-[#E9E7E2]">
              <div className="w-14 h-14 rounded-md bg-[#FFF4EB] border border-[#FFD6B3] flex items-center justify-center text-[#FF7900] font-bold text-xs shrink-0">
                185 m²
              </div>
              <div className="flex-1 font-sans">
                <div className="text-xs font-bold text-[#152238]">
                  New Cairo Prime Penthouse
                </div>
                <div className="text-[9px] text-[#737B87]">
                  3 Beds • 2 Baths • Panoramic Terrace
                </div>
                <div className="text-xs font-bold text-[#FF7900] mt-0.5">
                  EGP 6,850,000
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-[#E9E7E2] text-[9px] text-[#737B87] font-mono">
              <span>Instant WhatsApp Inquiry</span>
              <span className="text-emerald-700 font-semibold">Verified Broker</span>
            </div>
          </div>
        );

      case "builder":
        return (
          <div className="w-full h-44 bg-[#F7F6F2] rounded-xl p-3.5 border border-[#E9E7E2] flex flex-col justify-between font-mono text-[10px] select-none">
            <div className="flex items-center justify-between pb-2 border-b border-[#E9E7E2]">
              <div className="flex items-center gap-1.5 font-sans font-bold text-xs text-[#152238]">
                <Sliders className="w-3.5 h-3.5 text-[#FF7900]" />
                <span>StoreBuilder Studio</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="px-1.5 py-0.5 rounded bg-white text-[#152238] border border-[#E9E7E2] text-[8px] font-bold">
                  Desktop 1440
                </span>
                <span className="px-1.5 py-0.5 rounded bg-[#F4F2EE] text-[#737B87] text-[8px]">
                  Mobile 375
                </span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-white border border-dashed border-[#FF7900]/40 flex flex-col items-center justify-center text-center space-y-1">
              <div className="w-2/3 h-1.5 bg-[#152238]/10 rounded" />
              <div className="w-1/2 h-1.5 bg-[#FF7900]/30 rounded" />
              <div className="px-2 py-0.5 rounded bg-[#FF7900] text-white text-[8px] font-bold">
                Hero Call to Action
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-[#E9E7E2] text-[9px] text-[#737B87]">
              <span>Block: Modular Hero</span>
              <span className="text-[#FF7900]">Export Clean JSX</span>
            </div>
          </div>
        );

      case "business":
        return (
          <div className="w-full h-44 bg-[#F7F6F2] rounded-xl p-3.5 border border-[#E9E7E2] flex flex-col justify-between font-mono text-[10px] select-none">
            <div className="flex items-center justify-between pb-2 border-b border-[#E9E7E2]">
              <span className="font-sans font-bold text-xs text-[#152238]">
                Device Repair &amp; Service Hub
              </span>
              <span className="px-2 py-0.5 rounded bg-[#FFF4EB] text-[#FF7900] border border-[#FFD6B3] text-[9px] font-bold">
                TICKET #892
              </span>
            </div>

            <div className="p-2 rounded-lg bg-white border border-[#E9E7E2] space-y-1 font-sans">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#152238]">
                  iPhone 15 Pro OLED Swap
                </span>
                <span className="text-[9px] font-bold text-emerald-600">
                  Bench Tested
                </span>
              </div>
              <div className="text-[9px] text-[#737B87] font-mono">
                Tech: Assigned • Parts: In Stock
              </div>
              <div className="w-full bg-[#F4F2EE] h-1.5 rounded-full overflow-hidden">
                <div className="w-5/6 bg-[#FF7900] h-full rounded-full" />
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-[#E9E7E2] text-[9px] text-[#737B87]">
              <span>Customer SMS Dispatched</span>
              <span className="text-[#152238] font-bold">Pickup Ready</span>
            </div>
          </div>
        );

      case "aitools":
        return (
          <div className="w-full h-44 bg-[#F7F6F2] rounded-xl p-3.5 border border-[#E9E7E2] flex flex-col justify-between font-mono text-[10px] select-none">
            <div className="flex items-center justify-between pb-2 border-b border-[#E9E7E2]">
              <span className="font-sans font-bold text-xs text-[#152238]">
                Model Matrix &amp; Arena
              </span>
              <span className="text-[#FF7900] font-bold">15+ Models Benchmarked</span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 my-1 font-sans">
              <div className="p-1.5 rounded bg-white border border-[#E9E7E2]">
                <div className="text-[9px] text-[#737B87]">Claude 3.5 Sonnet</div>
                <div className="text-xs font-bold text-[#FF7900]">Top Coding</div>
                <div className="text-[8px] text-emerald-600 font-mono">92.4% HumanEval</div>
              </div>
              <div className="p-1.5 rounded bg-white border border-[#E9E7E2]">
                <div className="text-[9px] text-[#737B87]">GPT-4o</div>
                <div className="text-xs font-bold text-[#152238]">Fast Reasoning</div>
                <div className="text-[8px] text-[#737B87] font-mono">&lt;450ms TTFT</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-[#E9E7E2] text-[9px] text-[#737B87]">
              <span>System Prompt Library</span>
              <span className="text-[#FF7900] font-bold">Verified Recipes</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="group p-6 rounded-2xl bg-white border border-[#E9E7E2] hover:border-[#FFD6B3] transition-all duration-300 shadow-xs hover:shadow-warm flex flex-col justify-between">
      <div>
        {/* Card Header: Number & Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-sm font-bold text-[#FF7900]">
            {project.number}
          </span>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#F4F2EE] text-[#737B87] border border-[#E9E7E2]">
            {project.category}
          </span>
        </div>

        {/* Bespoke CSS Mockup */}
        <div className="mb-5 transform group-hover:scale-[1.01] transition-transform duration-300">
          {renderVisualMockup()}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-[#152238] group-hover:text-[#FF7900] transition-colors mb-1.5 tracking-tight">
          {project.name}
        </h3>
        <p className="text-xs font-mono text-[#FF7900] mb-3">
          {project.tagline}
        </p>
        <p className="text-sm text-[#737B87] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#F4F2EE] text-[#152238] border border-[#E9E7E2]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Action Button with Subtle Orange Arrow */}
      <div className="pt-4 border-t border-[#F0EFEB] flex items-center justify-between">
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#152238] group-hover:text-[#FF7900] transition-colors group/btn"
        >
          <span>View Architecture Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#FF7900] group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <span className="text-[10px] font-mono text-[#9CA3AF]">
          {project.status}
        </span>
      </div>
    </div>
  );
}
