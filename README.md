# Momen — AI Builder & Software Developer Portfolio

A world-class, production-quality personal portfolio website for **Momen**, an AI builder and software developer. Engineered with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Three.js** for interactive 3D hero experiences.

---

## 🎨 Visual Identity

- **Primary Background**: Warm White (`#FAFAF8`)
- **Secondary Background**: Soft Ivory (`#F4F2EE`)
- **Primary Accent**: Vibrant Orange (`#FF7900`)
- **Secondary Accent**: Pale Orange (`#FFE3CC`)
- **Main Text**: Deep Navy (`#152238`)
- **Secondary Text**: Muted Gray (`#737B87`)
- **Borders**: Subtle Warm Gray (`#E9E7E2`)

---

## ⚡ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **3D Graphics**: [Three.js](https://threejs.org/) (Custom hardware-accelerated WebGL canvas with mouse parallax)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type safety)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Subtle, purposeful Framer Motion & CSS keyframe transitions with reduced-motion support

---

## 📁 Project Structure

```text
portfilo works/
├── app/
│   ├── layout.tsx         # Root layout, metadata, viewport, OpenGraph
│   ├── page.tsx           # Home page assembling all sections
│   ├── globals.css        # Warm luxury tokens, scrollbars, glass utilities
│   ├── not-found.tsx      # Accessible custom 404 page
│   ├── sitemap.ts         # Automated sitemap generator
│   ├── robots.ts          # Search engine crawlers policy
│   └── icon.svg           # High-resolution brand favicon (Orange M)
├── components/
│   ├── Navbar.tsx         # Sticky navigation with mobile drawer & active spy
│   ├── Hero.tsx           # Headline, bio, compact statistics, and CTAs
│   ├── Hero3DCanvas.tsx   # Three.js interactive 3D composition with mouse parallax
│   ├── Mini3DOrb.tsx      # Rotating 3D dimensional accent near AI Expertise
│   ├── About.tsx          # Editorial layout with 01 accent & core traits
│   ├── Skills.tsx         # Filterable skills tabs across 5 disciplines
│   ├── AIExpertise.tsx    # Expandable grid of frontier AI models & tool suites
│   ├── Projects.tsx       # 6 featured project architectures
│   ├── ProjectCard.tsx    # Bespoke CSS UI mockups & action triggers
│   ├── ProjectModal.tsx   # Accessible project architecture modal
│   ├── Contact.tsx        # Validated contact form, direct copy & social links
│   └── Footer.tsx         # Brand logo, automatic year, back-to-top button
├── data/
│   ├── site-config.ts     # ⭐️ CUSTOMIZE: Name, role, bio, statistics, email, socials
│   ├── ai-expertise.ts    # ⭐️ CUSTOMIZE: AI categories, tools & capabilities
│   ├── skills.ts          # ⭐️ CUSTOMIZE: Technologies list and filter categories
│   └── projects.ts        # ⭐️ CUSTOMIZE: 6 project cards, features, and tags
├── lib/
│   └── utils.ts           # Class merging helper
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

---

## 🛠️ Local Development & Scripts

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm run start
   ```

---

## ✏️ How to Customize Your Details

Edit files inside the `data/` folder:
- **`data/site-config.ts`**: Edit your name, bio text, statistics, direct email, and social profile links.
- **`data/ai-expertise.ts`**: Add, edit, or remove AI tools and models.
- **`data/skills.ts`**: Add or re-order technologies in the filter tabs.
- **`data/projects.ts`**: Edit project titles, descriptions, and feature lists.
