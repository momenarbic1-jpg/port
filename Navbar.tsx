"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = siteConfig.navigation.map((item) =>
        item.href.replace("#", "")
      );

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#E9E7E2] py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Momen Logo: Minimalist orange letter M */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900] rounded-lg px-1 py-0.5"
            aria-label="Momen Homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-white border border-[#E9E7E2] flex items-center justify-center shadow-xs group-hover:border-[#FF7900] transition-colors">
              <span className="font-mono text-base font-black text-[#FF7900] tracking-tight">
                M
              </span>
            </div>
            <span className="text-sm font-semibold tracking-tight text-[#152238] group-hover:text-[#FF7900] transition-colors hidden xs:inline-block">
              Momen
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#E9E7E2] shadow-xs"
            aria-label="Primary Navigation"
          >
            {siteConfig.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#152238] bg-[#F4F2EE] font-semibold"
                      : "text-[#737B87] hover:text-[#152238] hover:bg-[#FAFAF8]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA: Let's Build Together */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#FF7900] hover:bg-[#E66D00] shadow-orange-button hover:shadow-orange-button-hover transition-all duration-200 group active:scale-[0.98]"
            >
              <span>Let&apos;s Build Together</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#737B87] hover:text-[#152238] hover:bg-white border border-[#E9E7E2] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7900]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#152238]" />
              ) : (
                <Menu className="w-5 h-5 text-[#152238]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAFAF8]/95 backdrop-blur-xl border-b border-[#E9E7E2] px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-warm">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {siteConfig.navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#152238] bg-white border border-[#FFD6B3] font-semibold"
                      : "text-[#737B87] hover:text-[#152238] hover:bg-white/60"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7900]" />
                  )}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-[#E9E7E2]">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#FF7900] hover:bg-[#E66D00] shadow-orange-button transition-colors"
              >
                <span>Let&apos;s Build Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
