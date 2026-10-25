"use client";

import React from "react";
import { siteConfig } from "@/data/site-config";
import { ArrowUp, Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <footer className="bg-[#FAFAF8] border-t border-[#E9E7E2] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E9E7E2]">
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white border border-[#E9E7E2] flex items-center justify-center shadow-xs">
              <span className="font-mono text-base font-black text-[#FF7900]">
                M
              </span>
            </div>
            <div>
              <span className="text-sm font-bold text-[#152238]">Momen</span>
              <span className="text-xs text-[#737B87] ml-2">
                — AI Builder &amp; Software Developer
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#737B87]">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-[#FF7900] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white border border-[#E9E7E2] text-[#737B87] hover:text-[#FF7900] hover:border-[#FF7900] transition-colors shadow-xs"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white border border-[#E9E7E2] text-[#737B87] hover:text-[#FF7900] hover:border-[#FF7900] transition-colors shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white border border-[#E9E7E2] text-[#737B87] hover:text-emerald-600 hover:border-emerald-500 transition-colors shadow-xs"
              aria-label="WhatsApp Contact"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="p-2 rounded-xl bg-white border border-[#E9E7E2] text-[#737B87] hover:text-[#FF7900] hover:border-[#FF7900] transition-colors shadow-xs"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#737B87] hover:text-[#FF7900] transition-colors ml-2"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FF7900]" />
            </button>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9CA3AF] font-mono gap-3">
          <p>© {currentYear} Momen. All rights reserved.</p>
          <p>Minimalist White &amp; Orange Luxury · Engineered with Next.js &amp; Three.js</p>
        </div>
      </div>
    </footer>
  );
}
