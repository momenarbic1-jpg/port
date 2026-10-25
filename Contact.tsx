"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site-config";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please enter your message.";
    } else if (formData.message.trim().length < 8) {
      errs.message = "Message must be at least 8 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative bg-gradient-to-b from-[#FFF8F2] to-[#FFF2E5] border-t border-[#FFD6B3] overflow-hidden"
      aria-label="Contact and Call to Action"
    >
      {/* Background 3D Dimensional Light Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFE3CC]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Direct Contact */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-sm font-bold text-[#FF7900]">
                  05
                </span>
                <div className="w-12 h-[2px] bg-[#FF7900]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#737B87]">
                  Initiate Project
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152238] tracking-tight leading-[1.15] mb-4">
                Have an Idea? Let&apos;s Build It.
              </h2>
              <p className="text-base sm:text-lg text-[#737B87] leading-relaxed">
                Let&apos;s turn your next idea into something useful, intelligent, and beautifully designed.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Direct Email Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#FFD6B3] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#737B87]">
                    <Mail className="w-4 h-4 text-[#FF7900]" />
                    <span>DIRECT EMAIL</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-xs font-mono text-[#FF7900] hover:underline"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-base sm:text-lg font-bold text-[#152238] hover:text-[#FF7900] transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              {/* WhatsApp & Direct Phone Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#E9E7E2] hover:border-[#FFD6B3] transition-colors shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#737B87]">
                    <Phone className="w-4 h-4 text-[#FF7900]" />
                    <span>PHONE &amp; WHATSAPP</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                    Fast Reply
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                      className="text-base font-bold text-[#152238] hover:text-[#FF7900] transition-colors font-mono"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <div className="text-[11px] text-[#737B87]">
                      01556269794 (Call or Chat)
                    </div>
                  </div>

                  <a
                    href={`${siteConfig.contact.whatsapp}?text=Hi%20Momen,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#737B87]">
                Official Professional Profiles
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E9E7E2] hover:border-[#FF7900] text-xs font-mono text-[#152238] hover:text-[#FF7900] transition-all shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/momenarbic1-jpg</span>
                </a>
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E9E7E2] hover:border-[#FF7900] text-xs font-mono text-[#152238] hover:text-[#FF7900] transition-all shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#FFD6B3] shadow-warm">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF4EB] border border-[#FFD6B3] text-[#FF7900] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#152238]">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-[#737B87] max-w-sm mx-auto">
                    Thank you, <strong className="text-[#152238]">{formData.name}</strong>. Your inquiry has been received. I will review and reply promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#FF7900] hover:bg-[#E66D00] shadow-orange-button transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-[#152238] mb-1.5"
                    >
                      Your Name <span className="text-[#FF7900]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Reed"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#E9E7E2] text-sm text-[#152238] placeholder-[#9CA3AF] focus:border-[#FF7900] focus:outline-none transition-colors"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-[#152238] mb-1.5"
                    >
                      Email Address <span className="text-[#FF7900]">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#E9E7E2] text-sm text-[#152238] placeholder-[#9CA3AF] focus:border-[#FF7900] focus:outline-none transition-colors"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold text-[#152238] mb-1.5"
                    >
                      Project Concept or Inquiry <span className="text-[#FF7900]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about what you would like to build, timeline, or objectives..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-[#E9E7E2] text-sm text-[#152238] placeholder-[#9CA3AF] focus:border-[#FF7900] focus:outline-none transition-colors resize-y"
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#FF7900] hover:bg-[#E66D00] shadow-orange-button hover:shadow-orange-button-hover transition-all duration-200 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Get in Touch</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
