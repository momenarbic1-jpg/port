import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FAFAF8",
          secondary: "#F4F2EE",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          hover: "#FFFDFB",
        },
        accent: {
          orange: "#FF7900",
          orangeHover: "#E66D00",
          orangePale: "#FFE3CC",
          orangeLight: "#FFF4EB",
          orangeGlow: "rgba(255, 121, 0, 0.15)",
        },
        foreground: {
          DEFAULT: "#152238",
          secondary: "#737B87",
          subtle: "#9CA3AF",
        },
        border: {
          subtle: "#E9E7E2",
          light: "#F0EFEB",
          accent: "#FFD6B3",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Inter",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        warm: "0 4px 20px -2px rgba(21, 34, 56, 0.05), 0 2px 6px -1px rgba(21, 34, 56, 0.03)",
        "warm-hover": "0 12px 30px -4px rgba(255, 121, 0, 0.08), 0 4px 12px -2px rgba(21, 34, 56, 0.05)",
        "orange-button": "0 4px 14px 0 rgba(255, 121, 0, 0.35)",
        "orange-button-hover": "0 6px 20px 0 rgba(255, 121, 0, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
