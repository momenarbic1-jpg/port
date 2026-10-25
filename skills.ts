export interface SkillItem {
  name: string;
  category: "ai" | "web" | "desktop" | "automation" | "design";
  level: string;
  focus: string;
}

export interface SkillTab {
  id: "all" | "ai" | "web" | "desktop" | "automation" | "design";
  label: string;
}

export const skillTabs: SkillTab[] = [
  { id: "all", label: "All Skills" },
  { id: "ai", label: "AI & LLMs" },
  { id: "web", label: "Web Development" },
  { id: "desktop", label: "Desktop & Mobile" },
  { id: "automation", label: "Automation" },
  { id: "design", label: "Design & Content" },
];

export const skillsList: SkillItem[] = [
  // AI & LLMs
  {
    name: "Prompt Architecture",
    category: "ai",
    level: "Expert",
    focus: "Chain-of-thought, few-shot prompting, and persona steering",
  },
  {
    name: "LLM API Integration",
    category: "ai",
    level: "Advanced",
    focus: "Structured JSON outputs, function calling, streaming responses",
  },
  {
    name: "Context Window Optimization",
    category: "ai",
    level: "Advanced",
    focus: "Retrieval strategies, semantic caching, token efficiency",
  },
  {
    name: "Cursor Rules & AI IDEs",
    category: "ai",
    level: "Advanced",
    focus: "Codebase rule specification, context indexing, speed acceleration",
  },

  // Web Development
  {
    name: "Next.js (App Router)",
    category: "web",
    level: "Advanced",
    focus: "Server/Client boundaries, metadata API, static generation",
  },
  {
    name: "React 18+",
    category: "web",
    level: "Advanced",
    focus: "Component composition, custom hooks, state synchronization",
  },
  {
    name: "TypeScript",
    category: "web",
    level: "Advanced",
    focus: "Strict type checking, interfaces, generic constraints",
  },
  {
    name: "Tailwind CSS",
    category: "web",
    level: "Expert",
    focus: "Utility-first design tokens, responsive breakpoints, micro-interactions",
  },
  {
    name: "JavaScript (ES6+)",
    category: "web",
    level: "Advanced",
    focus: "Modern async/await, functional idioms, DOM performance",
  },
  {
    name: "HTML5 & Semantic Markup",
    category: "web",
    level: "Expert",
    focus: "Accessible landmarks, ARIA patterns, SEO structure",
  },

  // Desktop & Mobile
  {
    name: "POS & Retail Interfaces",
    category: "desktop",
    level: "Advanced",
    focus: "Touch-optimized sales terminals, barcode input, receipt formatting",
  },
  {
    name: "Responsive Mobile UI",
    category: "desktop",
    level: "Advanced",
    focus: "Fluid tap targets, safe-area insets, mobile drawer navigation",
  },
  {
    name: "Electron & Web Terminals",
    category: "desktop",
    level: "Intermediate",
    focus: "Packaging web dashboards as standalone desktop runtimes",
  },

  // Automation
  {
    name: "n8n Workflows",
    category: "automation",
    level: "Advanced",
    focus: "Self-hosted node workflows, custom JS nodes, webhook listeners",
  },
  {
    name: "REST APIs & Webhooks",
    category: "automation",
    level: "Advanced",
    focus: "JSON payloads, token authorization, event dispatching",
  },
  {
    name: "Batch Processing Scripts",
    category: "automation",
    level: "Intermediate",
    focus: "Automated project launchers (.bat, powershell), environment setup",
  },

  // Design & Content
  {
    name: "UI/UX Architecture",
    category: "design",
    level: "Advanced",
    focus: "Warm luxury aesthetics, typographic hierarchy, clean whitespace",
  },
  {
    name: "3D Web Elements (Three.js)",
    category: "design",
    level: "Intermediate",
    focus: "Subtle geometric composition, lighting, camera parallax",
  },
  {
    name: "Generative Brand Assets",
    category: "design",
    level: "Advanced",
    focus: "Editorial imagery, custom textures, tailored color schemes",
  },
];
