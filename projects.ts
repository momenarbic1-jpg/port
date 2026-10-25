export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  overview: string;
  keyFeatures: string[];
  techStack: string[];
  visualType: "perfume" | "content" | "realestate" | "builder" | "business" | "aitools";
  status: "Completed Architecture" | "Active Build" | "Production Ready";
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsList: ProjectItem[] = [
  {
    id: "perfume-pos-system",
    number: "01",
    name: "Perfume Shop Management System",
    category: "Retail Management & POS",
    tagline: "Dedicated Point-of-Sale & inventory terminal for boutique fragrance retail",
    description:
      "A fast, keyboard-first desktop-ready sales terminal and stock manager with barcode lookup, batch tracking, fragrance concentration categorization, and automated receipt generation.",
    overview:
      "Engineered specifically for fragrance boutiques where scent variations (EDP, EDT, Oils) and custom bottle decanting require accurate fractional inventory and rapid checkout counter interaction.",
    keyFeatures: [
      "Instant barcode and SKU lookup with zero-delay keyboard shortcuts",
      "Dynamic stock alerts for low-level essential fragrance oils and bottles",
      "Multi-payment register support (Cash, Visa, Split tender)",
      "Daily shift closing reports with revenue and profit breakdown",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Local State", "Lucide"],
    visualType: "perfume",
    status: "Production Ready",
  },
  {
    id: "content-distribution-platform",
    number: "02",
    name: "Content Distribution Platform",
    category: "Digital Media & Publishing",
    tagline: "Multi-channel automated media scheduler & reader interface",
    description:
      "A high-performance editorial publishing platform designed for fast story reading, scheduled social distribution, and dynamic RSS/newsletter syndication.",
    overview:
      "Combines an editorial reader with automated distribution hooks. Authors compose once, and the system formats, optimizes, and schedules content delivery across multiple external channels.",
    keyFeatures: [
      "Distraction-free typography with adaptive reading progress tracker",
      "Multi-channel webhook triggers for instant social syndication",
      "Built-in OpenGraph generator for automated social preview cards",
      "Sub-second page transitions powered by Next.js static generation",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "n8n Webhooks"],
    visualType: "content",
    status: "Completed Architecture",
  },
  {
    id: "real-estate-marketplace",
    number: "03",
    name: "Real Estate Marketplace (Semsar)",
    category: "Property Search & Listings",
    tagline: "High-contrast property finder with interactive spatial filters",
    description:
      "A property discovery portal with lightning-fast filter facets (location, price per sq meter, payment terms), high-res architectural galleries, and direct broker WhatsApp connection.",
    overview:
      "Designed for clarity in competitive property markets. Replaces cluttered legacy listings with an uncluttered layout, detailed floor-plan previews, and instant inquiry modals.",
    keyFeatures: [
      "Multi-parameter faceted search with instant client-side filtering",
      "Interactive unit plan viewer with dimension overlays",
      "Direct one-click broker WhatsApp and call dialer integration",
      "Favorited listings storage with offline browser synchronization",
    ],
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    visualType: "realestate",
    status: "Completed Architecture",
  },
  {
    id: "ecommerce-builder",
    number: "04",
    name: "E-Commerce Website Builder",
    category: "SaaS & Web Tooling",
    tagline: "Modular block builder for visual digital storefront composition",
    description:
      "An intuitive drag-and-drop web builder interface that lets brand owners visually assemble product grids, announcement banners, hero sections, and checkout buttons without writing code.",
    overview:
      "Crafted as an accessible alternative to complex site editors. Provides curated, high-taste design blocks with live mobile/desktop responsive preview stages.",
    keyFeatures: [
      "Live dual-viewport stage: Toggle instantly between 375px and 1440px",
      "Pre-configured design blocks strictly bound to modern typography tokens",
      "Visual color palette theme switcher with real-time CSS variable updates",
      "Exportable static HTML/CSS code bundles ready for Vercel deployment",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "UI Design System"],
    visualType: "builder",
    status: "Active Build",
  },
  {
    id: "business-management-system",
    number: "05",
    name: "Business Operations & Device Hub",
    category: "Enterprise Admin & ERP",
    tagline: "Unified telemetry dashboard for sales, repairs, and supply chains",
    description:
      "An end-to-end management console built for retail electronics and mobile hardware stores, handling warranty tracking, repairs status, technician assignment, and customer invoices.",
    overview:
      "Eliminates paperwork in service repair shops. Tracks hardware from intake to inspection, replacement part requisition, technician handoff, and final client pickup notification.",
    keyFeatures: [
      "Job card generation with automated tracking QR codes",
      "Spare parts inventory deduction on repair completion",
      "Client SMS/WhatsApp alert dispatch upon status change",
      "Comprehensive monthly financial accounting and technician commissions",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    visualType: "business",
    status: "Production Ready",
  },
  {
    id: "ai-tools-collection",
    number: "06",
    name: "AI Tools & Prompt Matrix",
    category: "AI Productivity Suite",
    tagline: "Curated directory and benchmarking matrix for cutting-edge AI models",
    description:
      "An interactive directory, prompt benchmark arena, and utility library cataloging the best frontier models, API parameters, and engineering cheat-sheets for builders.",
    overview:
      "Built as a personal and community knowledge vault for tracking rapid developments across LLMs, vision generators, code assistants, and automation nodes.",
    keyFeatures: [
      "Side-by-side prompt output comparator with copyable recipes",
      "Categorized model cards with cost per 1M tokens and context limits",
      "System prompt library for coding, copywriting, and architectural review",
      "Instant fuzzy search across 100+ AI workflows and bookmarks",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AI APIs"],
    visualType: "aitools",
    status: "Active Build",
  },
];
